import { BestSellers } from "@/components/bestsellers/bestsellers"
import { Herosection } from "@/components/herosection/herosection"
import { PerfectPiece } from "@/components/perfectpiece/perfectpiece"
import { Subscribe } from "@/components/subscribe/subscribe"
import { Whychoose } from "@/components/whychoose/whychoose"

export default function Home() {
  return (
    <main>
      <Herosection />
      <Whychoose />
      <PerfectPiece />
      <BestSellers />
      <Subscribe />
    </main>
  )
}
