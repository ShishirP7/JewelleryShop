import Image from "next/image";
import Hero from "./components/Hero";
import CategoryStrip from "./components/CategoryStrip";
import TrendingProducts from "./components/Trending";
import TrustIcons from "./components/TrustIcons";
import FeatureProduct from "./components/FeatureProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryStrip />
      <TrendingProducts />
      <TrustIcons />
      <FeatureProduct />
    </div>
  );
}
