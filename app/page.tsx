"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import VideoShowcase from "@/components/video-showcase"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <Hero />
      <About />
      <VideoShowcase />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
