import Link from "next/link";

const services = [
  {
    name: "Entretien complet",
    description:
      "Vidange, filtres, freins, pneus et contrôles essentiels pour garder votre véhicule fiable au quotidien.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Diagnostic électronique",
    description:
      "Une recherche de panne précise avec des outils modernes et une explication claire avant chaque intervention.",
    image:
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Réparation mécanique",
    description:
      "Des réparations toutes marques réalisées avec soin, méthode et pièces de qualité.",
    image:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=85",
  },
];

const advantages = [
  {
    number: "01",
    title: "Devis transparent",
    text: "Chaque intervention est expliquée clairement avant le début des travaux, sans mauvaise surprise.",
  },
  {
    number: "02",
    title: "Toutes marques",
    text: "Notre atelier prend en charge les véhicules thermiques, hybrides et utilitaires de nombreuses marques.",
  },
  {
    number: "03",
    title: "Service rapide",
    text: "Nous organisons les rendez-vous efficacement afin de réduire au maximum le temps d’immobilisation.",
  },
];

export default function GaragePage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2200&q=90"
          alt="Atelier automobile moderne"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xl font-black tracking-tight text-white">
                Garage Horizon
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-blue-300">
                Entretien • Diagnostic • Réparation
              </p>
            </div>

            <Link
              href="/realisations"
              className="rounded-full border border-white/20 bg-black/30 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              ← Retour aux réalisations
            </Link>
          </header>

          <div className="flex flex-1 items-center py-20">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Confiance • Précision • Transparence
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-8xl">
                Votre véhicule entre de bonnes mains
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                Un atelier moderne, une équipe expérimentée et des explications
                claires pour entretenir et réparer votre véhicule en toute
                confiance.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-blue-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-500"
                >
                  Découvrir nos services
                </a>

                <a
                  href="#rendez-vous"
                  className="rounded-full border border-white/25 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Prendre rendez-vous
                </a>
              </div>

              <div className="mt-14 grid max-w-2xl gap-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                  <p className="text-3xl font-black text-blue-400">15 ans</p>
                  <p className="mt-1 text-sm text-white/60">
                    d’expérience automobile
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                  <p className="text-3xl font-black text-blue-400">Toutes</p>
                  <p className="mt-1 text-sm text-white/60">
                    marques prises en charge
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                  <p className="text-3xl font-black text-blue-400">24 h</p>
                  <p className="mt-1 text-sm text-white/60">
                    pour un premier diagnostic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
              Notre atelier
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              Une mécanique sérieuse, expliquée simplement
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/60">
              Chez Garage Horizon, nous croyons qu’un bon service automobile
              commence par une relation de confiance. Avant chaque réparation,
              nous vous expliquons clairement le problème, les solutions
              possibles et le coût de l’intervention.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/60">
              Notre atelier combine expérience mécanique, outils de diagnostic
              modernes et organisation efficace afin de vous rendre un véhicule
              sûr, fiable et prêt à reprendre la route.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1400&q=85"
              alt="Mécanicien travaillant dans un atelier"
              className="h-[560px] w-full rounded-[2.5rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-7 -left-2 max-w-xs rounded-3xl bg-blue-600 p-7 shadow-2xl sm:left-8">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-100">
                Notre engagement
              </p>
              <p className="mt-3 text-2xl font-black">
                Une intervention utile, jamais inutile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#111821] px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
              Nos services
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Tout ce qu’il faut pour votre véhicule
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              De l’entretien courant aux réparations plus techniques, notre
              équipe intervient avec méthode et précision.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black">{service.name}</h3>
                  <p className="mt-4 leading-7 text-white/60">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
              Pourquoi nous choisir
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black sm:text-6xl">
              Un garage professionnel, honnête et efficace
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <article
                key={advantage.number}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="text-5xl font-black text-blue-500">
                  {advantage.number}
                </p>
                <h3 className="mt-7 text-2xl font-black">
                  {advantage.title}
                </h3>
                <p className="mt-4 leading-7 text-white/55">
                  {advantage.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rendez-vous" className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-blue-600 lg:grid-cols-2">
          <div className="p-9 sm:p-14">
            <p className="font-semibold uppercase tracking-[0.3em] text-blue-100">
              Rendez-vous & horaires
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Votre voiture a besoin d’un contrôle ?
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Appelez-nous ou passez à l’atelier. Nous vous proposerons
              rapidement un créneau adapté et une première estimation claire.
            </p>

            <div className="mt-10 space-y-5 text-lg">
              <div className="flex justify-between gap-6 border-b border-white/20 pb-4">
                <span>Lundi – Vendredi</span>
                <strong>07:30 – 18:00</strong>
              </div>

              <div className="flex justify-between gap-6 border-b border-white/20 pb-4">
                <span>Samedi</span>
                <strong>08:00 – 12:00</strong>
              </div>

              <div className="flex justify-between gap-6">
                <span>Dimanche</span>
                <strong>Fermé</strong>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-black/15 p-6">
              <p className="font-bold">Garage Horizon</p>
              <p className="mt-2 text-blue-100">
                Route de l’Industrie 12, 1000 Lausanne
              </p>
              <p className="mt-2 text-blue-100">021 000 00 00</p>
              <p className="mt-2 text-blue-100">
                contact@garage-horizon.ch
              </p>
            </div>
          </div>

          <div className="relative min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1400&q=85"
              alt="Réparation automobile dans un garage"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Une création PhilGood Studio
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-5xl">
              Vous souhaitez un site comme celui-ci pour votre entreprise ?
            </h2>
          </div>

          <Link
            href="/devis"
            className="shrink-0 rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  );
}