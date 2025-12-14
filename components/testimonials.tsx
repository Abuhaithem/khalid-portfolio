import Image from "next/image"
import { Star } from "lucide-react"
import { testimonials } from "@/config/testimonials"

export default function Testimonials() {

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</p>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold">What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border/50 rounded-lg space-y-4 hover:border-primary transition-colors duration-300"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.name} - ${testimonial.role} testimonial for Khalid Getachew`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
