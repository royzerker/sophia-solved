import Link from "next/link"
import { ArrowRight, CurrencyIcon as Exchange, Gauge, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function BlogPreview() {
  const blogPosts = [
    {
      icon: <Exchange className="h-12 w-12 text-[#250e62]" />,
      title: "How to Transfer Sophia Credits to Your University",
      description: "A step-by-step guide to ensuring your Sophia credits count toward your degree.",
    },
    {
      icon: <Gauge className="h-12 w-12 text-[#250e62]" />,
      title: "Accelerate Your Degree: 10 Sophia Courses in 30 Days",
      description: "Strategies to complete multiple Sophia courses quickly while maintaining quality.",
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-[#250e62]" />,
      title: "Which Sophia Courses Give You the Most Credit Value?",
      description: "Our experts rank the Sophia courses that offer the best credit-to-effort ratio.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#250e62] mb-4">Sophia Learning Resources</h2>
          <p className="text-lg max-w-3xl mx-auto">Helpful articles to maximize your Sophia.org experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="h-48 bg-[#f0e6ff] flex items-center justify-center">{post.icon}</div>
              <CardContent className="p-6">
                <CardTitle className="font-bold text-[#250e62] text-xl mb-3">{post.title}</CardTitle>
                <p className="text-[#6d6e70] mb-4">{post.description}</p>
                <Link
                  href="#"
                  className="text-[#250e62] font-bold hover:text-[#d0df00] transition duration-300 inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-2 border-[#250e62] text-[#250e62] hover:bg-[#250e62] hover:text-white"
          >
            <Link href="#">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
