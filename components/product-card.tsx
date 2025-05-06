"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useStore } from "@/lib/store"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart)

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border">
      <Link href={`/product/${product.id}`} className="aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg?height=300&width=300"}
          alt={product.name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {product.bestSeller && (
        <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">Best Seller</Badge>
      )}

      <div className="flex flex-1 flex-col p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
          {product.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="mr-2">
              {tag}
              {index < Math.min(product.tags.length, 2) - 1 && ", "}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <p className="font-semibold">${product.price.toFixed(2)}</p>
          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault()
              addToCart(product)
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}
