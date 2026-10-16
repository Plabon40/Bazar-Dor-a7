import Herocomponent from "@/components/Herocomponent";
import MarqueeComponent from "@/components/Marquee";
import Marquee from "@/components/Marquee";
import ProductPriceSection from "@/components/ProductPriceSection";

export default function Home() {
  return (
    <div>
      <MarqueeComponent />
      <Herocomponent />
      <ProductPriceSection />
    </div>
  );
}
