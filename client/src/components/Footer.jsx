import { LuArrowUpRight } from "react-icons/lu"

import logo from "../images/logo.png"
import info from "../data/info.json"
import texts from "../data/texts.json"

export default function Footer(props) {
  return (
    <footer className="mt-20 lg:mt-25 border-t border-white/10 pt-16 lg:pt-20 pb-10 font-secondary bg-[#081929] text-white">
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-[8%]">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 border-b border-white/10 pb-12 sm:pb-16 md:grid-cols-12 md:gap-8 lg:gap-12">

          <div className="flex flex-col gap-4 sm:gap-6 md:col-span-4">
            <a
              onClick={ev => props.handleAnchorClick && props.handleAnchorClick(ev, "#pradzia")}
              href="#pradzia"
              className="group flex items-center self-start"
              aria-label={`${info.brand_name} pradžia`}
            >
              <img
                src={logo}
                alt={info.brand_name}
                className="h-24 sm:h-32 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>

            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-slate-400">
              {texts.hero_desc}
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="mb-4 sm:mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-khaki-beige">
              Navigacija
            </div>

            <nav className="flex flex-col gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
              {texts.navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(ev) => props.handleAnchorClick && props.handleAnchorClick(ev, item.href)}
                  className="w-fit transition-colors text-slate-300 hover:text-khaki-beige"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 sm:mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-khaki-beige">
              Maisto užsakymas
            </p>

            <a
              href={info.bolt_food_url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors text-slate-300 hover:text-khaki-beige"
            >
              Bolt Food
              <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 sm:mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-khaki-beige">
              Staliuko rezervacija
            </p>

            <a
              href={info.tablein_url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors text-slate-300 hover:text-khaki-beige"
            >
              Tablein
              <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="md:col-span-2">
            <p className="mb-4 sm:mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-khaki-beige">
              Sekite mus
            </p>

            <a
              href={info.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="group inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-colors text-slate-300 hover:text-khaki-beige"
            >
              Facebook
              <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

        </div>

        <div className="flex justify-center pt-8 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {info.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}