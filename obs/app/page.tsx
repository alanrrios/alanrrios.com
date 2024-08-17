import Link from 'next/link'

import FooterLink from '@/components/FooterLink/FooterLink'

import { ThemeProvider } from "@/components/ui/mode/theme-provider"

import Navbar from "@/components/Navbar/Navbar"
import ModeToggle from "@/components/ui/mode/mode-toggle"

import { Separator } from "@/components/ui/separator"
import {  
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export default function Home() {
  return (
    <>
    <div className='bg-background text-foreground h-full'>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col h-full max-w-2xl mx-auto px-2 pb-4">
        <header className="mb-auto">
          <Navbar />
        </header>

        <main className="grid place-items-center">
          <ContextMenu>
            <ContextMenuTrigger className="flex px-6 py-24 rounded-md border border-dashed border-border/25  text-sm">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-foreground">obs assets</h1>
                  <p className="text-lg font-normal text-foreground">various widgets, thingies, and doohickies</p>
                </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <Link 
                className=""
                href="/widget"
              >
                <ContextMenuItem inset>
                  widgets
                </ContextMenuItem>
              </Link>
              <ContextMenuSeparator />
              <Link 
                className=""
                href="/border"
              >
                <ContextMenuItem inset>
                  border
                </ContextMenuItem>
              </Link>
              <ContextMenuSub>
                <ContextMenuSubTrigger inset>status</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem disabled>
                    rec
                    <ContextMenuShortcut></ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem disabled>
                    live
                    <ContextMenuShortcut></ContextMenuShortcut>
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSub>
                <ContextMenuSubTrigger inset>date</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem disabled>
                    large
                    <ContextMenuShortcut></ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem disabled>
                    small
                    <ContextMenuShortcut></ContextMenuShortcut>
                  </ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuContent>
          </ContextMenu>
        </main>

        <footer className="mt-auto">
          <div className="flex flex-row gap-3 justify-center items-center">
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
