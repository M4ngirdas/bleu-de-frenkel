import { useState } from "react"

import logo from "../images/logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    ["Apie mus", "#apie"],
    ["Valgiaraštis", "#meniu"],
    ["Atsiliepimai", "#atsiliepimai"],
    ["Kontaktai", "#kontaktai"]
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15 bg-[var(--ink-black)] font-secondary text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#pradzia" className="group flex items-center gap-3" aria-label="Bleu de Frenkel pradžia">
          <img src={logo} alt="Bleu de Frenkel" className="h-16 w-auto object-contain transition-transform group-hover:scale-105" />
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.18em] lg:flex" aria-label="Pagrindinė navigacija">
          {links.map(([label, href]) => <a key={href} href={href} className="transition hover:text-[#BFA57E]">{label}</a>)}
        </nav>
        <button type="button" className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Atidaryti meniu" aria-expanded={isOpen}>
          <span className="h-px w-6 bg-[#BFA57E]" />
          <span className="h-px w-6 bg-[#BFA57E]" />
        </button>
      </div>
      {isOpen && <nav className="border-t border-white/10 px-6 py-5 lg:hidden" aria-label="Mobilioji navigacija"><div className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-[0.18em]">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>)}</div></nav>}
    </header>
  )
}