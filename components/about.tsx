import Image from "next/image"

export default function About() {
    const skills = [
      "Strategic Design",
      "Digital Innovation",
      "Project Management",
      "Creative Direction",
      "Problem Solving",
      "Brand Development",
      "Digital Strategy",
      "Team Leadership",
    ]
  
    return (
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">About Me</p>
            <h2 className="text-5xl sm:text-6xl font-serif font-bold">Transforming Ideas Into Impact</h2>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a creative professional based in Ethiopia with a passion for designing solutions that create
                meaningful connections between brands and their audiences.
              </p>
  
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 8 years of experience, I&apos;ve partnered with startups, enterprises, and organizations across
                diverse industries. My approach combines strategic thinking with creative innovation to deliver results
                that exceed expectations.
              </p>
  
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in the power of collaboration, continuous learning, and pushing creative boundaries. Every
                project is an opportunity to create something exceptional.
              </p>
  
              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-serif font-semibold">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-3 bg-background rounded-lg border border-border/50 text-sm font-medium hover:border-primary transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            <div className="space-y-6">
              <Image
                src="/creative-professional-workspace-ethiopia-modern-of.jpg"
                alt="Modern creative workspace in Ethiopia - Khalid Getachew professional environment"
                width={800}
                height={600}
                className="w-full rounded-2xl border border-border/50"
              />
  
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-background rounded-lg border border-border/50 space-y-2 hover:border-primary transition-colors duration-200">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-xl font-serif font-bold text-primary">Ethiopia</p>
                </div>
                <div className="p-6 bg-background rounded-lg border border-border/50 space-y-2 hover:border-primary transition-colors duration-200">
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="text-xl font-serif font-bold text-accent">Since 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  