export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Premier échange",
      description:
        "Nous discutons ensemble de votre activité et de vos besoins.",
    },
    {
      number: "02",
      title: "Maquette personnalisée",
      description:
        "Nous créons une première proposition adaptée à votre entreprise.",
    },
    {
      number: "03",
      title: "Création du site",
      description:
        "Nous développons un site moderne, rapide et optimisé.",
    },
    {
      number: "04",
      title: "Validation",
      description:
        "Vous vérifiez le résultat et nous effectuons les derniers ajustements.",
    },
    {
      number: "05",
      title: "Mise en ligne",
      description:
        "Votre site est publié et nous restons disponibles pour vous accompagner.",
    },
  ];

  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <p className="uppercase tracking-[4px] font-semibold text-blue-600">
            Notre méthode
          </p>

          <h2 className="mt-4 text-5xl font-black text-gray-900">
            Un accompagnement simple du début à la fin
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Vous n'avez aucune connaissance technique à avoir.
            Nous nous occupons de tout et vous accompagnons à chaque étape.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-5">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <p className="text-4xl font-black text-blue-600">
                {step.number}
              </p>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}