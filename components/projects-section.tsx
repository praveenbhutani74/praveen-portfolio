import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI Resume Parser Web App",
      description:
        "Built a full-stack AI-powered resume parser with OCR support for PDF/DOCX/image files and structured data extraction. Features JWT authentication, AWS S3 + CloudFront integration, and dynamic UI for preview/edit/export functionality.",
      technologies: ["Spring Boot", "JWT", "Spring Security", "Angular", "React", "AWS S3", "CloudFront", "ChatGPT"],
      date: "July 2025",
      features: [
        "OCR support for multiple file formats",
        "AI-powered data extraction",
        "Secure file upload with pre-signed URLs",
        "JWT authentication system",
        "Dynamic preview and edit interface",
      ],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Shopping Stock (E-commerce Platform)",
      description:
        "Developed a comprehensive MERN stack e-commerce platform with product browsing, filtering, cart management, and secure checkout. Includes user authentication, password reset functionality, and payment integration.",
      technologies: ["Node.js", "Express.js", "React.js", "Redux", "MongoDB", "Cloudinary", "Stripe", "Chart.js"],
      date: "June 2022",
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "User authentication and profile management",
        "Admin dashboard with analytics",
      ],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-card-foreground mb-2">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-card-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
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
