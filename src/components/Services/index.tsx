import React, { ReactNode } from "react";
import Container from "../Container";
import { HERO_1 } from "@/constants/IMAGES";
import Link from "next/link";
import { IoBusiness } from "react-icons/io5";

interface Service {
  title: string;
  icon: ReactNode;
  description: string;
}

function Services() {
  const services: Service[] = [
    {
      title: "General Contracting",
      description: `Comprehensive project management and execution for residential and commercial developments.`,
      icon: <IoBusiness className="w-14 h-14 text-primary" />,
    },
    {
      title: "Business Consultation",
      description: `Expert advice and strategies to optimize operations and drive sustainable business growth.`,
      icon: <IoBusiness className="w-14 h-14 text-primary" />,
    },
    {
      title: "Trade Services",
      description: `Skilled professionals delivering high-quality trade services for diverse industrial needs.`,
      icon: <IoBusiness className="w-14 h-14 text-primary" />,
    },
    {
      title: "Project Planning",
      description: `Strategic planning and coordination to ensure successful project outcomes within deadlines and budgets.`,
      icon: <IoBusiness className="w-14 h-14 text-primary" />,
    },
  ];

  return (
    <section className="relative">
      <div className="absolute hidden md:block top-0 bottom-0 left-0 w-[50%] h-full z-0">
        <img
          src={HERO_1.src}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(25%)" }}
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-secondary opacity-65" />
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 py-24 md:py-28 gap-20 relative">
          <div className="md:text-white">
            <h2 className="text-4xl md:text-6xl font-semibold mb-10">
              Our services
            </h2>
            <p className="opacity-70">
              At Sky Thrust Services, we provide a range of professional
              solutions tailored to meet your needs. From general contracting to
              expert business consulting, our team ensures each project is
              executed with precision and quality. Explore our services below.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-7">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col space-y-8 shadow-md p-14 border bg-white justify-between"
              >
                <div className="flex flex-col space-y-3">
                  {service.icon}
                  <h3 className="uppercase font-bold">{service.title}</h3>
                  <span className="w-14 h-[2px] opacity-70 bg-primary"></span>
                </div>
                <p>{service.description}</p>
                <Link
                  href={"/about"}
                  className="w-fit px-6 py-3 text-sm border border-primary uppercase"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;
