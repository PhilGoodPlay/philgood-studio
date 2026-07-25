import BackHome from "@/components/BackHome";
import Link from "next/link";

const projects = [
  {
    title: "Boulangerie du Moulin",
    category: "Boulangerie artisanale",
    description:
      "Une page chaleureuse mettant en avant les pains artisanaux, les produits locaux et les horaires de la boulangerie.",
    href: "/realisations/boulangerie",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Garage Horizon",
    category: "Garage automobile",
    description:
      "Une page moderne et professionnelle présentant les prestations, le savoir-faire et la prise de rendez-vous.",
    href: "/realisations/garage",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Salon Élégance",
    category: "Salon de coiffure",
    description:
      "Une page raffinée valorisant les prestations, l’ambiance du salon et les informations de réservation.",
    href: "/realisations/salon",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function RealisationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 px-8 py-32 text-gray-900">
        <BackHome />
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Nos réalisations
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Découvrez notre savoir-faire
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Découvrez quelques exemples de pages que PhilGood Studio peut créer
            pour présenter une entreprise de façon moderne, claire et
            professionnelle.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Link
                href={project.href}
                className="group relative block h-72 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={`Aperçu de ${project.title}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition group-hover:bg-blue-600 group-hover:text-white">
                    Voir la démonstration →
                  </span>
                </div>
              </Link>

              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  {project.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-8 space-y-2 text-sm text-gray-700">
                  <p>✓ Design premium</p>
                  <p>✓ Compatible avec tous les écrans</p>
                  <p>✓ Présentation claire et moderne</p>
                  <p>✓ Création personnalisée</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/devis"
            className="inline-flex rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </main>
  );
}