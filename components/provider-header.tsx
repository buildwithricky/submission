"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function ProviderHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-muted">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/provider/orders" className="text-xl font-bold">
          LOGO <span className="text-sm font-normal text-muted-foreground">Provider Portal</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/provider/orders"
            className={`${pathname.startsWith("/provider/order") ? "font-medium text-primary" : "text-foreground"}`}
          >
            Orders
          </Link>
          <Link href="/" className="text-foreground">
            View Store
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <Input type="search" placeholder="Search orders" className="w-[200px] md:w-[250px]" />
            <Button variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3">
              Search
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
