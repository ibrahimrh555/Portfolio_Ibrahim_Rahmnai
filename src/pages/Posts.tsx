import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Filter, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: "L'ère de l'IA Générative dans le Web Design",
      excerpt: "Comment l'intelligence artificielle redéfinit la création d'interfaces en 2025, de la génération de composants au design prédictif.",
      date: "15 Jan 2025",
      readTime: "5 min",
      tags: ["IA", "Design", "Futur"],
      slug: "ia-web-design-2025",
      featured: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800"
    },
    {
      id: 2,
      title: "Performance React : Le Guide Ultime",
      excerpt: "Au-delà de memo() : techniques avancées pour des applications fluides à 60fps même sur des datasets massifs.",
      date: "10 Jan 2025",
      readTime: "8 min",
      tags: ["React", "Performance"],
      slug: "optimiser-react-2025",
      featured: true,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800"
    },
    {
      id: 3,
      title: "TypeScript 5.x : Les pépites cachées",
      excerpt: "Exploration des fonctionnalités méconnues qui vont rendre votre typage plus intelligent et votre code plus robuste.",
      date: "05 Jan 2025",
      readTime: "6 min",
      tags: ["TypeScript", "Code"],
      slug: "tips-typescript",
      featured: false,
    },
    {
      id: 4,
      title: "L'essor du développement 'Edge'",
      excerpt: "Pourquoi le déploiement au plus proche de l'utilisateur change la donne pour la latence et le SEO.",
      date: "01 Jan 2025",
      readTime: "7 min",
      tags: ["Infrastructure", "Edge"],
      slug: "edge-computing",
      featured: false,
    },
    {
      id: 5,
      title: "Design System : Plus qu'une librairie",
      excerpt: "Comment construire une culture du design qui aligne développeurs et designers sur le long terme.",
      date: "28 Déc 2024",
      readTime: "10 min",
      tags: ["Design", "Workflow"],
      slug: "culture-design-system",
      featured: false,
    },
    {
      id: 6,
      title: "Clean Architecture en Frontend",
      excerpt: "Maintenir une codebase saine sur des projets qui durent plusieurs années sans accumuler de dette technique.",
      date: "20 Déc 2024",
      readTime: "9 min",
      tags: ["Architecture", "Best Practices"],
      slug: "clean-architecture-frontend",
      featured: false,
    },
  ];

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* --- HERO SECTION BLOG --- */}
            <div className="mb-20 text-center md:text-left">             
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-display text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
              >
                INSIGHTS <span className="text-white/20 italic">& </span>  
                ARTICLES<span className="text-primary">.</span>
              </motion.h1>

            </div>

            {/* --- FEATURED ARTICLES (GRID) --- */}
            <section className="mb-24">
              <div className="flex items-center gap-2 mb-10">
                <TrendingUp className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-white/50">À la une</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                {featuredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <Link to={`/posts/${post.slug}`} className="block space-y-6">
                      <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          {post.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary">{tag}</span>
                          ))}
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">• {post.readTime}</span>
                        </div>
                        
                        <h3 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-white/40 leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm font-bold pt-2 group-hover:gap-4 transition-all">
                          LIRE L'ARTICLE <ArrowRight className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* --- REGULAR POSTS (LIST) --- */}
            <section>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white/50">Tous les articles</h2>
                <div className="flex gap-4">
                  <Filter className="h-4 w-4 text-white/20" />
                </div>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4"
              >
                {regularPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    className="group border-b border-white/5 hover:border-primary/30 transition-colors"
                  >
                    <Link to={`/posts/${post.slug}`} className="flex flex-col md:flex-row md:items-center justify-between py-8 gap-6">
                      <div className="max-w-2xl space-y-2">
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">{post.date}</span>
                        <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                          {post.title}
                        </h3>
                        <p className="text-white/40 text-sm line-clamp-1 italic">{post.excerpt}</p>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="hidden md:flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="border-white/10 text-[10px] text-white/40 uppercase">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                          <ArrowRight className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Posts;