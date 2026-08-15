import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import menu from "../../data/menu.json"

function MenuList({ items }) {
  if (!items || !Array.isArray(items)) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full flex flex-col divide-y divide-platinum/15 font-secondary"
    >
      {items.map((item, index) => (
        <article
          key={`${item.name}-${index}`}
          className="flex flex-col justify-between gap-3 py-4 sm:py-6 sm:flex-row sm:items-start sm:gap-8 font-secondary"
        >
          <div className="flex-1 font-secondary">
            <h3 className="font-secondary text-lg sm:text-2xl font-bold tracking-wide text-platinum">
              {item.name}
            </h3>

            {item.description && (
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-light leading-relaxed text-platinum/70 font-secondary">
                {item.description}
              </p>
            )}
          </div>

          {item.price && (
            <span className="shrink-0 font-secondary text-base sm:text-xl font-semibold tracking-wider sm:text-right text-khaki-beige">
              {item.price}
            </span>
          )}
        </article>
      ))}
    </motion.div>
  )
}

function SubcategoryMenu({ data }) {
  const categories = Object.keys(data)
  const [activeSubcategory, setActiveSubcategory] = useState(categories[0])

  const content = data[activeSubcategory]

  return (
    <div className="flex flex-col gap-6 sm:gap-10 w-full font-secondary">
      <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 border-b border-platinum/10 pb-4 sm:pb-6 font-secondary">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveSubcategory(category)}
            className={`relative font-secondary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 pb-2 ${activeSubcategory === category
              ? "text-khaki-beige after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-khaki-beige"
              : "text-platinum/50 hover:text-platinum"
              }`}
          >
            {category}
          </button>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        {Array.isArray(content) ? (
          <MenuList key={activeSubcategory} items={content} />
        ) : typeof content === "object" && content !== null ? (
          <SubcategoryMenu key={activeSubcategory} data={content} />
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default function Menu() {
  const categories = Object.keys(menu)
  const [activeCategory, setActiveCategory] = useState("Pusryčiai")

  const content = menu[activeCategory]
  const hasSubcategories =
    content && typeof content === "object" && !Array.isArray(content)

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
      id="valgiarastis"
      className="grid content-center min-h-screen py-35 lg:py-45 font-secondary bg-ink-black text-platinum"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto flex w-full max-w-[1920px] flex-col px-4 sm:px-6 lg:px-[8%] font-secondary"
      >

        <motion.h2
          variants={itemVariants}
          className="text-center mb-10 sm:mb-16 lg:mb-20 font-secondary font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight text-platinum"
        >
          Skonis, kurį verta patirti
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 font-secondary">

          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-start lg:col-span-4 font-secondary"
          >
            <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-3 font-secondary">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-left font-secondary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${activeCategory === category
                    ? "lg:translate-x-2 bg-khaki-beige text-ink-black"
                    : "bg-space-indigo/20 text-platinum/70 hover:bg-space-indigo/40 hover:text-platinum"
                    }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 lg:pl-6 font-secondary"
          >
            <div className="rounded-3xl p-4 sm:p-8 lg:p-12 backdrop-blur-md border border-platinum/10 bg-space-indigo/20 font-secondary">
              <AnimatePresence mode="wait">
                {hasSubcategories ? (
                  <SubcategoryMenu key={activeCategory} data={content} />
                ) : (
                  <MenuList key={activeCategory} items={content} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  )
}