import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "KSquaretech Consulting",
      location: "Gurugram, Haryana",
      period: "May 2023 – Present",
      highlights: [
        "Reduced database query times by 60% using Caffeine caching",
        "Built microservices handling thousands of daily transactions",
        "Integrated multiple third-party APIs including payment gateways",
      ],
      description: [
        "Contributed to multiple enterprise-level projects following Agile methodology, using Jira for sprint planning and collaboration",
        "Developed scalable microservices-based applications using Spring Boot, Java, and Angular",
        "Integrated third-party logistics APIs and built internal tools with ChatGPT AI for automated parsing",
        "Designed secure RESTful APIs and microservices with AWS S3 and Parameter Store configuration",
        "Automated notification systems via SendGrid and implemented Razorpay Payment Gateway with HMAC verification",
      ],
      technologies: ["Java", "Spring Boot", "Angular", "AWS", "Redis", "Caffeine", "Razorpay", "SendGrid"],
    },
    {
      title: "Front-End Developer Intern",
      company: "Techmates",
      location: "Remote",
      period: "December 2022 – March 2023",
      highlights: [
        "Built responsive interfaces with React and TypeScript",
        "Collaborated on UI/UX improvements using modern design systems",
      ],
      description: [
        "Developed interactive and responsive user interfaces using ReactJS and TypeScript",
        "Collaborated on UI/UX improvements using Figma and design systems like Blueprint.js",
        "Worked with modern development tools and version control systems",
      ],
      technologies: ["React", "TypeScript", "HTML", "CSS", "JavaScript", "Figma", "Blueprint.js"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My professional journey building scalable applications and solving complex problems
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-slate-900 mb-1">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</p>

                    <div className="space-y-1 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end gap-2 lg:text-right">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
