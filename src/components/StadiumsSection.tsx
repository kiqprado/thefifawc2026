import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import aztecaImg from "@/assets/stadiums/azteca.jpg";
import sofiImg from "@/assets/stadiums/sofi.jpg";
import attImg from "@/assets/stadiums/att.jpg";
import metlifeImg from "@/assets/stadiums/metlife.jpg";
import akronImg from "@/assets/stadiums/akron.jpg";
import bmoImg from "@/assets/stadiums/bmo.jpg";
import hardrockImg from "@/assets/stadiums/hardrock.jpg";
import bcplaceImg from "@/assets/stadiums/bcplace.jpg";
import lumenImg from "@/assets/stadiums/lumen.jpg";
import rosebowlImg from "@/assets/stadiums/rosebowl.jpg";
import lincolnImg from "@/assets/stadiums/lincoln.jpg";
import nrgImg from "@/assets/stadiums/nrg.jpg";
import mercedesbenzImg from "@/assets/stadiums/mercedesbenz.jpg";
import geodisImg from "@/assets/stadiums/geodis.jpg";
import gilletteImg from "@/assets/stadiums/gillette.jpg";
import levisImg from "@/assets/stadiums/levis.jpg";

interface Stadium {
  name: string;
  city: string;
  country: string;
  image: string;
  capacity: string;
  curiosity: string;
  mapsQuery: string;
}

