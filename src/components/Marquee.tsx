import { Itype } from "@/type";
import Marquee from "react-fast-marquee";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";

const MarqueeComponent = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product prices");
  }

  const data: Itype[] = await res.json();

  return (
    <div className="border-y border-gray-200 bg-white">
      <Marquee speed={60} gradient={false} pauseOnHover autoFill>
        {data.map((item) => {
          const isUp = item.change.dir === "up";

          return (
            <div
              key={item.id}
              className="flex items-center gap-3 border-r border-gray-200 px-5 py-3"
            >
              <div className="flex items-center gap-2 whitespace-nowrap text-sm">
                <span>{item.image}</span>
                <span className="font-medium text-gray-800">{item.nameBn}</span>
              </div>

              <span className="whitespace-nowrap text-sm font-semibold text-gray-900">
                {item.today.toLocaleString("bn-BD")} টাকা/কেজি
              </span>

              <span
                className={`flex items-center gap-1 whitespace-nowrap text-xs font-medium ${
                  isUp ? "text-green-600" : "text-red-600"
                }`}
              >
                {isUp ? (
                  <IoCaretUpSharp size={14} />
                ) : (
                  <IoCaretDownSharp size={14} />
                )}
                {item.change.pct}%
              </span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
