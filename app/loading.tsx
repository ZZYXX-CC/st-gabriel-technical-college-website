"use client"

import LottieVisual from "@/components/ui/lottie-visual"

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <LottieVisual
        src="https://lottie.host/35ea17b4-cd88-47c7-ae66-81c475622810/oktfIq5bpW.lottie"
        autoplay
        loop
      />
    </div>
  )
}