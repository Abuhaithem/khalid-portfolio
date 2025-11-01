"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Digital Platform",
      category: "design",
      description: "Complete digital transformation project",
      image: "/modern-digital-platform.png",
    },
    {
      id: 2,
      title: "Brand Identity",
      category: "branding",
      description: "Full brand identity and guidelines",
      image: "/creative-brand-identity-modern.jpg",
    },
    {
      id: 3,
      title: "Mobile App",
      category: "design",
      description: "User-centered mobile application",
      image: "/mobile-app-design-interface.jpg",
    },
    {
      id: 4,
      title: "Marketing Campaign",
      category: "strategy",
      description: "Integrated digital marketing strategy",
      image: "/marketing-campaign-digital-strategy.jpg",
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      category: "design",
      description: "Full-featured online marketplace",
      image: "/ecommerce-platform-modern.jpg",
    },
    {
      id: 6,
      title: "Corporate Identity",
      category: "branding",
      description: "Enterprise brand development",
      image: "/corporate-identity-professional.jpg",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "design", label: "Design" },
    { id: "branding", label: "Branding" },
    { id: "strategy", label: "Strategy" },
  ]

  const filtered = selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="space-y-4 mb-8">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Featured Work</p>
            <h2 className="text-5xl sm:text-6xl font-serif font-bold">Selected Projects</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:border-primary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-card border border-border/50">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - ${project.description} by Khalid Getachew`}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <ArrowUpRight className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-serif font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
