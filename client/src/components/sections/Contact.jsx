import { motion } from "framer-motion"

import info from "../../data/info.json"

export default function Contact() {
  const restaurantHours = Object.values(info.working_hours).map(([day, hours]) => ({
    day,
    hours
  }))

  const japaneseHours = Object.values(info.japanese_menu_hours).map(([day, hours]) => ({
    day,
    hours
  }))

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

  const mapQuery = encodeURIComponent(`${info.address.street}, ${info.address.city}`)

  return (
    <section id="kontaktai" className="grid content-center min-h-screen pt-35 lg:pt-25 font-secondary text-ink-black">
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
            className="relative flex min-h-[280px] max-h-[480px] lg:min-h-[30vh] lg:max-h-[40vh] xl:min-h-[35vh] xl:max-h-[45vh] 2xl:min-h-[40vh] 2xl:max-h-[50vh] flex-col justify-between rounded-3xl p-6 sm:p-8 lg:p-10 2xl:p-12 bg-gray-300"
          >

            <div>
              <span className="text-xs sm:text-xs font-bold uppercase tracking-[0.2em] text-space-indigo">
                Kontaktai
              </span>
              <h2 className="max-w-md text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-secondary font-bold text-ink-black">
                Laukiame jūsų!
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 2xl:gap-8 mt-auto pt-4">
              <div className="flex flex-col justify-end space-y-1 min-w-0">
                <span className="text-xs sm:text-xs font-black uppercase tracking-widest text-space-indigo/50">
                  Telefonas
                </span>
                <a
                  href={`tel:${info.phone_number.replace(/\s+/g, "")}`}
                  className="text-base sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-space-indigo tracking-tight hover:underline underline-offset-4 truncate block w-fit"
                >
                  {info.phone_number}
                </a>
              </div>

              <div className="flex flex-col justify-end space-y-1 min-w-0">
                <span className="text-xs sm:text-xs font-black uppercase tracking-widest text-space-indigo/50">
                  El. paštas
                </span>
                <a
                  href={`mailto:${info.email}`}
                  className="text-base sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-space-indigo tracking-tight hover:underline underline-offset-4 truncate block w-fit"
                >
                  {info.email}
                </a>
              </div>
            </div>

          </motion.div>

          <div className="grid auto-rows-fr sm:h-64 max-h-none sm:max-h-[380px] lg:h-[25vh] lg:max-h-[32vh] xl:h-[30vh] xl:max-h-[38vh] 2xl:h-[35vh] 2xl:max-h-[42vh] shrink-0 grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

            <motion.div
              variants={slideUp}
              className="relative flex h-full flex-col justify-between rounded-3xl p-6 sm:p-6 lg:p-8 bg-ink-black text-platinum"
            >
              <span className="text-xs sm:text-xs font-black uppercase tracking-widest text-khaki-beige shrink-0 pb-2">
                Darbo laikas
              </span>
              <dl className="flex flex-col justify-between gap-3 sm:gap-8 my-auto pt-2 sm:pt-4">
                {restaurantHours.map((item) => (
                  <div key={item.day} className="flex items-center justify-between gap-2">
                    <dt className="text-xs sm:text-xs xl:text-sm font-light text-platinum/60 capitalize truncate">{item.day}</dt>
                    <dd className="text-xs sm:text-xs xl:text-sm font-semibold tracking-wide text-platinum whitespace-nowrap">{item.hours}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              variants={slideUp}
              className="relative flex h-full flex-col justify-start rounded-3xl p-6 sm:p-6 lg:p-8 bg-ink-black text-platinum"
            >
              <span className="text-xs sm:text-xs font-black uppercase tracking-widest text-khaki-beige shrink-0 pb-2">
                Japoniškas meniu
              </span>
              <dl className="flex flex-col gap-3 sm:gap-8 my-0 pt-2 sm:pt-4">
                {japaneseHours.map((item) => (
                  <div key={item.day} className="flex items-start justify-between gap-2">
                    <dt className="text-xs sm:text-xs xl:text-sm font-light text-platinum/60 capitalize">{item.day}</dt>
                    <dd className="text-xs sm:text-xs xl:text-sm font-semibold tracking-wide text-platinum whitespace-nowrap">{item.hours}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

          </div>
        </div>

        <motion.div
          variants={scaleUp}
          className="relative flex min-h-[350px] sm:min-h-[480px] max-h-[880px] lg:min-h-[calc(55vh+1.5rem)] lg:max-h-[calc(72vh+1.5rem)] xl:min-h-[calc(65vh+1.5rem)] xl:max-h-[calc(83vh+1.5rem)] 2xl:min-h-[calc(75vh+1.5rem)] 2xl:max-h-[calc(92vh+1.5rem)] flex-col justify-end overflow-hidden rounded-3xl p-0"
        >
          <iframe
            title="Google Maps"
            src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            className="absolute inset-0 h-full w-full rounded-3xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </motion.div>
    </section>
  )
}