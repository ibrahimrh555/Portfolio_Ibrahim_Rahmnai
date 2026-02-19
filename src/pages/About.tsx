import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code, Palette, Zap, Award, BookOpen, Heart } from "lucide-react";
import workspaceImg from "@/assets/workspace.jpg";
import { motion } from "framer-motion";

const About = () => {
  const images = [
  "public/image2.jpg",
  "public/image1.jpeg",
  "public/image3.jpg",
  "public/image4.jpg",
  "public/image5.jpg",
  "public/image6.jpg",
  "public/image7.jpg",
  "public/image8.jpg",
  "public/image9.jpg",
];
  const skills = [
    {
      icon: Code,
      title: "Développement",
      description: "Expert en React, TypeScript, Node.js et technologies modernes du web",
      tags: ["React", "TypeScript", "Node.js", "Next.js"],
    },
    {
      icon: Palette,
      title: "Design",
      description: "Création d'interfaces modernes, responsive et centrées sur l'utilisateur",
      tags: ["UI/UX", "Figma", "Tailwind CSS", "Design Systems"],
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimisation avancée et respect des meilleures pratiques de développement",
      tags: ["Optimization", "SEO", "Accessibility", "Testing"],
    },
  ];

  const values = [
    { icon: Award, title: "Excellence", desc: "Code de qualité et attention aux détails" },
    { icon: BookOpen, title: "Apprentissage", desc: "Veille technologique constante" },
    { icon: Heart, title: "Passion", desc: "Amour du craft et de l'innovation" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="mb-16">
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                À Propos
              </h1>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-muted-foreground animate-slide-up">
                  <p className="leading-relaxed">
                    Développeur <span className="text-primary font-semibold">passionné</span> par la création d'expériences web exceptionnelles.
                    Je combine design moderne et code propre pour donner vie à vos projets les plus ambitieux.
                  </p>
                  
                  <p className="leading-relaxed">
                    Avec plus de <span className="text-foreground font-semibold">5 années d'expérience</span> dans le développement web, 
                    je me spécialise dans la création d'applications React performantes, d'interfaces utilisateur élégantes 
                    et de solutions backend robustes.
                  </p>

                  <p className="leading-relaxed">
                    Mon approche privilégie la <span className="text-foreground font-semibold">qualité</span>, 
                    la <span className="text-foreground font-semibold">maintenabilité</span> et 
                    l'<span className="text-foreground font-semibold">expérience utilisateur</span>.
                  </p>
                </div>

                <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                  <img 
                    src={"public/2.png"} 
                    alt="Workspace de développeur"
                    className="relative rounded-3xl shadow-2xl border border-border/50 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-wrap justify-center gap-6 mt-16 mb-10 max-w-6xl px-4">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ rotate: (Math.random() - 0.5) * 10 }}
                  whileHover={{
                    rotate: 0,
                    scale: 1.05,
                    zIndex: 10,
                    transition: { duration: 0.3 },
                  }}
                  className="w-84 h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`photo-${index}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <br />
            {/* Values */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-bold mb-8 text-center">Mes Valeurs</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <value.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8 text-center">Expertise</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill.title}
                    className="p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 animate-slide-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <skill.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-secondary rounded-full border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
