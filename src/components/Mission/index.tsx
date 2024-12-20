import React from "react";
import Container from "../Container";
import { HERO_1, HERO_2, HERO_3 } from "@/constants/IMAGES";

function Mission() {
  return (
    <section className="relative bg-gray-100">
      <Container>
        <div className="md:flex justify-between items-end py-24 md:py-28">
          <div className="max-w-lg flex flex-col space-y-8 mb-5 md:mb-0">
            <span className="uppercase tracking-wider text-accent">
              Innovation
            </span>
            <h2 className="text-3xl md:text-6xl">
              Leading with Vision and Expertise
            </h2>
          </div>
          <div className="max-w-md">
            <p>
              Sky Thrust Services combines innovation and expertise to deliver
              exceptional, reliable solutions for every project.
            </p>
          </div>
        </div>
      </Container>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-secondary text-white p-10 py-20 md:p-20 flex flex-col space-y-56">
            <span className="uppercase tracking-widest opacity-60 text-sm">
              Mission
            </span>
            <div className="flex flex-col space-y-7">
              <h3 className="text-3xl md:text-5xl font-semibold uppercase opacity-80 flex items-center space-x-5">
                <div className="h-[2px] bg-white opacity-50 w-20" />{" "}
                <span>Our Mission</span>
              </h3>
              <p className="opacity-40 max-w-sm">
                To provide innovative, high-quality solutions that exceed client
                expectations and drive lasting success across industries.
              </p>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden min-h-24">
            <img
              data-scroll
              data-scroll-speed={-0.5}
              src={HERO_1.src}
              alt=""
              className="w-full object-cover absolute top-0 bottom-0 left-0 right-0 h-[130%]"
              style={{ filter: "brightness(50%)" }}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-1 relative overflow-hidden min-h-24">
            <img
              data-scroll
              data-scroll-speed={-0.5}
              src={HERO_3.src}
              alt=""
              className="w-full object-cover absolute top-0 bottom-0 left-0 right-0 h-[130%]"
              style={{ filter: "brightness(50%)" }}
            />
          </div>
          <div className="md:w-2/5 bg-accent text-secondary p-10 py-20 md:p-20 flex flex-col space-y-56">
            <span className="uppercase tracking-widest opacity-90 text-sm">
              Vision
            </span>
            <div className="flex flex-col space-y-7">
              <h3 className="text-3xl md:text-5xl font-semibold uppercase flex items-center space-x-5">
                <div className="h-[2px] bg-secondary opacity-50 w-20" />{" "}
                <span>Our Vision</span>
              </h3>
              <p className="opacity-90 max-w-sm">
                To be the preferred partner, transforming industries with
                excellence, integrity, and groundbreaking solutions for all
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
