"use client";

import { ABOUT_1, HERO } from "@/constants/IMAGES";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "./Container";

function Hero() {
  const slides = [
    {
      image: ABOUT_1.src,
      title: "First Slide",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad consequuntur laudantium eligendi! Accusamus voluptates tempore ex, tenetur porro d.",
    },
    {
      image: HERO.src,
      title: "Second Slide",
      description: "This is the description for the second slide.",
    },
    {
      image: ABOUT_1.src,
      title: "Third Slide",
      description: "This is the description for the third slide.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-play every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);
  return (
    <div className="relative h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className={`z-10 absolute bottom-0 w-full`}>
            <Container>
              <div className="text-white mb-20 flex flex-col space-y-10">
                <h1 className="text-4xl md:text-6xl max-w-xl">
                  Sky Thrust Services Limited
                </h1>
              </div>
              <div className=" bg-opacity-70 w-full max-w-xl text-white flex">
                <div className="flex flex-col flex-1 space-y-5 bg-black px-10 py-20">
                  <h1 className="text-2xl">{slide.title}</h1>
                  <p className="text-gray-400">{slide.description}</p>
                </div>
                <div className="bg-black bg-opacity-35 w-28 grid grid-cols-1">
                  <button
                    onClick={prevSlide}
                    className="w-full h-full flex items-center justify-center text-white border-b border-gray-500"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-full h-full flex items-center justify-center text-white"
                  >
                    →
                  </button>
                </div>
              </div>
            </Container>
          </div>
          <div className="absolute z-0 top-0 left-0 bottom-0 right-0">
            <img
              data-scroll
              data-scroll-speed="-0.3"
              className="w-full object-cover h-full -mt-10"
              src={slide.image}
              style={{
                filter: "brightness(50%)",
                height: "120%",
              }}
            />
            <div className="bg-primary bg-opacity-30 w-full h-full absolute top-0 bottom-0 left-0 right-0" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
