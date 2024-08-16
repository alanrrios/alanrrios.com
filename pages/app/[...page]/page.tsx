import Link from 'next/link'
import { notFound } from 'next/navigation'

import Navbar from "@/components/Navbar/Navbar"
import ModeToggle from "@/components/ui/mode/mode-toggle"
import InfoCard from "@/components/InfoCard/InfoCard"

import { Separator } from "@/components/ui/separator"

export const runtime = 'edge'

const products = [
  { title: 'budgiter' },
  { title: 'population' },
]

export default function Home({ params }: { params: { page: string[] } }) {
  const pathname = params.page?.[0] || ''
  
  const product = products.find(product => product.title === pathname)
  if (!product) {
    notFound()
  }

  return (
    <>
      <div className="flex flex-col h-full max-w-2xl mx-auto px-2 pb-4">
        <header className="mb-auto">
          <Navbar />
        </header>

        <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <InfoCard productTitle={product.title} />
        </main>

        <footer className="mt-auto">
          <div className="flex flex-row gap-3 justify-center items-center">
            <Link 
              className="text-base font-normal text-foreground"
              href="https://x.com/alanrrios"
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