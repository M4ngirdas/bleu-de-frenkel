import { motion } from "framer-motion"

import texts from "../../data/texts.json"
import hero from "../../images/hero.jpg"
import sushi from "../../images/sushi.jpg"
import pizza from "../../images/pizza.jpg"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  }
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function Hero(props) {
  return (
    <section id="pradzia" className="grid content-center min-h-screen overflow-hidden pt-35 lg:pt-25 font-secondary text-ink-black">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-[8%]"
      >
        <div className="flex flex-col gap-6 w-full">
          <motion.div
            variants={slideUp}
            className="flex flex-col justify-between relative min-h-[260px] max-h-[480px] lg:min-h-[30vh] lg:max-h-[40vh] xl:min-h-[35vh] xl:max-h-[45vh] 2xl:min-h-[40vh] 2xl:max-h-[50vh] rounded-3xl p-6 sm:p-8 lg:p-12 bg-gray-300"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-space-indigo">
                Restoranas
              </span>
              <h1 className="max-w-md font-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink-black">
                Bleu de Frenkel
              </h1>
            </div>
            <p className="max-w-xl space-y-4 sm:space-y-6 text-sm sm:text-lg lg:text-xl leading-relaxed text-space-indigo/90">
              {texts.hero_desc}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 shrink-0 h-48 sm:h-64 max-h-[380px] lg:h-[25vh] lg:max-h-[32vh] xl:h-[30vh] xl:max-h-[38vh] 2xl:h-[35vh] 2xl:max-h-[42vh]">
            <motion.div
              variants={slideUp}
              className="relative overflow-hidden h-full rounded-3xl bg-ink-black"
            >
              <img
                src={pizza}
                alt="Europietiška virtuvė"
                className="object-cover h-full w-full opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-platinum">
                Nepamirštamas skonis
              </span>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="relative overflow-hidden h-full rounded-3xl bg-ink-black"
            >
              <img
                src={sushi}
                alt="Japoniškas meniu"
                className="object-cover h-full w-full opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-platinum">
                Japoniška virtuvė
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={scaleUp}
          className="flex flex-col justify-end relative overflow-hidden min-h-[420px] max-h-[880px] lg:min-h-[calc(55vh+1.5rem)] lg:max-h-[calc(72vh+1.5rem)] xl:min-h-[calc(65vh+1.5rem)] xl:max-h-[calc(83vh+1.5rem)] 2xl:min-h-[calc(75vh+1.5rem)] 2xl:max-h-[calc(92vh+1.5rem)] rounded-3xl p-6 sm:p-8 lg:p-12 bg-ink-black text-platinum"
        >
          <img
            src={hero}
            alt="Bleu de Frenkel atmosfera"
            className="absolute inset-0 object-cover h-full w-full opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/30 to-transparent" />

          <div className="relative z-10 w-full space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
              <a
                onClick={(ev) => props.handleAnchorClick ? props.handleAnchorClick(ev, "#valgiarastis") : null}
                href="#valgiarastis"
                className="inline-flex items-center justify-center w-full rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 bg-khaki-beige hover:bg-[#a88f68] text-ink-black"
              >
                Valgiaraštis
              </a>

              <a
                onClick={(ev) => props.handleAnchorClick ? props.handleAnchorClick(ev, "#kontaktai") : null}
                href="#kontaktai"
                className="inline-flex items-center justify-center w-full rounded-full border px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md transition-colors duration-300 border-platinum/20 hover:border-khaki-beige hover:bg-khaki-beige text-platinum hover:text-ink-black"
              >
                Kontaktai
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}