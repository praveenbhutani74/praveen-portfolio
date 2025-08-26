"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 animate-pulse opacity-50"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`flex items-center gap-2 mb-6 justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <MapPin className="h-4 w-4 text-slate-500 animate-bounce" />
          <span className="text-sm text-slate-600">Gurgaon • Available for remote work</span>
        </div>

        <div
          className={`text-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            <span className="inline-block animate-pulse bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Hi, I'm Praveen
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6 font-medium animate-fade-in-up">Full Stack Developer</p>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            I build scalable web applications using modern technologies like Java, Spring Boot, Angular, and React.
            Currently working at KSquaretech Consulting with 2+ years of experience in enterprise-level projects.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            <a href="#projects" className="flex items-center gap-2">
              View My Work
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            <a href="mailto:bhutanipraveen74@gmail.com" className="flex items-center gap-2">
              Get In Touch
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div
          className={`flex justify-center space-x-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://github.com/praveenbhutani74"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-all duration-300 group transform hover:scale-110"
          >
            <Github className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/praveen-bhutani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all duration-300 group transform hover:scale-110"
          >
            <Linkedin className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
