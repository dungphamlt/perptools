import CrossChainIcon from "../assets/cross-chain.svg?react";
import EthIcon from "../assets/eth.svg?react";
import ToolsIcon from "../assets/tools.svg?react";
import LiquidityIcon from "../assets/liquidity.svg?react";
import { ChevronRight } from "lucide-react";
import PartnersSlider from "../components/PartnersSlider";
function Home() {
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

  return (
    <>
      {/* section 2 */}
      <div className="border-t border-primary/40 pb-14">
        <div className="container mx-auto py-12">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-5xl font-medium text-primary text-center max-w-4xl">
              EMBARK ON YOUR DECENTRALIZED TRADING JOURNEY
            </h2>
            <p className="text-gray-300 text-lg text-center">
              Discover our growing range of Perpetual Contract markets
            </p>
          </div>
        </div>
        <div className="border-y border-primary/60">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 ">
              {products.map((product, index) => (
                <div
                  key={product.title}
                  className={`flex flex-col gap-8 ${
                    index < products.length - 1
                      ? "border-l"
                      : "border-r border-l"
                  } border-primary/60 p-8`}
                >
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="mt-4">{product.icon}</div>
                    <h3 className="text-3xl font-medium text-white pr-10">
                      {product.title}
                    </h3>
                    <p className="text-gray-300">{product.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <button className="text-primary/60 border border-primary/60 rounded-md p-2 hover:bg-primary hover:text-black transition-colors cursor-pointer">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <PartnersSlider />
    </>
  );
}

export default Home;
