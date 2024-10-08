'use client'

import Link from 'next/link'; // Add this import

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function FooterLink() {
  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="text-foreground focus-visible:ring-transparent"
        >
          @alanrrios
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-sm w-56">
        <DropdownMenuLabel>alanrrios</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link 
            className=""
            href="https://x.com/alanrrios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownMenuItem className="hover:cursor-pointer">
              @alanrrios
              <DropdownMenuShortcut>@</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link 
            className=""
            href="https://linkedin.com/in/alanrrios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DropdownMenuItem className="hover:cursor-pointer">
              in/alanrrios
              <DropdownMenuShortcut>in</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link 
          className=""
          href="https://github.com/alanrrios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DropdownMenuItem className="hover:cursor-pointer">
            github/alanrrios
            <DropdownMenuShortcut>&lt;&gt;</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <Link 
            className=""
            href="https://blog.alanrrios.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog.alanrrios
          </Link>
          <DropdownMenuShortcut>.com</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}