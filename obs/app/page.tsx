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

const components: { 
  title: string; 
  subcomponents?: { title: string; href: string; enabled: boolean; }[]; 
}[] = [
  {
    title: "border",
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
        enabled: true,
      },
      {
        title: "medium-camera",
        href: "/widget/border/medium-camera",
        enabled: true,
      },
    ],
  },
  {
    title: "status",
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
    title: "times",
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
              {components.map(component => (
                <ContextMenuSub key={component.title}>
                  <ContextMenuSubTrigger inset>{component.title}</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    {component.subcomponents?.map(subcomponent => (
                      <Link 
                        key={subcomponent.title} 
                        className=""
                        href={subcomponent.href} 
                      >
                        <ContextMenuItem disabled={!subcomponent.enabled}>
                          {subcomponent.title}
                          <ContextMenuShortcut></ContextMenuShortcut>
                        </ContextMenuItem>
                      </Link>
                    ))}
                  </ContextMenuSubContent>
                </ContextMenuSub>
              ))}
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
