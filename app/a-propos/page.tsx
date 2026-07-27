
import Link from "next/link";

const values = [
  {
    title: "Accompagnement personnalisé",
    description:
      "Chaque projet commence par une vraie écoute. Nous prenons le temps de comprendre votre activité, vos objectifs et l’image que vous souhaitez transmettre.",
    icon: "person",
  },
  {
    title: "Design moderne",
    description:
      "Des interfaces élégantes, professionnelles et pensées pour mettre votre entreprise en valeur dès les premières secondes.",
    icon: "design",
  },
  {
    title: "Performance",
    description:
      "Des sites rapides, agréables à parcourir et parfaitement adaptés aux ordinateurs, tablettes et téléphones.",
    icon: "speed",
  },
  {
    title: "Transparence",
    description:
      "Vous suivez l’avancement du projet, vous demandez les ajustements nécessaires et vous ne payez qu’une fois satisfait du résultat.",
    icon: "check",
  },
];

const reasons = [
  "Un interlocuteur unique du début à la fin",
  "Un accompagnement clair et humain",
  "Un site entièrement adapté à votre activité",
  "Des délais rapides et une communication régulière",
  "Un paiement seulement après validation du résultat",
];

function ValueIcon({ type }: { type: string }) {
  if (type === "person") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <circle cx="12" cy="6" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 21a7 7 0 0 1 14 0" />
      </svg>
    );
  }

  if (type === "design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 16 17 6l1 1-10 10H7v-1Zm8-11 2-2 4 4-2 2" />
      </svg>
    );
  }

  if (type === "speed") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 18a8 8 0 1 1 14 0M12 12l4-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m7 12 3 3 7-7" />
    </svg>
  );
}

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] text-slate-950">
        <BackHome />
      <section className="relative isolate overflow-hidden bg-[#07111f] px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-amber-300 backdrop-blur">
              À propos de PhilGood Studio
            </span>

            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Nous ne créons pas simplement des sites internet.
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300 sm:text-2xl">
              Nous créons la première impression que vos futurs clients auront de votre entreprise.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              PhilGood Studio accompagne les commerçants, artisans et petites entreprises dans la création de sites modernes, élégants et pensés pour donner confiance.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/devis" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
                Demander un devis
              </Link>

              <Link href="/realisations" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
                Découvrir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Notre histoire
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Une passion devenue un projet concret
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              PhilGood Studio est né d’une passion pour l’informatique, le développement web et le design moderne. En tant qu’étudiant en informatique, j’ai progressivement transformé cette passion en un véritable projet : aider les petites entreprises à mieux se présenter sur internet.
            </p>
            <p>
              De nombreux commerçants et artisans possèdent un excellent savoir-faire, mais leur présence en ligne ne reflète pas toujours la qualité de leur travail. Mon objectif est de leur proposer une solution plus simple, plus humaine et plus accessible.
            </p>
            <p>
              Chaque site est conçu avec soin, en prenant le temps de comprendre l’activité, l’identité et les besoins du client. Le résultat doit être beau, clair, rapide et surtout donner envie de prendre contact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Notre mission
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Vous aider à être mieux vu, mieux compris et mieux choisi
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Un bon site ne sert pas seulement à être présent sur internet. Il doit rassurer, valoriser votre activité et faciliter le passage d’un visiteur à un futur client.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="group rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-300 transition group-hover:bg-blue-700">
                  <ValueIcon type={value.icon} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#07111f] lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              Notre vision
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Un site internet doit être un investissement, pas une dépense
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Votre site travaille pour vous à toute heure. Il présente votre activité, répond aux premières questions de vos visiteurs et renforce votre crédibilité avant même le premier échange.
            </p>
          </div>

          <div className="border-t border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
            <h3 className="text-xl font-semibold text-white">
              Pourquoi choisir PhilGood Studio ?
            </h3>

            <div className="mt-8 space-y-5">
              {reasons.map((reason) => (
                <div key={reason} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5 9.5 17 19 7.5" />
                    </svg>
                  </span>
                  <p className="leading-7 text-slate-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-4 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white px-7 py-12 text-center shadow-sm sm:px-12 sm:py-16">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
            Votre projet
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Construisons une présence en ligne qui vous ressemble
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Expliquez-nous votre activité et vos besoins. Nous vous proposerons une solution claire, personnalisée et sans engagement.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/devis" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              Démarrer mon projet
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-slate-950">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}