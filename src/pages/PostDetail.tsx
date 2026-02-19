import Navigation from "@/components/Navigation";
import { useParams, Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  ChevronRight,
  Twitter,
  Linkedin,
  Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PostDetail = () => {
  const { slug } = useParams();

  // Simulation de données (Idéalement, cela viendrait d'une API ou d'un fichier CMS)
  const post = {
    title: "L'ère de l'IA Générative dans le Web Design",
    category: "IA & DESIGN",
    date: "15 Janvier 2025",
    readTime: "5 min",
    author: {
      name: "Ibrahim",
      role: "Développeur Fullstack",
      avatar: "https://github.com/shadcn.png"
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    content: `
      <p className="text-xl text-white/60 leading-relaxed mb-8">
        L'intelligence artificielle n'est plus une simple promesse futuriste. En 2025, elle est devenue le collaborateur invisible de chaque designer et développeur web, transformant radicalement notre façon de concevoir des interfaces.
      </p>
      
      <h2 className="text-3xl font-bold mb-6 text-white">Le passage du design statique au design génératif</h2>
      <p className="mb-6 text-white/50 leading-relaxed">
        Auparavant, le design d'interface consistait à prévoir chaque état manuellement. Aujourd'hui, grâce aux modèles de diffusion et aux LLM spécialisés dans l'UI, nous passons à une ère où l'interface peut s'adapter en temps réel aux besoins spécifiques de l'utilisateur.
      </p>

      <div className="my-12 p-8 border-l-4 border-primary bg-white/5 rounded-r-2xl italic text-xl text-white/80">
        "L'IA ne remplacera pas le designer, mais le designer qui utilise l'IA remplacera celui qui ne l'utilise pas."
      </div>

      <h2 className="text-3xl font-bold mb-6 text-white">Optimisation du workflow</h2>
      <p className="mb-6 text-white/50 leading-relaxed">
        La génération de composants React à partir d'un simple prompt ou d'un schéma dessiné à la main est désormais une réalité. Des outils permettent de transformer une intention en code prêt pour la production en quelques secondes, laissant plus de temps pour l'architecture et l'expérience utilisateur globale.
      </p>
    `
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-primary/30">
      <Navigation />

      <main className="pt-32 pb-24">
        <article className="container mx-auto px-4">
          
          {/* --- HEADER DE L'ARTICLE --- */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/posts" 
                className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Retour au blog
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary/10 text-primary border-none uppercase tracking-widest text-[10px]">
                  {post.category}
                </Badge>
                <span className="text-white/20 text-sm">•</span>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
                {post.title}
              </h1>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 border-y border-white/10">
                <div className="flex items-center gap-4">
                  <img src={post.author.avatar} alt="" className="w-12 h-12 rounded-full grayscale" />
                  <div>
                    <p className="font-bold">{post.author.name}</p>
                    <p className="text-sm text-white/40">{post.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white/40 text-sm mr-4">
                    <Clock className="h-4 w-4" />
                    {post.readTime} de lecture
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-primary hover:text-black">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-primary hover:text-black">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-primary hover:text-black">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- IMAGE PRINCIPALE --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto mb-20 aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
            />
          </motion.div>

          {/* --- CORPS DE L'ARTICLE --- */}
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose prose-invert prose-primary max-w-none"
            />

            {/* --- TAGS & FOOTER ARTICLE --- */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-3">
              {["Intelligence Artificielle", "Productivité", "Interface", "Code"].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-sm text-white/40 hover:text-primary hover:bg-primary/5 transition-all cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PostDetail;