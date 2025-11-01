import { Sparkles, Zap, Lightbulb, Target } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Creative Design",
      description: "Beautiful, functional designs that captivate and convert your audience.",
    },
    {
      icon: Zap,
      title: "Strategic Planning",
      description: "Data-driven strategies that align with your business goals and objectives.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions that set you apart from the competition.",
    },
    {
      icon: Target,
      title: "Brand Development",
      description: "Comprehensive brand strategy and identity that resonates with your market.",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Services</p>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold">What I Offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-background border border-border/50 rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <Icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
