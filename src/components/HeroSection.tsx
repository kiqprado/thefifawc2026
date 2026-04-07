import { motion } from "framer-motion";
import stadiumHero from "@/assets/stadium-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={stadiumHero}
        alt="Estádio de futebol iluminado"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm tracking-[0.3em] text-primary mb-4 uppercase"
        >
          A maior competição do planeta
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6"
        >
          <span className="text-gradient-gold">Copa do</span>
          <br />
          <span className="text-foreground">Mundo</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-24 h-0.5 bg-primary mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Desde 1930, a Copa do Mundo une nações em torno da paixão pelo futebol.
          22 edições, bilhões de torcedores e momentos que marcaram a história para sempre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <a
            href="#edition-2026"
            className="inline-block font-display text-sm tracking-widest text-primary border border-primary/30 px-8 py-3 rounded-sm hover:bg-primary/10 transition-colors"
          >
            Explorar 2026 ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
