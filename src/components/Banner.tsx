import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import BannerLogo from "../assets/Banner-logo.svg";

function Banner() {
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
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="border-y border-primary/40">
      <div className="container mx-auto py-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex flex-col justify-center gap-6"
            variants={itemVariants}
          >
            <div className="">
              <motion.h2
                className="text-primary md:text-6xl text-4xl font-medium"
                variants={itemVariants}
              >
                Decentralized
              </motion.h2>
              <motion.h2
                className="text-white md:text-6xl text-4xl font-medium"
                variants={itemVariants}
              >
                perpetual contracts
              </motion.h2>
            </div>
            <motion.p className="text-gray-300 text-lg" variants={itemVariants}>
              Crypto is fragmented today, but it doesn't need to be. For the
              first time, build projects, create value, and exchange assets on
              the same hyper-performant chain.
            </motion.p>
            <motion.div
              className="flex gap-2 flex-wrap"
              variants={itemVariants}
            >
              <motion.button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-primary transition-colors cursor-pointer shadow-[0_0_10px_rgb(100,214,255)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Launch App</span>
                <ChevronRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                className="px-4 py-2 rounded-lg text-white border-2 border-white hover:border-primary hover:text-primary font-medium transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Building
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            variants={imageVariants}
          >
            <motion.img
              src={BannerLogo}
              alt="Banner Logo"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
