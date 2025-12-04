"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.5,
      lerp: 0.085
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
