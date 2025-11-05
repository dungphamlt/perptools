import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BinanceSquareIcon from "../assets/images/binance-square.svg?react";
import BitcoinnistIcon from "../assets/images/bitcoinist.svg?react";
import TheBlockIcon from "../assets/images/the-block.svg?react";
import YahooFinanceIcon from "../assets/images/yahoo-finance.svg?react";

function PartnersSlider() {
  const partners = [
    {
      icon: <BinanceSquareIcon />,
    },
    {
      icon: <BitcoinnistIcon />,
    },
    {
      icon: <TheBlockIcon />,
    },
    {
      icon: <YahooFinanceIcon />,
    },
  ];

  const settings = {
    // có thể vuốt được
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-12 relative">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-black/80 to-transparent z-10" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/80 to-transparent z-10" />
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="px-4 flex items-center justify-center">
            <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              {partner.icon}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PartnersSlider;
