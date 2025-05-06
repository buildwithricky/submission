"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import CartItem from "@/components/cart-item"
import { useStore } from "@/lib/store"
import ProductCarousel from "@/components/product-carousel"

export default function CartPage() {
  const cart = useStore((state) => state.cart)
  const products = useStore((state) => state.products)
  const clearCart = useStore((state) => state.clearCart)

  const bestSellers = products.filter((product) => product.bestSeller).slice(0, 4)

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
          <h1 className="mt-4 text-2xl font-bold">Your cart is empty</h1>
          <p className="mt-2 text-muted-foreground">No items have been added to your cart yet.</p>
          <Button asChild className="mt-6">
            <Link href="/products">Browse Products</Link>
          </Button>

          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Why not add one of our best sellers?</h2>
            <ProductCarousel products={bestSellers} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Your Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border">
            <div className="p-6">
              {cart.map((item) => (
                <div key={item.product.id}>
                  <CartItem item={item} />
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <Separator />

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <Button asChild className="w-full">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <Button variant="outline" className="w-full" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
