export interface GroupTeam {
  name: string;
  flag: string;
  // Standings data
  pts: number;
  j: number;
  v: number;
  e: number;
  d: number;
  gp: number;
  gc: number;
  sg: number;
}

export interface Group {
  letter: string;
  teams: GroupTeam[];
}

// Teams sorted by standings within each group (1st = classified, 2nd = playoff, 3rd/4th = eliminated)
export const groups: Group[] = [
  {
    letter: "A",
    teams: [
      { name: "México", flag: "🇲🇽", pts: 7, j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 1, sg: 4 },
      { name: "Coreia do Sul", flag: "🇰🇷", pts: 5, j: 3, v: 1, e: 2, d: 0, gp: 4, gc: 2, sg: 2 },
      { name: "Tchéquia", flag: "🇨🇿", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 4, sg: -1 },
      { name: "África do Sul", flag: "🇿🇦", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 6, sg: -5 },
    ],
  },
  {
    letter: "B",
    teams: [
      { name: "Suíça", flag: "🇨🇭", pts: 7, j: 3, v: 2, e: 1, d: 0, gp: 4, gc: 1, sg: 3 },
      { name: "Canadá", flag: "🇨🇦", pts: 5, j: 3, v: 1, e: 2, d: 0, gp: 3, gc: 2, sg: 1 },
      { name: "Bósnia e Herzegovina", flag: "🇧🇦", pts: 2, j: 3, v: 0, e: 2, d: 1, gp: 2, gc: 3, sg: -1 },
      { name: "Catar", flag: "🇶🇦", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 4, sg: -3 },
    ],
  },
  {
    letter: "C",
    teams: [
      { name: "Brasil", flag: "🇧🇷", pts: 9, j: 3, v: 3, e: 0, d: 0, gp: 7, gc: 1, sg: 6 },
      { name: "Marrocos", flag: "🇲🇦", pts: 4, j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 3, sg: 0 },
      { name: "Escócia", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 4, sg: -2 },
      { name: "Haiti", flag: "🇭🇹", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 5, sg: -4 },
    ],
  },
  {
    letter: "D",
    teams: [
      { name: "Estados Unidos", flag: "🇺🇸", pts: 7, j: 3, v: 2, e: 1, d: 0, gp: 6, gc: 2, sg: 4 },
      { name: "Turquia", flag: "🇹🇷", pts: 5, j: 3, v: 1, e: 2, d: 0, gp: 4, gc: 3, sg: 1 },
      { name: "Paraguai", flag: "🇵🇾", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 3, sg: -1 },
      { name: "Austrália", flag: "🇦🇺", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 2, gc: 6, sg: -4 },
    ],
  },
  {
    letter: "E",
    teams: [
      { name: "Alemanha", flag: "🇩🇪", pts: 9, j: 3, v: 3, e: 0, d: 0, gp: 8, gc: 1, sg: 7 },
      { name: "Equador", flag: "🇪🇨", pts: 4, j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 4, sg: -1 },
      { name: "Costa do Marfim", flag: "🇨🇮", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 4, sg: -2 },
      { name: "Curaçao", flag: "🇨🇼", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 5, sg: -4 },
    ],
  },
  {
    letter: "F",
    teams: [
      { name: "Países Baixos", flag: "🇳🇱", pts: 7, j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 1, sg: 4 },
      { name: "Japão", flag: "🇯🇵", pts: 6, j: 3, v: 2, e: 0, d: 1, gp: 4, gc: 3, sg: 1 },
      { name: "Suécia", flag: "🇸🇪", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 3, sg: -1 },
      { name: "Tunísia", flag: "🇹🇳", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 5, sg: -4 },
    ],
  },
  {
    letter: "G",
    teams: [
      { name: "Bélgica", flag: "🇧🇪", pts: 7, j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 2, sg: 3 },
      { name: "Egito", flag: "🇪🇬", pts: 4, j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 3, sg: 0 },
      { name: "Irã", flag: "🇮🇷", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 4, sg: -2 },
      { name: "Nova Zelândia", flag: "🇳🇿", pts: 2, j: 3, v: 0, e: 2, d: 1, gp: 2, gc: 3, sg: -1 },
    ],
  },
  {
    letter: "H",
    teams: [
      { name: "Espanha", flag: "🇪🇸", pts: 9, j: 3, v: 3, e: 0, d: 0, gp: 7, gc: 1, sg: 6 },
      { name: "Uruguai", flag: "🇺🇾", pts: 6, j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 3, sg: 2 },
      { name: "Arábia Saudita", flag: "🇸🇦", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 5, sg: -3 },
      { name: "Cabo Verde", flag: "🇨🇻", pts: 0, j: 3, v: 0, e: 0, d: 3, gp: 1, gc: 6, sg: -5 },
    ],
  },
  {
    letter: "I",
    teams: [
      { name: "França", flag: "🇫🇷", pts: 9, j: 3, v: 3, e: 0, d: 0, gp: 8, gc: 2, sg: 6 },
      { name: "Senegal", flag: "🇸🇳", pts: 4, j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 3, sg: 0 },
      { name: "Noruega", flag: "🇳🇴", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2 },
      { name: "RD Congo", flag: "🇨🇩", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 5, sg: -4 },
    ],
  },
  {
    letter: "J",
    teams: [
      { name: "Argentina", flag: "🇦🇷", pts: 9, j: 3, v: 3, e: 0, d: 0, gp: 9, gc: 1, sg: 8 },
      { name: "Áustria", flag: "🇦🇹", pts: 4, j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 4, sg: -1 },
      { name: "Argélia", flag: "🇩🇿", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 4, sg: -2 },
      { name: "Jordânia", flag: "🇯🇴", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 6, sg: -5 },
    ],
  },
  {
    letter: "K",
    teams: [
      { name: "Portugal", flag: "🇵🇹", pts: 7, j: 3, v: 2, e: 1, d: 0, gp: 6, gc: 2, sg: 4 },
      { name: "Colômbia", flag: "🇨🇴", pts: 5, j: 3, v: 1, e: 2, d: 0, gp: 4, gc: 3, sg: 1 },
      { name: "Iraque", flag: "🇮🇶", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 3, sg: -1 },
      { name: "Uzbequistão", flag: "🇺🇿", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 5, sg: -4 },
    ],
  },
  {
    letter: "L",
    teams: [
      { name: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", pts: 7, j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 1, sg: 4 },
      { name: "Croácia", flag: "🇭🇷", pts: 6, j: 3, v: 2, e: 0, d: 1, gp: 4, gc: 2, sg: 2 },
      { name: "Gana", flag: "🇬🇭", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2 },
      { name: "Panamá", flag: "🇵🇦", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 5, sg: -4 },
    ],
  },
];
