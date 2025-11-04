import { ChevronRight } from "lucide-react";
import BannerLogo from "../assets/Banner-logo.svg";

function Banner() {
  return (
    <div className="border-y border-primary/40">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center gap-6">
            <div className="">
              <h2 className="text-primary md:text-6xl text-4xl font-medium">
                Decentralized
              </h2>
              <h2 className="text-white md:text-6xl text-4xl font-medium">
                perpetual contracts
              </h2>
            </div>
            <p className="text-gray-300 text-lg">
              Crypto is fragmented today, but it doesn't need to be. For the
              first time, build projects, create value, and exchange assets on
              the same hyper-performant chain.
            </p>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-primary transition-colors cursor-pointer shadow-[0_0_10px_rgb(100,214,255)]">
                <span className="">Launch App</span>
                <ChevronRight className="w-6 h-6" />
              </button>
              <button className="px-4 py-2 rounded-lg text-white border-2 border-white hover:border-primary hover:text-primary font-medium transition-colors cursor-pointer">
                Start Building
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={BannerLogo}
              alt="Banner Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
