export default function WhyUs() {
  const cards = [
    {
      title: "Design haut de gamme",
      description:
        "Des sites modernes, élégants et pensés pour inspirer confiance dès les premières secondes.",
    },
    {
      title: "Facile à modifier",
      description:
        "Modifiez vos horaires, vos photos ou vos textes simplement, sans connaissances techniques.",
    },
    {
      title: "Accompagnement",
      description:
        "Nous restons disponibles après la mise en ligne pour répondre à vos questions et vous conseiller.",
    },
    {
      title: "Rapide & performant",
      description:
        "Des sites rapides, optimisés pour Google et agréables à utiliser sur tous les appareils.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Pourquoi nous choisir ?
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Bien plus qu'un simple site internet
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Notre objectif n'est pas uniquement de créer un beau site.
            Nous voulons créer un outil qui inspire confiance et aide votre
            entreprise à attirer de nouveaux clients.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                ●
              </div>

              <h3 className="text-2xl font-bold">
                {card.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}