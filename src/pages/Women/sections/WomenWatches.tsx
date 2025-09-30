import { Link } from "react-router-dom";
import { AllWatches } from "../../../data/watchData";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // delay between each card
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 }, // start from bottom
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function WomenWatches() {
  // const menTrending =Trending.filter((w)=>w.type?.toUpperCase()==="MEN") filter..............
  const AllMen = AllWatches.filter((w) => w.type?.toUpperCase() === "WOMEN");
  return (
    <>
      <motion.h1
        initial={{ rotateX: -90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center pt-20 bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent"
      >
        All Watches
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // animate once only
        className="px-20 pt-10 grid gap-6 grid-cols-5"
      >
        {AllMen.map((w) => (
          <motion.div key={w.id} variants={item}>
            <Link to={`/AllWatches/${w.id}`}>
              <div>
                <img
                  className="hover:scale-105 w-80 h-full duration-300"
                  src={w.img}
                  alt={w.name}
                />
                <div>
                  <h1 className="text-gray-400">{w.name}</h1>
                  <p>{w.price}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default WomenWatches;
