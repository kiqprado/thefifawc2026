import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import stadiumHero from "@/assets/stadium-hero.jpg";

const navItems = [
  { label: "Seleções", to: "/times" },
  { label: "Grupos", to: "/grupos" },
  { label: "Partidas", to: "/partidas" },
  { label: "História", to: "/historia" },
  { label: "Estrelas", to: "#stars" },
  { label: "Estádios", to: "#stadiums" },
];

const navLinkClass =
  "font-display text-xs md:text-sm tracking-widest text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30 px-4 py-2 rounded-sm transition-all uppercase focus:outline-none focus:ring-2 focus:ring-primary/50";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleNav = (to: string) => {
    if (to.startsWith("#")) {
      const el = document.querySelector(to);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const renderNavItem = (item: (typeof navItems)[0], mobile = false) =>
    item.to.startsWith("#") ? (
      <button
        role="menuitem"
        onClick={() => handleNav(item.to)}
        className={mobile ? `${navLinkClass} px-6 py-3 text-sm w-full` : navLinkClass}
      >
        {item.label}
      </button>
    ) : (
      <Link
        role="menuitem"
        to={item.to}
        onClick={() => setMenuOpen(false)}
        className={mobile ? `${navLinkClass} px-6 py-3 text-sm block` : navLinkClass}
      >
        {item.label}
      </Link>
    );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={stadiumHero}
        alt="Estádio de futebol iluminado"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-20 py-5"
        aria-label="Navegação principal"
      >
        <div className="container mx-auto px-6">
          {/* Desktop: centered links */}
          {!isMobile && (
            <ul className="flex flex-wrap items-center justify-center gap-1" role="menubar">
              {navItems.map((item) => (
                <li key={item.label} role="none">
                  {renderNavItem(item)}
                </li>
              ))}
            </ul>
          )}

          {/* Mobile: hamburger top-right */}
          {isMobile && (
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-sm border border-primary/20"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMobile && menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col items-center gap-1 py-4 bg-background/80 backdrop-blur-md border-t border-border/30 mt-2" role="menu">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    role="none"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {renderNavItem(item, true)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-body text-sm tracking-[0.3em] text-primary mb-4 uppercase">
          A maior competição do planeta
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6">
          <span className="text-gradient-gold">Copa do</span>
          <br />
          <span className="text-foreground">Mundo</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="w-24 h-0.5 bg-primary mx-auto mb-8" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Desde 1930, a Copa do Mundo une nações em torno da paixão pelo futebol. 22 edições, bilhões de torcedores e momentos que marcaram a história para sempre.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-12">
          <a href="#edition-2026" className="inline-block font-display text-sm tracking-widest text-primary border border-primary/30 px-8 py-3 rounded-sm hover:bg-primary/10 transition-colors">
            Explorar 2026 ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
