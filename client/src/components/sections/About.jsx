export default function About() {
  return (
    <section id="apie" className="bg-[#e3e8ec] py-32 text-slate-900">
      <div className="mx-auto max-w-7xl px-4">

        {/* Section Tag */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#8B704A]">
          Mūsų istorija
        </span>

        {/* Hero Quote Block - The Unifying Centerpiece */}
        <div className="mt-4 overflow-hidden rounded-3xl bg-[#081929] p-8 text-white md:p-14 lg:p-16">
          <div className="max-w-4xl space-y-6">
            <p className="font-serif text-3xl font-normal leading-snug text-white sm:text-4xl lg:text-5xl">
              „Bleu de Frenkel gimė iš meilės lėtam pokalbiui, nepriekaištingam skoniui ir istoriniam Šiaulių miesto ritmui.“
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="h-0.5 w-12 bg-[#BFA57E]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#BFA57E]">
                Restorano filosofija
              </span>
            </div>
          </div>
        </div>

        {/* Asymmetrical Content & Dual Photo Grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

          {/* Main Story Narrative & Stats (Cols 1 to 5) */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h2 className="font-serif text-3xl font-normal leading-tight text-[#081929] sm:text-4xl">
                Kiekviena detalė turi <span className="italic text-[#8B704A]">prasmę</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
                <p>
                  Čia vakarienė tampa ne tiesiog sustojimu, o potyrių kupina kelione. Mūsų virtuvė remiasi sezoniškumu: kruopščiai atrenkame tai, kas šviežiausia, ir leidžiame natūraliems produktams kalbėti aiškiai.
                </p>
                <p>
                  Prancūziškas elegantiškas požiūris čia meistriškai susitinka su netikėtais Rytų akcentais.
                </p>
              </div>
            </div>

            {/* Stat Counters with Clean Lines */}
            <div className="grid grid-cols-2 gap-8 border-t border-[#081929]/15 pt-8">
              <div>
                <p className="font-serif text-4xl font-normal text-[#081929]">2019</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#8B704A]">
                  Atvėrėme duris
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-normal text-[#081929]">4.9 / 5</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#8B704A]">
                  Svečių įvertinimas
                </p>
              </div>
            </div>
          </div>

          {/* Staggered Visual Gallery (Cols 6 to 12) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">

            {/* Image 1: Main Atmosphere */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#081929] sm:mt-12">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=90"
                alt="Jaukus Bleu de Frenkel restorano interjeras"
                className="aspect-[3/4] w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081929]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#BFA57E]">
                  Erdvė
                </span>
                <p className="font-serif text-lg text-white">Nuoširdus svetingumas</p>
              </div>
            </div>

            {/* Image 2: Secondary Focus / Detail */}
            <div className="group relative overflow-hidden rounded-2xl bg-[#081929]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=90"
                alt="Restorano detalės ir maisto paruošimas"
                className="aspect-[3/4] w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081929]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#BFA57E]">
                    Aukščiausia kokybė
                  </span>
                  <p className="font-serif text-lg text-white">Dėmesys detalei</p>
                </div>
                <a
                  href="#kontaktai"
                  aria-label="Susisiekti"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BFA57E] text-base text-[#081929] transition-all duration-300 hover:bg-white hover:scale-110"
                >
                  ↗
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}