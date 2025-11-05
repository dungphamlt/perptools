import { motion } from "framer-motion";
import BgTrade from "../../assets/images/bg-trade.svg";
import Union from "../../assets/images/Union.png";

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
        delayChildren: 0.3,
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
        duration: 0.5,
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
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  return (
    <div
      className="container mx-auto py-20 "
      style={{
        backgroundImage: `url(${Union})`,
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
        variants={numbersContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
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
        className="relative pt-[130px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
      >
        <motion.div className="gradient-border" variants={imageVariants}>
          <div className="gradient-border-inner">
            <motion.img
              src={BgTrade}
              alt="BgTrade"
              className="w-full h-full object-cover rounded-2xl"
              variants={imageVariants}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Section1;
