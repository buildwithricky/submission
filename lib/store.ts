"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product, CartItem, Order } from "@/lib/types"
import { products as initialProducts, orders as initialOrders } from "@/lib/data"

interface StoreState {
  products: Product[]
  cart: CartItem[]
  orders: Order[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  placeOrder: (customerInfo: Order["customer"]) => string
  updateOrderStatus: (orderId: string, status: Order["status"]) => void
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      products: initialProducts,
      cart: [],
      orders: initialOrders,

      addToCart: (product: Product) => {
        const { cart } = get()
        const existingItem = cart.find((item) => item.product.id === product.id)

        if (existingItem) {
          const updatedCart = cart.map((item) =>
            item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
          set({ cart: updatedCart })
        } else {
          set({ cart: [...cart, { product, quantity: 1 }] })
        }
      },

      removeFromCart: (productId: string) => {
        const { cart } = get()
        set({ cart: cart.filter((item) => item.product.id !== productId) })
      },

      updateQuantity: (productId: string, quantity: number) => {
        const { cart } = get()
        if (quantity <= 0) {
          set({ cart: cart.filter((item) => item.product.id !== productId) })
          return
        }

        const updatedCart = cart.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
        set({ cart: updatedCart })
      },

      clearCart: () => {
        set({ cart: [] })
      },

      placeOrder: (customerInfo: Order["customer"]) => {
        const { cart, orders } = get()
        if (cart.length === 0) return ""

        const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

        const newOrder: Order = {
          id: `ORD-${orders.length + 1}`.padStart(7, "0"),
          customer: customerInfo,
          items: [...cart],
          status: "pending",
          date: new Date().toISOString().split("T")[0],
          total,
        }

        set({
          orders: [...orders, newOrder],
          cart: [],
        })

        return newOrder.id
      },

      updateOrderStatus: (orderId: string, status: Order["status"]) => {
        const { orders } = get()
        const updatedOrders = orders.map((order) => (order.id === orderId ? { ...order, status } : order))
        set({ orders: updatedOrders })
      },
    }),
    {
      name: "furestor-store",
    },
  ),
)
