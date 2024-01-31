import Image from "next/image";
import HeroPage from "./Components/heroPage/HeroPage";
import Middle from "./Components/MiddleSection/Middle";
import AboutSection from "./Components/AboutSection/AboutSection";
export default function Home() {
  return (
    <div>
       <HeroPage/>
       <Middle/>
       <AboutSection/>
    </div>
  );
}
