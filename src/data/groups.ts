export interface GroupTeam {
  name: string;
  flag: string;
}

export interface Group {
  letter: string;
  teams: GroupTeam[];
}

export const groups: Group[] = [
  {
    letter: "A",
    teams: [
      { name: "México", flag: "🇲🇽" },
      { name: "África do Sul", flag: "🇿🇦" },
      { name: "Coreia do Sul", flag: "🇰🇷" },
      { name: "Tchéquia", flag: "🇨🇿" },
    ],
  },
  {
    letter: "B",
    teams: [
      { name: "Canadá", flag: "🇨🇦" },
      { name: "Bósnia e Herzegovina", flag: "🇧🇦" },
      { name: "Catar", flag: "🇶🇦" },
      { name: "Suíça", flag: "🇨🇭" },
    ],
  },
  {
    letter: "C",
    teams: [
      { name: "Brasil", flag: "🇧🇷" },
      { name: "Marrocos", flag: "🇲🇦" },
      { name: "Haiti", flag: "🇭🇹" },
      { name: "Escócia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
    ],
  },
  {
    letter: "D",
    teams: [
      { name: "Estados Unidos", flag: "🇺🇸" },
      { name: "Paraguai", flag: "🇵🇾" },
      { name: "Austrália", flag: "🇦🇺" },
      { name: "Turquia", flag: "🇹🇷" },
    ],
  },
  {
    letter: "E",
    teams: [
      { name: "Alemanha", flag: "🇩🇪" },
      { name: "Curaçao", flag: "🇨🇼" },
      { name: "Costa do Marfim", flag: "🇨🇮" },
      { name: "Equador", flag: "🇪🇨" },
    ],
  },
  {
    letter: "F",
    teams: [
      { name: "Países Baixos", flag: "🇳🇱" },
      { name: "Japão", flag: "🇯🇵" },
      { name: "Suécia", flag: "🇸🇪" },
      { name: "Tunísia", flag: "🇹🇳" },
    ],
  },
  {
    letter: "G",
    teams: [
      { name: "Bélgica", flag: "🇧🇪" },
      { name: "Egito", flag: "🇪🇬" },
      { name: "Irã", flag: "🇮🇷" },
      { name: "Nova Zelândia", flag: "🇳🇿" },
    ],
  },
  {
    letter: "H",
    teams: [
      { name: "Espanha", flag: "🇪🇸" },
      { name: "Cabo Verde", flag: "🇨🇻" },
      { name: "Arábia Saudita", flag: "🇸🇦" },
      { name: "Uruguai", flag: "🇺🇾" },
    ],
  },
  {
    letter: "I",
    teams: [
      { name: "França", flag: "🇫🇷" },
      { name: "Senegal", flag: "🇸🇳" },
      { name: "RD Congo", flag: "🇨🇩" },
      { name: "Noruega", flag: "🇳🇴" },
    ],
  },
  {
    letter: "J",
    teams: [
      { name: "Argentina", flag: "🇦🇷" },
      { name: "Argélia", flag: "🇩🇿" },
      { name: "Áustria", flag: "🇦🇹" },
      { name: "Jordânia", flag: "🇯🇴" },
    ],
  },
  {
    letter: "K",
    teams: [
      { name: "Portugal", flag: "🇵🇹" },
      { name: "Iraque", flag: "🇮🇶" },
      { name: "Uzbequistão", flag: "🇺🇿" },
      { name: "Colômbia", flag: "🇨🇴" },
    ],
  },
  {
    letter: "L",
    teams: [
      { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { name: "Croácia", flag: "🇭🇷" },
      { name: "Gana", flag: "🇬🇭" },
      { name: "Panamá", flag: "🇵🇦" },
    ],
  },
];
