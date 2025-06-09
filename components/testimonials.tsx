import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      initials: "J.S.",
      role: "Nurse and Mom",
      content:
        "As a working mom and nursing student, I didn't have time for general education courses. Sophia Solved completed 5 courses for me in 3 weeks with all A's. This service was a game-changer for my degree plan!",
    },
    {
      initials: "T.R.",
      role: "Business Professional",
      content:
        "I needed to complete my degree quickly for a promotion. Sophia Solved handled all my Sophia courses while I focused on work. Their communication was excellent and the work was flawless. 10/10 would recommend!",
    },
    {
      initials: "A.K.",
      role: "Military Service Member",
      content:
        "Deployments made college challenging. Sophia Solved completed my courses while I was overseas, with regular SMS updates. They understood military needs and worked around my schedule. Incredibly professional service.",
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#250e62] mb-4">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Hear from students who've accelerated their education with Sophia Solved
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#f0e6ff] flex items-center justify-center mr-4">
                    <span className="text-[#250e62] font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#250e62]">{testimonial.role}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#6d6e70] italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild className="bg-[#d0df00] hover:bg-opacity-90 text-[#250e62] font-bold">
            <Link href="#contact">Join Our Satisfied Clients</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
