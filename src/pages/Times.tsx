import { Link } from "react-router-dom";
import { ArrowLeft, Users, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { teams } from "@/data/teams";
import { getTeamGroup } from "@/data/squads";
import { Button } from "@/components/ui/button";

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
          className="font-display text-5xl md:text-7xl font-bold text-gradient-gold mb-4"
        >
          Seleções
        </motion.h1>
        <p className="font-body text-muted-foreground text-lg max-w-2xl mb-12">
          48 seleções classificadas para a Copa do Mundo 2026. Conheça a história de cada uma nas Copas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teams.map((team, index) => {
            const groupLetter = getTeamGroup(team.name);
            return (
              <motion.div
                key={team.code}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl leading-none">{team.flag}</span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors text-left">
                        {team.name}
                      </h2>
                      <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                        {team.code}
                      </span>
                    </div>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {team.history}
                  </p>
                  <div className="flex items-center gap-2">
                    {groupLetter && (
                      <Button asChild variant="outline" size="sm" className="flex-1 gap-1.5 text-xs border-primary/30 hover:bg-primary/10 hover:text-primary">
                        <Link to={`/grupos?team=${encodeURIComponent(team.name)}`}>
                          <LayoutGrid className="w-3.5 h-3.5" />
                          Grupo {groupLetter}
                        </Link>
                      </Button>
                    )}
                    <Button asChild variant="outline" size="sm" className="flex-1 gap-1.5 text-xs border-primary/30 hover:bg-primary/10 hover:text-primary">
                      <Link to={`/escalacao/${team.code}`}>
                        <Users className="w-3.5 h-3.5" />
                        Escalação
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Times;
