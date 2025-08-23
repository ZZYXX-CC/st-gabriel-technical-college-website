"use client"

import Link from "next/link"
import LottieVisual from "@/components/ui/lottie-visual"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background gradients using brand palette */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f1fffa] via-white to-[#93b7be]/20" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#93b7be]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#071e22]/10 blur-3xl" />
      </div>

      {/* Lottie illustration */}
      <div className="mb-8">
        <LottieVisual
          src="https://lottie.host/1d619d87-1d89-4621-a142-ecd22b5d28f9/1kMvHZ8Jrq.lottie"
          autoplay
          loop
          showGrid
          gridColor="rgba(147,183,190,0.28)"
          showBlur
          blurColor="rgba(139,92,246,0.35)"
        />
      </div>

      {/* Copy */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#071e22] text-center">Oops! Page not found</h1>
      <p className="mt-4 max-w-xl text-center text-[#071e22]/70">
        The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {/* Blue */}
        <Button asChild className="bg-stg-sky-blue hover:bg-stg-sky-blue/90 text-white">
          <Link href="/">Go Home</Link>
        </Button>
        {/* Yellow */}
        <Button asChild className="bg-stg-yellow hover:bg-stg-yellow/90 text-[#071e22]">
          <Link href="/programs">Explore Programs</Link>
        </Button>
        {/* Gray */}
        <Button asChild className="bg-gray-200 hover:bg-gray-300 text-[#071e22]">
          <a href="https://store.stgabrieltech.com" target="_blank" rel="noopener noreferrer">Visit Store</a>
        </Button>
      </div>
    </main>
  )
}
