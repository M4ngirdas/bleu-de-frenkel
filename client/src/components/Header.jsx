import { useState } from "react"
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu"

import texts from "../data/texts.json"
import logo from "../images/logo.png"

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false)

  function handleNavClick(ev, href) {
    setIsOpen(false)
    if (props.handleAnchorClick) {
      props.handleAnchorClick(ev, href)
    }
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 font-secondary border-b backdrop-blur-md border-white/15 bg-ink-black text-white">
        <div className="flex items-center justify-between w-full mx-auto px-4 py-4 sm:px-6 lg:px-[8%]">
          <div className="flex items-center gap-12">
            <a
              onClick={(ev) => handleNavClick(ev, "#pradzia")}
              href="#pradzia"
              aria-label="Bleu de Frenkel pradžia"
              className="flex items-center gap-3 group"
            >
              <img
                src={logo}
                alt="Bleu de Frenkel"
                className="h-12 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>

            <nav
              aria-label="Pagrindinė navigacija"
              className="hidden xl:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.18em]"
            >
              {texts.navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(ev) => handleNavClick(ev, item.href)}
                  className="transition-colors hover:text-khaki-beige"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden xl:flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
            <a
              href="https://food.bolt.eu/en/251-siauliai/p/172331-bleu-de-frenkel-sushi-terasa-vilniaus-str/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border px-6 py-3 backdrop-blur-md transition-colors duration-300 group border-platinum/20 hover:border-khaki-beige hover:bg-khaki-beige text-platinum hover:text-ink-black"
            >
              Užsisakyti į namus
              <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://bleu-de-frenkel.tablein.com/lt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-6 py-3 transition-colors duration-300 group bg-khaki-beige hover:bg-[#a88f68] text-ink-black"
            >
              Staliuko rezervacija
              <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            aria-label="Atidaryti meniu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex xl:hidden items-center justify-center h-10 w-10 text-[#BFA57E]"
          >
            {isOpen ? (
              <LuX className="h-7 w-7 transition-transform duration-300" />
            ) : (
              <LuMenu className="h-7 w-7 transition-transform duration-300" />
            )}
          </button>
        </div>

        <nav
          aria-label="Mobilioji navigacija"
          className={`xl:hidden overflow-hidden border-t px-4 sm:px-6 backdrop-blur-lg transition-all duration-300 ease-in-out border-white/10 bg-ink-black/95 ${isOpen ? "max-h-[600px] py-8 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
            }`}
        >
          <div className="flex flex-col gap-6 text-[11px] font-semibold uppercase tracking-[0.18em]">
            {texts.navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(ev) => handleNavClick(ev, item.href)}
                className="py-1 transition-colors hover:text-khaki-beige"
              >
                {item.label}
              </a>
            ))}

            <hr className="my-2 border-white/10" />

            <div className="flex flex-col gap-3 pt-2 text-xs font-bold tracking-[0.2em]">
              <a
                href="https://food.bolt.eu/en/251-siauliai/p/172331-bleu-de-frenkel-sushi-terasa-vilniaus-str/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border px-6 py-3 text-center transition-colors duration-300 border-platinum/20 hover:border-khaki-beige hover:bg-khaki-beige text-platinum hover:text-ink-black"
              >
                Užsisakyti į namus
                <LuArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="https://bleu-de-frenkel.tablein.com/lt"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-center transition-colors duration-300 bg-khaki-beige hover:bg-[#a88f68] text-ink-black"
              >
                Staliuko rezervacija
                <LuArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-20 xl:hidden bg-black/40"
        />
      )}
    </>
  )
}