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

        <main className="grid place-items-center">
          <div className="text-center">
            <p className="text-base font-semibold text-destructive">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">page not found</h1>
            <p className="mt-6 text-base leading-7 text-muted-foreground">sorry, we couldn’t find the page you’re looking for</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/" className="text-sm font-semibold text-foreground">
                go back home <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
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
