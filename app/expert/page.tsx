// "use client";

// import React from "react";
// import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
// import Image from "next/image";
// import {
//   IconArrowWaveRightUp,
 
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
 
// } from "@tabler/icons-react";

// const WebsiteDesign = () => {
//   return (
//     <div className="text-white">
//       <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
//         <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-gray-600 bg-opacity-50">
//           PR that connects, converts, <br /> and captivates
//         </div>
//         <p className="mt-4 text-lg font-normal text-neutral-700 max-w-lg text-center mx-auto px-4">
//           We are a dynamic team of strategic management professionals specializing in navigating the ever-evolving social media landscape.
//         </p>
//       </div>

//       <BentoGrid className="max-w-4xl mx-auto">
//         {items.map((item, i) => (
//           <BentoGridItem
//             key={i}
//             title={item.title}
//             description={item.description}
//             header={item.header}
//             icon={item.icon}
//             className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//           />
//         ))}
//       </BentoGrid>
//     </div>
//   );
// };

// const items = [
//   {
//     title: "Event Management",
//     description: "Executing memorable events to elevate brand experiences.",
//     header: (
//       <Image
//         src="/eventmangment.jpg"
//         alt="Event Management"
//         width={500}
//         height={300}
//         className="rounded-xl"
//       />
//     ),
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
 
//    {
//     title: "Corporate Communications",
//     description: "Aligning internal and external messaging with brand values.",
//     header: (
//       <Image
//         src="/corporate.jpg"
//         alt="Corporate Communications"
//         width={500}
//         height={400}
//         className="rounded-xl"
//       />
//     ),
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Market Research",
//     description: "Gathering insights to drive informed PR strategies.",
//     header: (
//       <Image
//         src="/market.jpg"
//         alt="Market Research"
//         width={500}
//         height={300}
//         className="rounded-xl"
//       />
//     ),
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     header: (
//       <Image
//         src="/seo.jpg"
//         alt="SEO & Digital PR"
//         width={500}
//         height={300}
//         className="rounded-xl"
//       />
//     ),
//   },
//   {
//     title: "Reputation Management",
//     description: "",
//     header: (
//       <Image
//         src="/reputation.webp"
//         alt="Reputation Management"
//         width={500}
//         height={300}
//         className="rounded-xl"
//       />
//     ),
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Community Engagement",
//     description: "Building strong connections with target audiences online.",
//     header: (
//       <Image
//         src="/community.png"
//         alt="Community Engagement"
//         width={500}
//         height={300}
//         className="rounded-xl"
//       />
//     ),
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     header: (
//       <Image
//         src="/culture.webp"
//         alt="Cultural Consulting"
//         width={500}
//         height={300}
//         className="rounded-xl"
//       />
//     ),
//   },
// ];

// export default WebsiteDesign;

// "use client";

// import React from "react";
// import Image from "next/image";

// const items = [
//   {
//     title: "Event Management",
//     description: "Executing memorable events to elevate brand experiences.",
//     image: "/eventmangment.jpg",
//   },
//   {
//     title: "Corporate Communications",
//     description: "Aligning messaging with brand values.",
//     image: "/corporate.jpg",
//   },
//   {
//     title: "Market Research",
//     description: "Gathering insights to drive PR strategies.",
//     image: "/market.jpg",
//   },
//   {
//     title: "Reputation Management",
//     description: "Protecting and enhancing brand image.",
//     image: "/reputation.webp",
//   },
// ];

// const WebsiteDesign = () => {
//   return (
//     <div className="text-black bg-white py-10 px-4">
//       <div className="text-center max-w-4xl mx-auto mb-12">
//         <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-gray-600">
//           PR that connects, converts, and captivates
//         </h2>
//         <p className="mt-4 text-lg text-neutral-800 max-w-2xl mx-auto">
//           We are a dynamic team of strategic management professionals specializing in navigating the ever-evolving social media landscape.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//         {/* Images with description */}
//         {items.map((item, idx) => (
//           <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={600}
//               height={400}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
//               <p className="text-sm text-neutral-800">{item.description}</p>
//             </div>
//           </div>
//         ))}

//         {/* Video block */}
//         <div className="bg-white rounded-xl overflow-hidden shadow-lg col-span-1 md:col-span-2 hover:scale-[1.02] transition">
//           <video
//             src="/video.mp4" // Replace with your video path

//             autoPlay
//               loop
//               muted
              
//             className="w-full h-[400px] object-cover"
//           />
//           <div className="p-4">
            
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebsiteDesign;


"use client";

import React from "react";
import Image from "next/image";

const leftImages = [
  {
    title: "Event Management",
    image: "/pic4.jpg",
  },
  {
    title: "Market Research",
    image: "/pic2.jpg",
  },
];

const rightImages = [
  {
    title: "Corporate Communications",
    image: "/pic3.jpg",
  },
  {
    title: "Community Engagement",
    image: "/pic1.jpg",
  },
];

const WebsiteDesign = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="text-center max-w-5xl mx-auto mb-12">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          PR that Connects, Converts, and Captivates
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We are a team of experts crafting PR strategies that shape perception, engage communities, and build lasting brand value.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto items-start">
        {/* Left column */}
        <div className="flex flex-col gap-4 md:order-1 order-2">
          {leftImages.map((item, index) => (
            <ImageCard key={index} title={item.title} image={item.image} />
          ))}
        </div>

        {/* Center video */}
        <div className="flex flex-col gap-4 md:order-2 order-1">
          <video
            src="/video.mp4" // Replace with your video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[600px] md:h-[700px] object-cover rounded-3xl shadow-xl border border-gray-300"
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 md:order-3 order-3">
          {rightImages.map((item, index) => (
            <ImageCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ImageCardProps {
  title: string;
  image: string;
}

const ImageCard = ({ title, image }: ImageCardProps) => (
  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
    <Image
      src={image}
      alt={title}
      width={500}
      height={400}
      className="w-full h-72 object-cover"
    />
    <div className="p-3 bg-white">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  </div>
);

export default WebsiteDesign;
