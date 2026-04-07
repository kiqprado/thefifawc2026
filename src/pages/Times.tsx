import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Times = () => {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl md:text-7xl font-bold text-gradient-gold mb-6"
        >
          Seleções
        </motion.h1>
        <p className="font-body text-muted-foreground text-lg max-w-2xl">
          48 seleções classificadas para a Copa do Mundo 2026. Em breve, informações detalhadas de cada time.
        </p>
      </div>
    </main>
  );
};

export default Times;
