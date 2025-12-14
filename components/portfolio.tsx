"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/config/portfolio"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "video", label: "Video" },
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
            <a
              key={project.id}
              href={project.youtubeUrl || "#"}
              target={project.youtubeUrl ? "_blank" : undefined}
              rel={project.youtubeUrl ? "noopener noreferrer" : undefined}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-card border border-border/50">
                {project.youtubeId ? (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                      alt={`${project.title} - ${project.description} by Khalid Getachew`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <svg
                          className="w-8 h-8 text-primary-foreground ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                      <ArrowUpRight className="text-white" size={24} />
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={("image" in project && project.image ? project.image : "/placeholder.svg") as string}
                      alt={`${project.title} - ${project.description} by Khalid Getachew`}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                      <ArrowUpRight className="text-white" size={24} />
                    </div>
                  </>
                )}
              </div>
              <h3 className="text-lg font-serif font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
