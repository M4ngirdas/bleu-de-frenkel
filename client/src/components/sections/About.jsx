import { motion } from "framer-motion"
import about from "../../images/about2.jpg"

export default function About() {
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

  return (
    <section
      id="apie"
      className="grid content-center min-h-screen mb-20 lg:mb-25 pt-35 lg:pt-25 font-secondary text-ink-black"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid w-full max-w-[1920px] px-4 sm:px-6 lg:px-[8%] grid-cols-1 gap-6 lg:grid-cols-2"
      >

        <motion.div
          variants={itemVariants}
          className="grid content-center gap-8 sm:gap-16 min-h-[360px] lg:min-h-[calc(55vh+1.5rem)] lg:max-h-[calc(72vh+1.5rem)] xl:min-h-[calc(65vh+1.5rem)] xl:max-h-[calc(83vh+1.5rem)] 2xl:min-h-[calc(75vh+1.5rem)] 2xl:max-h-[calc(92vh+1.5rem)]"
        >

          <h2 className="max-w-md text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-secondary font-bold text-ink-black">
            Vieta į kurią norisi sugrįžti
          </h2>

          <div className="max-w-xl space-y-4 sm:space-y-6 text-sm sm:text-lg lg:text-xl font-light leading-relaxed text-space-indigo/90">
            <p>
              Bleu de Frenkel yra restoranas, kuriame rasite kokybišką maistą, jaukią aplinką ir dėmesingą aptarnavimą. Čia ruošiame patiekalus iš atrinktų ingredientų, kad galėtumėte skaniai pavalgyti.
            </p>
            <p>
              Mūsų erdvė tinka tiek pietums, tiek ramiems vakarams su draugais ar šeima. Užtikriname gerą skonį ir malonią patirtį kiekvieno apsilankymo metu.
            </p>
          </div>

        </motion.div>

        <div className="flex flex-col gap-6">

          <div className="grid h-48 sm:h-64 max-h-[380px] lg:h-[25vh] lg:max-h-[32vh] xl:h-[30vh] xl:max-h-[38vh] 2xl:h-[35vh] 2xl:max-h-[42vh] shrink-0 grid-cols-2 gap-4 sm:gap-6 font-secondary">

            <motion.div
              variants={itemVariants}
              className="relative flex flex-col items-center justify-center h-full rounded-3xl p-4 sm:p-6 text-center bg-gray-300"
            >
              <div>
                <span className="font-bold text-3xl sm:text-5xl lg:text-6xl text-ink-black">
                  4.7
                </span>
                <span className="text-xs sm:text-sm font-bold text-space-indigo/70 ml-1">
                  / 5
                </span>
              </div>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-medium text-space-indigo/80">
                Svečių įvertinimas
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative flex flex-col items-center justify-center h-full rounded-3xl p-4 sm:p-6 text-center bg-gray-300"
            >
              <div>
                <span className="font-bold text-3xl sm:text-5xl lg:text-6xl text-ink-black">
                  {new Date().getFullYear() - 2019}
                </span>
              </div>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs font-medium text-space-indigo/80">
                Metai sėkmingo verslo
              </p>
            </motion.div>

          </div>

          <motion.div
            variants={itemVariants}
            className="relative flex min-h-[220px] sm:min-h-[280px] max-h-[480px] lg:min-h-[30vh] lg:max-h-[40vh] xl:min-h-[35vh] xl:max-h-[45vh] 2xl:min-h-[40vh] 2xl:max-h-[50vh] flex-col justify-end overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-12 bg-ink-black"
          >
            <img
              src={about}
              alt="Bleu de Frenkel interjeras"
              className="absolute inset-0 h-full w-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-ink-black/80" />
            <span className="relative z-10 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-khaki-beige">
              BLEU DE FRENKEL, ŠIAULIAI
            </span>
          </motion.div>

        </div>

      </motion.div>
    </section>
  )
}