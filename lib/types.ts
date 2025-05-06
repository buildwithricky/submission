export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  tags: string[]
  bestSeller: boolean
  ingredients?: string
  nutritionalInfo?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  customer: {
    name: string
    email: string
    address: string
    city: string
    zip: string
    country: string
  }
  items: CartItem[]
  status: "pending" | "fulfilled" | "cancelled"
  date: string
  total: number
}
