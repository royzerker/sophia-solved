import { CheckCircle, Lock, Zap, ShieldCheck } from "lucide-react"

export default function TrustIndicators() {
  const indicators = [
    { icon: <CheckCircle className="h-6 w-6 text-green-500" />, text: "Guaranteed Grades" },
    { icon: <Lock className="h-6 w-6 text-[#250e62]" />, text: "100% Confidential" },
    { icon: <Zap className="h-6 w-6 text-[#d0df00]" />, text: "Fast Turnaround" },
    { icon: <ShieldCheck className="h-6 w-6 text-[#250e62]" />, text: "Expert Tutors" },
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {indicators.map((indicator, index) => (
            <div key={index} className="flex items-center">
              {indicator.icon}
              <span className="font-medium text-[#250e62] ml-2">{indicator.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
