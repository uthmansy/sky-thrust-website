"use client";
import Container from "./Container";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const About = () => {
  return (
    <section className="py-28 relative">
      <Container>
        <p className="text-center text-2xl md:text-4xl text-primary max-w-screen-lg mx-auto mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptate totam delectus cumque ut tempora sequi praesentium obcaecati
          sapiente. Quasi, obcaecati possimus. Culpa esse officia maiores cumque
          neque, non deleniti.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative p-5 py-10 text-gray-500 md:px-14 lg:px-24">
            <div className="absolute top-16 hidden md:block right-0 w-1/3 h-1 border-b border-primary" />
            <div className="flex flex-col space-y-3 items-center text-center relative">
              <span className="h-14 w-14 bg-accent text-light rounded-full flex items-center justify-center">
                1
              </span>
              <h3 className="uppercase text-primary font-semibold tracking-wider">
                Our Mission
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ullam.
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
                Our Vission
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ullam.
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
                Our Future
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ullam.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
