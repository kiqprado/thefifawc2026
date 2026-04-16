import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, LayoutGrid, Search } from "lucide-react";
import { motion } from "framer-motion";
import { teams } from "@/data/teams";
import { getTeamGroup } from "@/data/squads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Times = () => {
  const [search, setSearch] = useState("");

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase()) ||
    team.code.toLowerCase().includes(search.toLowerCase())
  );

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
        <p className="font-body text-muted-foreground text-lg max-w-2xl mb-8">
          48 seleções classificadas para a Copa do Mundo 2026. Conheça a história de cada uma nas Copas.
        </p>

        <div className="relative max-w-md mb-10">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar seleção por nome ou código..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-card border-border focus-visible:ring-primary"
          />
        </div>

        {filteredTeams.length === 0 && (
          <p className="font-body text-muted-foreground text-center py-12">
            Nenhuma seleção encontrada para "{search}"
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeams.map((team, index) => {
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
