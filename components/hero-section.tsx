"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courses: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Quote request submitted",
      description: "We'll contact you within 1 hour during business hours",
    })
    setFormData({ name: "", email: "", phone: "", courses: "" })
  }

  return (
    <section className="bg-gradient-to-br from-[#f0e6ff] to-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-[#250e62] mb-6 leading-tight">
            Done-for-You Sophia.org Courses <br />
            <span className="relative">
              <span className="relative z-10">Fast, Private, Guaranteed</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#d0df00] z-0 opacity-40"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#6d6e70] mb-8">
            Let our experts complete your Sophia courses while you focus on what matters. Guaranteed grades, fast
            turnaround, and complete confidentiality.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild className="bg-[#d0df00] hover:bg-opacity-90 text-[#250e62] font-bold">
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-[#250e62] text-[#250e62] hover:bg-[#250e62] hover:text-white"
            >
              <Link href="#how-it-works">How It Works</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">
            <h3 className="text-[#250e62] font-bold text-xl mb-4">Get Started Today</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="focus:border-[#250e62] focus:ring-[#250e62]"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="focus:border-[#250e62] focus:ring-[#250e62]"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number (for SMS updates)"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="focus:border-[#250e62] focus:ring-[#250e62]"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Which Sophia courses do you need help with?"
                  name="courses"
                  value={formData.courses}
                  onChange={handleChange}
                  className="focus:border-[#250e62] focus:ring-[#250e62]"
                  rows={3}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#d0df00] hover:bg-opacity-90 text-[#250e62] font-bold">
                Get My Personalized Quote
              </Button>
              <p className="text-xs text-gray-500 text-center">We'll contact you within 1 hour during business hours</p>
            </form>
          </div>
          <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 rounded-full bg-[#d0df00] opacity-20"></div>
          <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#d0df00] opacity-20"></div>
        </div>
      </div>
    </section>
  )
}
