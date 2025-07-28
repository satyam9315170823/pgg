"use client";

import React, { useState, useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";

interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Capture the current ref value inside the effect
    const currentCardRef = cardRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible
          if (currentCardRef) { // Check if it still exists before unobserving
            observer.unobserve(currentCardRef);
          }
        }
      },
      { threshold: 0.1 }
    );

    // Observe the element if it exists
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    // Cleanup function
    return () => {
      // Use the captured ref value for cleanup
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const formatNumber = (num: string): string => {
    if (num.includes("%")) return num;
    if (num.includes("$")) return `$${num.replace(/[^0-9]/g, "")}+`;
    return `${num.replace(/[^0-9]/g, "")}+`;
  };

  return (
    <div
      ref={cardRef}
      className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300"
    >
      <div className="h-14">
        <div
          className={`text-5xl font-extrabold text-blue-600 mb-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {formatNumber(number)}
        </div>
      </div>
      <div
        className={`text-gray-800 font-semibold text-lg transition-all duration-700 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {label}
      </div>
      <p
        className={`text-gray-500 text-sm mt-2 transition-all duration-700 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      number: "150",
      label: "Global Clients",
      description: "Brands we've proudly supported across 17+ countries.",
    },
    {
      number: "300",
      label: "Campaigns Executed",
      description: "Strategic campaigns launched with tangible results.",
    },
    {
      number: "95%",
      label: "Client Retention",
      description: "Our partners trust us enough to return year after year.",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      description: "Positive feedback through consistent, premium delivery.",
    },
  ];

  return (
    <div className="mx-auto 2xl:w-4/5 md:px-16 px-6">
      <Separator className="my-16" />

      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-1/3 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-900">Our Impact</h2>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            At <span className="font-semibold text-blue-500">Prettify Go Global</span>,
            we craft more than strategies—we build lasting brand reputations. 
            These numbers reflect our dedication to excellence.
          </p>
        </div>

        <div className="md:w-2/3 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-16" />
    </div>
  );
};

export default Stats;
