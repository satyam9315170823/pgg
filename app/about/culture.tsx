"use client";

import React from "react";
import { motion } from "framer-motion";

interface Value {
  title: string;
  description: string;
}

const CultureValue: React.FC<Value> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group p-6 rounded-2xl border border-gray-200 hover:border-blue-400 transition-all duration-300 bg-white/60 backdrop-blur-md shadow-sm"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <h3 className="text-xl font-semibold text-gray-900 md:w-1/3 group-hover:text-blue-500 transition">
          {title}
        </h3>
        <p className="text-gray-600 md:w-2/3 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

const Culture = () => {
  const values = [
    {
      title: "Ambitious Execution",
      description:
        "A technically flawless deliverable should be no exception. Our creativity ensures that we bring you the unexpected.",
    },
    {
      title: "Promises Kept",
      description:
        "Our promises are well thought out. What we say, we do. What we don't know, we find someone who does (and they're the best).",
    },
    {
      title: "Genuine Interest",
      description:
        "Understanding, helping, learning—that's how we approach relationships. Everyone receives top-notch treatment, without exception.",
    },
    {
      title: "Playful Spirit",
      description:
        "Like us, Bruno was a child at heart: curious, filled with wonder, and intense. The day we lose that is the day we step aside.",
    },
    {
      title: "Provoked Luck",
      description:
        "Luck is an attitude. We don't wait for opportunities—we create them. We try, we learn, we succeed, and we start again.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-blue-500 mb-4">
            / Culture
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            At Awesome Studio, we believe our culture is the foundation of
            everything we do. Our values guide how we think, work, and grow —
            together.
          </p>
        </motion.div>

        <div className="space-y-4">
          {values.map((value, index) => (
            <CultureValue
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Culture;
