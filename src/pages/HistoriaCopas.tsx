import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Edition {
  year: string;
  host: string;
  champion: string;
  fact: string;
}

const editions: Edition[] = [
  { year: "1930", host: "Uruguai", champion: "🇺🇾 Uruguai", fact: "A primeira Copa do Mundo da história teve 13 seleções. O Uruguai venceu a Argentina por 4×2 na final em Montevidéu, diante de 93 mil torcedores no Estádio Centenário." },
  { year: "1934", host: "Itália", champion: "🇮🇹 Itália", fact: "Primeira Copa com eliminatórias classificatórias. A Itália de Mussolini venceu a Tchecoslováquia na prorrogação por 2×1, em torneio cercado de polêmica política." },
  { year: "1938", host: "França", champion: "🇮🇹 Itália", fact: "A Itália se tornou a primeira bicampeã consecutiva. Leônidas da Silva, o Diamante Negro, foi artilheiro pelo Brasil com 7 gols." },
  { year: "1950", host: "Brasil", champion: "🇺🇾 Uruguai", fact: "O Maracanazo: Uruguai virou o jogo contra o Brasil na final e venceu por 2×1 no Maracanã lotado com quase 200 mil pessoas. Maior trauma do futebol brasileiro." },
  { year: "1954", host: "Suíça", champion: "🇩🇪 Alemanha", fact: "O Milagre de Berna: a Alemanha Ocidental derrotou a favorita Hungria por 3×2 na final, após estar perdendo por 2×0. A Hungria tinha uma invencibilidade de 4 anos." },
  { year: "1958", host: "Suécia", champion: "🇧🇷 Brasil", fact: "O mundo conheceu Pelé, com apenas 17 anos. O Brasil conquistou seu primeiro título mundial com um futebol encantador, vencendo a Suécia por 5×2 na final." },
  { year: "1962", host: "Chile", champion: "🇧🇷 Brasil", fact: "Mesmo sem Pelé, lesionado na fase de grupos, Garrincha brilhou e carregou o Brasil ao bicampeonato com dribles impossíveis e gols decisivos." },
  { year: "1966", host: "Inglaterra", champion: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", fact: "A Inglaterra venceu sua única Copa em casa. A final contra a Alemanha teve o polêmico 'gol fantasma' de Geoff Hurst, até hoje debatido. Hurst marcou um hat-trick na final." },
  { year: "1970", host: "México", champion: "🇧🇷 Brasil", fact: "Considerado o melhor time de todos os tempos: Pelé, Jairzinho, Tostão, Gérson e Rivelino. O Brasil goleou a Itália por 4×1 na final e conquistou a Taça Jules Rimet definitivamente." },
  { year: "1974", host: "Alemanha Ocidental", champion: "🇩🇪 Alemanha", fact: "A Holanda de Cruyff encantou com o 'Futebol Total', mas perdeu a final para a Alemanha de Beckenbauer por 2×1. A Holanda abriu o placar sem que os alemães tocassem na bola." },
  { year: "1978", host: "Argentina", champion: "🇦🇷 Argentina", fact: "Argentina conquistou seu primeiro título em casa, sob chuva de papel picado no Monumental de Núñez. Mario Kempes foi o grande herói com 6 gols no torneio." },
  { year: "1982", host: "Espanha", champion: "🇮🇹 Itália", fact: "O Brasil de Zico, Sócrates e Falcão jogou o futebol mais bonito, mas caiu para a Itália de Paolo Rossi na 'Tragédia do Sarriá' (3×2). Rossi marcou hat-trick." },
  { year: "1986", host: "México", champion: "🇦🇷 Argentina", fact: "A Copa de Maradona: a 'Mão de Deus' e o gol do século contra a Inglaterra nas quartas. Diego conduziu a Argentina ao bicampeonato praticamente sozinho." },
  { year: "1990", host: "Itália", champion: "🇩🇪 Alemanha", fact: "Copa marcada pelo futebol defensivo. A Alemanha venceu a Argentina por 1×0 na final com pênalti controverso. Cameroun de Roger Milla surpreendeu o mundo ao chegar às quartas." },
  { year: "1994", host: "Estados Unidos", champion: "🇧🇷 Brasil", fact: "O tetracampeonato do Brasil após 24 anos de jejum. Primeira final decidida nos pênaltis, com Baggio perdendo a cobrança decisiva pela Itália. Romário foi eleito o melhor do torneio." },
  { year: "1998", host: "França", champion: "🇫🇷 França", fact: "A França venceu sua primeira Copa em casa. Zidane marcou dois gols de cabeça na final contra o Brasil (3×0). O mistério sobre o mal-estar de Ronaldo antes da final persiste." },
  { year: "2002", host: "Coreia/Japão", champion: "🇧🇷 Brasil", fact: "O pentacampeonato com Ronaldo, Rivaldo e Ronaldinho. Ronaldo, após a frustração de 98, marcou os dois gols na final contra a Alemanha (2×0) e foi artilheiro com 8 gols." },
  { year: "2006", host: "Alemanha", champion: "🇮🇹 Itália", fact: "A cabeçada de Zidane em Materazzi na final ficou eternizada. A Itália venceu a França nos pênaltis. Foi a despedida melancólica de um dos maiores jogadores da história." },
  { year: "2010", host: "África do Sul", champion: "🇪🇸 Espanha", fact: "Primeira Copa na África. A Espanha, com seu tiki-taka, conquistou o único título mundial. Iniesta marcou o gol da vitória na prorrogação da final contra a Holanda." },
  { year: "2014", host: "Brasil", champion: "🇩🇪 Alemanha", fact: "O 7×1: a Alemanha humilhou o Brasil na semifinal no Mineirão, resultado que chocou o mundo. Na final, a Alemanha venceu a Argentina na prorrogação com gol de Götze." },
  { year: "2018", host: "Rússia", champion: "🇫🇷 França", fact: "A jovem França de Mbappé (19 anos) dominou o torneio. Venceu a Croácia por 4×2 na final. O VAR foi utilizado pela primeira vez em uma Copa do Mundo." },
  { year: "2022", host: "Catar", champion: "🇦🇷 Argentina", fact: "A melhor final da história: Argentina 3×3 França, com hat-trick de Mbappé e dois gols de Messi. Argentina venceu nos pênaltis. Messi finalmente conquistou o único troféu que faltava." },
];

const HistoriaCopas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".edition-card");

    cards.forEach((card) => {
      gsap.set(card, { opacity: 0, y: 60, scale: 0.95 });

      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-gradient-gold mb-4">
          História das Copas
        </h1>
        <p className="font-body text-muted-foreground text-lg max-w-2xl mb-14">
          De 1930 a 2022 — cada edição deixou sua marca. Reviva os momentos que definiram o futebol mundial.
        </p>

        <div ref={containerRef} className="max-w-4xl mx-auto space-y-6">
          {editions.map((ed) => (
            <div
              key={ed.year}
              className="edition-card group rounded-xl border border-border bg-card p-6 md:p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Year badge */}
                <div className="shrink-0 flex items-center gap-3 md:flex-col md:items-center md:gap-1">
                  <span className="font-display text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                    {ed.year}
                  </span>
                  <span className="text-xs font-body text-muted-foreground md:text-center">{ed.host}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">
                    Campeão: {ed.champion}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {ed.fact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HistoriaCopas;
