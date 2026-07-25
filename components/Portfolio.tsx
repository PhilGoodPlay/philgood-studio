export default function Portfolio() {
  const projects = [
    {
      title: "Boulangerie du Moulin",
      category: "Projet de démonstration",
    },
    {
      title: "Garage Horizon",
      category: "Projet de démonstration",
    },
    {
      title: "Salon Élégance",
      category: "Projet de démonstration",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[4px] font-semibold text-gray-900">
            Nos réalisations
          </p>

          <h2 className="mt-4 text-5xl font-black text-gray-900">
            Découvrez quelques exemples de sites
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            En attendant nos premières réalisations clients, nous avons créé
            plusieurs projets de démonstration afin de montrer notre savoir-faire.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex h-60 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">

                <p className="text-lg font-semibold text-gray-500">
                  Aperçu du site
                </p>

              </div>

              <div className="p-8">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Voir le projet
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}