import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-[#250e62] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Complete Your Sophia Courses?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
          Stop stressing over general education requirements. Let our experts handle your Sophia courses while you focus
          on your degree and career.
        </p>
        <Button asChild className="bg-[#d0df00] hover:bg-opacity-90 text-[#250e62] font-bold">
          <Link href="#contact">Get Started Today</Link>
        </Button>
      </div>
    </section>
  )
}
