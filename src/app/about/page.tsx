import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/layout/Contact";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - Image & Quick Facts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
              <Image 
                src="/profile.jpeg" 
                alt="Athul H Ambadi Portrait"
                fill
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
                priority
              />
              <div className="absolute inset-0 bg-zinc-950/20 mix-blend-overlay" />
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 space-y-4">
              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Name</p>
                <p className="text-white font-medium">Athul H Ambadi</p>
              </div>
              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Title</p>
                <p className="text-white font-medium">Generative AI Specialist | AI Video Content Creator</p>
              </div>
              <div>
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Location</p>
                <p className="text-white font-medium">Bengaluru, India</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 space-y-16 lg:pt-8">
            
            {/* Bio Section */}
            <section className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Blending <span className="text-accent">culture</span>, motion, and generative AI.
              </h1>
              
              <div className="text-lg text-zinc-300 leading-relaxed font-light space-y-6">
                <p>
                  Creative AI content creator with 4+ years of experience specialising in AI-generated video production, motion graphics, visual poster design, and prompt engineering. 
                </p>
                <p>
                  Developed and launched a comprehensive AI course for Tiju&apos;s Academy covering generative AI tools, creative workflows, and prompt engineering. Skilled in building end-to-end AI content pipelines for social media, campaign creatives, digital advertising, and cinematic brand storytelling.
                </p>
                <p className="p-6 border-l-2 border-accent bg-accent/5 text-zinc-200 text-base italic">
                  Beyond the digital canvas, I have a deep-rooted background in performing arts and Kolkali training. This cultural depth heavily influences my rhythm, pacing, and storytelling approach in motion design and visual creation.
                </p>
              </div>
            </section>

            {/* Core Skills */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-zinc-700" /> Core Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "AI Video & Poster Creation", "Prompt Engineering", "Creative Direction",
                  "Storyboarding", "Video Editing", "Content Automation",
                  "Copywriting", "SEO Strategy", "Digital Campaign Analytics",
                  "Cross-Team Collaboration"
                ].map((skill, index) => (
                  <span key={index} className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience Timeline */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-zinc-700" /> Experience
              </h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                
                {/* Timeline Items */}
                {[
                  { role: "Generative AI Specialist", company: "Tiju's Academy", period: "Jul 2025 – Present" },
                  { role: "Copywriter, Creative Ads Team", company: "Flipkart", period: "May 2024 – Jun 2025" },
                  { role: "Content Strategist", company: "Prowiden Overseas", period: "Apr 2023 – Mar 2024" },
                  { role: "SEO Content Writer", company: "Mediacle Technologies", period: "Jul 2021 – Mar 2023" },
                  { role: "Freelance Content Writer", company: "Cricmonks / Karobargain / Insidemena", period: "Various" },
                  { role: "Content Writer & Editor", company: "Hornbill Group", period: "Aug 2020 – Jun 2021" },
                ].map((exp, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-zinc-950 bg-zinc-700 group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" />
                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 group-hover:border-zinc-700 transition-colors">
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-white text-lg">{exp.role}</h3>
                        <span className="text-accent text-sm font-medium">{exp.company}</span>
                        <time className="text-sm text-zinc-500 mt-2 font-mono">{exp.period}</time>
                      </div>
                    </div>
                  </div>
                ))}
                
              </div>
            </section>

          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}
