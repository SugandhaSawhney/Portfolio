import { motion } from "framer-motion";

export function Logo() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center group cursor-pointer overflow-hidden rounded-xl">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-primary via-purple-500 to-blue-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
      />
      <span className="relative z-10 font-heading font-black text-xl italic tracking-tighter text-foreground group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
        SS
      </span>
      <div className="absolute inset-0 border border-primary/20 rounded-xl group-hover:border-white/20 transition-colors duration-300" />
    </div>
  );
}
