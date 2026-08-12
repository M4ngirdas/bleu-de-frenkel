const dishes = [
  ["01", "Anties krūtinėlė", "Raugintos vyšnios, pastarnokų kremas, anyžių jus", "24 €", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85"],
  ["02", "Dienos laimikis", "Baltasis vynas, pankolis, jūros žolės, citrina", "28 €", "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85"],
  ["03", "Miso menkė", "Juodieji ryžiai, pak choi, sezamų traškutis", "26 €", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"]
]

export default function Menu() {
  return (
    <section id="meniu" className="bg-[#081929] py-36 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header Block */}
        <div className="flex flex-col justify-between gap-6 pb-16 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BFA57E]">
              Šefo pasirinkimai
            </span>
            <h2 className="mt-3 font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
              Lėkštėje — sezonas
            </h2>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#BFA57E] transition hover:text-white"
          >
            <span>Rezervuoti vakarienę</span>
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>

        {/* Dish Grid Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {dishes.map(([number, name, description, price, image]) => (
            <article
              key={number}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#272F44]/40 p-8 text-white backdrop-blur-sm"
            >
              <div className="relative min-h-[380px] overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={name}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081929] via-transparent to-transparent opacity-90" />
                <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#081929]/80 text-xs font-semibold text-[#BFA57E] backdrop-blur-md">
                  {number}
                </span>
              </div>

              <div className="relative z-10 pt-6">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl font-normal text-white">{name}</h3>
                  <span className="text-sm font-semibold text-[#BFA57E]">{price}</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">{description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Banner */}
        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#272F44]/50 p-10 sm:flex-row backdrop-blur-md">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#BFA57E]">
              Rytų įkvėpti skoniai
            </span>
            <p className="font-serif text-2xl font-normal text-white">
              Atraskite ir mūsų japonišką meniu išsinešimui.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#BFA57E] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#081929] transition-all duration-300 hover:bg-white"
          >
            Peržiūrėti meniu
          </a>
        </div>
      </div>
    </section>
  )
}