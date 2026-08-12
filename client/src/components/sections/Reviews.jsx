const reviews = [
  ["Vieta, į kurią norisi grįžti. Kiekvienas patiekalas apgalvotas iki smulkiausios detalės, o aptarnavimas — šiltas ir tikras.", "Aistė K.", "Vakarienė dviem"],
  ["Subtili, drąsi ir labai gyva virtuvė. Anties krūtinėlė buvo tiesiog nepriekaištinga.", "Mantas V.", "Šiauliai"],
  ["Čia ypatinga ne tik lėkštė, bet ir visa nuotaika. Geriausia mūsų vakaro stotelė mieste.", "Gabrielė P.", "Šventinė vakarienė"]
]

export default function Reviews() {
  return (
    <section id="atsiliepimai" className="bg-[#BFA57E] py-32 text-[#081929]">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Block */}
        <div className="flex flex-col justify-between gap-6 pb-12 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#081929]/70">
              Svečių žodžiai
            </span>
            <h2 className="mt-2 font-serif text-4xl font-normal leading-tight text-[#081929] md:text-5xl">
              Vakaro atgarsiai
            </h2>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#081929] transition hover:opacity-75"
          >
            <span>Palikti atsiliepimą</span>
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>

        {/* Reviews Horizontal Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map(([quote, name, detail]) => (
            <figure
              key={name}
              className="flex min-h-[320px] flex-col justify-between rounded-2xl bg-[#081929]/10 p-8"
            >
              <blockquote className="font-serif text-2xl font-normal leading-relaxed text-[#081929]">
                „{quote}“
              </blockquote>
              <figcaption className="mt-6 border-t border-[#081929]/15 pt-4 text-xs">
                <span className="font-bold uppercase tracking-widest text-[#081929]">{name}</span>
                <span className="ml-2 font-medium text-[#081929]/60">• {detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}