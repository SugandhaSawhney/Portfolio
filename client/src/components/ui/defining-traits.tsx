import { motion } from "framer-motion";
import { Users, Mic, Award, Zap, Lightbulb } from "lucide-react";

const traits = [
  {
    icon: Users,
    title: "Community Leader",
    description: "Empowering 800+ peers",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/30"
  },
  {
    icon: Mic,
    title: "Communicator",
    description: "Mentoring 300+ in Cloud",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "group-hover:border-violet-500/30"
  },
  {
    icon: Lightbulb,
    title: "Innovator",
    description: "Problem Solver & Builder",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/30"
  },
];

export function DefiningTraits() {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl mx-auto mt-8 md:mt-12 px-4">
      {traits.map((trait, index) => (
        <motion.div
          key={trait.title}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          whileHover={{ y: -3, scale: 1.02 }}
          className={`
            relative group flex items-center gap-3 px-5 py-3 
            rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm 
            cursor-default transition-all duration-300 shadow-sm hover:shadow-md
            ${trait.border}
          `}
        >
          <div className={`p-2 rounded-lg ${trait.bg} ${trait.color}`}>
            <trait.icon className="w-4 h-4" />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-sm leading-tight text-foreground/90">{trait.title}</h3>
            <p className="text-xs text-muted-foreground">{trait.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
