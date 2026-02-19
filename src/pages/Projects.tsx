import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "This project involves creating an e-commerce application dedicated to selling clothing, developed with Laravel, HTML, CSS, and MYSQL. It allows sellers to manage their products and orders, and users to browse, purchase, and track their purchases online.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["HTML", "CSS", "PHP", "Laravel", "MYSQL"],
      github: "https://github.com/ibrahimrh555/E-Commerce_Platform",
      demo: "",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30"
    },
    {
      title: "Smart Home Water Consumption Monitoring System",
      description: "A smart, scalable system designed to monitor domestic water consumption in real time. Its goal is to raise awareness among users about their daily usage and encourage water savings based on reliable data.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["React.ts", "Taillwind", "Django", "MYSQL", "ESP32"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/30"
    },
    {
      title: "Social Media Dashboard",
      description: "Tableau de bord analytique pour médias sociaux avec visualisation de données, planification de posts et statistiques en temps réel.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["React", "D3.js", "API", "Analytics"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-green-500/20 to-emerald-500/20 border-green-500/30"
    },
    {
      title: "Portfolio Generator",
      description: "Outil de création de portfolios personnalisés avec éditeur drag-and-drop, thèmes personnalisables et export optimisé pour le web.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Node.js", "MongoDB", "AI"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-orange-500/20 to-red-500/20 border-orange-500/30"
    },
    {
      title: "AI Chat Assistant",
      description: "Assistant de chat intelligent avec IA pour le support client, capable de comprendre le contexte et de fournir des réponses personnalisées.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["OpenAI", "Python", "FastAPI", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-violet-500/20 to-indigo-500/20 border-violet-500/30"
    },
    {
      title: "Fitness Tracker",
      description: "Application mobile-first de suivi fitness avec plans d'entraînement personnalisés, tracking nutritionnel et intégration wearables.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "Health API", "Charts"],
      github: "https://github.com",
      demo: "https://demo.com",
      color: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16 text-center">
                
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                My Projects
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
                Discover my recent achievements, from modern web applications to innovative solutions
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-full bg-gradient-to-br ${project.color} backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4">
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1 group/btn"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
