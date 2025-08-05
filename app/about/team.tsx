"use client";
import type { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import chairman from "../../public/chairman.jpg"
import director from "../../public/director.jpg"
import { PiLinkedinLogo, PiTwitterLogo } from "react-icons/pi";

interface StatItemProps {
  label: string;
  value: string;
}

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface TeamMemberProps {
  image: string | StaticImageData;
  name: string;
  role: string;
  description: string;
  social: SocialLinks;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => (
  <div className="flex flex-col items-center text-center px-6 py-6 rounded-2xl bg-gray-50 shadow-sm border border-gray-200">
    <h3 className="text-sm text-gray-500">{label}</h3>
    <p className="text-3xl font-semibold text-blue-600 mt-2">{value}</p>
  </div>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode }> = ({
  href,
  icon,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-500 transition-colors"
  >
    {icon}
  </Link>
);

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  description,
  social,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.4 }}
    className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl"
  >
    <div className="relative w-full h-[350px]">
      <Image
        src={image}
        alt={name}
        fill
        priority
        className="object-cover rounded-t-3xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-3xl" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-blue-500 font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <div className="flex gap-4 pt-4">
        {social.linkedin && (
          <SocialIcon
            href={social.linkedin}
            icon={<PiLinkedinLogo size={20} />}
          />
        )}
        {social.twitter && (
          <SocialIcon
            href={social.twitter}
            icon={<PiTwitterLogo size={20} />}
          />
        )}
      </div>
    </div>
  </motion.div>
);

const stats: StatItemProps[] = [
  { label: "Team Size", value: "15" },
  { label: "Years of Experience", value: "10+" },
  { label: "Industries Served", value: "15" },
];

const teamMembers: Omit<TeamMemberProps, "index">[] = [
  {
    name: "Preeti Dingra",
    role: "Chair Person",
    image: chairman,
    description:
      "Preeti Dhingra brings 25+ years of leadership in corporate strategy and global expansion. Her vision drives our mission forward.",
    social: {
      linkedin: "https://www.linkedin.com/in/preeti-dhingra-963265284/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Vidyit Dhingra",
    role: "Director",
    
    image: director,
    description:
      "Vidit oversees our creative direction and operations. With a background in marketing, he ensures exceptional delivery.",
    social: {
      linkedin: "https://www.linkedin.com/company/prettify-go-global/",
    },
  },
];

const Team = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            Meet the Leadership
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Our Visionary Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Behind every innovation is a team that believes in pushing
            boundaries. Meet the people who guide our mission and culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatItem key={index} label={stat.label} value={stat.value} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
