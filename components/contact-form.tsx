"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courses: "",
    timeline: "none", // Updated default value to be a non-empty string
    contactMethod: "sms",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, timeline: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, contactMethod: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Quote request submitted",
      description: "We'll send you a personalized quote within 1 hour during business hours",
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      courses: "",
      timeline: "none", // Updated default value to be a non-empty string
      contactMethod: "sms",
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[#f0e6ff] p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#250e62] mb-4">Get Your Free Quote</h2>
              <p className="text-[#6d6e70] mb-6">
                Complete this form and we'll send you a personalized quote within 1 hour during business hours. Our team
                is ready to help you finish your Sophia courses fast and stress-free.
              </p>
              <div className="space-y-4">
                {["100% Confidential", "No Obligation", "Guaranteed Grades"].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#d0df00] flex items-center justify-center mr-4">
                      <Check className="h-5 w-5 text-[#250e62]" />
                    </div>
                    <span className="font-medium text-[#250e62]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#250e62] font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#250e62] font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#250e62] font-medium">
                    Phone (for SMS updates)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="courses" className="text-[#250e62] font-medium">
                    Which Sophia courses do you need help with?
                  </Label>
                  <Textarea
                    id="courses"
                    name="courses"
                    value={formData.courses}
                    onChange={handleChange}
                    className="mt-1"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="timeline" className="text-[#250e62] font-medium">
                    When do you need these completed by?
                  </Label>
                  <Select onValueChange={handleSelectChange} value={formData.timeline}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="No specific deadline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No specific deadline</SelectItem>
                      <SelectItem value="1week">Within 1 week</SelectItem>
                      <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                      <SelectItem value="1month">Within 1 month</SelectItem>
                      <SelectItem value="other">Other timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-[#250e62] font-medium mb-2">Preferred Contact Method</Label>
                  <RadioGroup
                    value={formData.contactMethod}
                    onValueChange={handleRadioChange}
                    className="flex space-x-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sms" id="sms" />
                      <Label htmlFor="sms">SMS</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email" />
                      <Label htmlFor="email">Email</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full bg-[#d0df00] hover:bg-opacity-90 text-[#250e62] font-bold">
                  Get My Free Quote
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
