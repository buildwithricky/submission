import type React from "react"
import ProviderLayout from "@/components/layouts/provider-layout"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ProviderLayout>{children}</ProviderLayout>
}
