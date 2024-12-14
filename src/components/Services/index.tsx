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
      title: "Service One",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae tempore amet rerum at.`,
      icon: <IoBusiness className="w-14 h-14 text-primary" />,
    },
    {
      title: "Service Two",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae tempore amet rerum at.`,
      icon: <IoBusiness className="w-14 h-14 text-primary" />,
    },
    {
      title: "Service Three",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae tempore amet rerum at.`,
      icon: <IoBusiness className="w-14 h-14 text-primary" />,
    },
    {
      title: "Service Four",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae tempore amet rerum at.`,
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              asperiores maxime nemo cupiditate quis atque. Natus, in. Facilis
              ipsa molestiae eius esse porro debitis quos, qui, omnis est
              repudiandae dolore.
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
