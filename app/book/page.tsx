"use client";

import { InlineWidget } from "react-calendly";
import Navbar from "../navbar";
import Footer from "../footer";

const Book = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 flex flex-col w-full min-h-screen bg-white bg-grid-white/[0.02]">
        <div className="text-4xl pb-5 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-neutral-600 bg-opacity-50">
          Book a meeting
        </div>

        <div className="px-4 md:px-12 lg:px-24 overflow-hidden">
          <InlineWidget
            url="https://calendly.com/info-prettifygoglobal/connect-to-us"
            styles={{ height: "700px", width: "100%" }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Book;
