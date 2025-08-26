import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "Angular", level: 85 },
        { name: "React.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Material UI", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "REST APIs", level: 85 },
        { name: "Microservices", level: 80 },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "Git", level: 85 },
        { name: "CI/CD", level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-card-foreground text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-card-foreground mb-6">Additional Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">🗄️</div>
                  <div className="text-sm font-medium text-foreground">MongoDB</div>
                  <div className="text-sm font-medium text-foreground">MySQL</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="text-sm font-medium text-foreground">Redis</div>
                  <div className="text-sm font-medium text-foreground">Caffeine</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-sm font-medium text-foreground">Figma</div>
                  <div className="text-sm font-medium text-foreground">Bootstrap</div>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-sm font-medium text-foreground">ChatGPT</div>
                  <div className="text-sm font-medium text-foreground">AI Integration</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
