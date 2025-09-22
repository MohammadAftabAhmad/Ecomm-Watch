import { motion } from "framer-motion"
import img from "../../../assets/images/Menpage/menHero.png"

function MenHero() {
  return (
    <div className="relative w-full pt-10  overflow-hidden bg-black">
      {/* Background Image with smooth zoom + fade */}
      <motion.img
        src={img}
        alt="Men Watches"
        className="w-full h-[600px] object-cover"
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }} // smooth cubic-bezier
      />

      {/* Text Overlay */}
      <motion.div
        className="absolute top-1/3 right-20 text-center"
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.h1
          className="text-white/50 font-semibold text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          MEN'S WATCHES
        </motion.h1>

        <motion.h2
          className="text-white/75 font-light text-6xl mt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          CLASSIC DESIGNS
        </motion.h2>

        {/* Logos row with staggered reveal */}
        <motion.div
          className="flex flex-wrap justify-end gap-6 mt-6 opacity-90"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15, // each logo comes in one after another
              },
            },
          }}
        >
          {["TIMEX", "VERSACE", "GUESS", "PLEIN SPORT", "PHILIPP PLEIN"].map(
            (brand, i) => (
              <motion.span
                key={i}
                className="text-white text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {brand}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MenHero
