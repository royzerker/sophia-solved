import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Submit Your Course Details",
      description: "Tell us which Sophia courses you need completed and your desired timeline.",
    },
    {
      number: 2,
      title: "Get Matched With an Expert",
      description: "We'll pair you with a subject matter expert who will handle your coursework.",
    },
    {
      number: 3,
      title: "Receive Progress Updates",
      description: "Get regular updates via SMS or email on your course progress.",
    },
    {
      number: 4,
      title: "Course Completed",
      description: "Your Sophia course is finished with guaranteed grades, ready for credit transfer.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#250e62] mb-4">How Sophia Solved Works</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our simple 4-step process makes completing your Sophia courses effortless
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="bg-white transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-[#f0e6ff] flex items-center justify-center mb-4">
                  <span className="text-[#250e62] font-bold text-2xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-[#250e62] mb-3">{step.title}</h3>
                <p className="text-[#6d6e70]">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild className="bg-[#d0df00] hover:bg-opacity-90 text-[#250e62] font-bold">
            <Link href="#contact">Start My Course Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
