import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Code, Coffee } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Praveen Bhutani</h3>
                  <p className="text-slate-600 text-sm">Full Stack Developer</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>Gurgaon</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>+91 9996297170</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Coffee className="h-4 w-4 flex-shrink-0" />
                    <span>Available for remote work</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">My Journey</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with over 2 years of hands-on experience building enterprise-level
                applications. Currently working at KSquaretech Consulting, I've contributed to multiple projects that
                serve thousands of users.
              </p>
              <p className="text-slate-700 leading-relaxed">
                My expertise spans the entire development stack - from crafting responsive user interfaces with React
                and Angular to building robust backend services with Java and Spring Boot. I'm particularly passionate
                about performance optimization and have achieved significant improvements like reducing database query
                times by 60% through smart caching strategies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">What I Bring</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-2">Technical Excellence</h4>
                  <p className="text-sm text-slate-600">
                    Strong foundation in Java, Spring Boot, React, and cloud technologies with AWS
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-2">Problem Solving</h4>
                  <p className="text-sm text-slate-600">
                    Experience with complex integrations, payment gateways, and performance optimization
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-2">Team Collaboration</h4>
                  <p className="text-sm text-slate-600">
                    Agile methodology experience with tools like Jira for project management
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-2">Continuous Learning</h4>
                  <p className="text-sm text-slate-600">
                    Always exploring new technologies and best practices in software development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
