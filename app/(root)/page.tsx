import Hero from "../_components/Hero";

import WhyPwan from "../_components/WhyPwan";
import RightProgramme from "../_components/RightProgramme";
import BooksOfTheMonth from "../_components/BooksOfTheMonth";

export default function Home() {
  return (
    <div>
      <Hero
        image="/assets/heroImg.jpg"
        introText="Welcome to"
        btnText="Get Started"
        motto="...empowering greatness."
      />
      <WhyPwan />
      <RightProgramme />
      <BooksOfTheMonth />
    </div>
  );
}