const stadiums: Stadium[] = [
  {
    name: "Estadio Azteca",
    city: "Cidade do México",
    country: "México",
    image: aztecaImg,
    capacity: "87.523",
    curiosity: "Único estádio do mundo a sediar duas finais de Copa (1970 e 1986). Foi palco do lendário gol de mão de Maradona e do 'Gol do Século'.",
    mapsQuery: "Estadio+Azteca,+Mexico+City",
  },
  {
    name: "SoFi Stadium",
    city: "Los Angeles",
    country: "EUA",
    image: sofiImg,
    capacity: "70.240",
    curiosity: "Custou mais de US$ 5 bilhões, sendo o estádio mais caro já construído. Sediará a final da Copa do Mundo 2026.",
    mapsQuery: "SoFi+Stadium,+Inglewood,+CA",
  },
  {
    name: "AT&T Stadium",
    city: "Dallas",
    country: "EUA",
    image: attImg,
    capacity: "80.000",
    curiosity: "Possui o maior telão de alta definição do mundo em um estádio, com mais de 49 metros de comprimento. Casa dos Dallas Cowboys.",
    mapsQuery: "AT%26T+Stadium,+Arlington,+TX",
  },
  {
    name: "MetLife Stadium",
    city: "Nova York / Nova Jersey",
    country: "EUA",
    image: metlifeImg,
    capacity: "82.500",
    curiosity: "É o único estádio da NFL compartilhado por dois times (Giants e Jets). Sediou o Super Bowl XLVIII sob temperaturas congelantes.",
    mapsQuery: "MetLife+Stadium,+East+Rutherford,+NJ",
  },
  {
    name: "Estadio Akron",
    city: "Guadalajara",
    country: "México",
    image: akronImg,
    capacity: "49.850",
    curiosity: "Conhecido como 'La Perla de Occidente', seu design é inspirado em um vulcão mexicano. Casa do Club Deportivo Guadalajara (Chivas).",
    mapsQuery: "Estadio+Akron,+Guadalajara,+Mexico",
  },
  {
    name: "BMO Field",
    city: "Toronto",
    country: "Canadá",
    image: bmoImg,
    capacity: "30.000",
    curiosity: "Primeiro estádio construído especificamente para futebol no Canadá. Passou por expansão para a Copa, dobrando sua capacidade original.",
    mapsQuery: "BMO+Field,+Toronto,+Canada",
  },
  {
    name: "Hard Rock Stadium",
    city: "Miami",
    country: "EUA",
    image: hardrockImg,
    capacity: "65.326",
    curiosity: "Já recebeu 6 Super Bowls e sedia anualmente o Miami Open de tênis. Seu teto parcial foi adicionado em renovação de US$ 550 milhões.",
    mapsQuery: "Hard+Rock+Stadium,+Miami+Gardens,+FL",
  },
  {
    name: "BC Place",
    city: "Vancouver",
    country: "Canadá",
    image: bcplaceImg,
    capacity: "54.500",
    curiosity: "Foi o estádio principal das Olimpíadas de Inverno de 2010. Possui o maior teto retrátil com suporte de cabos do mundo.",
    mapsQuery: "BC+Place,+Vancouver,+Canada",
  },
  {
    name: "Lumen Field",
    city: "Seattle",
    country: "EUA",
    image: lumenImg,
    capacity: "69.000",
    curiosity: "Famoso pelo 'Beast Quake' — a torcida do Seahawks é tão barulhenta que já causou tremores registrados por sismógrafos locais.",
    mapsQuery: "Lumen+Field,+Seattle,+WA",
  },
  {
    name: "Rose Bowl",
    city: "Los Angeles (Pasadena)",
    country: "EUA",
    image: rosebowlImg,
    capacity: "92.542",
    curiosity: "Palco da final da Copa de 1994 (Brasil x Itália). É Patrimônio Histórico Nacional dos EUA e um dos estádios mais icônicos do mundo.",
    mapsQuery: "Rose+Bowl+Stadium,+Pasadena,+CA",
  },
  {
    name: "Lincoln Financial Field",
    city: "Filadélfia",
    country: "EUA",
    image: lincolnImg,
    capacity: "69.796",
    curiosity: "A torcida dos Eagles é considerada uma das mais intensas dos EUA. O estádio é alimentado 100% por energia renovável.",
    mapsQuery: "Lincoln+Financial+Field,+Philadelphia,+PA",
  },
  {
    name: "NRG Stadium",
    city: "Houston",
    country: "EUA",
    image: nrgImg,
    capacity: "72.220",
    curiosity: "Foi o primeiro estádio da NFL com teto retrátil. Já sediou Super Bowls e o maior rodeio do mundo, o Houston Livestock Show.",
    mapsQuery: "NRG+Stadium,+Houston,+TX",
  },
  {
    name: "Mercedes-Benz Stadium",
    city: "Atlanta",
    country: "EUA",
    image: mercedesbenzImg,
    capacity: "71.000",
    curiosity: "Seu teto retrátil com 8 painéis em formato de pétala é inspirado no Panteão de Roma. Sede do Atlanta United, campeão da MLS 2018.",
    mapsQuery: "Mercedes-Benz+Stadium,+Atlanta,+GA",
  },
  {
    name: "Geodis Park",
    city: "Nashville",
    country: "EUA",
    image: geodisImg,
    capacity: "30.000",
    curiosity: "É o maior estádio construído especificamente para futebol nos EUA e no Canadá. Inaugurado em 2022, é a casa do Nashville SC.",
    mapsQuery: "Geodis+Park,+Nashville,+TN",
  },
  {
    name: "Gillette Stadium",
    city: "Boston (Foxborough)",
    country: "EUA",
    image: gilletteImg,
    capacity: "65.878",
    curiosity: "Casa da dinastia dos New England Patriots. Os jogos de inverno chegam a ter sensação térmica de -20°C, teste para qualquer seleção.",
    mapsQuery: "Gillette+Stadium,+Foxborough,+MA",
  },
  {
    name: "Levi's Stadium",
    city: "São Francisco (Santa Clara)",
    country: "EUA",
    image: levisImg,
    capacity: "68.500",
    curiosity: "Localizado no coração do Vale do Silício, é um dos estádios mais tecnológicos do mundo, com app próprio para pedidos e navegação.",
    mapsQuery: "Levi's+Stadium,+Santa+Clara,+CA",
  },
];

const StadiumsSection = () => {
  return (
    <section id="stadiums" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            🏟️ Estádios da Copa 2026
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            16 arenas espetaculares espalhadas pelos EUA, México e Canadá receberão os jogos da maior Copa da história.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stadiums.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={s.image}
                  alt={`Vista aérea do ${s.name}`}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-md text-foreground">
                  {s.capacity} lugares
                </span>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                  {s.name}
                </h3>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${s.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {s.city}, {s.country}
                </a>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {s.curiosity}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StadiumsSection;
