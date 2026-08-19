import { motion } from "framer-motion"
import { LuQuote, LuExternalLink, LuStar } from "react-icons/lu"
import info from "../../data/info.json"
import texts from "../../data/texts.json"

export default function Reviews() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const reviewElements = texts.reviews.map((review) => (
    <motion.figure
      key={review.name}
      variants={itemVariants}
      className="relative flex min-h-[320px] sm:min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 backdrop-blur-md border border-[#081929]/10 bg-[#081929]/[0.07] lg:p-10 font-secondary"
    >
      <div>
        <div className="mb-6 sm:mb-8 flex items-center justify-between border-b border-[#081929]/15 pb-4 sm:pb-6">
          <div className="flex items-center gap-3.5">
            <div className="flex select-none h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full text-xs font-bold uppercase tracking-widest shadow-inner bg-[#081929] text-[#BFA57E] font-secondary">
              {review.initials}
            </div>
            <div>
              <span className="block font-bold uppercase tracking-widest text-xs text-[#081929] font-secondary">
                {review.name}
              </span>
            </div>
          </div>

          <div className="flex gap-1 text-[#081929]">
            {[...Array(5)].map((_, i) => (
              <LuStar key={i} className="text-xs fill-[#081929]" />
            ))}
          </div>
        </div>

        <blockquote className="max-w-xl space-y-4 sm:space-y-6 text-sm sm:text-lg lg:text-xl font-light leading-relaxed text-space-indigo/90">
          „{review.text}“
        </blockquote>
      </div>

      <div className="mt-6 sm:mt-8 flex items-center justify-end">
        <LuQuote className="text-2xl sm:text-3xl text-[#081929]/25" />
      </div>
    </motion.figure>
  ))

  return (
    <section
      id="atsiliepimai"
      className="relative overflow-hidden grid content-center min-h-screen py-35 lg:py-45 font-secondary bg-khaki-beige text-[#081929]"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 font-secondary text-[320px] font-bold leading-none select-none text-[#081929]/[0.025]">
        “
      </div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl bg-[#081929]/[0.03]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-[8%] font-secondary"
      >
        <div className="mb-10 sm:mb-16 lg:mb-20 text-center">
          <motion.div
            variants={itemVariants}
            className="mb-4 sm:mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-sm border border-[#081929]/10 shadow-sm bg-[#081929]/10 text-[#081929] font-secondary"
          >
            <div className="flex gap-1 text-[#081929]">
              {[...Array(5)].map((_, i) => (
                <LuStar key={i} className="text-xs fill-[#081929]" />
              ))}
            </div>
            <span className="font-secondary">4.7 iš 5 (350+ įvertinimų)</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-secondary font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight text-[#081929]"
          >
            Skoniai, kurie tampa prisiminimais
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 font-secondary">{reviewElements}</div>

        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-20 text-center"
        >
          <a
            href={info.reviews_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-[#081929] px-8 py-3 sm:px-10 sm:py-4 text-xs font-bold uppercase tracking-widest shadow-md transition-all duration-300 hover:brightness-150 hover:shadow-xl bg-[#081929] text-[#BFA57E] font-secondary"
          >
            <span className="font-secondary">Palikti atsiliepimą</span>
            <LuExternalLink className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}