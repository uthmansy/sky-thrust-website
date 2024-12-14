"use client";
import Container from "./Container";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const About = () => {
  return (
    <section className="py-28 relative">
      <Container>
        <p className="text-center text-2xl md:text-4xl text-primary max-w-screen-lg mx-auto mb-20">
          Sky Thrust Services is a leading provider of general trades, business
          solutions, and contract project management. We deliver exceptional
          quality and innovative solutions, ensuring success and growth for
          every client and venture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative p-5 py-10 text-gray-500 md:px-14 lg:px-24">
            <div className="absolute top-16 hidden md:block right-0 w-1/3 h-1 border-b border-primary" />
            <div className="flex flex-col space-y-3 items-center text-center relative">
              <span className="h-14 w-14 bg-accent text-light rounded-full flex items-center justify-center">
                1
              </span>
              <h3 className="uppercase text-primary font-semibold tracking-wider">
                Expert Trades
              </h3>
              <p>
                Skilled professionals delivering reliable, high-quality trade
                services.
              </p>
            </div>
          </div>
          <div className="relative p-5 py-10 text-gray-500 md:px-14 lg:px-24">
            <div className="absolute top-16 hidden md:block right-0 w-1/3 h-1 border-b border-primary" />
            <div className="absolute top-16 hidden md:block left-0 w-1/3 h-1 border-b border-primary" />
            <div className="flex flex-col space-y-3 items-center text-center relative">
              <span className="h-14 w-14 bg-accent text-light rounded-full flex items-center justify-center">
                2
              </span>
              <h3 className="uppercase text-primary font-semibold tracking-wider">
                Project Management
              </h3>
              <p>
                Efficiently managing projects from start to finish with
                precision.
              </p>
            </div>
          </div>
          <div className="relative p-5 py-10 text-gray-500 md:px-14 lg:px-24">
            <div className="absolute top-16 hidden md:block left-0 w-1/3 h-1 border-b border-primary" />
            <div className="flex flex-col space-y-3 items-center text-center relative">
              <span className="h-14 w-14 bg-accent text-light rounded-full flex items-center justify-center">
                3
              </span>
              <h3 className="uppercase text-primary font-semibold tracking-wider">
                Business Solutions
              </h3>
              <p>
                Tailored solutions to drive growth and streamline business
                operations.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
