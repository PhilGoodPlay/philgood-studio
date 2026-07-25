import BackHome from "@/components/BackHome";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 px-8 py-32">
        <BackHome />

      <div className="mx-auto max-w-4xl">

        <div className="text-center">

          <p className="uppercase tracking-[4px] font-semibold text-blue-600">
            Contact
          </p>

          <h1 className="mt-4 text-5xl font-black text-gray-900">
            Parlons de votre projet
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Une question ? Besoin d'un renseignement ?
            N'hésitez pas à nous contacter.
            Nous vous répondrons dans les meilleurs délais.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              📞 Téléphone
            </h2>

            <a
              href="tel:+41796480161"
              className="mt-6 block text-xl font-semibold text-blue-600 hover:underline"
            >
              +41 79 648 01 61
            </a>

          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-gray-900">
              📧 E-mail
            </h2>

            <a
              href="mailto:a.philippe.ch@icloud.com"
              className="mt-6 block text-xl font-semibold text-blue-600 hover:underline"
            >
              a.philippe.ch@icloud.com
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}