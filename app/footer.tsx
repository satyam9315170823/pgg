"use client";

import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");

  const mainLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Sitemap", href: "#" },
  ];

  const socialLinks = [
    { icon: PiFacebookLogo, href: "https://www.facebook.com/pages/Prettify-Go-Global/102843534769490/?_rdr" },
    { icon: PiInstagramLogo, href: "https://www.instagram.com/prettify.go.global/" },
    { icon: PiLinkedinLogo, href: "https://www.linkedin.com/company/prettify-go-global/" },
    { icon: PiTwitterLogo, href: "#" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscriptionStatus("success");
      setEmail("");
      setTimeout(() => setSubscriptionStatus(""), 3000);
    }
  };

  return (
    <footer className="pt-10 md:pt-16 px-6 2xl:w-4/5 md:mx-auto md:px-16 bg-white">
      <Separator className="mb-12" />
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left side */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Let&apos;s Talk!</h2>
            <a
              href="mailto:contact@prettifygoglobal.com"
              className="text-xl hover:underline inline-block mb-8"
            >
       info.prettifygoglobal@gmail.com
            </a>
        <h2 className="font-bold">Dubai Office :</h2>    <p className="text-gray-800">
             Office No: 1904, 19th Floor, The Binary by OMNIYAT,
     Business Bay, Dubai, U.A.E.</p>

             

         <h2 className="font-bold">Delhi Office :</h2>   
            <p className="text-gray-800">
             B-209, Pocket - B, Okhla Phase I,
Okhla Industrial Estate,
New Delhi - 110020.

             
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              {mainLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#000000] hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              {mainLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#000000] hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 
                  focus:ring-black focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
              {subscriptionStatus === "success" && (
                <p className="text-black text-sm">Thanks for subscribing!</p>
              )}
            </form>
          </div>z
        </div>

        {/* Google Map Section */}
      {/* Two Office Locations - India & Dubai */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
  {/* India Office Map */}


  {/* Dubai Office Map */}
  <div className="overflow-hidden rounded-2xl shadow-lg h-[220px] md:h-[280px] w-full">
    <iframe
      title="Dubai Office - Prettify Go Global"
      src="https://www.google.com/maps?q=The%20Binary%20by%20OMNIYAT,%20Business%20Bay,%20Dubai&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
    <div className="overflow-hidden rounded-2xl shadow-lg h-[220px] md:h-[280px] w-full">
    <iframe
      title="India Office - Prettify Go Global"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5781911107883!2d77.2848972!3d28.5223359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce14ceae47283%3A0x888fc0a4b54d4ee!2sPrettify%20Go%20Global!5e0!3m2!1sen!2sin!4v1753700686581!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-3 mt-2  bg-white px-2 md:px-4 py-6 rounded-xl shadow-inner">
          {/* Legal links */}
          <div className="flex gap-6 mb-4 md:mb-0">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black hover:underline hover:text-blue-600 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex  gap-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="text-black hover:text-blue-600"
                >
                  <Icon size={30} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-black text-sm text-center md:text-right">
            © 2025 Prettify Go Global. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
