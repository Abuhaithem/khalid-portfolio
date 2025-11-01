import Image from "next/image"

export default function Hero() {
    return (
      <section id="home" className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <p className="text-sm font-medium text-primary uppercase tracking-wider">Welcome to my portfolio</p>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold leading-tight text-balance">
                  Khalid Getachew
                </h1>
              </div>
  
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl font-serif text-muted-foreground leading-relaxed text-balance">
                  Creative professional from Ethiopia, crafting digital experiences that inspire and engage.
                </p>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Specializing in innovative design, strategic thinking, and transforming ideas into impactful realities.
                </p>
              </div>
  
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a
                  href="#work"
                  className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-200 text-center group"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-200 text-center"
                >
                  Get In Touch
                </a>
              </div>
  
              {/* Stats */}
              <div className="flex gap-8 pt-12 border-t border-border">
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-accent">8+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
  
            {/* Image Section */}
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
                <Image
                  src="/professional-video-editor-khalid-getachew-working-.jpg"
                  alt="Khalid Getachew - Video Editor and Creative Professional working in Ethiopia"
                  width={800}
                  height={800}
                  className="relative w-full aspect-square object-cover rounded-2xl border border-border/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  