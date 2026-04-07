import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { groups } from "@/data/groups";

const Grupos = () => {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl md:text-7xl font-bold text-gradient-gold mb-4"
        >
          Grupos
        </motion.h1>
        <p className="font-body text-muted-foreground text-lg max-w-2xl mb-12">
          12 grupos com 4 seleções cada. A fase de grupos define os classificados para o mata-mata.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.letter}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: gi * 0.06 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Group header */}
              <div className="bg-secondary px-5 py-3 border-b border-border">
                <h2 className="font-display text-2xl font-bold text-primary tracking-wide">
                  Grupo {group.letter}
                </h2>
              </div>

              {/* Teams */}
              <ul className="divide-y divide-border">
                {group.teams.map((team, ti) => (
                  <li
                    key={team.name}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-4xl leading-none">{team.flag}</span>
                    <div>
                      <span className="font-body text-xs text-muted-foreground">
                        {ti + 1}º
                      </span>
                      <p className="font-display text-lg font-semibold text-foreground leading-tight">
                        {team.name}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Grupos;
