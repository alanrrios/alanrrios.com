'use client'

import { useState } from 'react' // Add this import
import { notFound } from 'next/navigation'

import Navbar from "@/components/Navbar/Navbar"
import ModeToggle from "@/components/ui/mode/mode-toggle"
import FooterLink from "@/components/FooterLink/FooterLink"

import InfoCard from "@/components/InfoCard/InfoCard"
import ViewportSize from '@/components/ViewportSize/ViewportSize'

import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog" // Add this import


export const runtime = 'edge'

const pages = [
  { title: 'budgiter' },
  { title: 'viewport' },
]

const pageComponents = {
  viewport: {
    Component: ViewportSize,
    getProps: (title: string) => ({ pageTitle: title }),
  },
  default: {
    Component: InfoCard,
    getProps: (title: string) => ({ pageTitle: title }),
  },
}

export default function Home({ params }: { params: { page: string[] } }) {
  const pathname = params.page?.[0] || ''

  const [dialogOpen, setDialogOpen] = useState(false) // Add this state
  
  const page = pages.find(page => page.title === pathname)
  if (!page) {
    notFound()
  }

  const { Component, getProps } = pageComponents[pathname as keyof typeof pageComponents] || pageComponents.default
  const componentProps = getProps(page.title)

  return (
    <>
      <div className="flex flex-col h-full max-w-2xl mx-auto px-2 pb-4">
        <header className="mb-auto">
          <Navbar />
        </header>

        <main className="grid place-items-center">
          <Component {...componentProps} />
        </main>

        <footer className="mt-auto">
          <div className="flex flex-row gap-3 justify-center items-center">
            <FooterLink />
            <Separator orientation="vertical" className='h-6' />
            <ModeToggle />
          </div>
        </footer>

      </div>
    </>
  )
}