"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Réalisations", href: "/realisations" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 text-gray-900">
      {/* ================= NAVBAR ================= */}

      <header className="fixed inset-x-0 top-0 z-[100] border-b border-gray-200/70 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group relative z-[120] flex items-center gap-3"
            aria-label="Retour à l'accueil"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-600/25 transition duration-300 group-hover:scale-105">
              P
            </div>

            <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
              Phil<span className="text-blue-600">Good</span>
              <span className="hidden sm:inline"> Studio</span>
            </span>
          </Link>

          {/* Navigation ordinateur */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative py-2 text-sm font-semibold text-gray-700 transition hover:text-blue-600"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}

            <Link
              href="/devis"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
            >
              Demander un devis
            </Link>
          </nav>

          {/* Bouton hamburger mobile — toujours visible */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className={`relative z-[130] flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 shadow-lg transition duration-300 lg:hidden ${
              menuOpen
                ? "border-white bg-white text-blue-700 shadow-black/20"
                : "border-blue-600 bg-blue-600 text-white shadow-blue-600/30 hover:bg-blue-700"
            }`}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* ================= MENU MOBILE ================= */}

        <div
          id="mobile-menu"
          className={`fixed inset-x-0 bottom-0 top-[76px] z-[110] overflow-hidden bg-gradient-to-b from-blue-700 via-blue-800 to-slate-950 text-white shadow-2xl transition-all duration-300 lg:hidden ${
            menuOpen
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-full opacity-0"
          }`}
        >
          {/* Décorations de fond */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:38px_38px]" />
          </div>

          <div className="relative flex h-full flex-col overflow-y-auto px-5 pb-8 pt-7 sm:px-7">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-200">
                Navigation
              </p>
              <p className="mt-2 text-sm text-blue-100/90">
                Accédez rapidement à toutes les pages.
              </p>
            </div>

            <nav className="flex flex-col gap-3">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-lg font-bold text-white shadow-sm backdrop-blur-sm transition duration-200 hover:border-white/35 hover:bg-white/20 active:scale-[0.98]"
                  style={{
                    transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                  }}
                >
                  <span>{item.name}</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5 text-blue-100"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-white/20 pt-8">
              <Link
                href="/devis"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-black text-blue-700 shadow-xl transition duration-200 hover:-translate-y-0.5 hover:bg-blue-50 active:scale-[0.98]"
              >
                Demander un devis
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <p className="mt-5 text-center text-sm leading-6 text-blue-100">
                Un projet en tête ? Présentez-nous vos besoins en quelques
                minutes.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[110px] sm:h-[600px] sm:w-[600px]" />
          <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-cyan-300/10 blur-[90px]" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-400/10 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.18] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm backdrop-blur sm:px-5 sm:text-sm">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
            </span>

            <span>
              Votre partenaire pour une présence en ligne professionnelle
            </span>
          </div>

          {/* Titre */}
          <h1 className="mt-7 text-[2.65rem] font-black leading-[1.05] tracking-[-0.045em] text-gray-950 sm:mt-9 sm:text-6xl md:text-7xl lg:text-[5.3rem]">
            Des sites web qui donnent envie{" "}
            <span className="relative inline-block text-blue-600">
              de vous choisir.
              <svg
                viewBox="0 0 400 18"
                className="absolute -bottom-2 left-0 h-3 w-full text-blue-300"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 13C92 2 286 2 397 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg md:mt-10 md:text-xl md:leading-9">
            PhilGood Studio conçoit des sites internet modernes, rapides et
            élégants pour aider les commerçants, artisans et entreprises à
            développer leur présence en ligne.
          </p>

          {/* Boutons */}
          <div className="mx-auto mt-10 flex max-w-xl flex-col justify-center gap-4 sm:mt-12 sm:flex-row">
            <Link
              href="/devis"
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl sm:w-auto sm:px-8 sm:py-5 sm:text-lg"
            >
              Demander un devis

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="/realisations"
              className="flex w-full items-center justify-center rounded-2xl border border-gray-300 bg-white/80 px-7 py-4 text-base font-bold text-gray-800 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:w-auto sm:px-8 sm:py-5 sm:text-lg"
            >
              Voir nos réalisations
            </Link>
          </div>

          {/* Avantages */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-3 text-left sm:mt-16 sm:grid-cols-3 sm:text-center">
            {[
              "Design moderne et premium",
              "Compatible mobile et tablette",
              "Rapide et optimisé pour Google",
            ].map((advantage) => (
              <div
                key={advantage}
                className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/65 px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur sm:flex-col sm:justify-center sm:gap-2 sm:px-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12.5l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span>{advantage}</span>
              </div>
            ))}
          </div>

          {/* Indication vers le bas */}
          <div className="mt-14 hidden justify-center sm:flex">
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-300 p-1.5">
              <span className="h-2 w-1 animate-bounce rounded-full bg-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTIONS ================= */}

      <WhyUs />

      {/*
        Sur téléphone, les titres de la section Process sont forcés à une taille
        plus petite pour éviter que « Un accompagnement » dépasse.
      */}
      <div className="min-w-0 overflow-hidden [&_h2]:break-words [&_h2]:text-xl [&_h3]:break-words [&_h3]:text-base [&_h3]:leading-tight sm:[&_h2]:text-2xl sm:[&_h3]:text-xl md:[&_h2]:text-3xl md:[&_h3]:text-3xl">
        <Process />
      </div>
    </main>
  );
}