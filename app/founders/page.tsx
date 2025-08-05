'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const founders = [
  {
    name: 'Preeti Dhingra',
    title: 'Chairperson',
    image: '/chairman.jpg',
    description:
      'Preeti Dhingra, the driving force behind our mission, brings unmatched insight, empathy, and leadership. Her visionary outlook fuels our commitment to authentic storytelling and strategic brand empowerment across the globe.',
    instagram: 'https://www.instagram.com/preetidhingra.official?igsh=MWpyYmJjbW9oN3F1Yg==',
  },
  {
    name: 'Vidyit Dhingra',
    title: 'Director',
    image: '/director.jpg',
    description:
      'As Director, Vidit Dhingra leads with innovation and clarity. His passion for technology-driven PR solutions and brand scalability helps clients evolve and thrive in a competitive global marketplace.',
    instagram: 'https://www.instagram.com/iamvidyit?igsh=MWZmemIyZjdtcHRwdA%3D%3D&utm_source=qr',
  },
];

const Founder = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#291947] mb-4">
          Our Founders
        </h2>
        <p className="text-lg text-gray-700">
          At Prettify Go Global, we are committed to transforming personal and business brands into impactful global identities. Guided by visionary leadership, we believe in strategic growth, ethical storytelling, and empowering connections across borders.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {founders.map((person, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-white relative group/card border border-black/[0.1] dark:border-white/[0.2] rounded-2xl p-6 shadow-md hover:shadow-xl w-full h-full">
           <CardItem translateZ="60" className="w-full mb-4 rounded-lg overflow-hidden">
  <div className="relative w-full aspect-[4/3]">
    <Image
      src={person.image}
      alt={person.name}
      fill
      className="object-cover rounded-xl"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
</CardItem>

              <CardItem translateZ="30" as="h3" className="text-2xl font-semibold text-[#4f3981] mb-1">
                {person.name}
              </CardItem>
              <CardItem translateZ="20" as="p" className="text-gray-800 font-medium mb-2">
                {person.title}
              </CardItem>
              <CardItem
                translateZ="20"
                as="p"
                className="text-gray-900 text-sm mb-4 leading-relaxed"
              >
                {person.description}
              </CardItem>
              <CardItem
                translateZ="40"
                as="a"
                href={person.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-800 transition text-sm font-medium"
              >
                <FaInstagram className="text-xl" />
                Follow on Instagram
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Founder;
