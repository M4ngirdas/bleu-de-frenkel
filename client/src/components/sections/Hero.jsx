import hero from "../../images/hero.jpg"
import sushi from "../../images/sushi.jpg"
import pizza from "../../images/pizza.jpg"

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#e3e8ec] py-45 text-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="relative flex min-h-[320px] flex-1 flex-col justify-between rounded-2xl bg-[#d5dcde] p-8">
            <a
              href="#contact"
              aria-label="Atidaryti kontaktus"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#081929] text-lg text-white transition-all duration-300 hover:bg-[#BFA57E] hover:text-[#081929]"
            >
              ↗
            </a>
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#272F44]">
                Restoranas & Baras
              </span>
              <h1 className="max-w-md font-serif text-4xl font-normal leading-tight text-[#081929] md:text-5xl">
                Bleu de Frenkel
              </h1>
            </div>
            <p className="max-w-xs text-xs font-medium text-[#272F44]/80">
              Vilniaus g. 74, Šiauliai. Išskirtinė gastronominė patirtis ir unikalūs skoniai istorinėje aplinkoje.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="group relative h-64 overflow-hidden rounded-2xl bg-[#081929]">
              <img
                src={pizza}
                alt="Europietiška virtuvė"
                className="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081929]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-wider text-white">
                Nepamirštamas skonis
              </span>
            </div>
            <div className="group relative h-64 overflow-hidden rounded-2xl bg-[#081929]">
              <img
                src={sushi}
                alt="Japoniškas meniu"
                className="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081929]/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-wider text-white">
                Japoniška virtuvė
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-2xl bg-[#081929] p-8 text-white">
          <img
            src={hero}
            alt="Bleu de Frenkel atmosfera"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081929] via-[#081929]/30 to-transparent" />

          <div className="relative z-10 space-y-6">
            <div className="max-w-sm space-y-2">
              <h2 className="font-serif text-2xl font-normal text-white">
                Atraskite nepamirštamus skonius
              </h2>
              <p className="text-xs leading-relaxed text-slate-300">
                Aukščiausios kokybės ingredientai ir meistriškai paruošti patiekalai jūsų ypatingoms akimirkoms.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full bg-[#BFA57E] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#081929] transition-all duration-300 hover:bg-white"
              >
                Valgiaraštis
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-[#081929]"
              >
                Kontaktai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}