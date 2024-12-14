import React, { MutableRefObject, useEffect, useMemo, useState } from "react";
import Container from "../Container";

interface Title {
  partOne: string;
  partTwo: string;
  subTitle: string;
}

interface Props {
  currentSlide: number;
  titlesOneRef: MutableRefObject<HTMLSpanElement[]>;
  titlesTwoRef: MutableRefObject<HTMLSpanElement[]>;
}

function Hero({ currentSlide, titlesOneRef, titlesTwoRef }: Props) {
  const titles: Title[] = [
    {
      partOne: "Welcome to",
      partTwo: "Skythrust",
      subTitle: "Modern Contractors",
    },
    {
      partOne: "We are the",
      partTwo: "Best",
      subTitle: "Industry Experts",
    },
    {
      partOne: "we are",
      partTwo: "Professionals",
      subTitle: "Customer Priority",
    },
  ];

  return (
    <div className="h-[60vh] md:h-[70vh] w-full relative flex items-center">
      <div className="w-full">
        <Container>
          <div className="relative max-w-lg">
            <div className="flex flex-col space-y-8 invisible" data-nosnippet>
              <span className="uppercase opacity-60 text-sm tracking-widest">
                Modern Contractors
              </span>
              <h1 className="text-6xl md:text-8xl">
                <span className="opacity-50">Welcome to</span>{" "}
                <span className="font-bold tracking-wide opacity-80">
                  Skythrust.
                </span>
              </h1>
            </div>
            {titles.map((title, index) => (
              <div
                key={index}
                className={`flex flex-col space-y-8 absolute top-0 left-0 w-full`}
              >
                <span
                  className={`uppercase transition-all duration-500 text-sm tracking-widest ${
                    index === currentSlide ? "opacity-60" : "opacity-0"
                  }`}
                >
                  {title.subTitle}
                </span>
                <h1 className="text-6xl md:text-8xl">
                  <span
                    ref={(el) => {
                      if (el) titlesOneRef.current[index] = el;
                    }}
                    className={`${
                      index === currentSlide ? "opacity-50" : "opacity-0"
                    }`}
                  >
                    {title.partOne}
                  </span>{" "}
                  <span
                    ref={(el) => {
                      if (el) titlesTwoRef.current[index] = el;
                    }}
                    className={`font-bold tracking-wide ${
                      index === currentSlide ? "opacity-80" : "opacity-0"
                    } transition-all duration-300`}
                  >
                    {title.partTwo}
                  </span>
                </h1>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
