import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { teams } from "@/data/teams";
import { squads, formationPositions } from "@/data/squads";

const positionColors: Record<string, string> = {
  GOL: "from-amber-500 to-yellow-400",
  ZAG: "from-blue-500 to-cyan-400",
  LAT: "from-blue-500 to-cyan-400",
  VOL: "from-emerald-500 to-green-400",
  MEI: "from-emerald-500 to-green-400",
  ATA: "from-red-500 to-rose-400",
};

const positionLabels: Record<string, string> = {
  GOL: "Goleiro",
  ZAG: "Zagueiro",
  LAT: "Lateral",
  VOL: "Volante",
  MEI: "Meia",
  ATA: "Atacante",
};

const Escalacao = () => {
  const { code } = useParams<{ code: string }>();
  const team = teams.find((t) => t.code === code);
  const squad = squads.find((s) => s.code === code);

  if (!team || !squad) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Seleção não encontrada.</p>
      </main>
    );
  }

  const positions = formationPositions[squad.formation] || formationPositions["4-3-3"];

  return (
    <main className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="bg-card/80 backdrop-blur border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/times" className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{team.flag}</span>
            <div>
              <h1 className="font-display text-2xl font-bold text-gradient-gold leading-none">{team.name}</h1>
              <span className="font-body text-xs text-muted-foreground tracking-widest">{squad.formation}</span>
            </div>
          </div>
          <div className="w-20" />
        </div>
      </div>

      {/* Pitch with formation */}
      <section className="relative w-full max-w-3xl mx-auto my-8 px-4">
        <div className="relative w-full" style={{ paddingBottom: "140%" }}>
          {/* Pitch background */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary/30">
            {/* Grass gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(145,60%,22%)] via-[hsl(145,55%,28%)] to-[hsl(145,60%,22%)]" />
            {/* Grass stripes */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full"
                style={{
                  top: `${i * 10}%`,
                  height: "10%",
                  background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
                }}
              />
            ))}
            {/* Field markings */}
            <div className="absolute inset-[4%] border-2 border-white/20 rounded-sm" />
            <div className="absolute left-1/2 top-[4%] bottom-[4%] w-px bg-white/0" />
            <div className="absolute left-[4%] right-[4%] top-1/2 h-px bg-white/15" />
            {/* Center circle */}
            <div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 border-2 border-white/15 rounded-full" />
            <div className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-full" />
            {/* Penalty area top */}
            <div className="absolute left-[20%] right-[20%] top-[4%] h-[16%] border-b-2 border-x-2 border-white/15" />
            <div className="absolute left-[30%] right-[30%] top-[4%] h-[8%] border-b-2 border-x-2 border-white/10" />
            {/* Penalty area bottom */}
            <div className="absolute left-[20%] right-[20%] bottom-[4%] h-[16%] border-t-2 border-x-2 border-white/15" />
            <div className="absolute left-[30%] right-[30%] bottom-[4%] h-[8%] border-t-2 border-x-2 border-white/10" />

            {/* Futuristic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
            {/* Scan lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
              }}
            />

            {/* HUD corners */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/60" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/60" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/60" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/60" />

            {/* Formation title overlay */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-black/60 backdrop-blur-sm border border-primary/40 rounded px-4 py-1.5">
                <span className="font-display text-xs tracking-[0.3em] text-primary">
                  ESCALAÇÃO {squad.formation}
                </span>
              </div>
            </div>

            {/* Players on pitch */}
            {squad.starters.map((player, i) => {
              const pos = positions[i];
              if (!pos) return null;
              return (
                <motion.div
                  key={player.number}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, type: "spring", damping: 15 }}
                  className="absolute flex flex-col items-center z-10"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Player dot */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${positionColors[player.position]} flex items-center justify-center shadow-lg shadow-black/40 border-2 border-white/30 relative`}>
                    <span className="font-display text-sm md:text-base font-bold text-white drop-shadow">
                      {player.number}
                    </span>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" style={{ animationDuration: "3s" }} />
                  </div>
                  {/* Name tag */}
                  <div className="mt-1 bg-black/70 backdrop-blur-sm rounded px-2 py-0.5 border border-white/10">
                    <span className="font-body text-[10px] md:text-xs text-white whitespace-nowrap font-medium tracking-wide">
                      {player.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Team badge overlay bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <div className="text-5xl opacity-30">{team.flag}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Squad list */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Starters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-card border border-primary/30 rounded-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary/20 to-transparent border-b border-primary/20 px-5 py-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h2 className="font-display text-lg font-bold text-primary tracking-wider">TITULARES</h2>
              <span className="ml-auto font-body text-xs text-muted-foreground">11</span>
            </div>
            <ul className="divide-y divide-border">
              {squad.starters.map((p) => (
                <li key={p.number} className="flex items-center gap-3 px-5 py-3 hover:bg-secondary/30 transition-colors">
                  <span className={`w-8 h-8 rounded-full bg-gradient-to-br ${positionColors[p.position]} flex items-center justify-center text-white font-display text-xs font-bold shadow`}>
                    {p.number}
                  </span>
                  <div className="flex-1">
                    <p className="font-body text-sm text-foreground font-medium">{p.name}</p>
                    <span className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">{positionLabels[p.position]}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Reserves */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-muted/50 to-transparent border-b border-border px-5 py-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground" />
              <h2 className="font-display text-lg font-bold text-muted-foreground tracking-wider">RESERVAS</h2>
              <span className="ml-auto font-body text-xs text-muted-foreground">{squad.reserves.length}</span>
            </div>
            <ul className="divide-y divide-border">
              {squad.reserves.map((p) => (
                <li key={p.number} className="flex items-center gap-3 px-5 py-3 hover:bg-secondary/30 transition-colors">
                  <span className={`w-8 h-8 rounded-full bg-gradient-to-br ${positionColors[p.position]} opacity-60 flex items-center justify-center text-white font-display text-xs font-bold shadow`}>
                    {p.number}
                  </span>
                  <div className="flex-1">
                    <p className="font-body text-sm text-foreground/80 font-medium">{p.name}</p>
                    <span className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">{positionLabels[p.position]}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Escalacao;
