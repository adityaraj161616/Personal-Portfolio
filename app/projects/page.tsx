"use client"

import { ArrowLeft, Github, Calendar, Code } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const projects = [
    {
      title: "GaiaX – AI-Powered Virtual Assistant",
      description:
        "Built a voice-controlled virtual assistant using HTML, CSS, and JavaScript, integrating Weather API, News API, and Gemini AI API for real-time information retrieval and AI-driven responses. Implemented speech recognition, smart command handling, and local storage for history management.",
      longDescription:
        "GaiaX is an advanced AI-powered virtual assistant that combines voice recognition technology with multiple APIs to provide users with real-time information and intelligent responses. The project showcases modern web development techniques and API integration skills.",
      tags: ["HTML", "CSS", "JavaScript", "Weather API", "Gemini AI", "Speech Recognition"],
      images: ["/projects/gaiax-1.png", "/projects/gaiax-2.png"],
      repoUrl: "https://github.com/adityaraj161616/GaiaX-VirtualAssistant",
      category: "AI & Machine Learning",
      date: "January 2025",
      status: "Completed",
      features: [
        "Voice-controlled interface with speech recognition",
        "Real-time weather updates via Weather API",
        "Latest news integration through News API",
        "AI-powered responses using Gemini AI",
        "Local storage for conversation history",
        "Smart command processing and routing",
      ],
    },
    {
      title: "Sydney Events Scraper – Web-Based Aggregation Tool",
      description:
        "Developed a Node.js-based scraper using Cheerio and Axios to fetch and store Sydney event data in MongoDB. Created a React.js frontend to display events with filters, enhancing user navigation and data visibility.",
      longDescription:
        "A comprehensive web scraping solution that aggregates event data from multiple sources in Sydney, providing users with a centralized platform to discover local events with advanced filtering capabilities.",
      tags: ["Node.js", "Cheerio", "Axios", "React.js", "MongoDB"],
      images: ["/projects/sydney-events-1.png", "/projects/sydney-events-2.png"],
      repoUrl: "https://github.com/adityaraj161616/SydneyEventSrapper",
      category: "Web Scraping",
      date: "May 2025",
      status: "Completed",
      features: [
        "Automated web scraping with Cheerio and Axios",
        "MongoDB database for efficient data storage",
        "React.js frontend with modern UI components",
        "Advanced filtering and search functionality",
        "Real-time data updates and synchronization",
        "Responsive design for all device types",
      ],
    },
    {
      title: "RailPoint – Smart Solutions for Modern Railways",
      description:
        "Built a full-stack railway platform using HTML, CSS, JS, Node.js, and MongoDB for real-time train tracking and ticketing. Integrated dynamic features like user authentication, train tracking, ticket management, coach crowd status, optimizing railway operations for efficiency and ease of use.",
      longDescription:
        "RailPoint is a comprehensive railway management system that modernizes train operations with real-time tracking, digital ticketing, and crowd management features, enhancing both operational efficiency and passenger experience.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      images: ["/projects/railpoint-1.png", "/projects/railpoint-2.png"],
      repoUrl: "https://github.com/adityaraj161616/Rail-system-full-stack",
      category: "Full-Stack Web Application",
      date: "January 2025 - Present",
      status: "In Progress",
      features: [
        "Real-time train tracking and location updates",
        "Digital ticketing system with QR codes",
        "User authentication and profile management",
        "Coach crowd status monitoring",
        "Admin dashboard for railway operations",
        "Mobile-responsive design for passengers",
      ],
    },
    {
      title: "Epeolodies – Full-Stack eCommerce Website",
      description:
        "Built a responsive eCommerce site with HTML, CSS, JS, Node.js, and MongoDB, supporting user auth, cart, and Payment Features. Implemented dynamic product filtering and modular backend routes for scalable and maintainable development.",
      longDescription:
        "Epeolodies is a modern eCommerce platform featuring a complete online shopping experience with secure payment processing, inventory management, and a user-friendly interface designed for optimal conversion rates.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      images: ["/projects/epeolodies-1.png", "/projects/epeolodies-2.png", "/projects/epeolodies-3.png"],
      repoUrl: "https://github.com/adityaraj161616/Epeolodies-E-commerce",
      category: "E-Commerce",
      date: "May 2025",
      status: "Completed",
      features: [
        "Complete user authentication system",
        "Shopping cart with persistent storage",
        "Secure payment gateway integration",
        "Dynamic product filtering and search",
        "Admin panel for inventory management",
        "Order tracking and management system",
      ],
    },
  ]

  const categories = ["All", "AI & Machine Learning", "Web Scraping", "Full-Stack Web Application", "E-Commerce"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white">
      {/* Navigation */}
      <div className="bg-zinc-900/50 backdrop-blur-sm border-b border-zinc-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-purple-400" />
            <span className="font-bold text-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Projects
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              A showcase of my technical skills and creative solutions. Each project represents a unique challenge and
              demonstrates my growth as a full-stack developer.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="bg-zinc-800/50 hover:bg-purple-600/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  images={project.images}
                  repoUrl={project.repoUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Project Information */}
      <section className="py-16">
        <div className="container">
          <SectionHeading title="Project Details" subtitle="Deep dive into each project" />

          <div className="mt-16 space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25"></div>

                <div className="relative">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                          {project.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-sm text-zinc-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                        <Badge variant="secondary" className="bg-zinc-700/50">
                          {project.category}
                        </Badge>
                      </div>

                      <p className="text-zinc-300 mb-6 leading-relaxed">{project.longDescription}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-purple-400">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-zinc-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-zinc-700/50 text-zinc-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-1/3">
                      <div className="space-y-4">
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                        >
                          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                          </Link>
                        </Button>

                        <div className="bg-zinc-900/50 rounded-lg p-4">
                          <h5 className="font-semibold mb-2 text-purple-400">Project Stats</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Technologies:</span>
                              <span className="text-white">{project.tags.length}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Category:</span>
                              <span className="text-white">{project.category}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Status:</span>
                              <span className={project.status === "Completed" ? "text-green-400" : "text-yellow-400"}>
                                {project.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-zinc-800">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. Let's connect and see how we can
              create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
              >
                <Link href="/#contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
              >
                <Link href="/resume" target="_blank">
                  View Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
