import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { groups } from "@/data/groups";
import { useEffect, useRef } from "react";

const Grupos = () => {
  const [searchParams] = useSearchParams();
  const highlightTeam = searchParams.get("team");
  const highlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (highlightRef.current) {
      setTimeout(() => {
        highlightRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 400);
    }
  }, [highlightTeam]);

  // Find which group the team belongs to
  const highlightGroup = highlightTeam
    ? groups.find((g) => g.teams.some((t) => t.name === highlightTeam))?.letter
    : null;

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
          {groups.map((group, gi) => {
            const isHighlighted = highlightGroup === group.letter;
            return (
              <motion.div
                key={group.letter}
                ref={isHighlighted ? highlightRef : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: gi * 0.06 }}
                className={`bg-card border rounded-xl overflow-hidden transition-all duration-500 ${
                  isHighlighted
                    ? "border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/30"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className={`px-5 py-3 border-b ${isHighlighted ? "bg-primary/10 border-primary/30" : "bg-secondary border-border"}`}>
                  <h2 className="font-display text-2xl font-bold text-primary tracking-wide">
                    Grupo {group.letter}
                  </h2>
                </div>

                <ul className="divide-y divide-border">
                  {group.teams.map((team, ti) => {
                    const isTeamHighlighted = highlightTeam === team.name;
                    return (
                      <li
                        key={team.name}
                        className={`flex items-center gap-4 px-5 py-4 transition-colors ${
                          isTeamHighlighted
                            ? "bg-primary/10 border-l-4 border-l-primary"
                            : "hover:bg-secondary/50"
                        }`}
                      >
                        <span className="text-4xl leading-none">{team.flag}</span>
                        <div>
                          <span className="font-body text-xs text-muted-foreground">
                            {ti + 1}º
                          </span>
                          <p className={`font-display text-lg font-semibold leading-tight ${
                            isTeamHighlighted ? "text-primary" : "text-foreground"
                          }`}>
                            {team.name}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Grupos;
