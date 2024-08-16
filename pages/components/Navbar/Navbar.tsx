'use client'

import { useState } from 'react'
import { forwardRef } from 'react'
import Link from 'next/link'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  UsersIcon,
  EnvelopeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { Button } from "@/components/ui/button"

const products = [
  { name: 'Budgiter', description: 'Intuitive budgeting empowering financial awareness', href: '/budgiter', icon: ChartPieIcon },
]

const callsToAction = [
  { name: 'follow', href: 'https://x.com/alanrrios/', icon: UsersIcon },
  { name: 'contact', href: 'mailto:contact@alanrrios.com', icon: EnvelopeIcon },
]

const NavLinkButton = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof Button>>(
  function NavLinkButton(props, ref) {
    return (
      <Button
        variant="ghost"
        className="text-xl font-semibold h-min p-0 hover:bg-transparent hover:underline underline-offset-8 focus-visible:ring-transparent"
        ref={ref}
        {...props}
      />
    )
  }
)

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="text-3xl font-semibold text-foreground">
            alanrrios
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-xl font-semibold text-foreground hover:underline underline-offset-8">
            init
          </Link>
          <Popover>
            <PopoverButton as={NavLinkButton}>
              <span>work</span>
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-foreground" />
            </PopoverButton>

            <PopoverPanel
              transition
              anchor="bottom end"
              className="absolute -left-8 top-full z-10 mt-3 w-108 overflow-hidden rounded-3xl bg-card shadow-lg ring-1 ring-ring/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-accent"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-accent group-hover:bg-background">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-accent-foreground group-hover:text-primary" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-foreground">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-foreground/5 bg-accent">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-foreground hover:bg-accent-foreground/5"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-muted-foreground" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-texture px-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-ring/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-semibold text-foreground">
                alanrrios
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-foreground"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground"
                >
                  init
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-foreground">
                    work
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-foreground"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
