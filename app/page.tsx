import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TrustIndicators from "@/components/trust-indicators"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import BlogPreview from "@/components/blog-preview"
import CtaSection from "@/components/cta-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustIndicators />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Faq />
      <BlogPreview />
      <CtaSection />
      <ContactForm />
      <Footer />
      <Chatbot />
      <BackToTop />
    </main>
  )
}
