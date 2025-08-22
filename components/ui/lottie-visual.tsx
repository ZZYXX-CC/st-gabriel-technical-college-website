"use client"

import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"
import { DotLottie } from "@lottiefiles/dotlottie-web"

export type LottieVisualProps = {
  src: string // .lottie or .json URL or public path
  autoplay?: boolean
  loop?: boolean
  width?: number
  height?: number
  className?: string
  style?: CSSProperties
  showGrid?: boolean
  gridColor?: string // CSS color used for grid lines
  showBlur?: boolean
  blurColor?: string // CSS rgba/hex for the blur glow
}

/**
 * LottieVisual
 * Lightweight React wrapper around @lottiefiles/dotlottie-web using a <canvas>.
 *
 * Example usage inside a CardVisual:
 *  <CardVisual>
 *    <LottieVisual src="/animations/brand.lottie" width={380} height={200} />
 *  </CardVisual>
 */
export default function LottieVisual({
  src,
  autoplay = true,
  loop = true,
  width = 380,
  height = 200,
  className,
  style,
  showGrid = true,
  gridColor = "#80808020",
  showBlur = false,
  blurColor = "rgba(139,92,246,0.25)", // purple glow (#8b5cf6)
}: LottieVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const playerRef = useRef<DotLottie | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Create a new player instance
    const player = new DotLottie({
      autoplay,
      loop,
      canvas: canvasRef.current,
      src,
    })

    playerRef.current = player

    return () => {
      try {
        // @lottiefiles/dotlottie-web doesn't currently expose a destroy API,
        // but clearing the canvas reference and stopping playback is sufficient.
        // If a dispose/destroy method appears in future versions, call it here.
        ;(player as any)?.stop?.()
      } catch {}
      playerRef.current = null
    }
  }, [src, autoplay, loop])

  return (
    <div
      className={className}
      style={{ position: "relative", width, height, overflow: "hidden", ...style }}
    >
      {showGrid && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            // Subtle grid background using two linear-gradients
            backgroundImage:
              `linear-gradient(to right, ${gridColor} 1px, transparent 1px),` +
              `linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            backgroundPosition: "center",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />
      )}
      {showBlur && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: Math.max(width * 0.7, 220),
              height: Math.max(height * 0.7, 120),
              borderRadius: "9999px",
              background: blurColor,
              filter: "blur(40px)",
            }}
          />
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ position: "relative", zIndex: 2, display: "block" }}
      />
    </div>
  )
}
