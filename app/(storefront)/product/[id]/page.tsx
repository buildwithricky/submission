"use client"
import Image from "next/image"
import { useParams, notFound } from "next/navigation"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useStore } from "@/lib/store"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const products = useStore((state) => state.products)
  const addToCart = useStore((state) => state.addToCart)

  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={product.image || "/placeholder.svg?height=600&width=600"}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-2">
            {product.bestSeller && <Badge className="bg-primary text-primary-foreground">Best Seller</Badge>}
            <Badge variant="outline">{product.category}</Badge>
          </div>

          <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>

          <div className="mb-4 flex items-center gap-2">
            {product.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="mb-6 text-lg text-muted-foreground">{product.description}</p>

          <div className="mb-6 text-3xl font-bold">${product.price.toFixed(2)}</div>

          <div className="mb-8 flex gap-4">
            <Button size="lg" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                <p>{product.description}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ingredients">
              <AccordionTrigger>Ingredients</AccordionTrigger>
              <AccordionContent>
                <p>{product.ingredients || "Ingredients information not available."}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nutritional-info">
              <AccordionTrigger>Nutritional Information</AccordionTrigger>
              <AccordionContent>
                <p>{product.nutritionalInfo || "Nutritional information not available."}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
