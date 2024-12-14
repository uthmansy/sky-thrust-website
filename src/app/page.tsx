"use client";
import About from "@/components/About";
import { useEffect } from "react";
import Vision from "@/components/Vision";
import Subscribe from "@/components/Subscribe";
import TopNav from "@/components/TopNav";
import MobileMenu from "@/components/MobileMenu";
import Header from "@/components/Header";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      //@ts-ignore
      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        tablet: {
          breakpoint: 0,
        },
      });
    })();
  }, []);

  return (
    <div>
      {/* <TopNav /> */}
      <Header />
      <About />
      <Mission />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
