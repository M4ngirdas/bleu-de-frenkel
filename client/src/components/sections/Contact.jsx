const restaurantHours = [
  ["Pirmadienis", "12:00 — 21:00"],
  ["Antradienis — ketvirtadienis", "11:00 — 22:00"],
  ["Penktadienis — šeštadienis", "11:00 — 23:00"],
  ["Sekmadienis", "11:00 — 21:00"]
]

export default function Contact() {
  return (
    <section id="kontaktai" className="bg-[#e3e8ec] py-32 text-slate-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Main Info Box */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-[#d5dcde] p-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#272F44]">
                Susitikime prie stalo
              </span>
              <h2 className="max-w-md font-serif text-4xl font-normal leading-tight text-[#081929] md:text-5xl">
                Jūsų vakaras prasideda čia
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#272F44]/70">
                  Adresas
                </span>
                <p className="text-xs font-medium text-[#081929]">
                  <a
                    href="https://maps.google.com/?q=Vilniaus+g.+74,+Šiauliai"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#BFA57E]"
                  >
                    Vilniaus g. 74, Šiauliai, Lietuva
                  </a>
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#272F44]/70">
                  Ryšys
                </span>
                <div className="flex flex-col text-xs font-medium text-[#081929]">
                  <a href="tel:+37060411811" className="transition hover:text-[#BFA57E]">
                    (8-604) 11811
                  </a>
                  <a href="mailto:restoranas@frenkel.lt" className="transition hover:text-[#BFA57E]">
                    restoranas@frenkel.lt
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="tel:+37060411811"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#081929] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#BFA57E] hover:text-[#081929] sm:w-auto"
              >
                Rezervuoti telefonu
              </a>
            </div>
          </div>

          {/* Interactive Google Map & Hours Box */}
          <div className="flex flex-col gap-4">
            <div className="relative h-64 overflow-hidden rounded-2xl bg-[#081929]">
              <iframe
                title="Bleu de Frenkel Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.846591234567!2d23.3155!3d55.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDU2JzAwLjAiTiAyM8KwMTgnNTUuOCJF!5e0!3m2!1sen!2slt!4v1600000000000!5m2!1sen!2slt&q=Vilniaus+g.+74,+Šiauliai"
                className="h-full w-full border-0 grayscale opacity-80 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-2xl bg-[#081929] p-8 text-white">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#BFA57E]">
                    Restoranas
                  </h3>
                  <dl className="mt-4 space-y-2 text-xs text-slate-300">
                    {restaurantHours.map(([day, hours]) => (
                      <div key={day} className="flex flex-col space-y-0.5">
                        <dt className="text-slate-400">{day}</dt>
                        <dd className="font-semibold text-white">{hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="border-t border-white/10 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  <h3 className="font-serif text-xl font-normal text-[#BFA57E]">
                    Japoniškas meniu
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Išsinešimui
                  </span>
                  <div className="mt-4 space-y-2 text-xs text-slate-300">
                    <div className="flex flex-col space-y-0.5">
                      <dt className="text-slate-400">Antradienis — ketvirtadienis</dt>
                      <dd className="font-semibold text-white">12:00 — 20:00</dd>
                    </div>
                    <div className="flex flex-col space-y-0.5 pt-1">
                      <dt className="text-slate-400">Penktadienis — sekmadienis</dt>
                      <dd className="font-semibold text-white">12:00 — 21:00</dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}