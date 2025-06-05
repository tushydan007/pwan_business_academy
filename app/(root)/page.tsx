import Card from "@/components/shared/Card";
import Hero from "../_components/Hero";
import jpg from "@/public/assets/carousel1.jpg";
import WhyPwan from "../_components/WhyPwan";
import RightProgramme from "../_components/RightProgramme";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyPwan />
      <RightProgramme />
    </div>
  );
}
