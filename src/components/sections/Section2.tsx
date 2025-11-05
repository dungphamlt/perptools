import { motion } from "framer-motion";
import Roadmap from "../../assets/images/roadmap.svg";

function Section2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="container mx-auto pb-20">
      <motion.div
        className="flex flex-col justify-center items-center gap-4 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-5xl font-medium text-primary"
          variants={itemVariants}
        >
          Roadmap
        </motion.h2>
        <motion.p className="text-gray-300 text-lg" variants={itemVariants}>
          Our journey toward innovation and growth
        </motion.p>
      </motion.div>
      <motion.div
        className="border border-primary/40 rounded-xl py-10 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={imageVariants} transition={{ duration: 0.3 }}>
          <motion.img
            src={Roadmap}
            alt="Roadmap"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Section2;
