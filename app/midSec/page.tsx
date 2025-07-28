"use client";

import React from "react";
import BoxReveal from "@/components/magicui/box-reveal";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import NumberTicker from "@/components/magicui/number-ticker";
import { PiCheckBold } from "react-icons/pi";

const MidSec = () => {
  return (
    <div className="px-6 md:px-10 max-w-7xl mx-auto">
      {/* Feature Tags */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-start md:justify-items-center mt-10 md:mt-16">
        {["Design", "Development", "Marketing", "Strategy"].map((item) => (
          <BoxReveal key={item} boxColor="#3b82f6" duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-blue-500" />
              {item}
            </p>
          </BoxReveal>
        ))}
      </div>

      {/* Stats & Logos */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-10 md:gap-x-28 my-14">
        {/* Stats Section */}
        <div className="w-full md:w-2/5">
          <h2 className="text-2xl font-medium text-gray-600">
            Trusted by fast moving brands worldwide
          </h2>

          <div className="flex mt-6 gap-x-6 w-full items-center">
            {/* Happy Clients */}
            <div>
              <div className="text-blue-500 text-3xl md:text-5xl font-bold">
                <NumberTicker value={150} />+
              </div>
              <p className="text-gray-500 text-sm md:text-base mt-1">
                Happy Clients
              </p>
            </div>

            <div className="h-full w-px bg-gray-300" />

            {/* Projects */}
            <div className="flex-1 min-w-0">
              <div className="text-blue-500 text-3xl md:text-5xl font-bold whitespace-nowrap">
                <NumberTicker value={100} />+
              </div>
              <p className="text-gray-500 text-sm md:text-base mt-1">
                Projects Completed
              </p>
            </div>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="w-full md:w-3/5 mt-4 md:mt-0">
          <InfiniteMovingLogos
            speed="slow"
            direction="left"
            items={[
              { logo: "/logoMain.svg", name: "Logo" },
              { logo: "/logoMain.svg", name: "Logo" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MidSec;
