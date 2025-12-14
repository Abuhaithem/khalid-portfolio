"use client"

import Image from "next/image"

export default function VideoShowcase() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">My Process</p>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold">Professional Video Editing Showcase</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
            Experience how I transform raw footage into compelling visual stories with precision and creativity
          </p>
        </div>

        <div className="relative py-20 flex justify-center items-center">
          {/* Golden Glow Background Effect */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div
              className="absolute w-96 h-96 bg-gradient-to-b from-yellow-500/30 via-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse"
              style={{ top: "-100px" }}
            />
          </div>

          {/* MacBook Pro Mockup Container */}
          <div className="relative max-w-4xl w-full px-4">
            {/* MacBook Pro */}
            <div className="perspective">
              <div
                className="relative"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(5deg)",
                }}
              >
                {/* Screen */}
                <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-t-3xl overflow-hidden shadow-2xl border-t border-l border-r border-gray-800">
                  {/* Notch */}
                  <div className="flex justify-center pt-3 pb-2 px-6 bg-black">
                    <div className="w-36 h-2 bg-black rounded-full border border-gray-700" />
                  </div>

                  {/* Screen Content */}
                  <div className="aspect-video bg-gray-950 relative overflow-hidden">
                    {/* Video Editing Interface */}
                    <div className="w-full h-full flex flex-col">
                      {/* Top Bar */}
                      <div className="h-12 bg-gray-900 border-b border-gray-800 flex items-center px-4 gap-2">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 text-center text-xs text-gray-400">Final Cut Pro - Khalid&apos;s Edit</div>
                      </div>

                      {/* Main Content Area */}
                      <div className="flex-1 flex">
                        {/* Sidebar */}
                        <div className="w-48 bg-gray-900 border-r border-gray-800 p-4 space-y-2 hidden sm:flex flex-col">
                          <div className="h-4 bg-gray-800 rounded w-24" />
                          <div className="h-32 bg-gray-800/50 rounded" />
                          <div className="h-32 bg-gray-800/50 rounded" />
                        </div>

                        {/* Video Preview and Timeline */}
                        <div className="flex-1 flex flex-col bg-gradient-to-b from-gray-950 to-gray-900">
                          {/* Video Preview */}
                          <div className="flex-1 flex items-center justify-center relative overflow-hidden border-b border-gray-800">
                            <Image
                              src="/professional-video-editing-software-interface-with.jpg"
                              alt="Professional video editing software interface - 4K video production workflow by Khalid Getachew"
                              width={1280}
                              height={720}
                              className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
                          </div>

                          {/* Timeline */}
                          <div className="h-20 bg-gray-900 border-t border-gray-800 p-2 flex gap-1">
                            <div className="h-full w-12 bg-gray-800 rounded" />
                            <div className="h-full w-16 bg-primary/40 rounded" />
                            <div className="h-full w-12 bg-gray-800 rounded" />
                            <div className="h-full w-20 bg-accent/30 rounded" />
                            <div className="h-full flex-1 bg-gray-800/30 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bezels and Stand */}
                <div className="bg-gradient-to-b from-gray-900 to-gray-950 h-3 rounded-b-2xl border-b border-l border-r border-gray-800" />

                {/* Laptop Base/Stand */}
                <div className="flex justify-center mt-1">
                  <div className="w-full max-w-xs h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="p-6 bg-card/50 border border-border/50 rounded-xl hover:border-primary/50 transition-colors duration-200 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg">
              4K
            </div>
            <h3 className="text-lg font-serif font-semibold">4K & Beyond</h3>
            <p className="text-sm text-muted-foreground">
              Professional-grade video editing supporting 4K, 6K, and even 8K resolution projects
            </p>
          </div>

          <div className="p-6 bg-card/50 border border-border/50 rounded-xl hover:border-primary/50 transition-colors duration-200 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-serif font-bold text-lg">
              ◆
            </div>
            <h3 className="text-lg font-serif font-semibold">Color Grading</h3>
            <p className="text-sm text-muted-foreground">
              Advanced color correction and grading to achieve the perfect visual mood and tone
            </p>
          </div>

          <div className="p-6 bg-card/50 border border-border/50 rounded-xl hover:border-primary/50 transition-colors duration-200 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg">
              ✦
            </div>
            <h3 className="text-lg font-serif font-semibold">VFX & Motion</h3>
            <p className="text-sm text-muted-foreground">
              Stunning visual effects and motion graphics that elevate your video content
            </p>
          </div>
        </div>

        {/* Bottom Section - Multiple Angles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold">Cutting-Edge Tools & Techniques</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-semibold">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Professional Workflow</p>
                  <p className="text-sm text-muted-foreground">Streamlined editing process for quick turnarounds</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-semibold">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Audio Design</p>
                  <p className="text-sm text-muted-foreground">Professional sound mixing and audio mastering</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-semibold">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Rapid Delivery</p>
                  <p className="text-sm text-muted-foreground">Fast turnaround times without compromising quality</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/video-editing-workstation-with-professional-monito.webp"
              alt="Professional video editing workstation with multi-monitor setup - high-end video production equipment"
              width={800}
              height={600}
              className="w-full rounded-2xl border border-border/50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
