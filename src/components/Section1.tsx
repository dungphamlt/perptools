import { motion } from "framer-motion";
import BgTrade from "../assets/bg-trade.svg";

function Section1() {
  const numbers = [
    {
      title: "Total Trading Volume",
      value: "$173.37B",
    },
    {
      title: "Total Trades",
      value: "223.47M",
    },
    {
      title: "Open Interest",
      value: "48.01M",
    },
  ];

  const numbersContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const numberItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        variants={numbersContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {numbers.map((number) => (
          <motion.div
            key={number.title}
            className="flex flex-col items-center justify-center gap-4"
            variants={numberItemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-medium text-white">{number.title}</h3>
            <p className="text-5xl font-medium text-white">{number.value}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="gradient-border"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="gradient-border-inner relative"
          variants={imageVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-2xl" />
          <motion.img
            src={BgTrade}
            alt="BgTrade"
            className="w-full h-full object-cover rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Section1;
