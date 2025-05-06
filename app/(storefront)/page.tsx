import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FAQAccordion from "@/components/faq-accordion"
import ProductCarousel from "@/components/product-carousel"
import { products } from "@/lib/data"

const faqs = [
  {
    question: "What are the benefits of taking supplements?",
    answer:
      "Supplements can help fill nutritional gaps in your diet, support specific health goals like muscle building or joint health, and may provide targeted benefits for various body systems.",
  },
  {
    question: "Are your products third-party tested?",
    answer:
      "Yes, all our products undergo rigorous third-party testing to ensure purity, potency, and safety. We're committed to providing the highest quality supplements.",
  },
  {
    question: "How do I choose the right supplement?",
    answer:
      "Consider your specific health goals, any deficiencies you may have, your diet, and lifestyle. Our product descriptions provide detailed information on benefits and recommended uses.",
  },
  {
    question: "What's your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it for a full refund within 30 days of delivery.",
  },
]

export default function Home() {
  const bestSellers = products.filter((product) => product.bestSeller)

  return (
    <div className="flex flex-col gap-12 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Furestor Everybody</h1>
            <p className="text-lg text-muted-foreground">
              Premium supplements designed to support your health and wellness journey. Made with high-quality
              ingredients for optimal results.
            </p>
            <div className="mt-4">
              <Button asChild size="lg">
                <Link href="/products">Shop Now</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-md">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Supplement bottles"
              width={600}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold">Best Sellers</h2>
        <ProductCarousel products={bestSellers} />
      </section>

      {/* Shop Offer CTA */}
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Special Offer</h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
            Get 15% off your first order when you sign up for our newsletter. Plus, receive exclusive access to new
            product launches and promotions.
          </p>
          <Button asChild size="lg">
            <Link href="/products">Shop All Products</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  )
}
