import { motion } from "framer-motion";
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
  ChevronDown
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SkillBar } from "@/components/ui/skill-bar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import heroBg from "@assets/generated_images/soft_abstract_dark_gradient_background_with_grain_texture.png";
import resumeFile from "@assets/SugandhaSawhney_Resume_SoftEng_1765560873278.pdf";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass">
        <div className="text-xl font-heading font-bold tracking-tight">SS.</div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="default" 
            size="sm" 
            className="hidden md:flex rounded-full px-6"
            onClick={() => window.open(resumeFile, "_blank")}
          >
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-40 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="px-4 py-1.5 rounded-full text-sm border-primary/50 text-primary mb-6 bg-primary/5 backdrop-blur-sm">
              Portfolio of Sugandha Sawhney
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1]"
          >
            Code with <span className="text-primary italic">Purpose</span>.<br />
            Create <span className="text-gradient font-bold">Impact</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
          >
            I engineer solutions where technology meets human potential. Blending AI innovation with a growth mindset to build products that matter.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button size="lg" className="rounded-full px-8 text-lg h-12" onClick={() => scrollToSection("projects")}>
              View Work
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-12" onClick={() => scrollToSection("contact")}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-16 pb-8"
          >
            <blockquote className="font-serif italic text-lg text-muted-foreground/80 border-l-2 border-primary/30 pl-4 text-left max-w-md mx-auto">
              "Success is not final, failure is not fatal: it is the courage to continue that counts."
              <footer className="text-sm font-sans not-italic text-muted-foreground mt-2">— Winston Churchill</footer>
            </blockquote>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground/50" />
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" className="relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">The Mindset Behind The Code</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a 2nd-year B.Tech Information Technology student at <span className="text-foreground font-medium">Indira Gandhi Delhi Technical University for Women</span>.
              </p>
              <p>
                For me, technology is a tool for empowerment. My journey is driven by a simple belief: <span className="italic text-primary">"Growth happens outside the comfort zone."</span> Whether I'm fine-tuning LLMs or leading a community of hundreds, I approach every challenge with curiosity and resilience.
              </p>
              <p>
                I don't just build apps; I build solutions that impact lives—like <span className="text-foreground font-medium">Nutrilia</span>, where I'm combining AI with holistic health to solve real-world problems.
              </p>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://linkedin.com/in/sugandha-sawhney-574072327", "_blank")}>
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://github.com/SugandhaSawhney", "_blank")}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://leetcode.com/SugandhaSawhney", "_blank")}>
                <Code2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.location.href = "mailto:sawhneysugandha580@gmail.com"}>
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
              <Terminal className="h-6 w-6 text-primary" /> Technical Proficiency
            </h3>
            <SkillBar skill="C++" level={90} delay={0.1} />
            <SkillBar skill="Python" level={85} delay={0.2} />
            <SkillBar skill="Generative AI & Prompt Engineering" level={80} delay={0.3} />
            <SkillBar skill="SQL" level={75} delay={0.4} />
            <SkillBar skill="React.js & JavaScript" level={72} delay={0.5} />
            
            <Separator className="my-6 bg-border/50" />
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2 text-foreground">Core Fundamentals</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Data Structures & Algorithms</li>
                  <li>DBMS</li>
                  <li>Object Oriented Programming</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-foreground">Tools</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Google Colab</li>
                  <li>Streamlit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-secondary/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg">
            Projects where innovation meets implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Nutrilia */}
          <Card className="glass-card border-primary/20 overflow-hidden flex flex-col h-full">
            <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-600" />
            <CardHeader>
              <div className="mb-2">
                <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20">Currently Building</Badge>
              </div>
              <CardTitle className="text-2xl">Nutrilia</CardTitle>
              <CardDescription>AI-Powered Holistic Health Platform</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-muted-foreground">
                A revolutionary health platform integrating organic nutrition, Ayurvedic wisdom, and modern medical science. Offers personalized diet charts, preventive health plans, and AI-driven wellness insights.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">AI/ML</Badge>
                <Badge variant="outline">HealthTech</Badge>
                <Badge variant="outline">Ayurveda</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full justify-between group disabled:opacity-50" disabled>
                <span>Coming Soon</span>
                <Brain className="h-4 w-4 text-muted-foreground" />
              </Button>
            </CardFooter>
          </Card>

          {/* Jharkhand Darshan */}
          <Card className="glass-card overflow-hidden flex flex-col h-full">
            <div className="aspect-video w-full bg-black relative">
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
            <CardHeader>
              <CardTitle className="text-2xl">Jharkhand Darshan</CardTitle>
              <CardDescription>Smart Tourism Platform | SIH 2025</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-muted-foreground text-sm">
                Redefined travel experience through safety, authenticity, and cultural immersion. Integrated AI itinerary planner, Safe Homestays, AR/VR heritage tours, and Blockchain marketplace.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">Blockchain</Badge>
                <Badge variant="outline">Gemini API</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full justify-between group" onClick={() => window.open("https://www.youtube.com/watch?v=tAEx45JVd2A", "_blank")}>
                <span>Watch Demo</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>

          {/* Aspirobot */}
          <Card className="glass-card overflow-hidden flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Aspirobot</CardTitle>
              <CardDescription>Generative AI Career Guide</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-muted-foreground">
                AI-powered platform with Resume Analyzer, Career Roadmap Generator, and smart chatbot. Implements LLM-based ATS resume analysis and roadmap visualization.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Streamlit</Badge>
                <Badge variant="outline">Gemini</Badge>
                <Badge variant="outline">Mermaid.js</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full justify-between group" onClick={() => window.open("https://github.com/SugandhaSawhney", "_blank")}>
                <span>View Code</span>
                <Github className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Experience & Achievements */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" /> Experience
            </h3>
            <div className="space-y-8 border-l-2 border-border ml-3 pl-8 relative">
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                <h4 className="text-lg font-bold">Generative AI Intern</h4>
                <p className="text-primary text-sm mb-2">IT Dept, IGDTUW | Jun - Jul 2025</p>
                <p className="text-muted-foreground text-sm">
                  Worked on NLP and LLMs (GPT-3.5, Gemini), applying prompt engineering and RAG techniques.
                </p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground" />
                <h4 className="text-lg font-bold">Program Facilitator</h4>
                <p className="text-primary text-sm mb-2">Google Cloud Arcade | Aug - Oct 2025</p>
                <p className="text-muted-foreground text-sm">
                  Mentored 300+ participants in Google Cloud technologies through hands-on labs and sessions.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground" />
                <h4 className="text-lg font-bold">Campus Ambassador</h4>
                <p className="text-primary text-sm mb-2">GirlScript Summer of Code | Jul - Oct 2025</p>
                <p className="text-muted-foreground text-sm">
                  Led a community of 800+ students, organized events, and contributed to open-source projects.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" /> Achievements
            </h3>
            <Card className="glass-card mb-6">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span>Smart India Hackathon 2025</span>
                  <Badge>Top Team</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Shortlisted among top teams from 250+ entries in internal SIH and nominated for the National Online Screening Round.
                </p>
              </CardContent>
            </Card>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h4 className="font-bold mb-4">Education</h4>
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium">IGDTUW, Delhi</span>
                  <span className="text-sm text-primary">GPA: 9.29</span>
                </div>
                <p className="text-sm text-muted-foreground">B.Tech Information Technology (2024-2028)</p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium">Sacred Heart Convent</span>
                  <span className="text-sm text-primary">98% (Class X)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact / Footer */}
      <Section id="contact" className="pb-8">
        <div className="bg-card rounded-3xl p-8 md:p-16 text-center border border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-blue-500/10" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Let's Create Something Amazing</h2>
            <p className="text-xl text-muted-foreground">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" className="h-12 px-8 rounded-full text-lg" onClick={() => window.location.href = "mailto:sawhneysugandha580@gmail.com"}>
                <Mail className="mr-2 h-5 w-5" /> Say Hello
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 rounded-full text-lg" onClick={() => window.open(resumeFile, "_blank")}>
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </div>

            <div className="flex justify-center gap-6 pt-12">
              <a href="https://linkedin.com/in/sugandha-sawhney-574072327" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/SugandhaSawhney" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://leetcode.com/SugandhaSawhney" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Code2 className="h-6 w-6" />
              </a>
            </div>
            
            <div className="pt-12 text-sm text-muted-foreground">
              © 2025 Sugandha Sawhney. All rights reserved.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
