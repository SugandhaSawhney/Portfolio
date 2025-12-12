import { motion } from "framer-motion";
import { Users, Mic, Award, Zap } from "lucide-react";

const traits = [
  {
    icon: Users,
    title: "Community Leader",
    description: "Leading 800+ peers at GirlScript.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Mic,
    title: "Communicator",
    description: "Mentoring 300+ students in Cloud.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Innovator",
    description: "Building Nutrilia & Aspirobot.",
    color: "from-blue-500 to-cyan-500",
  },
];

export function DefiningTraits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mt-12 md:mt-20 px-4">
      {traits.map((trait, index) => (
        <motion.div
          key={trait.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative group p-6 rounded-2xl bg-card/40 border border-white/10 backdrop-blur-md overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5"
        >
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${trait.color} transition-opacity duration-500`} />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-3">
            <div className={`p-3 rounded-full bg-background/50 border border-white/10 text-primary group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${trait.color} bg-clip-text text-transparent`}>
              <trait.icon className={`w-8 h-8 stroke-[1.5] text-foreground`} style={{ stroke: "url(#gradient)" }} /> 
              {/* Fallback for icon color since bg-clip-text doesn't work on SVGs directly usually, using wrapper */}
            </div>
            <h3 className="font-heading font-bold text-lg tracking-tight">{trait.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{trait.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
