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
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {numbers.map((number) => (
          <div
            key={number.title}
            className="flex flex-col items-center justify-center gap-4"
          >
            <h3 className="text-xl font-medium text-white">{number.title}</h3>
            <p className="text-5xl font-medium text-white">{number.value}</p>
          </div>
        ))}
      </div>
      <div className="gradient-border">
        <div className="gradient-border-inner relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-2xl" />
          <img
            src={BgTrade}
            alt="BgTrade"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
