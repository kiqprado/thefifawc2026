import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, LayoutGrid, Table2 } from "lucide-react";
import { motion } from "framer-motion";
import { groups } from "@/data/groups";
import { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ViewMode = "cards" | "table";

const Grupos = () => {
  const [searchParams] = useSearchParams();
  const highlightTeam = searchParams.get("team");
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const [view, setView] = useState<ViewMode>("cards");

  useEffect(() => {
    if (highlightRef.current) {
      setTimeout(() => {
        highlightRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 400);
    }
  }, [highlightTeam]);

  const highlightGroup = highlightTeam
    ? groups.find((g) => g.teams.some((t) => t.name === highlightTeam))?.letter
    : null;

  const getRowBg = (position: number) => {
    if (position === 0) return "bg-emerald-500/20 border-l-4 border-l-emerald-500";
    if (position === 1) return "bg-emerald-500/10 border-l-4 border-l-emerald-400/60";
    return "";
  };

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
        <p className="font-body text-muted-foreground text-lg max-w-2xl mb-6">
          12 grupos com 4 seleções cada. A fase de grupos define os classificados para o mata-mata.
        </p>

        {/* View Toggle */}
        <div className="flex items-center gap-2 mb-10">
          <button
            onClick={() => setView("cards")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body font-medium transition-all ${
              view === "cards"
                ? "bg-primary text-primary-foreground shadow-md"
                : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Cards
          </button>
          <button
            onClick={() => setView("table")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body font-medium transition-all ${
              view === "table"
                ? "bg-primary text-primary-foreground shadow-md"
                : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            <Table2 className="w-4 h-4" />
            Classificação
          </button>
        </div>

        {/* Legend for table view */}
        {view === "table" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap items-center gap-4 mb-8 font-body text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-emerald-500/40 border border-emerald-500/60" />
              Classificado direto
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-emerald-500/20 border border-emerald-400/40" />
              Repescagem (3º melhor)
            </div>
          </motion.div>
        )}

        {view === "cards" ? (
          /* ========== CARDS VIEW ========== */
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
        ) : (
          /* ========== TABLE / CLASSIFICATION VIEW ========== */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {groups.map((group, gi) => {
              const isHighlighted = highlightGroup === group.letter;
              return (
                <motion.div
                  key={group.letter}
                  ref={isHighlighted ? highlightRef : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: gi * 0.04 }}
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

                  <Table>
                    <TableHeader>
                      <TableRow className="border-border hover:bg-transparent">
                        <TableHead className="w-8 text-center text-muted-foreground text-xs">#</TableHead>
                        <TableHead className="text-muted-foreground text-xs">Seleção</TableHead>
                        <TableHead className="text-center text-muted-foreground text-xs w-8">P</TableHead>
                        <TableHead className="text-center text-muted-foreground text-xs w-8">J</TableHead>
                        <TableHead className="text-center text-muted-foreground text-xs w-8">V</TableHead>
                        <TableHead className="text-center text-muted-foreground text-xs w-8">E</TableHead>
                        <TableHead className="text-center text-muted-foreground text-xs w-8">D</TableHead>
                        <TableHead className="text-center text-muted-foreground text-xs w-8">GP</TableHead>
                        <TableHead className="text-center text-muted-foreground text-xs w-8">GC</TableHead>
                        <TableHead className="text-center text-muted-foreground text-xs w-8">SG</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {group.teams.map((team, ti) => {
                        const isTeamHighlighted = highlightTeam === team.name;
                        return (
                          <TableRow
                            key={team.name}
                            className={`border-border transition-colors ${getRowBg(ti)} ${
                              isTeamHighlighted ? "!bg-primary/15 ring-1 ring-primary/30" : ""
                            }`}
                          >
                            <TableCell className="text-center font-body text-xs text-muted-foreground py-3">
                              {ti + 1}
                            </TableCell>
                            <TableCell className="py-3">
                              <div className="flex items-center gap-2.5">
                                <span className="text-xl leading-none">{team.flag}</span>
                                <span className={`font-display text-sm font-semibold ${
                                  isTeamHighlighted ? "text-primary" : "text-foreground"
                                }`}>
                                  {team.name}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell className="text-center font-display font-bold text-sm text-foreground py-3">
                              {team.pts}
                            </TableCell>
                            <TableCell className="text-center font-body text-sm text-muted-foreground py-3">{team.j}</TableCell>
                            <TableCell className="text-center font-body text-sm text-muted-foreground py-3">{team.v}</TableCell>
                            <TableCell className="text-center font-body text-sm text-muted-foreground py-3">{team.e}</TableCell>
                            <TableCell className="text-center font-body text-sm text-muted-foreground py-3">{team.d}</TableCell>
                            <TableCell className="text-center font-body text-sm text-muted-foreground py-3">{team.gp}</TableCell>
                            <TableCell className="text-center font-body text-sm text-muted-foreground py-3">{team.gc}</TableCell>
                            <TableCell className={`text-center font-display font-bold text-sm py-3 ${
                              team.sg > 0 ? "text-emerald-400" : team.sg < 0 ? "text-destructive" : "text-muted-foreground"
                            }`}>
                              {team.sg > 0 ? `+${team.sg}` : team.sg}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Grupos;
