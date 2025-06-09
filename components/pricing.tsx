import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Pricing() {
  const plans = [
    {
      title: "Single Course",
      description: "Perfect for when you just need one course completed",
      price: "$199",
      unit: "/course",
      features: ["One Sophia course completed", "Guaranteed passing grade", "7-10 day completion", "Progress updates"],
      popular: false,
      savings: null,
    },
    {
      title: "4-Course Bundle",
      description: "Save when you bundle multiple courses together",
      price: "$699",
      unit: "/bundle",
      features: [
        "Four Sophia courses completed",
        "Guaranteed passing grades",
        "14-21 day completion",
        "Priority matching with experts",
        "Dedicated account manager",
      ],
      popular: true,
      savings: "Save $97",
    },
    {
      title: "10-Course Accelerator",
      description: "Maximize your credit transfer with our fastest option",
      price: "$1,499",
      unit: "/package",
      features: [
        "Ten Sophia courses completed",
        "Guaranteed passing grades",
        "30 day completion",
        "VIP priority service",
        "Personalized credit transfer plan",
        "24/7 support",
      ],
      popular: false,
      savings: "Save $491",
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#250e62] mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg max-w-3xl mx-auto">Choose the package that fits your Sophia course needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-2 border-[#d0df00] shadow-lg" : ""}`}>
              {plan.popular && (
                <Badge className="absolute top-0 right-0 bg-[#d0df00] text-[#250e62] rounded-bl-lg rounded-tr-lg">
                  MOST POPULAR
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#250e62]">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#250e62]">{plan.price}</span>
                  <span className="text-[#6d6e70]">{plan.unit}</span>
                  {plan.savings && <div className="text-sm text-[#d0df00] font-medium">{plan.savings}</div>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-[#d0df00] mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-[#d0df00] hover:bg-opacity-90 text-[#250e62] font-bold">
                  <Link href="#contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#6d6e70] mb-4">Need a custom package or have specific requirements?</p>
          <Link
            href="#contact"
            className="text-[#250e62] font-bold hover:text-[#d0df00] transition duration-300 inline-flex items-center"
          >
            Contact us for a personalized quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
