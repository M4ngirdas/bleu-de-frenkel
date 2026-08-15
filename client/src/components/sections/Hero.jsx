import { motion } from "framer-motion"
import hero from "../../images/hero.jpg"
import sushi from "../../images/sushi.jpg"
import pizza from "../../images/pizza.jpg"

export default function Hero(props) {
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

  return (
    <section id="pradzia" className="grid content-center min-h-screen pt-35 lg:pt-25 font-secondary text-ink-black">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto grid w-full max-w-[1920px] px-4 sm:px-6 lg:px-[8%] grid-cols-1 gap-6 lg:grid-cols-2"
      >
        <div className="flex flex-col gap-6">
          <motion.div
            variants={slideUp}
            className="relative flex min-h-[260px] max-h-[480px] lg:min-h-[30vh] lg:max-h-[40vh] xl:min-h-[35vh] xl:max-h-[45vh] 2xl:min-h-[40vh] 2xl:max-h-[50vh] flex-col justify-between rounded-3xl p-6 sm:p-8 lg:p-12 bg-gray-300"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-space-indigo">
                Restoranas
              </span>
              <h1 className="max-w-md text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-secondary font-bold text-ink-black">
                Bleu de Frenkel
              </h1>
            </div>
            <p className="max-w-xl space-y-4 sm:space-y-6 text-sm sm:text-lg lg:text-xl font-light leading-relaxed text-space-indigo/90">
              Unikalūs skoniai, elegantiška aplinka ir nepamirštamos akimirkos pačioje miesto širdyje.
            </p>
          </motion.div>

          <div className="grid h-48 sm:h-64 max-h-[380px] lg:h-[25vh] lg:max-h-[32vh] xl:h-[30vh] xl:max-h-[38vh] 2xl:h-[35vh] 2xl:max-h-[42vh] shrink-0 grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              variants={slideUp}
              className="relative h-full overflow-hidden rounded-3xl bg-ink-black"
            >
              <img
                src={pizza}
                alt="Europietiška virtuvė"
                className="h-full w-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-ink-black/80" />
              <span className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-platinum">
                Nepamirštamas skonis
              </span>
            </motion.div>
            <motion.div
              variants={slideUp}
              className="relative h-full overflow-hidden rounded-3xl bg-ink-black"
            >
              <img
                src={sushi}
                alt="Japoniškas meniu"
                className="h-full w-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-ink-black/80" />
              <span className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-platinum">
                Japoniška virtuvė
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={scaleUp}
          className="relative flex min-h-[420px] max-h-[880px] lg:min-h-[calc(55vh+1.5rem)] lg:max-h-[calc(72vh+1.5rem)] xl:min-h-[calc(65vh+1.5rem)] xl:max-h-[calc(83vh+1.5rem)] 2xl:min-h-[calc(75vh+1.5rem)] 2xl:max-h-[calc(92vh+1.5rem)] flex-col justify-end overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-12 bg-ink-black text-platinum"
        >
          <img
            src={hero}
            alt="Bleu de Frenkel atmosfera"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-t via-ink-black/30 to-transparent from-ink-black" />

          <div className="relative z-10 space-y-6 w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center w-full">
              <a
                onClick={(ev) => props.handleAnchorClick(ev, "#valgiarastis")}
                href="#valgiarastis"
                className="inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 bg-khaki-beige hover:bg-[#a88f68] text-ink-black"
              >
                Valgiaraštis
              </a>

              <a
                onClick={(ev) => props.handleAnchorClick(ev, "#kontaktai")}
                href="#kontaktai"
                className="inline-flex w-full items-center justify-center rounded-full border px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md transition-colors duration-300 border-platinum/20 hover:border-khaki-beige hover:bg-khaki-beige text-platinum hover:text-ink-black"
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