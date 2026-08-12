export default function Footer() {
  return (
    <footer className="bg-[#081929] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl font-normal tracking-wide text-white">
              Bleu <span className="text-[#BFA57E]">de</span> Frenkel
            </h2>
            <p className="max-w-xs text-xs leading-relaxed text-slate-400">
              Virtuvė, kurioje kiekvienas susitikimas tampa maža švente.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest text-[#BFA57E]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Facebook
            </a>
            <a
              href="mailto:restoranas@frenkel.lt"
              className="transition hover:text-white"
            >
              El. paštas
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-8 text-[10px] font-semibold uppercase tracking-widest text-slate-500 sm:flex-row">
          <p>© 2026 Bleu de Frenkel</p>
          <p>Šiauliai · Lietuva</p>
        </div>
      </div>
    </footer>
  )
}