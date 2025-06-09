"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "Is this service confidential?",
      answer:
        "Absolutely. We prioritize your privacy above all else. We never share your information with third parties and all communication is encrypted. Your name is never associated with the coursework we complete.",
    },
    {
      question: "How does the credit transfer work?",
      answer:
        "Sophia.org courses are ACE-accredited and accepted by most colleges. We complete your courses on your Sophia account, and you simply transfer the credits to your university just as you would if you completed them yourself. We can provide guidance on the transfer process if needed.",
    },
    {
      question: "What grades do you guarantee?",
      answer:
        "We guarantee a minimum B grade on all courses, with most courses completed at an A level. If for any rare reason we don't meet the guaranteed grade, we'll redo the work at no additional cost or provide a full refund.",
    },
    {
      question: "How fast can you complete a course?",
      answer:
        "Most single courses are completed within 7-10 business days. For multiple courses, we can work on them simultaneously to complete bundles faster. Rush options are available for an additional fee if you need a course completed urgently.",
    },
    {
      question: "Who are your experts?",
      answer:
        "Our team consists of subject matter experts with advanced degrees and extensive experience in their fields. Many are former professors or professionals who now specialize in Sophia course completion. Each expert undergoes rigorous vetting and training.",
    },
    {
      question: "What if I need to make changes during the process?",
      answer:
        "No problem! You can request changes or updates at any point through your dedicated communication channel (SMS or email). We're flexible and will adjust to your needs as they arise during the course completion process.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#250e62] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg">Everything you need to know about our Sophia course completion service</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <AccordionTrigger className="text-left font-bold text-[#250e62] text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-[#6d6e70] pt-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-[#6d6e70] mb-4">Have more questions?</p>
          <Button asChild className="bg-[#d0df00] hover:bg-opacity-90 text-[#250e62] font-bold">
            <Link href="#contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
