"use client";

import { HERO_1, HERO_2, HERO_3 } from "@/constants/IMAGES";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopBar from "./TopBar";
import Hero from "./Hero";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const titlesOneRef = useRef<HTMLSpanElement[]>([]);
  const titlesTwoRef = useRef<HTMLSpanElement[]>([]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [backwards, setBackwards] = useState(false);
  const images = useMemo(() => [HERO_1.src, HERO_2.src, HERO_3.src], []);
  const descriptions: string[] = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eum magni veniam deserunt, ea dolor dolores facilis`,
    `consectetur adipisicing elit. Similique
            eum magni veniam deserunt Lorem ipsum dolor sit amet consectetur `,
    `Similique
            eum magni veniam deserunt Lorem ipsum `,
  ];

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
  }, []);

  useLayoutEffect(() => {
    if (!imagesRef.current[currentSlide] || !startAnimation) return;
    const nextSlide = backwards
      ? (currentSlide - 1 + images.length) % images.length
      : (currentSlide + 1) % images.length;

    const tl = gsap.timeline({
      onComplete: () => {
        setBackwards(false);
      },
    });
    tl.fromTo(
      [titlesOneRef.current[currentSlide], titlesTwoRef.current[currentSlide]],
      {
        opacity: 1,
        y: 20,
        ease: "back.out(1.7)", // Matches image fade-out
      },
      {
        opacity: 0,
        duration: 0.2,
        y: 20,
        ease: "back.out(1.7)", // Matches image fade-out
        stagger: 0.05,
      }
    )
      .to(imagesRef.current[currentSlide], {
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "power2.out", // Smooth fade-out and scale-down
      })
      .fromTo(
        imagesRef.current[nextSlide],
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out", // Adds dynamic entry with slight scaling
        },
        "-=0.6" // Slight overlap for seamless transition
      )
      .fromTo(
        [titlesOneRef.current[nextSlide], titlesTwoRef.current[nextSlide]],
        { opacity: 1, clipPath: "inset(100% 0 0 0)" },
        {
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 0.3,
          stagger: 0.05,
        }
      );

    return () => {
      tl.kill(); // Clean up the animation
    };
  }, [currentSlide]);

  // Auto-play logic
  useEffect(() => {
    const interval = setTimeout(() => {
      setStartAnimation(true);
    }, 1000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartAnimation(true);
      setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images, currentSlide]);

  // Navigation Handlers
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setBackwards(true);
  };

  return (
    <header
      ref={headerRef}
      className="relative h-[75vh] md:h-screen text-white overflow-hidden bg-black"
    >
      {images.map((image, index) => (
        <img
          data-scroll
          data-scroll-speed={-0.5}
          key={index}
          ref={(el) => {
            if (el) imagesRef.current[index] = el;
          }}
          src={image}
          alt={`Slide ${index + 1}`}
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover"
          style={{
            filter: "brightness(40%)",
            opacity: index === currentSlide ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute left-0 right-0 bottom-0 h-[85vh] w-full flex">
        <div className="w-1/5 h-full border-r border-white border-opacity-20" />
        <div className="w-1/5 h-full border-r border-white border-opacity-20" />
        <div className="w-1/5 h-full border-r border-white border-opacity-20" />
        <div className="w-1/5 h-full border-r border-white border-opacity-20" />
        <div className="w-1/5 h-full border-r border-white border-opacity-20" />
      </div>
      <TopBar />
      <Hero
        titlesOneRef={titlesOneRef}
        titlesTwoRef={titlesTwoRef}
        currentSlide={currentSlide}
      />
      <div className="absolute bottom-0 left-0 w-full bg-black opacity-85 md:max-w-md lg:max-w-lg z-10 h-32 flex space-x-3 px-20 items-center justify-between">
        <div className="font-bold">
          0{currentSlide + 1}{" "}
          <span className="font-normal opacity-40">| 03</span>{" "}
        </div>
        <div>
          <div className="flex space-x-4 w-fit">
            {Array(3)
              .fill("")
              .map((_, index) => (
                <span
                  key={index}
                  className={`bg-white rounded-full h-2 w-2 ${
                    index === currentSlide ? "opacity-100" : "opacity-30"
                  }`}
                ></span>
              ))}
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="border border-white rounded-full h-10 w-10 border-opacity-30 flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="border border-white rounded-full h-10 w-10 border-opacity-30 flex items-center justify-center"
          >
            ➝
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full bg-white text-gray-600 opacity-85 md:max-w-md lg:max-w-lg hidden z-10 md:flex flex-col space-y-10 p-14 md:p-20">
        <div className="flex justify-between items-center">
          <div className="text-sm uppercase">Right Text</div>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="border h-10 text-accent border-accent w-10 flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="border h-10 text-accent border-accent w-10 flex items-center justify-center"
            >
              ➝
            </button>
          </div>
        </div>
        <div className="relative">
          <p
            className="text-gray-800 font-bold max-w-sm invisible"
            data-nosnippet
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eum magni veniam deserunt, ea dolor dolores facilis
          </p>
          {descriptions.map((desc, index) => (
            <p
              key={index}
              className={`text-gray-800 font-bold max-w-sm absolute top-0 left-0 transition-all duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {desc}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="h-[3px] w-16 bg-primary"></div>
          <Link
            href={"/about"}
            className="text-sm transition-all duration-300 hover:text-primary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}
