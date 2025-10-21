import { motion } from "framer-motion";
import ww from "../../assets/images/ww.png";

function HeroPage() {
  const title = "ZietX".split("");

  return (
    <>
      <div className="relative w-full h-screen top-0 overflow-hidden bg-black text-white">
        {/* Watches image at top right (exact same position) */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 translate-x-20 -translate-y-80 w-[70%] object-contain"
          src={ww}
          alt="Watches"
        />

        {/* Text content on left */}
        <div className="absolute top-1/2 left-32 -translate-y-1/3">
          {/* Brand Name with typewriter effect */}
          <h1 className="text-6xl font-bold tracking-wide flex">
            {title.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2, // stagger letters
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: title.length * 0.2,
            }}
            className="mt-4 text-lg text-gray-300 max-w-md"
          >
            Timeless designs, crafted with precision. Discover the elegance of
            ZietX watches — where style meets perfection.
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
