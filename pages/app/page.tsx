import Link from 'next/link'; // Add this import

import {  
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import Navbar from "@/components/Navbar/Navbar"
import ModeToggle from "@/components/ui/mode/mode-toggle"
import FooterLink from "@/components/FooterLink/FooterLink"

import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-full max-w-2xl mx-auto px-2 pb-4">
        <header className="mb-auto">
          <Navbar />
        </header>

    <ContextMenu>
      <ContextMenuTrigger className="flex rounded-md border border-dashed border-border/25 text-sm">
        <main className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground">brand architect</h1>
            <p className="text-lg font-normal text-foreground">with over 10 years of experience ideating on problems and solutions</p>
          </div>
        </main>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <Link 
          className=""
          href="/viewport"
        >
          <ContextMenuItem inset>
            viewport
            <ContextMenuShortcut>&lt;&gt;</ContextMenuShortcut>
          </ContextMenuItem>
        </Link>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>obs</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <Link 
              className=""
              href="https://obs.alanrrios.com/widget"
            >
              <ContextMenuItem>
                widgets
                <ContextMenuShortcut>#</ContextMenuShortcut>
              </ContextMenuItem>
            </Link>
          </ContextMenuSubContent>
        </ContextMenuSub>


      </ContextMenuContent>
    </ContextMenu>

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
