import { Link, useParams } from "react-router-dom";
import { AllWatches } from "../../../data/watchData";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function MoreWatches() {
  const { id } = useParams<{ id: string }>();

  // Find current watch
  const currentWatch = AllWatches.find((w) => w.id === Number(id));
  const tag = currentWatch?.tag;

  // Filter related watches by same tag, exclude current watch
  const relatedWatches = AllWatches.filter(
    (w) => w.tag === tag && w.id !== Number(id)
  );

  if (!tag || relatedWatches.length === 0) {
    return (
      <p className="text-center py-10 text-gray-500">
        No related watches found.
      </p>
    );
  }

  return (
    <div className="px-20 pt-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-center"
      >
        More {tag.toUpperCase()} Watches
      </motion.h2>

      <motion.div
        className="grid grid-cols-5 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {relatedWatches.map((w) => (
          <motion.div key={w.id} variants={item}>
            <Link to={`/AllWatches/${w.id}`}>
              <div>
                <img
                  src={w.img}
                  alt={w.name}
                  className="w-80 h-full object-cover hover:scale-105 duration-300"
                />
                <div>
                  <h3 className="text-gray-400">{w.name}</h3>
                  <p>{w.price}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default MoreWatches;
