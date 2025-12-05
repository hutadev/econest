import { Herosection } from "@/components/herosection/herosection"
import { PerfectPiece } from "@/components/perfectpiece/perfectpiece"
import { Whychoose } from "@/components/whychoose/whychoose"

export default function Home() {
  return (
    <main>
      <Herosection />
      <Whychoose />
      <PerfectPiece />
    </main>
  )
}
