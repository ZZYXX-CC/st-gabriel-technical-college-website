"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
}

export const About3 = ({
  title = "Discover St. Gabriel Technical Institute",
  description = "Empowering the next generation of technical innovators through cutting-edge education and hands-on training.",
  mainImage = {
    src: "/asset/hero1.png",
    alt: "Students collaborating on technical projects at St. Gabriel Technical Institute",
  },
  breakout = {
    src: "/asset/SGT-blue.svg",
    alt: "St. Gabriel Technical Institute logo",
    title: "Our Commitment to Excellence",
    description: "With state-of-the-art facilities and industry partnerships, we prepare students for thriving careers in technology and trades.",
    buttonText: "Explore Programs",
    buttonUrl: "/programs",
  },
}: About3Props = {}) => {
  return (
    <section className="relative py-20 md:py-32 bg-stg-sky-blue overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            About Our Institute
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white">
            <div className="text-4xl font-bold mb-2">20+</div>
            <div>Specialized Programs</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white">
            <div className="text-4xl font-bold mb-2">95%</div>
            <div>Employment Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white">
            <div className="text-4xl font-bold mb-2">5K+</div>
            <div>Successful Graduates</div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button 
            className="bg-white text-stg-sky-blue hover:bg-white/90 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a href={breakout.buttonUrl} className="flex items-center gap-2">
              {breakout.buttonText}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
