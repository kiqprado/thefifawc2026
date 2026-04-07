import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Grid3X3, Swords } from "lucide-react";
import trophyImg from "@/assets/trophy.png";

const navCards = [
  {
    title: "Seleções",
    description: "48 times classificados para a maior Copa da história",
    icon: Users,
    path: "/times",
    color: "text-primary",
  },
  {
    title: "Grupos",
    description: "12 grupos com 4 seleções cada na fase inicial",
    icon: Grid3X3,
    path: "/grupos",
    color: "text-accent",
  },
  {
    title: "Partidas",
    description: "Calendário completo de jogos e resultados",
    icon: Swords,
    path: "/partidas",
    color: "text-gold-glow",
  },
];

const Edition2026Section = () => {
  return (
    <section id="edition-2026" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="font-body text-sm tracking-[0.3em] text-primary mb-3 uppercase">
              Junho — Julho 2026
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">FIFA World Cup</span>
              <br />
              <span className="text-foreground">2026™</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed max-w-lg">
              A edição de 2026 será a maior Copa do Mundo já realizada, com <strong className="text-foreground">48 seleções</strong> disputando 
              em 16 cidades dos <strong className="text-foreground">Estados Unidos, México e Canadá</strong>. 
              Serão 104 partidas ao longo de um mês de competição.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <img
              src={trophyImg}
              alt="Troféu da Copa do Mundo"
              width={280}
              height={400}
              loading="lazy"
              className="animate-float drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {navCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                to={card.path}
                className="group block bg-gradient-card border border-border rounded-lg p-8 shadow-card hover:shadow-gold hover:border-primary/40 transition-all duration-300"
              >
                <card.icon className={`w-10 h-10 ${card.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {card.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Edition2026Section;
