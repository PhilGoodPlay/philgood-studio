import Link from "next/link";

const services = [
  {
    title: "Coupe & Coiffage",
    description:
      "Une coupe personnalisée adaptée à votre style, votre visage et vos envies.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Coloration",
    description:
      "Des couleurs lumineuses réalisées avec des produits professionnels de qualité.",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Soins & Brushing",
    description:
      "Des soins nourrissants et une finition élégante pour révéler toute la beauté de vos cheveux.",
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=85",
  },
];

const values = [
  {
    number: "01",
    title: "Conseils personnalisés",
    text: "Chaque rendez-vous commence par une discussion afin de comprendre vos envies et votre style.",
  },
  {
    number: "02",
    title: "Produits premium",
    text: "Nous utilisons des soins professionnels sélectionnés pour respecter vos cheveux.",
  },
  {
    number: "03",
    title: "Moment de détente",
    text: "Un salon calme et chaleureux où chaque client prend le temps de se sentir bien.",
  },
];

export default function SalonPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ef] text-[#2d2422]">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2200&q=90"
          alt="Salon de coiffure moderne"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#241d1b]/90 via-[#241d1b]/60 to-transparent" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xl font-black text-white">Salon Élégance</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-rose-200">
                Beauté • Style • Bien-être
              </p>
            </div>

            <Link
              href="/realisations"
              className="rounded-full border border-white/30 bg-black/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black"
            >
              ← Retour aux réalisations
            </Link>
          </header>

          <div className="flex flex-1 items-center py-20">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-200">
                Élégance • Savoir-faire • Détente
              </p>

              <h1 className="mt-6 text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-8xl">
                Révélez votre style
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                Dans une ambiance chaleureuse et raffinée, notre équipe vous
                accompagne pour créer une coiffure qui vous ressemble.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#prestations"
                  className="rounded-full bg-[#edd0c6] px-7 py-4 font-bold text-[#2d2422] transition hover:-translate-y-1"
                >
                  Découvrir nos prestations
                </a>

                <a
                  href="#reservation"
                  className="rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Réserver
                </a>
              </div>

              <div className="mt-14 grid max-w-2xl gap-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-black/20 p-5 text-white backdrop-blur">
                  <p className="text-3xl font-black">15 ans</p>
                  <p className="mt-1 text-sm text-white/70">d'expérience</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-black/20 p-5 text-white backdrop-blur">
                  <p className="text-3xl font-black">100%</p>
                  <p className="mt-1 text-sm text-white/70">produits premium</p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-black/20 p-5 text-white backdrop-blur">
                  <p className="text-3xl font-black">★★★★★</p>
                  <p className="mt-1 text-sm text-white/70">avis clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
              alt="Salon élégant"
              className="h-[560px] w-full rounded-[2.5rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-7 -right-2 rounded-3xl bg-[#2d2422] p-7 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-200">
                Notre philosophie
              </p>

              <p className="mt-3 text-2xl font-black">
                Vous faire sentir aussi bien que vous paraissez.
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-[#b67b72]">
              À propos du salon
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Un moment de détente pensé pour vous
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#6d5a55]">
              Nous croyons qu'une visite chez le coiffeur est bien plus qu'une
              simple coupe : c'est un moment où l'on prend soin de soi dans une
              ambiance calme et élégante.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6d5a55]">
              Notre équipe prend le temps de comprendre vos attentes afin de
              créer une coiffure qui met naturellement votre personnalité en
              valeur.
            </p>
          </div>
        </div>
      </section>

      <section id="prestations" className="bg-[#2d2422] px-6 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.3em] text-rose-200">
              Nos prestations
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Prenez soin de vos cheveux
            </h2>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[2rem] bg-white/5"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 leading-7 text-white/65">
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
            <p className="font-semibold uppercase tracking-[0.3em] text-[#b67b72]">
              Pourquoi nous choisir
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Une expérience haut de gamme
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="rounded-[2rem] border border-[#e5d6cf] bg-white/70 p-8"
              >
                <p className="text-5xl font-black text-[#d8a89d]">
                  {value.number}
                </p>

                <h3 className="mt-7 text-2xl font-black">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-[#6d5a55]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#d8b2a6] lg:grid-cols-2">
          <div className="p-10 sm:p-14">
            <p className="font-semibold uppercase tracking-[0.3em] text-[#7a4f45]">
              Réservation
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Prenez rendez-vous
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5b413b]">
              Notre équipe vous accueille du mardi au samedi dans une ambiance
              chaleureuse et élégante.
            </p>

            <div className="mt-10 space-y-5 text-lg">
              <div className="flex justify-between border-b border-black/10 pb-4">
                <span>Mardi - Vendredi</span>
                <strong>09:00 - 18:30</strong>
              </div>

              <div className="flex justify-between border-b border-black/10 pb-4">
                <span>Samedi</span>
                <strong>08:30 - 17:00</strong>
              </div>

              <div className="flex justify-between">
                <span>Dimanche & Lundi</span>
                <strong>Fermé</strong>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-white/40 p-6">
              <p className="font-bold">Salon Élégance</p>
              <p className="mt-2">Rue du Centre 8, Lausanne</p>
              <p className="mt-2">021 000 00 00</p>
              <p className="mt-2">bonjour@salon-elegance.ch</p>
            </div>
          </div>

          <div className="relative min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1400&q=85"
              alt="Coiffure professionnelle"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#241d1b] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-200">
              Une création PhilGood Studio
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-5xl">
              Offrez à votre salon un site aussi élégant que votre savoir-faire.
            </h2>
          </div>

          <Link
            href="/devis"
            className="rounded-full bg-[#edd0c6] px-8 py-4 font-bold text-[#2d2422] transition hover:-translate-y-1"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  );
}