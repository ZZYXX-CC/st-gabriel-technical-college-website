"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import WaitlistModal from "@/components/waitlist-modal"

export default function AnnouncementBanner() {
  const bannerRef = useRef<HTMLDivElement | null>(null)
  const [paused, setPaused] = useState(false)

  // Set a CSS variable for the banner height so the header can offset below it.
  useEffect(() => {
    const setBannerHeight = () => {
      const h = bannerRef.current?.offsetHeight || 0
      document.documentElement.style.setProperty("--banner-height", `${h}px`)
    }
    setBannerHeight()
    window.addEventListener("resize", setBannerHeight)
    return () => window.removeEventListener("resize", setBannerHeight)
  }, [])

  return (
    <div
      ref={bannerRef}
      className="announcement-banner w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(74,148,196,0.95), rgba(74,148,196,0.85))",
        backdropFilter: "saturate(180%) blur(6px)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="h-10 md:h-12 flex items-center overflow-hidden">
          <p className="font-semibold text-white text-xs md:text-sm whitespace-nowrap">
            <span
              className={`sgt-marquee inline-block ${paused ? "paused" : ""}`}
              tabIndex={0}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              Admissions are currently closed as we are in setup phase. Launching soon! &nbsp; 
              <span className="inline">
                Click &lsquo;
                <WaitlistModal
                  trigger={
                    <button className="underline font-bold text-accent hover:text-accent/90">here</button>
                  }
                />
                &rsquo; to join waitlist
              </span>
              &nbsp; • &nbsp; Admissions are currently closed as we are in setup phase. Launching soon! &nbsp; 
              <span className="inline">
                Click &lsquo;
                <WaitlistModal
                  trigger={
                    <button className="underline font-bold text-accent hover:text-accent/90">here</button>
                  }
                />
                &rsquo; to join waitlist
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}