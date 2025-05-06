"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          LOGO
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`${pathname === "/" ? "font-medium text-primary" : "text-foreground"}`}>
            Home
          </Link>
          <Link
            href="/products"
            className={`${pathname.startsWith("/product") ? "font-medium text-primary" : "text-foreground"}`}
          >
            Products
          </Link>
          <Link href="/cart" className={`${pathname === "/cart" ? "font-medium text-primary" : "text-foreground"}`}>
            Cart
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <Input type="search" placeholder="Search" className="w-[200px] md:w-[250px]" />
            <Button variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3">
              Search
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
