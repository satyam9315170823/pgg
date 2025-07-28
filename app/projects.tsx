'use client'

import { Marquee } from "@/components/magicui/marquee";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    src: "/adidas.jpg",
    name: "Adidas",
    logo: "/adidas-logo.png",
    description: "Back-to-school global campaign.",
    detail:
      "use client developed Adidas’ global campaign strategy and visuals for their Back-to-School season, including digital banners, motion graphics, and campaign microsites targeted at teens and parents across multiple markets.",
    className: "",
    tags: ["Campaign", "Visual Design", "Motion Graphics"],
  },
  {
    src: "/airbnb.jpg",
    name: "Airbnb",
    logo: "/airbnb-logo.png",
    description: "High-converting landing experience.",
    detail:
      "use client created a fully responsive and A/B tested landing page for Airbnb’s city host program, which increased user sign-ups by 34% and improved engagement through interactive UI elements.",
    className: "",
    tags: ["Landing Page", "A/B Testing", "Responsive Design"],
  },
  {
    src: "/audi.jpg",
    name: "Audi",
    logo: "/audi-logo.png",
    description: "Interactive car configurator.",
    detail:
      "use client engineered an interactive and 3D-enabled car configurator platform for Audi, allowing users to explore car features, colors, and trims in real-time with seamless mobile compatibility.",
    className: "",
    tags: ["3D UX", "Product Visualization", "Web App"],
  },
  {
    src: "/paypal.jpg",
    name: "Paypal",
    logo: "/paypal-logo.png",
    description: "Custom payment integration.",
    detail:
      "use client integrated custom PayPal checkout and invoicing APIs for multiple e-commerce clients, enhancing their payment workflows and ensuring compliance with global security standards.",
    className: "",
    tags: ["API Integration", "E-commerce", "Secure Payments"],
  },
  {
    src: "/sony.jpg",
    name: "Sony",
    logo: "/sony-logo.png",
    description: "PlayStation marketing microsite.",
    detail:
      "use client crafted a vibrant, animated marketing microsite for Sony PlayStation’s new game releases, highlighting gameplay trailers, countdown timers, and newsletter signup features.",
    className: "",
    tags: ["Microsite", "Animation", "Gaming"],
  },
  {
    src: "/under-armour.jpg",
    name: "Under Armour",
    logo: "/under-armour-logo.png",
    description: "Fitness tracking app UI/UX.",
    detail:
      "use client designed the complete UI/UX for Under Armour’s fitness tracking app, including user flow mapping, interactive prototypes, and light/dark mode support for iOS and Android.",
    className: "",
    tags: ["Mobile App", "UX Design", "iOS/Android"],
  },
  {
    src: "/redbull.jpg",
    name: "Redbull",
    logo: "/redbull-logo.png",
    description: "Global energy campaign launch.",
    detail:
      "use client led the launch of Redbull’s global energy drink campaign by designing motion graphics ads, influencer outreach plans, and website engagement tools that reached 10M+ users.",
    className: "",
    tags: ["Campaign", "Influencer Marketing", "Motion Ads"],
  },
  {
    src: "/spalding.jpg",
    name: "Spalding",
    logo: "/spalding-logo.png",
    description: "Official basketball platform.",
    detail:
      "use client built Spalding’s official online platform showcasing basketball products, 3D previews, and athlete endorsements, boosting online sales by 47% in the first quarter post-launch.",
    className: "",
    tags: ["E-commerce", "3D Display", "Brand Integration"],
  },
  {
    src: "/visa.jpg",
    name: "Visa",
    logo: "/visa-logo.png",
    description: "Seamless payment UI design.",
    detail:
      "use client collaborated with Visa to redesign their mobile payment interface, focusing on accessibility, speed, and user trust with secure transaction visual cues and biometric integrations.",
    className: "",
    tags: ["UI Design", "Accessibility", "Fintech"],
  },
  {
    src: "/nord.jpg",
    name: "Nordstrom",
    logo: "/nord-logo.png",
    description: "E-commerce experience design.",
    detail:
      "use client redesigned Nordstrom’s shopping journey, optimizing for mobile and desktop responsiveness, adding personalized recommendation engines, and integrating smooth multi-cart workflows.",
    className: "",
    tags: ["UX Optimization", "Personalization", "Retail"],
  },
  {
    src: "/zara.jpeg",
    name: "Zara",
    logo: "/zara-logo.png",
    description: "Seasonal fashion launch.",
    detail:
      "use client developed and launched Zara’s seasonal fashion campaign microsite with animated lookbooks, influencer stories, and integrated shop-the-look features for seamless conversions.",
    className: "",
    tags: ["Fashion", "Campaign", "Interactive UI"],
  },
];


const firstRow = projects.slice(0, projects.length);
const secondRow = projects.slice(3, projects.length);
const thirdRow = projects.slice(6, projects.length);


const ReviewCard = ({
    src,
    name,
    description,
    onClick,
  }: {
    src: string;
    name: string;
    description: string;
    onClick: () => void;
  }) => {
    return (
      <motion.figure
        className="relative cursor-pointer overflow-hidden group"
        onClick={onClick}
      >
        <div className="relative">
          <Image
            width={500}
            height={500}
            src={src}
            alt="projects"
            className="object-cover w-full"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
            <h3 className="text-white text-xl font-semibold">{name}</h3>
            <p className="text-white/80 text-sm">{description}</p>
          </div>
        </div>
      </motion.figure>
    );
  };



const ProjectDetails = ({
    project,
    onClose,
  }: {
    project: (typeof projects)[0];
    onClose: () => void;
  }) => {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full  md:w-2/5 bg-white shadow-lg p-6 z-50 cursor-pointer"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
  
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
          <Image
            src={project.src}
            alt={project.name}
            width={500}
            height={300}
            className="w-full rounded-lg mb-6 object-cover h-60"
          />
          <p className="text-gray-600 mb-4">{project.description}</p>
  
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Project Details</h3>
            
            <p className="text-gray-600">
            {project.detail}
            </p>
            {/* <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Web Design
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                Branding
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                UI/UX
              </span>
            </div> */}
            <div className="flex flex-wrap gap-2 mt-4">
  {project.tags.map((tag, index) => (
    <span
      key={index}
      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
    >
      {tag}
    </span>
  ))}
</div>

          </div>
        </div>
      </motion.div>
    );
  };


  export function Projects() {
    const [selectedProject, setSelectedProject] = useState<
      (typeof projects)[0] | null
    >(null);
  
    return (
      <section className="w-full bg-white py-16 md:mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto mb-12 px-6 md:px-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore our projects
          </h2>
          <p className="text-[#7b7b7b] text-lg">
            Our projects showcase the best visuals and storytelling techniques.
          </p>
        </div>
  
        <div className="w-full h-[800px] flex items-center justify-center overflow-hidden py-8">
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:60s]"
            paused={selectedProject !== null}
          >
            {firstRow.map((review, index) => (
              <ReviewCard
                key={index}
                {...review}
                onClick={() => setSelectedProject(review)}
              />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:60s]"
            paused={selectedProject !== null}
          >
            {secondRow.map((review, index) => (
              <ReviewCard
                key={index}
                {...review}
                onClick={() => setSelectedProject(review)}
              />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:60s] hidden md:flex"
            paused={selectedProject !== null}
          >
            {thirdRow.map((review, index) => (
              <ReviewCard
                key={index}
                {...review}
                onClick={() => setSelectedProject(review)}
              />
            ))}
          </Marquee>
        </div>
  
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setSelectedProject(null)}
              />
              <ProjectDetails
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </>
          )}
        </AnimatePresence>
      </section>
    );
  }
  