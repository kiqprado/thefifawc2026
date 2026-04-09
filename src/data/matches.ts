export interface Match {
  id: number;
  group: string;
  date: string;
  time: string;
  home: { name: string; code: string; flag: string };
  away: { name: string; code: string; flag: string };
  stadium: string;
  city: string;
}

export const matches: Match[] = [
  // ── Grupo A ──
  { id: 1, group: "A", date: "11/06", time: "17:00", home: { name: "México", code: "MEX", flag: "🇲🇽" }, away: { name: "Tchéquia", code: "CZE", flag: "🇨🇿" }, stadium: "Estadio Azteca", city: "Cidade do México" },
  { id: 2, group: "A", date: "12/06", time: "14:00", home: { name: "África do Sul", code: "RSA", flag: "🇿🇦" }, away: { name: "Coreia do Sul", code: "KOR", flag: "🇰🇷" }, stadium: "SoFi Stadium", city: "Los Angeles" },
  { id: 3, group: "A", date: "16/06", time: "17:00", home: { name: "México", code: "MEX", flag: "🇲🇽" }, away: { name: "Coreia do Sul", code: "KOR", flag: "🇰🇷" }, stadium: "Estadio Azteca", city: "Cidade do México" },
  { id: 4, group: "A", date: "16/06", time: "20:00", home: { name: "Tchéquia", code: "CZE", flag: "🇨🇿" }, away: { name: "África do Sul", code: "RSA", flag: "🇿🇦" }, stadium: "AT&T Stadium", city: "Dallas" },
  { id: 5, group: "A", date: "21/06", time: "17:00", home: { name: "Coreia do Sul", code: "KOR", flag: "🇰🇷" }, away: { name: "Tchéquia", code: "CZE", flag: "🇨🇿" }, stadium: "MetLife Stadium", city: "Nova York" },
  { id: 6, group: "A", date: "21/06", time: "17:00", home: { name: "África do Sul", code: "RSA", flag: "🇿🇦" }, away: { name: "México", code: "MEX", flag: "🇲🇽" }, stadium: "Estadio Akron", city: "Guadalajara" },

  // ── Grupo B ──
  { id: 7, group: "B", date: "11/06", time: "20:00", home: { name: "Canadá", code: "CAN", flag: "🇨🇦" }, away: { name: "Suíça", code: "SUI", flag: "🇨🇭" }, stadium: "BMO Field", city: "Toronto" },
  { id: 8, group: "B", date: "12/06", time: "17:00", home: { name: "Bósnia e Herzegovina", code: "BIH", flag: "🇧🇦" }, away: { name: "Catar", code: "QAT", flag: "🇶🇦" }, stadium: "Hard Rock Stadium", city: "Miami" },
  { id: 9, group: "B", date: "17/06", time: "14:00", home: { name: "Canadá", code: "CAN", flag: "🇨🇦" }, away: { name: "Catar", code: "QAT", flag: "🇶🇦" }, stadium: "BC Place", city: "Vancouver" },
  { id: 10, group: "B", date: "17/06", time: "17:00", home: { name: "Suíça", code: "SUI", flag: "🇨🇭" }, away: { name: "Bósnia e Herzegovina", code: "BIH", flag: "🇧🇦" }, stadium: "Lumen Field", city: "Seattle" },
  { id: 11, group: "B", date: "22/06", time: "17:00", home: { name: "Catar", code: "QAT", flag: "🇶🇦" }, away: { name: "Suíça", code: "SUI", flag: "🇨🇭" }, stadium: "Hard Rock Stadium", city: "Miami" },
  { id: 12, group: "B", date: "22/06", time: "17:00", home: { name: "Bósnia e Herzegovina", code: "BIH", flag: "🇧🇦" }, away: { name: "Canadá", code: "CAN", flag: "🇨🇦" }, stadium: "BMO Field", city: "Toronto" },

  // ── Grupo C ──
  { id: 13, group: "C", date: "12/06", time: "20:00", home: { name: "Brasil", code: "BRA", flag: "🇧🇷" }, away: { name: "Escócia", code: "SCO", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }, stadium: "Rose Bowl", city: "Los Angeles" },
  { id: 14, group: "C", date: "13/06", time: "14:00", home: { name: "Marrocos", code: "MAR", flag: "🇲🇦" }, away: { name: "Haiti", code: "HAI", flag: "🇭🇹" }, stadium: "Lincoln Financial Field", city: "Filadélfia" },
  { id: 15, group: "C", date: "17/06", time: "20:00", home: { name: "Brasil", code: "BRA", flag: "🇧🇷" }, away: { name: "Haiti", code: "HAI", flag: "🇭🇹" }, stadium: "AT&T Stadium", city: "Dallas" },
  { id: 16, group: "C", date: "18/06", time: "14:00", home: { name: "Escócia", code: "SCO", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }, away: { name: "Marrocos", code: "MAR", flag: "🇲🇦" }, stadium: "MetLife Stadium", city: "Nova York" },
  { id: 17, group: "C", date: "23/06", time: "17:00", home: { name: "Haiti", code: "HAI", flag: "🇭🇹" }, away: { name: "Escócia", code: "SCO", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }, stadium: "Lincoln Financial Field", city: "Filadélfia" },
  { id: 18, group: "C", date: "23/06", time: "17:00", home: { name: "Marrocos", code: "MAR", flag: "🇲🇦" }, away: { name: "Brasil", code: "BRA", flag: "🇧🇷" }, stadium: "Rose Bowl", city: "Los Angeles" },

  // ── Grupo D ──
  { id: 19, group: "D", date: "13/06", time: "17:00", home: { name: "Estados Unidos", code: "USA", flag: "🇺🇸" }, away: { name: "Turquia", code: "TUR", flag: "🇹🇷" }, stadium: "SoFi Stadium", city: "Los Angeles" },
  { id: 20, group: "D", date: "13/06", time: "20:00", home: { name: "Paraguai", code: "PAR", flag: "🇵🇾" }, away: { name: "Austrália", code: "AUS", flag: "🇦🇺" }, stadium: "NRG Stadium", city: "Houston" },
  { id: 21, group: "D", date: "18/06", time: "17:00", home: { name: "Estados Unidos", code: "USA", flag: "🇺🇸" }, away: { name: "Austrália", code: "AUS", flag: "🇦🇺" }, stadium: "MetLife Stadium", city: "Nova York" },
  { id: 22, group: "D", date: "18/06", time: "20:00", home: { name: "Turquia", code: "TUR", flag: "🇹🇷" }, away: { name: "Paraguai", code: "PAR", flag: "🇵🇾" }, stadium: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: 23, group: "D", date: "23/06", time: "20:00", home: { name: "Austrália", code: "AUS", flag: "🇦🇺" }, away: { name: "Turquia", code: "TUR", flag: "🇹🇷" }, stadium: "NRG Stadium", city: "Houston" },
  { id: 24, group: "D", date: "23/06", time: "20:00", home: { name: "Paraguai", code: "PAR", flag: "🇵🇾" }, away: { name: "Estados Unidos", code: "USA", flag: "🇺🇸" }, stadium: "SoFi Stadium", city: "Los Angeles" },

  // ── Grupo E ──
  { id: 25, group: "E", date: "14/06", time: "14:00", home: { name: "Alemanha", code: "GER", flag: "🇩🇪" }, away: { name: "Equador", code: "ECU", flag: "🇪🇨" }, stadium: "Lincoln Financial Field", city: "Filadélfia" },
  { id: 26, group: "E", date: "14/06", time: "17:00", home: { name: "Curaçao", code: "CUW", flag: "🇨🇼" }, away: { name: "Costa do Marfim", code: "CIV", flag: "🇨🇮" }, stadium: "Geodis Park", city: "Nashville" },
  { id: 27, group: "E", date: "19/06", time: "14:00", home: { name: "Alemanha", code: "GER", flag: "🇩🇪" }, away: { name: "Costa do Marfim", code: "CIV", flag: "🇨🇮" }, stadium: "MetLife Stadium", city: "Nova York" },
  { id: 28, group: "E", date: "19/06", time: "17:00", home: { name: "Equador", code: "ECU", flag: "🇪🇨" }, away: { name: "Curaçao", code: "CUW", flag: "🇨🇼" }, stadium: "Hard Rock Stadium", city: "Miami" },
  { id: 29, group: "E", date: "24/06", time: "17:00", home: { name: "Costa do Marfim", code: "CIV", flag: "🇨🇮" }, away: { name: "Equador", code: "ECU", flag: "🇪🇨" }, stadium: "Geodis Park", city: "Nashville" },
  { id: 30, group: "E", date: "24/06", time: "17:00", home: { name: "Curaçao", code: "CUW", flag: "🇨🇼" }, away: { name: "Alemanha", code: "GER", flag: "🇩🇪" }, stadium: "Lincoln Financial Field", city: "Filadélfia" },

  // ── Grupo F ──
  { id: 31, group: "F", date: "14/06", time: "20:00", home: { name: "Países Baixos", code: "NED", flag: "🇳🇱" }, away: { name: "Tunísia", code: "TUN", flag: "🇹🇳" }, stadium: "Gillette Stadium", city: "Boston" },
  { id: 32, group: "F", date: "15/06", time: "14:00", home: { name: "Japão", code: "JPN", flag: "🇯🇵" }, away: { name: "Suécia", code: "SWE", flag: "🇸🇪" }, stadium: "Levi's Stadium", city: "São Francisco" },
  { id: 33, group: "F", date: "19/06", time: "20:00", home: { name: "Países Baixos", code: "NED", flag: "🇳🇱" }, away: { name: "Suécia", code: "SWE", flag: "🇸🇪" }, stadium: "Gillette Stadium", city: "Boston" },
  { id: 34, group: "F", date: "20/06", time: "14:00", home: { name: "Tunísia", code: "TUN", flag: "🇹🇳" }, away: { name: "Japão", code: "JPN", flag: "🇯🇵" }, stadium: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: 35, group: "F", date: "24/06", time: "20:00", home: { name: "Suécia", code: "SWE", flag: "🇸🇪" }, away: { name: "Tunísia", code: "TUN", flag: "🇹🇳" }, stadium: "Levi's Stadium", city: "São Francisco" },
  { id: 36, group: "F", date: "24/06", time: "20:00", home: { name: "Japão", code: "JPN", flag: "🇯🇵" }, away: { name: "Países Baixos", code: "NED", flag: "🇳🇱" }, stadium: "Gillette Stadium", city: "Boston" },

  // ── Grupo G ──
  { id: 37, group: "G", date: "15/06", time: "17:00", home: { name: "Bélgica", code: "BEL", flag: "🇧🇪" }, away: { name: "Nova Zelândia", code: "NZL", flag: "🇳🇿" }, stadium: "BC Place", city: "Vancouver" },
  { id: 38, group: "G", date: "15/06", time: "20:00", home: { name: "Egito", code: "EGY", flag: "🇪🇬" }, away: { name: "Irã", code: "IRN", flag: "🇮🇷" }, stadium: "NRG Stadium", city: "Houston" },
  { id: 39, group: "G", date: "20/06", time: "17:00", home: { name: "Bélgica", code: "BEL", flag: "🇧🇪" }, away: { name: "Irã", code: "IRN", flag: "🇮🇷" }, stadium: "BMO Field", city: "Toronto" },
  { id: 40, group: "G", date: "20/06", time: "20:00", home: { name: "Nova Zelândia", code: "NZL", flag: "🇳🇿" }, away: { name: "Egito", code: "EGY", flag: "🇪🇬" }, stadium: "BC Place", city: "Vancouver" },
  { id: 41, group: "G", date: "25/06", time: "17:00", home: { name: "Irã", code: "IRN", flag: "🇮🇷" }, away: { name: "Nova Zelândia", code: "NZL", flag: "🇳🇿" }, stadium: "NRG Stadium", city: "Houston" },
  { id: 42, group: "G", date: "25/06", time: "17:00", home: { name: "Egito", code: "EGY", flag: "🇪🇬" }, away: { name: "Bélgica", code: "BEL", flag: "🇧🇪" }, stadium: "BMO Field", city: "Toronto" },

  // ── Grupo H ──
  { id: 43, group: "H", date: "16/06", time: "14:00", home: { name: "Espanha", code: "ESP", flag: "🇪🇸" }, away: { name: "Uruguai", code: "URU", flag: "🇺🇾" }, stadium: "Hard Rock Stadium", city: "Miami" },
  { id: 44, group: "H", date: "16/06", time: "11:00", home: { name: "Cabo Verde", code: "CPV", flag: "🇨🇻" }, away: { name: "Arábia Saudita", code: "KSA", flag: "🇸🇦" }, stadium: "Geodis Park", city: "Nashville" },
  { id: 45, group: "H", date: "21/06", time: "14:00", home: { name: "Espanha", code: "ESP", flag: "🇪🇸" }, away: { name: "Arábia Saudita", code: "KSA", flag: "🇸🇦" }, stadium: "AT&T Stadium", city: "Dallas" },
  { id: 46, group: "H", date: "21/06", time: "20:00", home: { name: "Uruguai", code: "URU", flag: "🇺🇾" }, away: { name: "Cabo Verde", code: "CPV", flag: "🇨🇻" }, stadium: "Hard Rock Stadium", city: "Miami" },
  { id: 47, group: "H", date: "26/06", time: "17:00", home: { name: "Arábia Saudita", code: "KSA", flag: "🇸🇦" }, away: { name: "Uruguai", code: "URU", flag: "🇺🇾" }, stadium: "Geodis Park", city: "Nashville" },
  { id: 48, group: "H", date: "26/06", time: "17:00", home: { name: "Cabo Verde", code: "CPV", flag: "🇨🇻" }, away: { name: "Espanha", code: "ESP", flag: "🇪🇸" }, stadium: "AT&T Stadium", city: "Dallas" },

  // ── Grupo I ──
  { id: 49, group: "I", date: "13/06", time: "11:00", home: { name: "França", code: "FRA", flag: "🇫🇷" }, away: { name: "Noruega", code: "NOR", flag: "🇳🇴" }, stadium: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: 50, group: "I", date: "14/06", time: "11:00", home: { name: "Senegal", code: "SEN", flag: "🇸🇳" }, away: { name: "RD Congo", code: "COD", flag: "🇨🇩" }, stadium: "Levi's Stadium", city: "São Francisco" },
  { id: 51, group: "I", date: "18/06", time: "11:00", home: { name: "França", code: "FRA", flag: "🇫🇷" }, away: { name: "RD Congo", code: "COD", flag: "🇨🇩" }, stadium: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: 52, group: "I", date: "18/06", time: "20:00", home: { name: "Noruega", code: "NOR", flag: "🇳🇴" }, away: { name: "Senegal", code: "SEN", flag: "🇸🇳" }, stadium: "Lumen Field", city: "Seattle" },
  { id: 53, group: "I", date: "23/06", time: "14:00", home: { name: "RD Congo", code: "COD", flag: "🇨🇩" }, away: { name: "Noruega", code: "NOR", flag: "🇳🇴" }, stadium: "Levi's Stadium", city: "São Francisco" },
  { id: 54, group: "I", date: "23/06", time: "14:00", home: { name: "Senegal", code: "SEN", flag: "🇸🇳" }, away: { name: "França", code: "FRA", flag: "🇫🇷" }, stadium: "Mercedes-Benz Stadium", city: "Atlanta" },

  // ── Grupo J ──
  { id: 55, group: "J", date: "15/06", time: "11:00", home: { name: "Argentina", code: "ARG", flag: "🇦🇷" }, away: { name: "Jordânia", code: "JOR", flag: "🇯🇴" }, stadium: "Hard Rock Stadium", city: "Miami" },
  { id: 56, group: "J", date: "15/06", time: "14:00", home: { name: "Argélia", code: "ALG", flag: "🇩🇿" }, away: { name: "Áustria", code: "AUT", flag: "🇦🇹" }, stadium: "AT&T Stadium", city: "Dallas" },
  { id: 57, group: "J", date: "20/06", time: "11:00", home: { name: "Argentina", code: "ARG", flag: "🇦🇷" }, away: { name: "Áustria", code: "AUT", flag: "🇦🇹" }, stadium: "MetLife Stadium", city: "Nova York" },
  { id: 58, group: "J", date: "20/06", time: "14:00", home: { name: "Jordânia", code: "JOR", flag: "🇯🇴" }, away: { name: "Argélia", code: "ALG", flag: "🇩🇿" }, stadium: "Lumen Field", city: "Seattle" },
  { id: 59, group: "J", date: "25/06", time: "20:00", home: { name: "Áustria", code: "AUT", flag: "🇦🇹" }, away: { name: "Jordânia", code: "JOR", flag: "🇯🇴" }, stadium: "AT&T Stadium", city: "Dallas" },
  { id: 60, group: "J", date: "25/06", time: "20:00", home: { name: "Argélia", code: "ALG", flag: "🇩🇿" }, away: { name: "Argentina", code: "ARG", flag: "🇦🇷" }, stadium: "Hard Rock Stadium", city: "Miami" },

  // ── Grupo K ──
  { id: 61, group: "K", date: "12/06", time: "11:00", home: { name: "Portugal", code: "POR", flag: "🇵🇹" }, away: { name: "Colômbia", code: "COL", flag: "🇨🇴" }, stadium: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: 62, group: "K", date: "12/06", time: "20:00", home: { name: "Iraque", code: "IRQ", flag: "🇮🇶" }, away: { name: "Uzbequistão", code: "UZB", flag: "🇺🇿" }, stadium: "Lumen Field", city: "Seattle" },
  { id: 63, group: "K", date: "17/06", time: "11:00", home: { name: "Portugal", code: "POR", flag: "🇵🇹" }, away: { name: "Uzbequistão", code: "UZB", flag: "🇺🇿" }, stadium: "AT&T Stadium", city: "Dallas" },
  { id: 64, group: "K", date: "17/06", time: "20:00", home: { name: "Colômbia", code: "COL", flag: "🇨🇴" }, away: { name: "Iraque", code: "IRQ", flag: "🇮🇶" }, stadium: "NRG Stadium", city: "Houston" },
  { id: 65, group: "K", date: "22/06", time: "14:00", home: { name: "Uzbequistão", code: "UZB", flag: "🇺🇿" }, away: { name: "Colômbia", code: "COL", flag: "🇨🇴" }, stadium: "Lumen Field", city: "Seattle" },
  { id: 66, group: "K", date: "22/06", time: "14:00", home: { name: "Iraque", code: "IRQ", flag: "🇮🇶" }, away: { name: "Portugal", code: "POR", flag: "🇵🇹" }, stadium: "Mercedes-Benz Stadium", city: "Atlanta" },

  // ── Grupo L ──
  { id: 67, group: "L", date: "11/06", time: "14:00", home: { name: "Inglaterra", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Panamá", code: "PAN", flag: "🇵🇦" }, stadium: "Levi's Stadium", city: "São Francisco" },
  { id: 68, group: "L", date: "11/06", time: "11:00", home: { name: "Croácia", code: "CRO", flag: "🇭🇷" }, away: { name: "Gana", code: "GHA", flag: "🇬🇭" }, stadium: "Geodis Park", city: "Nashville" },
  { id: 69, group: "L", date: "16/06", time: "20:00", home: { name: "Inglaterra", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, away: { name: "Gana", code: "GHA", flag: "🇬🇭" }, stadium: "Gillette Stadium", city: "Boston" },
  { id: 70, group: "L", date: "16/06", time: "14:00", home: { name: "Panamá", code: "PAN", flag: "🇵🇦" }, away: { name: "Croácia", code: "CRO", flag: "🇭🇷" }, stadium: "Levi's Stadium", city: "São Francisco" },
  { id: 71, group: "L", date: "22/06", time: "20:00", home: { name: "Gana", code: "GHA", flag: "🇬🇭" }, away: { name: "Panamá", code: "PAN", flag: "🇵🇦" }, stadium: "Geodis Park", city: "Nashville" },
  { id: 72, group: "L", date: "22/06", time: "20:00", home: { name: "Croácia", code: "CRO", flag: "🇭🇷" }, away: { name: "Inglaterra", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }, stadium: "Gillette Stadium", city: "Boston" },
];
