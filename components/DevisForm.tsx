"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const MAX_TOTAL_FILE_SIZE = 4 * 1024 * 1024;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function DevisForm() {

  const [step, setStep] = useState(1);

  const [activity, setActivity] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [logo, setLogo] = useState("");
  const [photos, setPhotos] = useState("");
  const [elements, setElements] = useState<string[]>([]);
  const [style, setStyle] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [sendMessage, setSendMessage] = useState("");

  const toggleElement = (item: string) => {
    setElements((currentElements) =>
      currentElements.includes(item)
        ? currentElements.filter((element) => element !== item)
        : [...currentElements, item]
    );
  };

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);

    const totalSize = selectedFiles.reduce(
      (total, file) => total + file.size,
      0
    );

    if (totalSize > MAX_TOTAL_FILE_SIZE) {
      setFiles([]);
      setSendStatus("error");
      setSendMessage(
        "Les fichiers sont trop volumineux. Pour garantir l’envoi sur mobile, le total doit rester inférieur à 4 Mo."
      );
      event.target.value = "";
      return;
    }

    setSendStatus("idle");
    setSendMessage("");
    setFiles(selectedFiles);
  };

  const goToNextStep = () => {
    setSendStatus("idle");
    setSendMessage("");

    if (step === 1 && !companyName.trim()) {
      setSendStatus("error");
      setSendMessage("Indiquez le nom de votre entreprise pour continuer.");
      return;
    }

    if (step === 2 && !activity) {
      setSendStatus("error");
      setSendMessage("Choisissez votre activité pour continuer.");
      return;
    }

    if (step === 3 && !fullName.trim()) {
      setSendStatus("error");
      setSendMessage("Indiquez votre prénom et votre nom pour continuer.");
      return;
    }

    if (step === 4 && !phone.trim()) {
      setSendStatus("error");
      setSendMessage("Indiquez votre numéro de téléphone pour continuer.");
      return;
    }

    if (step === 5) {
      if (!email.trim()) {
        setSendStatus("error");
        setSendMessage("Indiquez votre adresse e-mail pour continuer.");
        return;
      }

      if (!isValidEmail(email)) {
        setSendStatus("error");
        setSendMessage("L’adresse e-mail renseignée n’est pas valide.");
        return;
      }
    }

    if (step === 6 && !logo) {
      setSendStatus("error");
      setSendMessage("Choisissez une réponse concernant votre logo.");
      return;
    }

    if (step === 7 && !photos) {
      setSendStatus("error");
      setSendMessage("Choisissez une réponse concernant vos photos.");
      return;
    }

    setStep((currentStep) => Math.min(currentStep + 1, 12));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) {
      return;
    }

    if (!companyName.trim() || !fullName.trim() || !email.trim()) {
      setSendStatus("error");
      setSendMessage(
        "Vérifiez le nom de l’entreprise, votre nom et votre adresse e-mail."
      );
      return;
    }

    if (!isValidEmail(email)) {
      setSendStatus("error");
      setSendMessage("L’adresse e-mail renseignée n’est pas valide.");
      return;
    }

    const totalFileSize = files.reduce((total, file) => total + file.size, 0);

    if (totalFileSize > MAX_TOTAL_FILE_SIZE) {
      setSendStatus("error");
      setSendMessage(
        "Les fichiers sont trop volumineux. Le total doit rester inférieur à 4 Mo."
      );
      return;
    }

    setIsSending(true);
    setSendStatus("idle");
    setSendMessage("");

    try {
      const formData = new FormData();

      formData.append("companyName", companyName);
      formData.append("activity", activity);
      formData.append("fullName", fullName);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("logo", logo);
      formData.append("photos", photos);
      formData.append("elements", JSON.stringify(elements));
      formData.append("style", style);
      formData.append("additionalInfo", additionalInfo);

      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/devis", {
        method: "POST",
        body: formData,
        credentials: "same-origin",
        cache: "no-store",
      });

      const contentType = response.headers.get("content-type") || "";

      const result = contentType.includes("application/json")
        ? ((await response.json()) as {
            success?: boolean;
            message?: string;
          })
        : {
            success: false,
            message:
              response.status === 413
                ? "Les fichiers sont trop volumineux pour être envoyés. Réduisez leur taille puis réessayez."
                : "Le serveur n’a pas pu traiter la demande. Réessayez dans quelques instants.",
          };

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Une erreur est survenue pendant l’envoi."
        );
      }

      setSendStatus("success");
      setSendMessage(
        result.message || "Votre demande a bien été envoyée. Merci !"
      );
    } catch (error) {
      setSendStatus("error");
      setSendMessage(
        error instanceof Error
          ? error.message
          : "Impossible d’envoyer la demande pour le moment."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gray-200 bg-white p-5 shadow-xl sm:p-8 lg:p-10"
    >

      {/* Barre de progression */}

      <div className="mb-8">

        <div className="flex justify-between text-sm text-gray-500">

          <span>Étape {step} sur 12</span>

          <span>{Math.round((step / 12) * 100)}%</span>

        </div>

        <div className="mt-3 h-3 rounded-full bg-gray-200">

          <div
            className="h-3 rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${Math.min((step / 12) * 100, 100)}%`,
            }}
          />

        </div>

      </div>

      {/* ================= ÉTAPE 1 ================= */}

      {step === 1 && (

        <div>

          <h2 className="text-3xl font-bold text-gray-900">

            Quel est le nom de votre entreprise ?

          </h2>

          <input
            type="text"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            placeholder="Exemple : Boulangerie du Moulin"
            className="mt-8 w-full rounded-2xl border border-gray-300 p-5 text-lg text-gray-900 outline-none transition focus:border-blue-600 placeholder:text-gray-500"
          />

        </div>

      )}

      {/* ================= ÉTAPE 2 ================= */}

      {step === 2 && (

        <div>

          <h2 className="text-3xl font-bold text-gray-900">

            Quelle est votre activité ?

          </h2>

          <p className="mt-3 text-gray-600">

            Choisissez la catégorie qui correspond le mieux à votre entreprise.

          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "🛍️ Commerce",
              "🍽️ Restaurant",
              "💇 Beauté",
              "🏋️ Sport",
              "🏠 Immobilier",
              "🔧 Artisan",
              "🏥 Santé",
              "📦 Autre",
            ].map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => setActivity(item)}
                className={`rounded-2xl border p-6 text-left text-lg font-semibold transition duration-300 ${
                  activity === item
                    ? "border-blue-600 bg-blue-100 text-blue-700 shadow-lg"
                    : "border-gray-300 bg-white text-gray-900 hover:border-blue-600 hover:bg-blue-50"
                }`}
              >

                <div className="flex items-center justify-between">

                  <span>{item}</span>

                  {activity === item && (

                    <span className="text-2xl">

                      ✓

                    </span>

                  )}

                </div>

              </button>

            ))}

          </div>

        </div>

      )}

      {/* ================= ÉTAPE 3 ================= */}

      {step === 3 && (

        <div>

          <h2 className="text-3xl font-bold text-gray-900">

            Quel est votre prénom et votre nom ?

          </h2>

          <input
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Exemple : Philippe Arnaud"
            className="mt-8 w-full rounded-2xl border border-gray-300 p-5 text-lg text-gray-900 outline-none transition focus:border-blue-600 placeholder:text-gray-500"
          />

        </div>

      )}

      {/* ================= ÉTAPE 4 ================= */}

      {step === 4 && (

        <div>

          <h2 className="text-3xl font-bold text-gray-900">

            Quel est votre numéro de téléphone ?

          </h2>

          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Exemple : +41 79 123 45 67"
            className="mt-8 w-full rounded-2xl border border-gray-300 p-5 text-lg text-gray-900 outline-none transition focus:border-blue-600 placeholder:text-gray-500"
          />

        </div>

      )}

      {/* ================= ÉTAPE 5 ================= */}

      {step === 5 && (

        <div>

          <h2 className="text-3xl font-bold text-gray-900">

            Quelle est votre adresse e-mail ?

          </h2>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Exemple : contact@entreprise.ch"
            className="mt-8 w-full rounded-2xl border border-gray-300 p-5 text-lg text-gray-900 outline-none transition focus:border-blue-600 placeholder:text-gray-500"
          />

        </div>

      )}
      {/* ================= ÉTAPE 6 ================= */}

      {step === 6 && (
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Avez-vous déjà un logo ?
          </h2>

          <p className="mt-3 text-gray-600">
            Si vous n&apos;en avez pas, nous pouvons en créer un pour vous.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { value: "Oui", label: "✅ Oui" },
              { value: "Non", label: "❌ Non" },
              {
                value: "Création PhilGood Studio",
                label: "🎨 Je souhaite que PhilGood Studio crée mon logo",
              },
            ].map((option) => {
              const isSelected = logo === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setLogo(option.value)}
                  className={`w-full rounded-2xl border p-5 text-left text-lg font-semibold transition ${
                    isSelected
                      ? "border-blue-600 bg-blue-100 text-blue-700 shadow-lg"
                      : "border-gray-300 bg-white text-gray-900 hover:border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span>{option.label}</span>
                    {isSelected && <span className="text-2xl">✓</span>}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
      {/* ================= ÉTAPE 7 ================= */}

      {step === 7 && (
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Avez-vous déjà des photos de votre entreprise ?
          </h2>

          <p className="mt-3 text-gray-600">
            Cela nous permettra de préparer une première maquette.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { value: "Oui", label: "✅ Oui" },
              { value: "Non", label: "❌ Non" },
            ].map((option) => {
              const isSelected = photos === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPhotos(option.value)}
                  className={`w-full rounded-2xl border p-5 text-left text-lg font-semibold transition ${
                    isSelected
                      ? "border-blue-600 bg-blue-100 text-blue-700 shadow-lg"
                      : "border-gray-300 bg-white text-gray-900 hover:border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span>{option.label}</span>
                    {isSelected && <span className="text-2xl">✓</span>}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
      {/* ================= ÉTAPE 8 ================= */}

      {step === 8 && (
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Quels éléments souhaitez-vous afficher sur votre site ?
          </h2>

          <p className="mt-3 text-gray-600">
            Vous pouvez sélectionner plusieurs éléments.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "🕒 Horaires",
              "🖼️ Galerie photos",
              "🏢 Présentation",
              "🛠️ Services",
              "💰 Tarifs",
              "📞 Contact",
              "📍 Google Maps",
              "📩 Formulaire de contact",
              "📦 Autre",
            ].map((item) => {
              const isSelected = elements.includes(item);

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleElement(item)}
                  className={`rounded-2xl border p-5 text-left text-lg font-semibold transition ${
                    isSelected
                      ? "border-blue-600 bg-blue-100 text-blue-700 shadow-lg"
                      : "border-gray-300 bg-white text-gray-900 hover:border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span>{item}</span>
                    {isSelected && <span className="text-2xl">✓</span>}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}


            {/* ================= ÉTAPE 9 ================= */}

      {step === 9 && (

        <div>

          <h2 className="text-3xl font-bold text-gray-900">

            Avez-vous des couleurs ou un style en tête ?

          </h2>

          <p className="mt-3 text-gray-600">

            Exemple : moderne, premium, noir et doré, bleu, minimaliste...

          </p>

          <textarea
            rows={5}
            value={style}
            onChange={(event) => setStyle(event.target.value)}
            placeholder="Décrivez le style que vous aimez ou laissez-nous carte blanche."
            className="mt-8 w-full rounded-2xl border border-gray-300 p-5 text-lg text-gray-900 outline-none transition focus:border-blue-600 placeholder:text-gray-500 resize-none"
          />

        </div>

      )}

      {/* ================= ÉTAPE 10 ================= */}

      {step === 10 && (

        <div>

          <h2 className="text-3xl font-bold text-gray-900">

            Informations complémentaires

          </h2>

          <p className="mt-3 text-gray-600">

            Indiquez tout ce qui pourrait nous être utile pour préparer votre futur site.

          </p>

          <textarea
            rows={8}
            value={additionalInfo}
            onChange={(event) => setAdditionalInfo(event.target.value)}
            placeholder="Expliquez votre projet..."
            className="mt-8 w-full rounded-2xl border border-gray-300 p-5 text-lg text-gray-900 outline-none transition focus:border-blue-600 placeholder:text-gray-500 resize-none"
          />

        </div>

      )}

      {/* ================= ÉTAPE 11 ================= */}

      {step === 11 && (

        <div>

          <h2 className="text-3xl font-bold text-gray-900">

            Ajoutez vos fichiers

          </h2>

          <p className="mt-3 text-gray-600">

            Vous pouvez ajouter votre logo, des photos, une carte de visite ou tout autre document.

          </p>

          <label className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-300 bg-blue-50 p-12 transition hover:bg-blue-100">

            <span className="text-6xl">

              📁

            </span>

            <span className="mt-5 text-xl font-semibold text-gray-900">

              Cliquez ici pour ajouter vos fichiers

            </span>

            <span className="mt-2 text-gray-600">

              Images et PDF — 4 Mo maximum au total

            </span>

            <input
              type="file"
              multiple
              accept="image/*,.pdf,application/pdf"
              onChange={handleFiles}
              className="hidden"
            />

          </label>

          {files.length > 0 && (
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="font-semibold text-gray-900">
                {files.length} fichier{files.length > 1 ? "s" : ""} sélectionné
                {files.length > 1 ? "s" : ""} :
              </p>

              <ul className="mt-3 space-y-2 text-gray-700">
                {files.map((file) => (
                  <li key={`${file.name}-${file.lastModified}`}>• {file.name}</li>
                ))}
              </ul>
            </div>
          )}

        </div>

      )}

      {/* ================= ÉTAPE 12 ================= */}

      {step === 12 && (

        <div className="text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

            <span className="text-5xl">

              ✅

            </span>

          </div>

          <h2 className="mt-8 text-4xl font-bold text-gray-900">

            Votre demande est prête !

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">

            Vérifiez une dernière fois vos informations puis cliquez sur
            <strong> Envoyer ma demande</strong>.

            <br /><br />

            Nous vous recontacterons dans les meilleurs délais.

          </p>

        </div>

      )}

      {/* ================= BOUTONS ================= */}

      <div className="mt-12 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">

        <button
          type="button"
          onClick={() => step > 1 && setStep(step - 1)}
          disabled={step === 1}
          className="w-full rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >

          ← Retour

        </button>

        {step < 12 ? (

          <button
            type="button"
            onClick={goToNextStep}
            className="w-full rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >

            Suivant →

          </button>

        ) : (

          <button
            type="submit"
            disabled={isSending || sendStatus === "success"}
            className="w-full rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >

            {isSending
              ? "Envoi en cours..."
              : sendStatus === "success"
                ? "Demande envoyée ✓"
                : "Envoyer ma demande"}

          </button>

        )}

      </div>

      {sendStatus !== "idle" && (
        <div
          role="status"
          className={`mt-6 rounded-2xl border p-4 text-center font-semibold ${
            sendStatus === "success"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {sendMessage}
        </div>
      )}

    </form>

  );

}