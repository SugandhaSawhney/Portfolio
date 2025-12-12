import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ExternalLink, 
  Code2, 
  Brain, 
  Database, 
  Terminal,
  Trophy,
  Download,
  ChevronDown,
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
  Globe,
  Award,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SkillBar } from "@/components/ui/skill-bar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/ui/logo";
import { DefiningTraits } from "@/components/ui/defining-traits";
import heroBg from "@assets/generated_images/soft_abstract_dark_gradient_background_with_grain_texture.png";
import projectBg from "@assets/generated_images/futuristic_holographic_project_interface_card_background.png";
import resumeFile from "@assets/SugandhaSawhney_Resume_SoftEng_1765560873278.pdf";
import { useState, useEffect } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${isScrolled ? "glass scrolled" : "glass"}`}>
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="default" 
            size="sm" 
            className="hidden md:flex rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            onClick={() => window.open(resumeFile, "_blank")}
          >
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 overflow-hidden">
        {/* Background */}
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-30 dark:opacity-20 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="px-6 py-2 rounded-full text-xs font-medium uppercase tracking-wider border border-primary/20 bg-background/50 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3 h-3 mr-2 text-primary animate-pulse" />
              Portfolio of Sugandha Sawhney
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Code with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-blue-500 animate-gradient-x">Purpose</span>.
            <br />
            Create <span className="relative inline-block text-foreground">
              Impact.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
          >
            Engineering scalable solutions where technology meets human potential. 
            Blending <span className="text-foreground font-medium">AI innovation</span> with a growth mindset.
          </motion.p>

          <DefiningTraits />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-10 w-full justify-center"
          >
            <Button size="lg" className="rounded-full h-14 px-10 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300" onClick={() => scrollToSection("projects")}>
              View Featured Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-14 px-10 text-base border-border bg-background/50 hover:bg-card hover:text-primary hover:-translate-y-1 transition-all duration-300" onClick={() => scrollToSection("contact")}>
              Let's Connect
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer p-3 rounded-full hover:bg-white/5 transition-colors"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" className="relative py-24">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="md:col-span-5 lg:col-span-5 space-y-8 sticky top-32">
            <div className="inline-block p-3 rounded-2xl bg-primary/10 mb-2">
              <Logo />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              The Mindset <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Behind The Code</span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a 2nd-year B.Tech Information Technology student at <span className="text-foreground font-semibold border-b border-primary/30 hover:border-primary transition-colors cursor-default">IGDTUW</span>.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 py-4 my-6 italic text-foreground text-lg font-serif bg-card/30 rounded-r-2xl pr-6 shadow-sm">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </blockquote>

              <p>
                My journey is driven by a simple belief: <span className="text-foreground font-medium">"Growth happens outside the comfort zone."</span> Whether I'm fine-tuning LLMs or leading a community of hundreds, I approach every challenge with curiosity.
              </p>
            </div>
            
            <div className="flex gap-3 pt-2">
              {[
                { icon: Linkedin, link: "https://linkedin.com/in/sugandha-sawhney-574072327" },
                { icon: Github, link: "https://github.com/SugandhaSawhney" },
                { icon: Code2, link: "https://leetcode.com/u/sugandha126/" },
                { icon: Mail, link: "mailto:sawhneysugandha580@gmail.com" }
              ].map((social, i) => (
                <Button 
                  key={i}
                  variant="outline" 
                  size="icon" 
                  className="rounded-xl w-12 h-12 border-border bg-background hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300 hover:-translate-y-1 shadow-sm" 
                  onClick={() => window.open(social.link, "_blank")}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-7 space-y-8">
             <div className="bg-card/40 p-8 rounded-3xl border border-border/50 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Terminal className="h-5 w-5 text-primary" /> 
                </div>
                Technical Arsenal
              </h3>
              
              <div className="space-y-4">
                <SkillBar skill="C++" level={75} delay={0.1} />
                <SkillBar skill="Python" level={85} delay={0.2} />
                <SkillBar skill="Generative AI & Prompt Engineering" level={80} delay={0.3} />
                <SkillBar skill="SQL" level={75} delay={0.4} />
                <SkillBar skill="React.js & JavaScript" level={72} delay={0.5} />
              </div>
              
              <Separator className="my-8 opacity-50" />
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-foreground flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Database className="w-4 h-4 text-primary" /> Core Concepts
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2.5">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />DSA (In Progress)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />DBMS</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />OOPs</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-foreground flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Brain className="w-4 h-4 text-primary" /> Tools & Tech
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "VS Code", "Streamlit", "Colab", "LangChain", "Figma"].map(tool => (
                      <Badge key={tool} variant="outline" className="bg-background/50 hover:bg-primary/10 transition-colors cursor-default">{tool}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-transparent p-8 rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-500">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                 <div className="p-2 bg-primary/10 rounded-lg">
                   <GraduationCap className="w-5 h-5 text-primary" />
                 </div>
                 Education
               </h3>
               
               <div className="space-y-8 relative before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-transparent">
                 <div className="relative pl-8 group">
                    <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-background bg-primary z-10 group-hover:scale-125 transition-transform" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <span className="font-bold text-lg group-hover:text-primary transition-colors">IGDTUW, Delhi</span>
                      <Badge variant="secondary" className="font-mono text-xs w-fit mt-1 sm:mt-0">GPA: 9.29</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">B.Tech Information Technology (2024-2028)</p>
                 </div>
                 
                 <div className="relative pl-8 group">
                    <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-background bg-muted-foreground z-10 group-hover:bg-primary transition-colors" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <span className="font-medium group-hover:text-primary transition-colors">Khemo Devi Public School</span>
                      <Badge variant="secondary" className="font-mono text-xs w-fit mt-1 sm:mt-0">86.4%</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Class XII (CBSE) | 2022-2024</p>
                 </div>

                 <div className="relative pl-8 group">
                    <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-background bg-muted-foreground z-10 group-hover:bg-primary transition-colors" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <span className="font-medium group-hover:text-primary transition-colors">Sacred Heart Convent</span>
                      <Badge variant="secondary" className="font-mono text-xs w-fit mt-1 sm:mt-0">98%</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Class X (CBSE)</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-secondary/30 relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
           <img src={projectBg} alt="Tech Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-0" />
        
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10 px-4">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 transition-colors rounded-full px-4 py-1.5 text-sm uppercase tracking-widest font-bold">Featured Work</Badge>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Innovation in Action</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing solutions that solve real-world problems through code and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 max-w-7xl mx-auto px-4">
          {/* Nutrilia */}
          <Card className="glass-card border-white/5 bg-card/40 overflow-hidden flex flex-col h-full group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20 group">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 backdrop-blur-md">Building Now</Badge>
              </div>
              <Brain className="absolute -right-4 -bottom-4 w-32 h-32 text-green-500/10 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <h3 className="text-4xl font-heading font-black text-white/5 tracking-widest uppercase">Nutrilia</h3>
              </div>
            </div>
            
            <CardHeader className="relative -mt-12 z-20 pb-2">
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-green-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-white" />
               </div>
              <CardTitle className="text-2xl font-heading font-bold">Nutrilia</CardTitle>
              <CardDescription className="text-sm font-medium text-green-400">AI-Powered Holistic Health Platform</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6 pb-2">
              <p className="text-muted-foreground text-sm leading-relaxed">
                A revolutionary platform integrating organic nutrition, Ayurvedic wisdom, and modern medical science. Offers personalized diet charts and AI-driven wellness insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-background/50 text-xs border-green-500/20 text-green-300">AI/ML</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs border-green-500/20 text-green-300">HealthTech</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs border-green-500/20 text-green-300">Ayurveda</Badge>
              </div>
            </CardContent>
            <CardFooter className="pt-6 border-t border-white/5">
              <Button variant="ghost" className="w-full justify-between group/btn disabled:opacity-50 h-auto py-2 px-0 hover:bg-transparent hover:text-green-400" disabled>
                <span className="text-sm font-medium tracking-wide">Coming Soon</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>

          {/* Jharkhand Darshan */}
          <Card className="glass-card border-white/5 bg-card/40 overflow-hidden flex flex-col h-full group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
            <div className="relative h-48 overflow-hidden bg-black group">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/tAEx45JVd2A?si=demo&controls=0&showinfo=0&rel=0" 
                title="Jharkhand Darshan Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute top-4 left-4 z-20">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-md">SIH 2025</Badge>
              </div>
            </div>
            
            <CardHeader className="relative -mt-12 z-20 pb-2">
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center shadow-lg shadow-primary/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
               </div>
              <CardTitle className="text-2xl font-heading font-bold">Jharkhand Darshan</CardTitle>
              <CardDescription className="text-sm font-medium text-primary">Smart Tourism Platform</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4 pb-2">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Redefined travel experience through safety and cultural immersion. Integrated AI itinerary planner, Safe Homestays, AR/VR heritage tours, and Blockchain marketplace.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline" className="bg-background/50 text-xs border-primary/20 text-primary/80">React</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs border-primary/20 text-primary/80">Node.js</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs border-primary/20 text-primary/80">Gemini</Badge>
              </div>
            </CardContent>
            <CardFooter className="pt-6 border-t border-white/5">
              <Button variant="ghost" className="w-full justify-between group/btn h-auto py-2 px-0 hover:bg-transparent hover:text-primary" onClick={() => window.open("https://www.youtube.com/watch?v=tAEx45JVd2A", "_blank")}>
                <span className="text-sm font-medium tracking-wide">Watch Demo</span>
                <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>

          {/* Aspirobot */}
          <Card className="glass-card border-white/5 bg-card/40 overflow-hidden flex flex-col h-full group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900/20 to-indigo-900/20 group">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20">
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30 backdrop-blur-md">Gen AI</Badge>
              </div>
              <Sparkles className="absolute -right-4 -bottom-4 w-32 h-32 text-blue-500/10 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <h3 className="text-4xl font-heading font-black text-white/5 tracking-widest uppercase">Aspirobot</h3>
              </div>
            </div>
            
            <CardHeader className="relative -mt-12 z-20 pb-2">
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
               </div>
              <CardTitle className="text-2xl font-heading font-bold">Aspirobot</CardTitle>
              <CardDescription className="text-sm font-medium text-blue-400">AI Career Guide</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6 pb-2">
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI-powered platform with Resume Analyzer, Career Roadmap Generator, and smart chatbot. Implements LLM-based ATS resume analysis and roadmap visualization.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-background/50 text-xs border-blue-500/20 text-blue-300">Python</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs border-blue-500/20 text-blue-300">Streamlit</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs border-blue-500/20 text-blue-300">Mermaid.js</Badge>
              </div>
            </CardContent>
            <CardFooter className="pt-6 border-t border-white/5">
              <Button variant="ghost" className="w-full justify-between group/btn h-auto py-2 px-0 hover:bg-transparent hover:text-blue-400" onClick={() => window.open("https://github.com/SugandhaSawhney/Aspirobot_GENAI", "_blank")}>
                <span className="text-sm font-medium tracking-wide">View Code</span>
                <Github className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 sticky top-32 h-fit">
            <h3 className="text-4xl font-heading font-bold mb-6 flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-2xl">
                 <Briefcase className="h-8 w-8 text-primary" /> 
              </div>
              Experience
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A timeline of my professional journey, leadership roles, and contributions to the global tech community.
            </p>
            <Button variant="outline" className="rounded-full w-fit" onClick={() => window.open("https://linkedin.com/in/sugandha-sawhney-574072327", "_blank")}>
              View LinkedIn <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="md:col-span-8 space-y-12 pl-6 border-l-2 border-primary/20 relative">
            {[
              {
                role: "Generative AI Intern",
                org: "IT Dept, IGDTUW",
                date: "Jun 2025 - Jul 2025",
                desc: "Worked deeply on NLP and Large Language Models (GPT-3.5, Gemini). Engineered complex prompts and implemented RAG (Retrieval-Augmented Generation) techniques to improve model accuracy. Explored model fine-tuning and deployment strategies for real-world applications.",
                tags: ["LLMs", "RAG", "Prompt Engineering"],
                color: "bg-primary"
              },
              {
                role: "Program Facilitator",
                org: "Google Cloud Arcade",
                date: "Aug 2025 - Oct 2025",
                desc: "Selected to mentor and guide 300+ participants through the Google Cloud Arcade program. Conducted hands-on labs, facilitated technical discussions, and provided doubt-solving sessions to help students master Cloud technologies.",
                tags: ["GCP", "Mentorship", "Cloud Computing"],
                color: "bg-blue-500"
              },
              {
                role: "Campus Ambassador",
                org: "GirlScript Summer of Code",
                date: "Jul 2025 - Oct 2025",
                desc: "Led a vibrant community of 800+ students. Organized technical events, workshops, and peer-learning sessions. Actively contributed to open-source projects, improved codebase features, and enhanced collaborative development practices within the community.",
                tags: ["Community Leadership", "Open Source", "Event Management"],
                color: "bg-pink-500"
              }
            ].map((exp, i) => (
              <div key={i} className="relative pl-8 group">
                <span className={`absolute -left-[11px] top-6 h-5 w-5 rounded-full border-4 border-background ${exp.color} group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]`} />
                <div className="bg-card/40 p-8 rounded-3xl border border-border/50 hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group-hover:border-primary/20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">{exp.role}</h4>
                      <p className="text-base font-medium text-primary/80">{exp.org}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground bg-secondary px-3 py-1.5 rounded-full h-fit w-fit uppercase tracking-wider border border-border">{exp.date}</span>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-background/50 text-xs font-normal border-border/50">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Achievement Section */}
      <Section className="bg-secondary/20 py-32 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
         
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-4xl font-heading font-bold mb-12 flex justify-center items-center gap-3">
              <Trophy className="h-10 w-10 text-yellow-500" /> Key Achievements
            </h3>
            
            <Card className="glass-card border-primary/20 relative overflow-hidden group text-left max-w-3xl mx-auto transform hover:scale-[1.02] transition-transform duration-500 rounded-[2.5rem]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-48 h-48 rotate-12 text-yellow-500" />
              </div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-yellow-500/20 blur-[80px] rounded-full" />
              
              <CardHeader className="p-10 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30 px-4 py-1.5 text-sm">National Winner</Badge>
                  <span className="text-sm font-mono text-muted-foreground">2025</span>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-heading font-bold">Smart India Hackathon 2025</CardTitle>
                <CardDescription className="text-lg mt-2">National Level Hackathon | Ministry of Education</CardDescription>
              </CardHeader>
              <CardContent className="p-10 pt-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Shortlisted among top teams from <span className="text-foreground font-bold">250+ entries</span> in internal SIH and nominated for the National Online Screening Round. Recognized for developing an innovative solution in smart tourism and cultural heritage preservation using AI and Blockchain technology.
                </p>
              </CardContent>
            </Card>
         </div>
      </Section>

      {/* Contact / Footer */}
      <Section id="contact" className="pb-12 pt-24">
        <div className="bg-card rounded-[3rem] p-8 md:p-24 text-center border border-border/50 relative overflow-hidden shadow-2xl mx-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-blue-500/10 opacity-50" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-tight">
              Ready to create <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">Something Amazing?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Button size="lg" className="h-16 px-12 rounded-full text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 bg-primary text-primary-foreground font-bold" onClick={() => window.location.href = "mailto:sawhneysugandha580@gmail.com"}>
                <Mail className="mr-3 h-5 w-5" /> Say Hello
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 rounded-full text-lg border-border bg-background/50 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm" onClick={() => window.open(resumeFile, "_blank")}>
                <Download className="mr-3 h-5 w-5" /> Resume
              </Button>
            </div>

            <div className="flex justify-center gap-6 pt-20">
              {[
                { icon: Linkedin, link: "https://linkedin.com/in/sugandha-sawhney-574072327" },
                { icon: Github, link: "https://github.com/SugandhaSawhney" },
                { icon: Code2, link: "https://leetcode.com/u/sugandha126/" },
                { icon: Mail, link: "mailto:sawhneysugandha580@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-full bg-background border border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110 shadow-sm"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            
            <div className="pt-20 border-t border-border/40 mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground font-medium">
              <span>© 2025 Sugandha Sawhney.</span>
              <span className="mt-2 md:mt-0 flex items-center gap-2">Designed & Built with <span className="text-red-500 animate-pulse text-lg">♥</span></span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
