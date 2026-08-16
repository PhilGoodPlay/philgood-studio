import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};
import BackHome from "@/components/BackHome";
import DevisForm from "@/components/DevisForm";

export default function DevisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 px-8 py-32">
        <BackHome />
      <div className="mx-auto max-w-4xl">

        <div className="text-center">

          <p className="uppercase tracking-[4px] font-semibold text-blue-600">
            Demande de devis
          </p>

          <h1 className="mt-4 text-5xl font-black text-gray-900">
            Parlez-nous de votre projet
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Répondez à quelques questions.
            Cela nous permettra de préparer une proposition parfaitement adaptée à vos besoins.
          </p>

        </div>

        <div className="mt-16">
          <DevisForm />
        </div>

      </div>
    </main>
  );
}