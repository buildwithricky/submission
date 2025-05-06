import type React from "react"
import StorefrontLayout from "@/components/layouts/storefront-layout"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StorefrontLayout>{children}</StorefrontLayout>
}
