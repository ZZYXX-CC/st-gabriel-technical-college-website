"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Globe3D() {
  return (
    <section
      className="relative w-full overflow-hidden pb-10 pt-36 font-light text-gray-900 antialiased md:pb-16 md:pt-36 bg-[url('/asset/mobile.jpg')] md:bg-none bg-cover bg-center"
    >


      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 bg-blue-100 backdrop-blur-sm rounded-full text-sm font-medium text-blue-800 border border-blue-200 mb-6">
            EXCELLENCE IN TECHNICAL EDUCATION
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
            <span className="text-gray-900">Shape Your Future with</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              World-Class
            </span>{" "}
            <span className="text-gray-900">Technical Education</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-center leading-relaxed">
            St. Gabriel Technical College combines cutting-edge technology with
            hands-on learning to prepare you for tomorrow&apos;s careers in
            engineering, technology, and innovation.
          </p>

          <div className="mb-10 sm:mb-0 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="relative w-full overflow-hidden rounded-full border border-[#4a94c4] bg-[#4a94c4] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#3a7ca3] sm:w-auto"
            >
              Apply Now
            </Link>
            <a
              href="/programs"
              className="flex w-full items-center justify-center gap-2 text-gray-600 transition-colors hover:text-[#4a94c4] sm:w-auto"
            >
              <span>Explore Programs</span>
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
        <div className="relative mt-12">
          <motion.div
            className="w-full flex h-80 md:h-96 lg:h-[32rem] relative overflow-hidden mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/asset/hero.png"
              alt="St. Gabriel Technical College"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
              className="z-10 object-contain object-center"
            />
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}