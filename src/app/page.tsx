import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Feedback from "@/components/feedback";
import Image from "next/image";
import background from "../app/background1.webp"
import Footer from "@/components/Footer";
import Page from "@/components/image";


export default function Home() {
  return (
    <main className="bg-slate-950">
      <Image src={background} fill={true} alt="image" className="flex flex-auto"></Image>
      <HeroSection></HeroSection>
      {/* <FeaturedProducts></FeaturedProducts> */}
      <WhyChooseUs></WhyChooseUs>
      <Page></Page>
      <Feedback></Feedback>
      {/* <Creator></Creator> */}
      <Footer></Footer>


  </main>
  );
}
