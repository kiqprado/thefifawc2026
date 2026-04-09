import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "22", label: "Edições realizadas" },
  { value: "8", label: "Países campeões" },
  { value: "5", label: "Títulos do Brasil" },
  { value: "900+", label: "Gols em finais" },
];

const milestones = [
  { year: "1930", event: "Primeira Copa no Uruguai — 13 seleções disputaram o torneio inaugural." },
  { year: "1958", event: "O Brasil de Pelé conquista seu primeiro título na Suécia, aos 17 anos." },
  { year: "1970", event: "Brasil se torna tricampeão no México com o time considerado o maior da história." },
  { year: "2002", event: "Pentacampeonato brasileiro na Copa Japão-Coreia com Ronaldo e Rivaldo." },
  { year: "2022", event: "Argentina vence a França nos pênaltis em final épica no Catar." },
];

const HistorySection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            A História do Futebol Mundial
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Mais de 90 anos de emoção, glória e tradição nos gramados do mundo.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card rounded-lg p-6 text-center shadow-card border border-border"
            >
              <span className="font-display text-4xl md:text-5xl font-bold text-primary">{stat.value}</span>
              <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <span className="font-display text-lg font-bold text-primary">{m.year}</span>
                <div className="w-px flex-1 bg-border mt-2" />
              </div>
              <p className="font-body text-foreground/80 pb-8">{m.event}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/historia"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/30"
            >
              Conheça mais da história nas Copas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
