import IntroSlide from "@/components/Home/IntroSlide";
import AboutMe from "@/components/Home/AboutMe";
import PageMetatags from "@/components/reusable/PageMetatags";

export default function Home() {
  return (
    <>
      <PageMetatags title="Hompeage" />
      <IntroSlide />
      <AboutMe />
    </>
  );
}
