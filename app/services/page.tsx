import BackHome from "@/components/BackHome";
import Link from "next/link";

const inclusions = [
  {
    title: "Design moderne et personnalisé",
    description:
      "Une identité visuelle élégante, cohérente avec votre activité et pensée pour donner confiance dès les premières secondes.",
    icon: "design",
  },
  {
    title: "Compatible mobile, tablette et ordinateur",
    description:
      "Votre site s’adapte automatiquement à tous les écrans pour offrir une expérience fluide à chaque visiteur.",
    icon: "responsive",
  },
  {
    title: "Rapide et optimisé",
    description:
      "Des pages légères et performantes pour réduire les temps de chargement et garder vos visiteurs plus longtemps.",
    icon: "speed",
  },
  {
    title: "Formulaire de contact",
    description:
      "Vos futurs clients peuvent facilement vous écrire, demander un renseignement ou prendre contact depuis votre site.",
    icon: "contact",
  },
  {
    title: "Référencement de base",
    description:
      "Une structure propre et claire pour aider votre entreprise à être mieux comprise par les moteurs de recherche.",
    icon: "search",
  },
  {
    title: "Facile à gérer",
    description:
      "Une solution pensée pour rester simple à utiliser, même sans connaissances techniques.",
    icon: "simple",
  },
];

const steps = [
  {
    number: "01",
    title: "Vous nous présentez votre projet",
    description:
      "Vous remplissez le formulaire de devis en nous expliquant votre activité, vos besoins, vos préférences et les éléments que vous possédez déjà.",
  },
  {
    number: "02",
    title: "Nous échangeons avec vous",
    description:
      "Nous prenons le temps de comprendre votre entreprise, votre clientèle et l’image que vous souhaitez transmettre.",
  },
  {
    number: "03",
    title: "Nous créons une première version",
    description:
      "Nous concevons votre site et préparons une première version complète que vous pouvez découvrir avant de prendre une décision.",
  },
  {
    number: "04",
    title: "Vous demandez les ajustements",
    description:
      "Vous nous indiquez les modifications souhaitées. Nous affinons les textes, les couleurs, les images et la mise en page jusqu’à ce que le résultat vous convienne.",
  },
  {
    number: "05",
    title: "Vous validez, puis vous payez",
    description:
      "Vous ne réglez le site qu’une fois la version finale validée et lorsque vous êtes satisfait du résultat.",
  },
];

const advantages = [
  "Un accompagnement personnalisé du début à la fin",
  "Un seul interlocuteur pour tout votre projet",
  "Aucun paiement avant d’avoir découvert votre site",
  "Des modifications possibles avant validation",
  "Un site pensé pour votre activité et vos clients",
];

function ServiceIcon({ type }: { type: string }) {
  const common =
    "h-7 w-7";

  if (type === "design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 16 17 6l1 1-10 10H7v-1Zm8-11 2-2 4 4-2 2" />
      </svg>
    );
  }

  if (type === "responsive") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
        <rect x="3" y="4" width="14" height="11" rx="2" />
        <rect x="15" y="9" width="6" height="11" rx="1.5" />
        <path strokeLinecap="round" d="M8 19h4" />
      </svg>
    );
  }

  if (type === "speed") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 18a8 8 0 1 1 14 0M12 12l4-4" />
      </svg>
    );
  }

  if (type === "contact") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "search") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path strokeLinecap="round" d="m15.5 15.5 5 5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 4h12v16H6zM9 8h6M9 12h6M9 16h3" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] text-slate-950">
        <BackHome />
      <section className="relative isolate overflow-hidden bg-[#07111f] px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-amber-300 backdrop-blur">
              Nos services
            </span>

            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Des sites internet modernes qui mettent votre activité en valeur
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              PhilGood Studio crée des sites élégants, rapides et pensés pour
              inspirer confiance, présenter clairement votre entreprise et
              donner envie à vos futurs clients de vous contacter.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Demander un devis
              </Link>

              <Link
                href="/realisations"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Création de sites internet
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Une solution complète pour présenter votre entreprise en ligne
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Chaque site est conçu sur mesure selon votre activité, votre image
              et vos objectifs. Nous ne partons pas d’un modèle impersonnel :
              nous créons une présentation qui vous ressemble et qui parle à vos
              clients.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-300 transition group-hover:bg-blue-700">
                  <ServiceIcon type={item.icon} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Comment ça fonctionne ?
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Une méthode simple, claire et sans mauvaise surprise
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Vous restez impliqué à chaque étape du projet. Vous découvrez votre
              site, vous demandez les ajustements nécessaires et vous ne payez
              qu’une fois satisfait du résultat final.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-6 rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 sm:grid-cols-[110px_1fr] sm:p-9"
              >
                <div className="text-4xl font-black tracking-tight text-blue-700">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#07111f] lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              Une approche rassurante
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Vous découvrez votre site avant de le payer
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Notre objectif est de vous proposer un résultat dont vous êtes
              réellement satisfait. Vous pouvez voir la première version,
              demander des changements et valider le projet avant le règlement.
            </p>
          </div>

          <div className="border-t border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
            <h3 className="text-xl font-semibold text-white">
              Ce que cela change pour vous
            </h3>

            <div className="mt-8 space-y-5">
              {advantages.map((advantage) => (
                <div key={advantage} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12.5 9.5 17 19 7.5"
                      />
                    </svg>
                  </span>

                  <p className="leading-7 text-slate-300">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-4 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white px-7 py-12 text-center shadow-sm sm:px-12 sm:py-16">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            Parlons de votre projet
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Votre futur site peut commencer dès aujourd’hui
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Présentez-nous votre activité et vos besoins. Nous vous répondrons
            avec une proposition claire, adaptée à votre projet.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Demander mon devis
            </Link>

            <Link
              href="/a-propos"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-slate-950"
            >
              Découvrir PhilGood Studio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}