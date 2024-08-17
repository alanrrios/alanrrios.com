"use client"
 
import * as React from "react"
import Link from 'next/link'

import { ThemeProvider } from "@/components/ui/mode/theme-provider"

import Navbar from "@/components/Navbar/Navbar"
import ModeToggle from "@/components/ui/mode/mode-toggle"
import FooterLink from '@/components/FooterLink/FooterLink'


import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const components: { 
  title: string; 
  subcomponents?: { title: string; href: string; enabled: boolean; }[]; 
}[] = [
  {
    title: "Borders",
    subcomponents: [
      {
        title: "large-desktop",
        href: "/widget/border/large-desktop",
        enabled: true,
      },
      {
        title: "medium-desktop",
        href: "/widget/border/medium-desktop",
        enabled: true,
      },
      {
        title: "large-camera",
        href: "/widget/border/large-camera",
        enabled: false,
      },
      {
        title: "medium-camera",
        href: "/widget/border/medium-camera",
        enabled: false,
      },
    ],
  },
  {
    title: "Status",
    subcomponents: [
      {
        title: "large-rec",
        href: "/widget/status/large/rec",
        enabled: true,
      },
      {
        title: "small-rec",
        href: "/widget/status/small/rec",
        enabled: true,
      },
    ],
  },
  {
    title: "Time",
    subcomponents: [
      {
        title: "large-cdt",
        href: "/widget/times/large/cdt",
        enabled: true,
      },
      {
        title: "small-cdt",
        href: "/widget/times/small/cdt",
        enabled: true,
      },
    ],
  },
]
 

export default function ItemsPage() {
  return (
    <>
    <div className='bg-background h-full'>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col h-full max-w-2xl mx-auto px-2">
        <header className="mb-auto">
          <Navbar />
        </header>

        <main className="grid place-items-center px-12">

        <Accordion type="single" collapsible className="w-full">
          {components.map((component, index) => (
            <AccordionItem value={`item-${index + 1}`} key={component.title}>
              <AccordionTrigger>
                {component.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid gap-2 md:grid-cols-2">
                  {component.subcomponents?.map((subcomponent) => (
                    <li key={subcomponent.title}>
                      <Link 
                        href={subcomponent.href}
                        passHref legacyBehavior
                      >
                        <Button 
                          variant="ghost" 
                          className="justify-start w-full py-8 bg-card" 
                          disabled={!subcomponent.enabled}
                        >
                          {subcomponent.title}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
          
        </main>

        <footer className="mt-auto">
          <div className="flex flex-row pb-4 pt-6 gap-3 justify-center items-center ">
            <FooterLink />
            <Separator orientation="vertical" className='h-6' />
            <ModeToggle />
          </div>
        </footer>

      </div>
    </ThemeProvider>
    </div>
    </>
  )
}