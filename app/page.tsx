"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CertificationCard } from "@/components/certification-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Full-Stack Developer & UI/UX Designer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Aditya Raj
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              A passionate full-stack developer and UI/UX designer dedicated to crafting innovative and user-friendly
              web applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
              >
                <Link href="/projects">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/adityaraj161616" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/aditya-raj16/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:adityaraj1613@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img src="/images/profile-photo.jpg" alt="Aditya Raj" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I am a Computer Science student at O.P. Jindal University, passionate about full-stack development and
                  UI/UX design. I focus on creating user-friendly and scalable web applications.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Aditya Raj</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">adityaraj1613@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Ranchi, Jharkhand</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild className="bg-zinc-800 hover:bg-zinc-700 text-white">
                    <Link href="/resume" target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      View Resume
                    </Link>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="HTML" level={95} />
            <SkillBadge name="CSS" level={90} />
            <SkillBadge name="JavaScript" level={85} />
            <SkillBadge name="React.js" level={90} />
            <SkillBadge name="Bootstrap" level={80} />
            <SkillBadge name="TypeScript" level={75} />
            <SkillBadge name="Node.js" level={80} />
            <SkillBadge name="MongoDB" level={70} />
            <SkillBadge name="Mongoose" level={65} />
            <SkillBadge name="Python" level={70} />
            <SkillBadge name="SQL" level={60} />
            <SkillBadge name="Git" level={85} />
            <SkillBadge name="GitHub" level={90} />
            <SkillBadge name="VS Code" level={95} />
            <SkillBadge name="Figma" level={80} />
            <SkillBadge name="Postman" level={75} />
            <SkillBadge name="Android Studio" level={65} />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Certifications" subtitle="Professional credentials and achievements" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <CertificationCard
              title="HTML and CSS in depth"
              provider="Meta"
              date="Mar 13, 2025"
              credentialId="7AOH8O357C1J"
              verifyUrl="https://coursera.org/verify/7AOH8O357C1J"
              certificateImage="/certificates/html-css-cert.png"
            />
            <CertificationCard
              title="Advanced React"
              provider="Meta"
              date="Mar 13, 2025"
              credentialId="HPZNN7ACQHYF"
              verifyUrl="https://coursera.org/verify/HPZNN7ACQHYF"
              certificateImage="/certificates/react-cert.png"
            />
            <CertificationCard
              title="Principles of UX/UI Design"
              provider="Meta"
              date="Mar 26, 2025"
              credentialId="7SXCJ9RQ2BVR"
              verifyUrl="https://coursera.org/verify/7SXCJ9RQ2BVR"
              certificateImage="/certificates/ux-ui-cert.png"
            />
            <CertificationCard
              title="Create High-Fidelity Designs and Prototypes in Figma"
              provider="Google"
              date="Feb 26, 2025"
              credentialId="FVOHJAWU9ES4"
              verifyUrl="https://coursera.org/verify/FVOHJAWU9ES4"
              certificateImage="/certificates/figma-cert.png"
            />
            <CertificationCard
              title="Developing Back-End Apps with Node.js and Express"
              provider="IBM"
              date="Apr 6, 2025"
              credentialId="66VYESX58OWB"
              verifyUrl="https://coursera.org/verify/66VYESX58OWB"
              certificateImage="/certificates/nodejs-cert.png"
            />
            <CertificationCard
              title="Programming in Python"
              provider="Meta"
              date="Apr 22, 2025"
              credentialId="S4DT581I2JTE"
              verifyUrl="https://coursera.org/verify/S4DT581I2JTE"
              certificateImage="/certificates/python-cert.png"
            />
            <CertificationCard
              title="The Full Stack"
              provider="Meta"
              date="Apr 22, 2025"
              credentialId="ALTFUBGQ1H7H"
              verifyUrl="https://coursera.org/verify/ALTFUBGQ1H7H"
              certificateImage="/certificates/fullstack-cert.png"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <ProjectCard
              title="GaiaX – AI-Powered Virtual Assistant"
              description="Built a voice-controlled virtual assistant using HTML, CSS, and JavaScript, integrating Weather API, News API, and Gemini AI API for real-time information retrieval and AI-driven responses. Implemented speech recognition, smart command handling, and local storage for history management."
              tags={["HTML", "CSS", "JavaScript", "Weather API", "Gemini AI", "Speech Recognition"]}
              images={["/projects/gaiax-1.png", "/projects/gaiax-2.png"]}
              repoUrl="https://github.com/adityaraj161616/GaiaX-VirtualAssistant"
            />
            <ProjectCard
              title="Sydney Events Scraper – Web-Based Aggregation Tool"
              description="Developed a Node.js-based scraper using Cheerio and Axios to fetch and store Sydney event data in MongoDB. Created a React.js frontend to display events with filters, enhancing user navigation and data visibility."
              tags={["Node.js", "Cheerio", "Axios", "React.js", "MongoDB"]}
              images={["/projects/sydney-events-1.png", "/projects/sydney-events-2.png"]}
              repoUrl="https://github.com/adityaraj161616/SydneyEventSrapper"
            />
            <ProjectCard
              title="RailPoint – Smart Solutions for Modern Railways"
              description="Built a full-stack railway platform using HTML, CSS, JS, Node.js, and MongoDB for real-time train tracking and ticketing. Integrated dynamic features like user authentication, train tracking, ticket management, coach crowd status, optimizing railway operations for efficiency and ease of use."
              tags={["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]}
              images={["/projects/railpoint-1.png", "/projects/railpoint-2.png"]}
              repoUrl="https://github.com/adityaraj161616/Rail-system-full-stack"
            />
            <ProjectCard
              title="Epeolodies – Full-Stack eCommerce Website"
              description="Built a responsive eCommerce site with HTML, CSS, JS, Node.js, and MongoDB, supporting user auth, cart, and Payment Features. Implemented dynamic product filtering and modular backend routes for scalable and maintainable development."
              tags={["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]}
              images={["/projects/epeolodies-1.png", "/projects/epeolodies-2.png", "/projects/epeolodies-3.png"]}
              repoUrl="https://github.com/adityaraj161616/Epeolodies-E-commerce"
            />
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">adityaraj1613@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/aditya-raj16/</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/adityaraj161616</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Aditya</span>
              <span className="text-white">Raj</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">© {new Date().getFullYear()} Aditya Raj. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/adityaraj161616" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/aditya-raj16/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:adityaraj1613@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
