import { motion } from "framer-motion";
import CrossChainIcon from "../../assets/icons/cross-chain.svg?react";
import LiquidityIcon from "../../assets/icons/liquidity.svg?react";
import ToolsIcon from "../../assets/icons/tools.svg?react";
import EthIcon from "../../assets/icons/eth.svg?react";
function Section4() {
  const products = [
    {
      title: "Cross-chain trading",
      icon: <CrossChainIcon />,
      description:
        "No bridging or no switching, just pick a chain and place a trade.",
    },
    {
      title: "Unmatched liquidity",
      icon: <LiquidityIcon />,
      description:
        "Access deep liquidity pooled across markets to support large, confident trades.",
    },
    {
      title: "Advanced tools",
      icon: <ToolsIcon />,
      description:
        "Use powerful tools like hidden orders — built for control, speed, and a competitive edge.",
    },
    {
      title: "Confidence in every trade",
      icon: <EthIcon />,
      description:
        "Whether you're new or a pro, enjoy a streamlined experience built for clarity and control.",
    },
  ];

  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const productsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const productItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <div className="pb-20">
      <motion.div
        className="container mx-auto pb-12"
        variants={headerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
      >
        <motion.div
          className="flex flex-col gap-4 justify-center items-center"
          variants={headerItemVariants}
        >
          <motion.h2
            className="text-5xl font-medium text-primary text-center max-w-4xl"
            variants={headerItemVariants}
          >
            EMBARK ON YOUR DECENTRALIZED TRADING JOURNEY
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg text-center"
            variants={headerItemVariants}
          >
            Discover our growing range of Perpetual Contract markets
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="border-y border-primary/60">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4"
            variants={productsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                className={`flex flex-col gap-8 ${
                  index < products.length - 1 ? "border-l" : "border-r border-l"
                } border-primary/60 p-8`}
                variants={productItemVariants}
              >
                <div className="flex-1 flex flex-col gap-4 pb-12">
                  <motion.div className="mt-4">{product.icon}</motion.div>
                  <h3 className="text-3xl font-medium text-white pr-10">
                    {product.title}
                  </h3>
                  <p className="text-gray-300">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
