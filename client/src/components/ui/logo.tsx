import { motion } from "framer-motion";

export function Logo() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center group cursor-pointer">
      <motion.div
        className="absolute inset-0 bg-primary/20 rounded-xl rotate-0 group-hover:rotate-45 transition-transform duration-500 ease-out"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 border-2 border-primary/50 rounded-xl rotate-0 group-hover:-rotate-12 transition-transform duration-700 ease-out"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      />
      <span className="relative z-10 font-heading font-black text-2xl tracking-tighter text-foreground group-hover:text-primary transition-colors duration-300">
        SS<span className="text-primary group-hover:text-foreground">.</span>
      </span>
    </div>
  );
}
