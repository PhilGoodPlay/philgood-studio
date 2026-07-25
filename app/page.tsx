import Link from "next/link";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 text-gray-900">

      {/* ================= NAVBAR ================= */}

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <h1 className="text-2xl font-extrabold tracking-tight">
            Phil<span className="text-blue-600">Good</span> Studio
          </h1>

          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="font-medium text-gray-900 transition hover:text-blue-600"
            >
              Accueil
            </Link>

            <Link
              href="/services"
              className="font-medium text-gray-900 transition hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              href="/realisations"
              className="font-medium text-gray-900 transition hover:text-blue-600"
            >
              Réalisations
            </Link>

            <Link
              href="/a-propos"
              className="font-medium text-gray-900 transition hover:text-blue-600"
            >
              À propos
            </Link>

            <Link
              href="/contact"
              className="font-medium text-gray-900 transition hover:text-blue-600"
            >
              Contact
            </Link>

            <Link
              href="/devis"
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Demander un devis
            </Link>

          </nav>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-8">

        <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl text-center">

          <span className="rounded-full border border-blue-200 bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Votre partenaire pour une présence en ligne professionnelle
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight md:text-7xl">
            Des sites web
            <br />
            qui donnent envie
            <br />
            <span className="text-blue-600">
              de vous choisir.
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-xl leading-9 text-gray-600">
            PhilGood Studio crée des sites internet modernes, rapides
            et élégants pour aider les entreprises à développer leur
            présence en ligne.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Link
              href="/devis"
              className="rounded-2xl bg-blue-600 px-8 py-5 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Demander un devis
            </Link>

            <Link
              href="/realisations"
              className="rounded-2xl border border-gray-300 bg-white px-8 py-5 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-gray-100"
            >
              Découvrir nos réalisations
            </Link>

          </div>

        </div>

      </section>

      <WhyUs />
      <Process />

    </main>
  );
}