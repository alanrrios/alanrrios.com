import Link from 'next/link'

import Navbar from "@/components/Navbar/Navbar"
import ModeToggle from "@/components/ui/mode/mode-toggle"

import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-full max-w-2xl mx-auto px-2 pb-4">
        <header className="mb-auto">
          <Navbar />
        </header>

        <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground">brand architect</h1>
            <p className="text-lg font-normal text-foreground">with over 10 years of experience ideating on problems and solutions</p>
          </div>
        </main>

        <footer className="mt-auto">
          <div className="flex flex-row gap-3 justify-center items-center">
            <Link 
              className="text-base font-normal text-foreground"
              href="https://x.com/alanrrios"
              target="_blank"
              rel="noopener noreferrer"
            >
              @alanrrios
            </Link>
            <Separator orientation="vertical" className='h-6' />
            <ModeToggle />
          </div>
        </footer>

      </div>
    </>
  )
}
