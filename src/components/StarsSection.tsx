import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, CalendarDays, Target, Shield } from "lucide-react";
import { stars } from "@/data/stars";

const StarsSection = () => {
  return (
    <section id="stars" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] text-primary mb-3 uppercase">
            Craques em campo
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-gold">Estrelas</span>{" "}
            <span className="text-foreground">da Copa</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Os maiores talentos do futebol mundial que estarão presentes na Copa
            de 2026.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {stars.map((player, i) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group bg-gradient-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-gold hover:border-primary/40 transition-all duration-300"
            >
              {/* Player image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                    {player.name}
                  </h3>
                  <p className="font-body text-xs text-primary">
                    {player.country} · {player.position}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="font-body text-muted-foreground">
                    {player.club}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="font-body text-muted-foreground">
                    {player.age} anos
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="font-body text-muted-foreground">
                    Estreia: {player.debutDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Target className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="font-body text-muted-foreground">
                    {player.goals} gols pela seleção
                  </span>
                </div>

                <Link
                  to={`/escalacao/${player.countryCode}`}
                  className="mt-3 block text-center font-display text-xs tracking-wider text-primary border border-primary/30 rounded px-3 py-2 hover:bg-primary/10 transition-colors uppercase"
                >
                  Ver Escalação → {player.country}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarsSection;
