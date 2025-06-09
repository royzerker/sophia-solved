import Link from "next/link"
import { Mail, MessageSquare, Shield, FileText, Facebook, Twitter, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const services = [
    { name: "Single Course", href: "#" },
    { name: "Course Bundle", href: "#" },
    { name: "Accelerator Package", href: "#" },
    { name: "Custom Solutions", href: "#" },
  ]

  const resources = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  const contactLinks = [
    {
      icon: <Mail className="h-4 w-4 text-[#d0df00]" />,
      name: "help@sophiasolved.com",
      href: "mailto:help@sophiasolved.com",
    },
    { icon: <MessageSquare className="h-4 w-4 text-[#d0df00]" />, name: "Live Chat", href: "#" },
    { icon: <Shield className="h-4 w-4 text-[#d0df00]" />, name: "Privacy Policy", href: "#" },
    { icon: <FileText className="h-4 w-4 text-[#d0df00]" />, name: "Terms of Service", href: "#" },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, href: "#" },
    { icon: <Twitter className="h-4 w-4" />, href: "#" },
    { icon: <Instagram className="h-4 w-4" />, href: "#" },
  ]

  return (
    <footer className="bg-[#250e62] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#d0df00] flex items-center justify-center mr-3">
                <span className="text-[#250e62] font-bold">SS</span>
              </div>
              <h3 className="font-bold text-xl">Sophia Solved</h3>
            </div>
            <p className="opacity-80">
              The trusted solution for completing Sophia.org courses quickly and confidentially.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="opacity-80 hover:opacity-100 hover:text-[#d0df00] transition duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.href}
                    className="opacity-80 hover:opacity-100 hover:text-[#d0df00] transition duration-300"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              {contactLinks.map((contact, index) => (
                <li key={index} className="flex items-center">
                  {contact.icon}
                  <Link
                    href={contact.href}
                    className="opacity-80 hover:opacity-100 hover:text-[#d0df00] transition duration-300 ml-2"
                  >
                    {contact.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20" />

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 mb-4 md:mb-0">&copy; 2023 Sophia Solved. All rights reserved.</p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-8 h-8 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
