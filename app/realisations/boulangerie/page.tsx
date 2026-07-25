import Link from "next/link";

const products = [
  {
    name: "Pain au levain",
    description:
      "Une mie généreuse, une croûte croustillante et une fermentation lente de 24 heures.",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Viennoiseries maison",
    description:
      "Croissants, pains au chocolat et brioches préparés chaque matin dans notre fournil.",
    image:
      "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Pâtisseries artisanales",
    description:
      "Des créations simples, gourmandes et élégantes, réalisées avec des ingrédients de qualité.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
  },
];

const values = [
  {
    number: "01",
    title: "Farines locales",
    text: "Nous travaillons avec des moulins de la région afin de privilégier des ingrédients simples et traçables.",
  },
  {
    number: "02",
    title: "Levain naturel",
    text: "Nos pains bénéficient d’une fermentation lente qui développe les arômes et améliore leur conservation.",
  },
  {
    number: "03",
    title: "Fabrication quotidienne",
    text: "Tout est préparé chaque jour dans notre fournil, avec patience, précision et passion.",
  },
];

export default function BoulangeriePage() {
  return (
    <main className="min-h-screen bg-[#f7f0e5] text-[#2d2119]">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2200&q=90"
          alt="Pains artisanaux disposés sur une table"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xl font-black tracking-tight text-white">
                Boulangerie du Moulin
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-amber-200">
                Artisan boulanger
              </p>
            </div>

            <Link
              href="/realisations"
              className="rounded-full border border-white/30 bg-black/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              ← Retour aux réalisations
            </Link>
          </header>

          <div className="flex flex-1 items-center py-20">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
                Pain artisanal • Blé local • Levain naturel
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-8xl">
                Le goût du vrai pain artisanal
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                Chaque jour, nous façonnons des pains généreux, des
                viennoiseries croustillantes et des pâtisseries maison avec des
                ingrédients choisis auprès de producteurs locaux.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#produits"
                  className="rounded-full bg-amber-300 px-7 py-4 font-bold text-[#2d2119] transition hover:-translate-y-1 hover:bg-amber-200"
                >
                  Découvrir nos produits
                </a>

                <a
                  href="#horaires"
                  className="rounded-full border border-white/35 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Voir les horaires
                </a>
              </div>

              <div className="mt-14 grid max-w-2xl gap-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-black/20 p-5 text-white backdrop-blur-md">
                  <p className="text-3xl font-black">24 h</p>
                  <p className="mt-1 text-sm text-white/70">
                    de fermentation lente
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-black/20 p-5 text-white backdrop-blur-md">
                  <p className="text-3xl font-black">100 %</p>
                  <p className="mt-1 text-sm text-white/70">
                    fabrication maison
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-black/20 p-5 text-white backdrop-blur-md">
                  <p className="text-3xl font-black">1987</p>
                  <p className="mt-1 text-sm text-white/70">
                    savoir-faire familial
                  </p>
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
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=85"
              alt="Assortiment de pains frais"
              className="h-[560px] w-full rounded-[2.5rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-7 -right-2 max-w-xs rounded-3xl bg-[#2d2119] p-7 text-white shadow-2xl sm:right-8">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-300">
                Notre promesse
              </p>
              <p className="mt-3 text-2xl font-black">
                Du bon, du vrai, préparé chaque jour.
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-[#a56b2a]">
              Notre histoire
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
              Une boulangerie de quartier, avec une vraie exigence de qualité
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#6e5948]">
              Depuis plus de trente ans, la Boulangerie du Moulin prépare
              chaque jour des produits simples, gourmands et généreux. Notre
              travail commence tôt le matin, dans le respect des temps de
              fermentation et des gestes traditionnels.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6e5948]">
              Nous sélectionnons nos farines auprès de moulins régionaux et
              privilégions les ingrédients de saison pour proposer des produits
              savoureux, authentiques et faits pour être partagés.
            </p>
          </div>
        </div>
      </section>

      <section id="produits" className="bg-[#2d2119] px-6 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.3em] text-amber-300">
              Nos incontournables
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Des produits préparés avec patience
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/65">
              Une sélection de pains, viennoiseries et douceurs préparés chaque
              jour dans notre fournil.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black">{product.name}</h3>
                  <p className="mt-4 leading-7 text-white/60">
                    {product.description}
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
            <p className="font-semibold uppercase tracking-[0.3em] text-[#a56b2a]">
              Nos engagements
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black sm:text-6xl">
              Un savoir-faire artisanal, des ingrédients choisis avec soin
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="rounded-[2rem] border border-[#dfd1bf] bg-white/70 p-8 shadow-sm"
              >
                <p className="text-5xl font-black text-[#d6a461]">
                  {value.number}
                </p>
                <h3 className="mt-7 text-2xl font-black">{value.title}</h3>
                <p className="mt-4 leading-7 text-[#6e5948]">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="horaires" className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#d9a35f] lg:grid-cols-2">
          <div className="p-9 sm:p-14">
            <p className="font-semibold uppercase tracking-[0.3em] text-[#5d3b17]">
              Horaires & adresse
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Passez nous voir au fournil
            </h2>

            <div className="mt-10 space-y-5 text-lg">
              <div className="flex justify-between gap-6 border-b border-black/15 pb-4">
                <span>Lundi – Vendredi</span>
                <strong>06:30 – 18:30</strong>
              </div>

              <div className="flex justify-between gap-6 border-b border-black/15 pb-4">
                <span>Samedi</span>
                <strong>06:30 – 16:00</strong>
              </div>

              <div className="flex justify-between gap-6 border-b border-black/15 pb-4">
                <span>Dimanche</span>
                <strong>07:00 – 12:30</strong>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-black/10 p-6">
              <p className="font-bold">Boulangerie du Moulin</p>
              <p className="mt-2 text-[#5d3b17]">
                Rue du Village 18, 1000 Lausanne
              </p>
              <p className="mt-2 text-[#5d3b17]">021 000 00 00</p>
            </div>
          </div>

          <div className="relative min-h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1400&q=85"
              alt="Vitrine de boulangerie"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-[#1f1712] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Une création PhilGood Studio
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-5xl">
              Vous souhaitez un site comme celui-ci pour votre commerce ?
            </h2>
          </div>

          <Link
            href="/devis"
            className="shrink-0 rounded-full bg-amber-300 px-8 py-4 font-bold text-[#2d2119] transition hover:-translate-y-1 hover:bg-amber-200"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  );
}