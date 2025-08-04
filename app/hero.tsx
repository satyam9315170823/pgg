'use client'

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Get navigation timing
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    // Check if this is a fresh page load or reload
    if (navigation?.type === "reload" || navigation?.type === "navigate") {
      setHasAnimated(false);
    } else {
      setHasAnimated(true);
    }
  }, []);

  // Transform video size and width based on scroll with eased transitions
  const videoScale = useTransform(scrollY, [0, 500], [0.9, 1], {
    ease: easeOut,
  });
  const videoWidth = useTransform(scrollY, [0, 500], ["85%", "100%"], {
    ease: easeOut,
  });
  const videoBorderRadius = useTransform(scrollY, [0, 500], [32, 0], {
    ease: easeOut,
  });

  // Enhanced content animations
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0, 1],
        delay: 0.6,
      },
    },
  };

  const videoContainerVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 1.2,
        ease: [0.25, 0.1, 0, 1],
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Content Section */}
      <motion.div
        className="w-full flex justify-center items-center md:px-0 pt-32 md:pt-40 bg-white"
        initial={hasAnimated ? "visible" : "hidden"}
        animate="visible"
        variants={contentVariants}
      >
        <div className="md:max-w-3xl text-center px-4">
{/*          
  <motion.h1
  variants={contentVariants}
  className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight transition-transform duration-300 hover:scale-105 hover:text-[#1D4ED8]"
>
  <motion.span
    className=" text-[#2748ed] inline-block transition-transform duration-300 hover:scale-105 hover:text-[#39393a]"
    variants={contentVariants}
  >
    Prettify Go Global
  </motion.span>
  <br />
  <motion.span
    className="inline-block text-2xl md:text-3xl font-medium text-gray-600 mt-2 transition-transform duration-300 hover:scale-105 hover:text-[#DC2626]"
    variants={contentVariants}
  >
    Scale your business with confidence
  </motion.span>
</motion.h1> */}
<motion.div
  variants={contentVariants}
  className="flex flex-col items-center justify-center mb-10"
>
  <motion.h1
    className="text-[2.8rem] md:text-[4.5rem] font-extrabold text-center text-[#4f3981] leading-tight tracking-tight transition-transform duration-300 hover:scale-[1.03]"
  >
    <motion.span
      variants={contentVariants}
      className="inline-block text-[#291947] neon-glow-dark animate-glow-pulse"
    >
      Prettify Go Global
    </motion.span>
  </motion.h1>

  <motion.span
    className="mt-3 inline-block text-xl md:text-2xl font-medium text-gray-900 transition-transform duration-300 hover:scale-105 hover:text-[#7960b3]"
    variants={contentVariants}
  >
    Scale your business with confidence
  </motion.span>
</motion.div>



<motion.p
  variants={contentVariants}
  className="text-base md:text-lg text-gray-900 font-normal max-w-2xl mx-auto mb-10 leading-relaxed"
>
  Empowering brands with strategic PR and bold storytelling.
  <br className="hidden md:block" />
  We amplify your voice to create lasting impact.
</motion.p>


<motion.div
  variants={buttonVariants}
  initial={hasAnimated ? "visible" : "hidden"}
  animate="visible"
  className="flex gap-x-4 md:gap-x-6 justify-center mb-12"
>
  {/* Button 1: Book a Call */}
  <Link
    href={"/book"}
    className="bg-[#311f4e] text-white px-6 md:px-8 py-3 rounded-md text-base md:text-lg font-medium transition-all duration-300 shadow-md hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),
    5px_5px_0px_0px_rgba(255,255,255)] hover:bg-[#abcbff] hover:text-black"
  >
    Book a Meeting
  </Link>

  {/* Button 2: Showcase */}
  <motion.a
    href="/projects"
    className="bg-white text-black px-6 md:px-8 py-3 rounded-md text-base md:text-lg font-medium border-4 border-black transition-all duration-300 shadow-md hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
  >
    View Our Work
  </motion.a>
</motion.div>


        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        className="flex justify-center w-full md:px-0"
        initial={hasAnimated ? "visible" : "hidden"}
        animate="visible"
        variants={videoContainerVariants}
      >
        <motion.div
          style={{
            width: videoWidth,
            scale: videoScale,
            borderRadius: videoBorderRadius,
            overflow: "hidden",
          }}
          className="relative w-full md:w-auto"
        >
          <video
            src="/hero-video.mp4"
            autoPlay

            muted
            loop
            className="w-full h-full object-cover pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
