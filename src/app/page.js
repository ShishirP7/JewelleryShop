import Image from "next/image";
import Hero from "./components/Hero";
import CategoryStrip from "./components/CategoryStrip";
import TrendingProducts from "./components/Trending";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryStrip />
      <TrendingProducts />
    </div>
  );
}
