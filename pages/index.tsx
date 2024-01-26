import {Inter} from "next/font/google";
import IntroSlide from "@/components/Home/IntroSlide";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <IntroSlide />
    </>
  );
}
