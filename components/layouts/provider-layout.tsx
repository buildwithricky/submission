import type { ReactNode } from "react"
import ProviderHeader from "@/components/provider-header"
import Footer from "@/components/footer"

interface ProviderLayoutProps {
  children: ReactNode
}

export default function ProviderLayout({ children }: ProviderLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ProviderHeader />
      <main className="flex-1 p-6">{children}</main>
      <Footer />
    </div>
  )
}
