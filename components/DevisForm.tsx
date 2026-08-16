
"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const MAX_TOTAL_FILE_SIZE = 4 * 1024 * 1024;
const MAX_COMPRESSED_PHOTO_SIZE = 430 * 1024;
const MAX_IMAGE_DIMENSION = 1600;

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
  const [isProcessingFiles, setIsProcessingFiles] = useState(false);
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

  const isPhotoFile = (file: File) =>
    file.type.startsWith("image/");

  const isPdfFile = (file: File) =>
    file.type === "application/pdf" ||
    file.name.toLowerCase().endsWith(".pdf");

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} Ko`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
  };

  const loadImage = (file: File) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      const objectUrl = URL.createObjectURL(file);

      image.onload = () => {
        URL.revokeObjectURL(objectUrl);
        resolve(image);
      };

      image.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(
          new Error(
            `La photo "${file.name}" n’a pas pu être lue. Essayez de l’enregistrer en JPG ou PNG puis réessayez.`
          )
        );
      };

      image.src = objectUrl;
    });

  const canvasToBlob = (
    canvas: HTMLCanvasElement,
    quality: number
  ) =>
    new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
            return;
          }

          reject(new Error("Impossible de compresser cette photo."));
        },
        "image/jpeg",
        quality
      );
    });

  const compressPhoto = async (file: File) => {
    const image = await loadImage(file);

    let width = image.naturalWidth || image.width;
    let height = image.naturalHeight || image.height;

    if (!width || !height) {
      throw new Error(`Dimensions invalides pour "${file.name}".`);
    }

    const largestSide = Math.max(width, height);

    if (largestSide > MAX_IMAGE_DIMENSION) {
      const ratio = MAX_IMAGE_DIMENSION / largestSide;
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("La compression des photos n’est pas disponible.");
    }

    canvas.width = width;
    canvas.height = height;

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);

    let quality = 0.82;
    let blob = await canvasToBlob(canvas, quality);

    while (
      blob.size > MAX_COMPRESSED_PHOTO_SIZE &&
      quality > 0.48
    ) {
      quality -= 0.08;
      blob = await canvasToBlob(canvas, quality);
    }

    if (blob.size > MAX_COMPRESSED_PHOTO_SIZE) {
      const reducedWidth = Math.max(700, Math.round(width * 0.78));
      const reducedHeight = Math.max(700, Math.round(height * 0.78));

      const smallCanvas = document.createElement("canvas");
      const smallContext = smallCanvas.getContext("2d");

      if (!smallContext) {
        throw new Error("La compression des photos n’est pas disponible.");
      }

      smallCanvas.width = reducedWidth;
      smallCanvas.height = reducedHeight;

      smallContext.fillStyle = "#ffffff";
      smallContext.fillRect(0, 0, reducedWidth, reducedHeight);
      smallContext.drawImage(
        image,
        0,
        0,
        reducedWidth,
        reducedHeight
      );

      blob = await canvasToBlob(smallCanvas, 0.62);
    }

    const cleanName =
      file.name.replace(/\.[^/.]+$/, "").trim() || "photo";

    return new File(
      [blob],
      `${cleanName}-compressee.jpg`,
      {
        type: "image/jpeg",
        lastModified: Date.now(),
      }
    );
  };

  const handleFiles = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.currentTarget;
    const selectedFiles = Array.from(input.files ?? []);

    input.value = "";

    if (selectedFiles.length === 0) {
      return;
    }

    setSendStatus("idle");
    setSendMessage("");
    setIsProcessingFiles(true);

    try {
      const selectedPhotos = selectedFiles.filter(isPhotoFile);
      const selectedPdfs = selectedFiles.filter(isPdfFile);
      const unsupportedFiles = selectedFiles.filter(
        (file) => !isPhotoFile(file) && !isPdfFile(file)
      );

      if (unsupportedFiles.length > 0) {
        throw new Error(
          "Certains fichiers ne sont pas acceptés. Utilisez uniquement des photos ou des PDF."
        );
      }

      const compressedPhotos: File[] = [];

      for (const photo of selectedPhotos) {
        compressedPhotos.push(await compressPhoto(photo));
      }

      const nextFiles = [
        ...files,
        ...compressedPhotos,
        ...selectedPdfs,
      ];

      setFiles(nextFiles);

      const totalSize = nextFiles.reduce(
        (total, file) => total + file.size,
        0
      );

      if (totalSize > MAX_TOTAL_FILE_SIZE) {
        setSendStatus("error");
        setSendMessage(
          "Vos fichiers dépassent la limite de 4 Mo. Ils restent enregistrés dans votre sélection : supprimez simplement une ou plusieurs photos ou un PDF avec la petite croix jusqu’à repasser sous 4 Mo."
        );
      }
    } catch (error) {
      setSendStatus("error");
      setSendMessage(
        error instanceof Error
          ? error.message
          : "Impossible d’ajouter ces fichiers."
      );
    } finally {
      setIsProcessingFiles(false);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((currentFiles) => {
      const nextFiles = currentFiles.filter(
        (_, index) => index !== indexToRemove
      );

      const totalSize = nextFiles.reduce(
        (total, file) => total + file.size,
        0
      );

      if (totalSize > MAX_TOTAL_FILE_SIZE) {
        setSendStatus("error");
        setSendMessage(
          "Vos fichiers dépassent encore la limite de 4 Mo. Supprimez encore un ou plusieurs fichiers pour continuer."
        );
      } else {
        setSendStatus("idle");
        setSendMessage("");
      }

      return nextFiles;
    });
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

    if (isSending || isProcessingFiles) {
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
        "Impossible de continuer : vos fichiers dépassent 4 Mo au total. Ils restent dans votre sélection. Supprimez simplement un ou plusieurs fichiers avec la petite croix jusqu’à repasser sous 4 Mo."
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
            Ajoutez vos photos et documents
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Sur téléphone, appuyez sur la zone ci-dessous puis choisissez vos
            photos directement dans votre photothèque ou votre galerie.
          </p>

          <div className="mt-6 grid gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900 sm:grid-cols-2">
            <div className="rounded-xl bg-white/70 p-3">
              <p className="font-bold">📦 Limite totale</p>
              <p className="mt-1 text-blue-700">
                4 Mo maximum pour l’ensemble des fichiers
              </p>
            </div>

            <div className="rounded-xl bg-white/70 p-3">
              <p className="font-bold">✨ Compression</p>
              <p className="mt-1 text-blue-700">
                Les photos sont réduites automatiquement
              </p>
            </div>
          </div>

          <label
            className={`mt-8 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-8 text-center transition sm:p-12 ${
              isProcessingFiles
                ? "cursor-wait border-gray-300 bg-gray-100"
                : "cursor-pointer border-blue-300 bg-blue-50 hover:bg-blue-100"
            }`}
          >
            <span className="text-6xl">
              {isProcessingFiles ? "⏳" : "🖼️"}
            </span>

            <span className="mt-5 text-xl font-semibold text-gray-900">
              {isProcessingFiles
                ? "Compression des photos..."
                : "Choisir des photos ou des PDF"}
            </span>

            <span className="mt-2 max-w-xl text-gray-600">
              iPhone / Android : choisissez votre photothèque ou votre galerie.
              Vous pourrez supprimer chaque fichier avec la petite croix.
            </span>

            <span className="mt-3 rounded-full bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm">
              Taille totale :{" "}
              {formatFileSize(
                files.reduce((total, file) => total + file.size, 0)
              )}{" "}
              / 4 Mo
            </span>

            <input
              type="file"
              multiple
              accept="image/*,.pdf,application/pdf"
              onChange={handleFiles}
              disabled={isProcessingFiles}
              className="hidden"
            />
          </label>

          {files.reduce((total, file) => total + file.size, 0) >
            MAX_TOTAL_FILE_SIZE && (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
              <p className="font-bold">
                ⚠️ Limite de 4 Mo dépassée
              </p>
              <p className="mt-1 text-sm leading-6">
                Vos fichiers restent sélectionnés. Supprimez simplement une ou
                plusieurs photos ou un PDF avec la petite croix jusqu’à ce que
                la taille totale repasse sous 4 Mo.
              </p>
            </div>
          )}

          {files.length > 0 && (
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-gray-900">
                    {files.length} fichier{files.length > 1 ? "s" : ""} prêt
                    {files.length > 1 ? "s" : ""} à être envoyé
                    {files.length > 1 ? "s" : ""}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Taille totale :{" "}
                    {formatFileSize(
                      files.reduce((total, file) => total + file.size, 0)
                    )}{" "}
                    / 4 Mo
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setFiles([]);
                    setSendStatus("idle");
                    setSendMessage("");
                  }}
                  className="w-fit rounded-xl border border-red-200 bg-white px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                >
                  Tout supprimer
                </button>
              </div>

              <ul className="mt-4 space-y-3">
                {files.map((file, index) => {
                  const isPhoto = isPhotoFile(file);

                  return (
                    <li
                      key={`${file.name}-${file.lastModified}-${index}`}
                      className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl">
                        {isPhoto ? "🖼️" : "📄"}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-gray-900">
                          {file.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {isPhoto ? "Photo compressée" : "Document PDF"} ·{" "}
                          {formatFileSize(file.size)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-200 bg-red-50 text-lg font-bold text-red-600 transition hover:bg-red-100"
                        aria-label={`Supprimer ${file.name}`}
                        title="Supprimer"
                      >
                        ×
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <p className="mt-4 text-xs leading-5 text-gray-500">
            Les photos sont converties en JPG et compressées automatiquement
            avant l’envoi afin de rendre le formulaire plus fiable sur mobile.
          </p>
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
            disabled={
              isSending ||
              isProcessingFiles ||
              sendStatus === "success" ||
              files.reduce((total, file) => total + file.size, 0) >
                MAX_TOTAL_FILE_SIZE
            }
            className="w-full rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >

            {isProcessingFiles
              ? "Compression en cours..."
              : isSending
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