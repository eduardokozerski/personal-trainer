"use client";

import { Feedback } from "@/components/Feedback";
import { Hero } from "@/components/Hero";
import { images } from "@/app/data/feedbackData";
import { AboutMe } from "@/components/AboutMe";
import { HelpYou } from "@/components/HelpYou";
import { Testimonials } from "@/components/Testimonials";
import { Plans } from "@/components/Plans";
import { FAQ } from "@/components/FAQ";
import Image from "next/image";
import { useEffect, useState } from "react";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 w-14 h-14 flex items-center justify-center transition duration-300 transform hover:scale-110 opacity-50 hover:opacity-100"
    >
      <Image
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        width={50}
        height={50}
        priority
      />
    </a>
  );
};

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-black">
      <Hero />
      <AboutMe />
      <HelpYou />
      {isClient && <Feedback images={images} />}
      <Testimonials />
      <Plans />
      <FAQ />
      <WhatsAppIcon />
    </div>
  );
}