import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

const DESTINATION_EMAIL = "a.philippe.ch@icloud.com";

// Vercel limite le corps d'une requête vers une Function à 4,5 Mo.
// On garde une marge pour les champs du formulaire et l'encodage multipart.
const MAX_TOTAL_FILE_SIZE = 4 * 1024 * 1024;

function text(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function display(value: string) {
  return value ? escapeHtml(value) : "Non renseigné";
}

function isAllowedFile(file: File) {
  return file.type.startsWith("image/") || file.type === "application/pdf";
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message:
            "La configuration d’envoi est incomplète. Veuillez réessayer plus tard.",
        },
        { status: 500 }
      );
    }

    const formData = await request.formData();

    const companyName = text(formData.get("companyName"));
    const activity = text(formData.get("activity"));
    const fullName = text(formData.get("fullName"));
    const phone = text(formData.get("phone"));
    const email = text(formData.get("email"));
    const logo = text(formData.get("logo"));
    const photos = text(formData.get("photos"));
    const style = text(formData.get("style"));
    const additionalInfo = text(formData.get("additionalInfo"));

    let elements: string[] = [];

    try {
      const parsedElements = JSON.parse(text(formData.get("elements")));

      if (Array.isArray(parsedElements)) {
        elements = parsedElements.filter(
          (element): element is string => typeof element === "string"
        );
      }
    } catch {
      elements = [];
    }

    if (!companyName || !fullName || !email) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Veuillez renseigner au minimum l’entreprise, votre nom et votre adresse e-mail.",
        },
        { status: 400 }
      );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      return NextResponse.json(
        {
          success: false,
          message: "L’adresse e-mail renseignée n’est pas valide.",
        },
        { status: 400 }
      );
    }

    const uploadedFiles = formData
      .getAll("files")
      .filter(
        (entry): entry is File =>
          entry instanceof File && entry.size > 0
      );

    const totalFileSize = uploadedFiles.reduce(
      (total, file) => total + file.size,
      0
    );

    if (totalFileSize > MAX_TOTAL_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Les pièces jointes sont trop volumineuses. Pour garantir l’envoi sur mobile, le total doit rester inférieur à 4 Mo.",
        },
        { status: 413 }
      );
    }

    const invalidFile = uploadedFiles.find(
      (file) => !isAllowedFile(file)
    );

    if (invalidFile) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Un fichier n’est pas accepté. Utilisez uniquement des images ou des fichiers PDF.",
        },
        { status: 400 }
      );
    }

    const attachments = await Promise.all(
      uploadedFiles.map(async (file) => ({
        filename: file.name || "piece-jointe",
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const elementsHtml =
      elements.length > 0
        ? `<ul>${elements
            .map((element) => `<li>${escapeHtml(element)}</li>`)
            .join("")}</ul>`
        : "Aucun élément sélectionné";

    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "PhilGood Studio <contact@philgoodstudio.ch>",
      to: [DESTINATION_EMAIL],
      replyTo: email,
      subject: `Nouvelle demande de devis — ${companyName}`,
      attachments,
      html: `
        <div style="background:#f4f7fb;padding:32px;font-family:Arial,sans-serif;color:#111827">
          <div style="max-width:720px;margin:auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden">
            <div style="background:#0b5cff;padding:28px 32px;color:#ffffff">
              <h1 style="margin:0;font-size:28px">Nouvelle demande de devis</h1>
              <p style="margin:10px 0 0;opacity:.9">PhilGood Studio</p>
            </div>

            <div style="padding:32px">
              <table style="width:100%;border-collapse:collapse">
                <tbody>
                  <tr><td style="padding:10px 0;font-weight:bold;width:220px">Entreprise</td><td>${display(companyName)}</td></tr>
                  <tr><td style="padding:10px 0;font-weight:bold">Activité</td><td>${display(activity)}</td></tr>
                  <tr><td style="padding:10px 0;font-weight:bold">Nom et prénom</td><td>${display(fullName)}</td></tr>
                  <tr><td style="padding:10px 0;font-weight:bold">Téléphone</td><td>${display(phone)}</td></tr>
                  <tr><td style="padding:10px 0;font-weight:bold">E-mail</td><td>${display(email)}</td></tr>
                  <tr><td style="padding:10px 0;font-weight:bold">Logo</td><td>${display(logo)}</td></tr>
                  <tr><td style="padding:10px 0;font-weight:bold">Photos</td><td>${display(photos)}</td></tr>
                </tbody>
              </table>

              <hr style="margin:26px 0;border:0;border-top:1px solid #e5e7eb" />

              <h2 style="font-size:19px">Éléments souhaités</h2>
              <div style="line-height:1.7">${elementsHtml}</div>

              <h2 style="margin-top:26px;font-size:19px">Couleurs et style</h2>
              <p style="white-space:pre-wrap;line-height:1.7">${display(style)}</p>

              <h2 style="margin-top:26px;font-size:19px">Informations complémentaires</h2>
              <p style="white-space:pre-wrap;line-height:1.7">${display(additionalInfo)}</p>

              <p style="margin-top:30px;padding:16px;background:#eff6ff;border-radius:12px;color:#1e40af">
                Vous pouvez répondre directement à cet e-mail : la réponse sera envoyée à ${display(email)}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "L’envoi de la demande a échoué. Veuillez réessayer dans quelques instants.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Votre demande a bien été envoyée. Merci !",
        id: data?.id,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Erreur API devis :", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Une erreur inattendue est survenue pendant l’envoi. Réessayez dans quelques instants.",
      },
      { status: 500 }
    );
  }
}