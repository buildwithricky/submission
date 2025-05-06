import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface StorefrontLayoutProps {
  children: ReactNode
}

export default function StorefrontLayout({ children }: StorefrontLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
