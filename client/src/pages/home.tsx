import { motion, useScroll, useTransform } from "framer-motion";
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
  Award
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
import resumeFile from "@assets/SugandhaSawhney_Resume_SoftEng_1765560873278.pdf";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass">
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
            <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider border border-primary/20 bg-background/50 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Open to Opportunities
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[1.1] md:leading-[1.05]"
          >
            Code with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-blue-500">Purpose</span>.
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
            <Button size="lg" className="rounded-full h-12 px-8 text-base shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300" onClick={() => scrollToSection("projects")}>
              View Featured Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base border-border bg-background/50 hover:bg-card hover:text-primary transition-all duration-300" onClick={() => scrollToSection("contact")}>
              Let's Connect
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer p-2 rounded-full hover:bg-white/5 transition-colors"
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
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
              The Mindset <br />
              <span className="text-primary">Behind The Code</span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a 2nd-year B.Tech Information Technology student at <span className="text-foreground font-semibold border-b border-primary/30 hover:border-primary transition-colors cursor-default">IGDTUW</span>.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-foreground text-lg font-serif bg-card/50 rounded-r-lg pr-4">
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
                  className="rounded-xl w-10 h-10 border-border bg-background hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300 hover:-translate-y-1 shadow-sm" 
                  onClick={() => window.open(social.link, "_blank")}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-7 space-y-8">
             <div className="bg-card/40 p-8 rounded-3xl border border-border/50 backdrop-blur-md shadow-xl">
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
                      <Badge key={tool} variant="outline" className="bg-background/50">{tool}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-transparent p-8 rounded-3xl border border-primary/10">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                 <div className="p-2 bg-primary/10 rounded-lg">
                   <Award className="w-5 h-5 text-primary" />
                 </div>
                 Education
               </h3>
               
               <div className="space-y-6 relative before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
                 <div className="relative pl-8">
                    <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-background bg-primary z-10" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <span className="font-bold text-lg">IGDTUW, Delhi</span>
                      <Badge variant="secondary" className="font-mono text-xs w-fit mt-1 sm:mt-0">GPA: 9.29</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">B.Tech Information Technology (2024-2028)</p>
                 </div>
                 
                 <div className="relative pl-8">
                    <span className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-background bg-muted-foreground z-10" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <span className="font-medium">Sacred Heart Convent</span>
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
      <Section id="projects" className="bg-secondary/30 relative py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10 px-4">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 transition-colors rounded-full px-4 py-1">Portfolio</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Featured Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projects where innovation meets implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 max-w-7xl mx-auto px-4">
          {/* Nutrilia */}
          <Card className="glass-card border-border/60 overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-all duration-300">
            <div className="h-1 w-full bg-gradient-to-r from-green-400 to-emerald-600" />
            <CardHeader className="pb-4">
              <div className="mb-4 flex justify-between items-start">
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 text-[10px] uppercase tracking-wider font-bold">Building Now</Badge>
                <div className="p-2 bg-green-500/10 rounded-full">
                   <Brain className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <CardTitle className="text-2xl font-heading">Nutrilia</CardTitle>
              <CardDescription className="text-sm font-medium">AI-Powered Holistic Health Platform</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6 pb-2">
              <p className="text-muted-foreground text-sm leading-relaxed">
                A revolutionary platform integrating organic nutrition, Ayurvedic wisdom, and modern medical science. Offers personalized diet charts and AI-driven wellness insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-background/50 text-xs">AI/ML</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs">HealthTech</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs">Ayurveda</Badge>
              </div>
            </CardContent>
            <CardFooter className="pt-4 border-t border-border/30">
              <Button variant="ghost" className="w-full justify-between group/btn disabled:opacity-50 h-auto py-2 px-0 hover:bg-transparent hover:text-green-500" disabled>
                <span className="text-sm font-medium">Coming Soon</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>

          {/* Jharkhand Darshan */}
          <Card className="glass-card border-border/60 overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-video w-full bg-black relative overflow-hidden group-hover:shadow-inner transition-shadow">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/tAEx45JVd2A?si=demo" 
                title="Jharkhand Darshan Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
            <CardHeader className="pb-4">
              <div className="mb-2 flex justify-between items-center">
                <Badge variant="outline" className="border-primary/30 text-primary text-[10px] uppercase tracking-wider font-bold">SIH 2025</Badge>
                <div className="p-2 bg-primary/10 rounded-full">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl font-heading">Jharkhand Darshan</CardTitle>
              <CardDescription className="text-sm font-medium">Smart Tourism Platform</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4 pb-2">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Redefined travel experience through safety and cultural immersion. Integrated AI itinerary planner, Safe Homestays, AR/VR heritage tours, and Blockchain marketplace.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline" className="bg-background/50 text-xs">React</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs">Node.js</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs">Gemini</Badge>
              </div>
            </CardContent>
            <CardFooter className="pt-4 border-t border-border/30">
              <Button variant="ghost" className="w-full justify-between group/btn h-auto py-2 px-0 hover:bg-transparent hover:text-primary" onClick={() => window.open("https://www.youtube.com/watch?v=tAEx45JVd2A", "_blank")}>
                <span className="text-sm font-medium">Watch Demo</span>
                <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>

          {/* Aspirobot */}
          <Card className="glass-card border-border/60 overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-all duration-300">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600" />
            <CardHeader className="pb-4">
              <div className="mb-4 flex justify-between items-start">
                <Badge variant="outline" className="border-blue-500/30 text-blue-500 text-[10px] uppercase tracking-wider font-bold">Gen AI</Badge>
                <div className="p-2 bg-blue-500/10 rounded-full">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </div>
              </div>
              <CardTitle className="text-2xl font-heading">Aspirobot</CardTitle>
              <CardDescription className="text-sm font-medium">AI Career Guide</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-6 pb-2">
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI-powered platform with Resume Analyzer, Career Roadmap Generator, and smart chatbot. Implements LLM-based ATS resume analysis and roadmap visualization.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-background/50 text-xs">Python</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs">Streamlit</Badge>
                <Badge variant="outline" className="bg-background/50 text-xs">Mermaid.js</Badge>
              </div>
            </CardContent>
            <CardFooter className="pt-4 border-t border-border/30">
              <Button variant="ghost" className="w-full justify-between group/btn h-auto py-2 px-0 hover:bg-transparent hover:text-blue-500" onClick={() => window.open("https://github.com/SugandhaSawhney/Aspirobot_GENAI", "_blank")}>
                <span className="text-sm font-medium">View Code</span>
                <Github className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-xl">
                 <Calendar className="h-6 w-6 text-primary" /> 
              </div>
              Experience
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              My professional journey and contributions to the tech community.
            </p>
          </div>
          
          <div className="md:col-span-8 space-y-8 pl-4 border-l-2 border-border/50">
            {[
              {
                role: "Generative AI Intern",
                org: "IT Dept, IGDTUW",
                date: "Jun - Jul 2025",
                desc: "Worked on NLP and LLMs (GPT-3.5, Gemini), applying prompt engineering and RAG techniques. Explored fine-tuning and model deployment.",
                color: "bg-primary"
              },
              {
                role: "Program Facilitator",
                org: "Google Cloud Arcade",
                date: "Aug - Oct 2025",
                desc: "Mentored 300+ participants in Google Cloud technologies through hands-on labs, discussions, and doubt-solving sessions.",
                color: "bg-blue-500"
              },
              {
                role: "Campus Ambassador",
                org: "GirlScript Summer of Code",
                date: "Jul - Oct 2025",
                desc: "Led a community of 800+ students, organized events, and peer-learning sessions while actively contributing to open-source projects.",
                color: "bg-pink-500"
              }
            ].map((exp, i) => (
              <div key={i} className="relative pl-8 group">
                <span className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-background ${exp.color} group-hover:scale-125 transition-transform duration-300 shadow-sm`} />
                <div className="bg-card/40 p-6 rounded-2xl border border-border/50 hover:bg-card/60 transition-colors shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{exp.role}</h4>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded h-fit">{exp.date}</span>
                  </div>
                  <p className="text-sm font-medium text-primary/80 mb-2">{exp.org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Achievement Section */}
      <Section className="bg-secondary/20 py-24">
         <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-heading font-bold mb-10 flex justify-center items-center gap-3">
              <Trophy className="h-8 w-8 text-yellow-500" /> Key Achievements
            </h3>
            
            <Card className="glass-card border-primary/20 relative overflow-hidden group text-left max-w-2xl mx-auto">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-32 h-32 rotate-12" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20 mb-2">Winner</Badge>
                </div>
                <CardTitle className="text-2xl">Smart India Hackathon 2025</CardTitle>
                <CardDescription>National Level Hackathon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Shortlisted among top teams from 250+ entries in internal SIH and nominated for the National Online Screening Round. Recognized for innovative solution in smart tourism and cultural heritage preservation.
                </p>
              </CardContent>
            </Card>
         </div>
      </Section>

      {/* Contact / Footer */}
      <Section id="contact" className="pb-12 pt-24">
        <div className="bg-card rounded-[2.5rem] p-8 md:p-20 text-center border border-border/50 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-blue-500/10 opacity-50" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
              Ready to create <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Something Amazing?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 pt-6">
              <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 bg-primary text-primary-foreground" onClick={() => window.location.href = "mailto:sawhneysugandha580@gmail.com"}>
                <Mail className="mr-2 h-5 w-5" /> Say Hello
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-10 rounded-full text-lg border-border bg-background hover:border-primary/50 hover:-translate-y-1 transition-all duration-300" onClick={() => window.open(resumeFile, "_blank")}>
                <Download className="mr-2 h-5 w-5" /> Resume
              </Button>
            </div>

            <div className="flex justify-center gap-8 pt-16">
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
                  className="p-3 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <social.icon className="h-7 w-7" />
                </a>
              ))}
            </div>
            
            <div className="pt-16 border-t border-border/40 mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <span>© 2025 Sugandha Sawhney.</span>
              <span className="mt-2 md:mt-0 flex items-center gap-1">Designed & Built with <span className="text-red-500 animate-pulse">♥</span></span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
