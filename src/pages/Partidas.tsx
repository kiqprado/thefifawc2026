import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { matches } from "@/data/matches";
import { useState } from "react";

const groupLetters = ["Todos", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

const Partidas = () => {
  const [selectedGroup, setSelectedGroup] = useState("Todos");

  const filtered = selectedGroup === "Todos"
    ? matches
    : matches.filter((m) => m.group === selectedGroup);

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
          Partidas
        </motion.h1>

        <p className="font-body text-muted-foreground text-lg max-w-2xl mb-8">
          {matches.length} partidas da fase de grupos. Filtre por grupo para encontrar os jogos.
        </p>

        {/* Group filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {groupLetters.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGroup(g)}
              className={`px-4 py-2 rounded-full text-sm font-body font-semibold transition-colors border ${
                selectedGroup === g
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {g === "Todos" ? "Todos" : `Grupo ${g}`}
            </button>
          ))}
        </div>

        {/* Match cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              {/* Date & time */}
              <span className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {match.date} · {match.time} — Grupo {match.group}
              </span>

              {/* Teams */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex flex-col items-center text-center min-w-[80px]">
                  <span className="text-3xl mb-1">{match.home.flag}</span>
                  <span className="font-display font-bold text-foreground text-sm">{match.home.code}</span>
                </div>
                <span className="font-display text-2xl font-bold text-primary">X</span>
                <div className="flex flex-col items-center text-center min-w-[80px]">
                  <span className="text-3xl mb-1">{match.away.flag}</span>
                  <span className="font-display font-bold text-foreground text-sm">{match.away.code}</span>
                </div>
              </div>

              {/* Stadium & city */}
              <div className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary/70" />
                <span>{match.stadium}, {match.city}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Partidas;
