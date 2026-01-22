// Arbeitsblätter für Vorschulkinder

export type WorksheetCategory =
  | "schwunguebungen"
  | "zahlen"
  | "buchstaben"
  | "formen"
  | "konzentration"
  | "jahreszeiten"
  | "schneiden";

export type Difficulty = "leicht" | "mittel" | "schwer";

export type Age = "ab3" | "ab4" | "ab5";

export interface Worksheet {
  id: number;
  title: string;
  emoji: string;
  description: string;
  category: WorksheetCategory;
  difficulty: Difficulty;
  age: Age;
  isPremium: boolean;
  // SVG-Content für HTML-Vorschau (inline)
  svgContent?: string;
  // Später: PDF-Datei für Download
  pdfFile?: string;
}

export const worksheets: Worksheet[] = [
  // === SCHWUNGÜBUNGEN ===
  {
    id: 1,
    title: "Wellenlinien",
    emoji: "🌊",
    description: "Fahre die Wellenlinien nach - von links nach rechts. Perfekte Übung für flüssige Schreibbewegungen.",
    category: "schwunguebungen",
    difficulty: "leicht",
    age: "ab3",
    isPremium: false,
  },
  {
    id: 2,
    title: "Zickzack-Muster",
    emoji: "⚡",
    description: "Zeichne die Zickzack-Linien nach. Trainiert Richtungswechsel und Stiftkontrolle.",
    category: "schwunguebungen",
    difficulty: "leicht",
    age: "ab3",
    isPremium: false,
  },
  {
    id: 3,
    title: "Spiralen",
    emoji: "🌀",
    description: "Male die Spiralen von außen nach innen oder umgekehrt. Fördert Feinmotorik.",
    category: "schwunguebungen",
    difficulty: "mittel",
    age: "ab4",
    isPremium: false,
  },
  {
    id: 4,
    title: "Schleifen-Girlande",
    emoji: "🎀",
    description: "Verbinde die Schleifen zu einer durchgehenden Girlande. Vorbereitung aufs Schreibschrift-Lernen.",
    category: "schwunguebungen",
    difficulty: "schwer",
    age: "ab5",
    isPremium: true,
  },

  // === ZAHLEN & MENGEN ===
  {
    id: 5,
    title: "Zahlen 1-5 nachspuren",
    emoji: "1️⃣",
    description: "Fahre die Zahlen 1 bis 5 nach. Lerne die richtige Schreibweise der ersten Zahlen.",
    category: "zahlen",
    difficulty: "leicht",
    age: "ab4",
    isPremium: false,
  },
  {
    id: 6,
    title: "Zahlen 6-10 nachspuren",
    emoji: "🔢",
    description: "Fahre die Zahlen 6 bis 10 nach. Die größeren Zahlen für Fortgeschrittene.",
    category: "zahlen",
    difficulty: "mittel",
    age: "ab4",
    isPremium: false,
  },
  {
    id: 7,
    title: "Mengen zählen",
    emoji: "🍎",
    description: "Zähle die Gegenstände und verbinde sie mit der richtigen Zahl.",
    category: "zahlen",
    difficulty: "leicht",
    age: "ab4",
    isPremium: false,
  },
  {
    id: 8,
    title: "Mehr oder weniger?",
    emoji: "⚖️",
    description: "Vergleiche die Mengen: Kreise die größere Menge ein.",
    category: "zahlen",
    difficulty: "mittel",
    age: "ab5",
    isPremium: true,
  },

  // === BUCHSTABEN ===
  {
    id: 9,
    title: "Buchstabe A",
    emoji: "🅰️",
    description: "Lerne den Buchstaben A - nachspuren und Bilder finden, die mit A anfangen.",
    category: "buchstaben",
    difficulty: "leicht",
    age: "ab5",
    isPremium: false,
  },
  {
    id: 10,
    title: "Buchstabe M",
    emoji: "Ⓜ️",
    description: "Lerne den Buchstaben M - nachspuren und Bilder finden, die mit M anfangen (Mama, Maus, Mond).",
    category: "buchstaben",
    difficulty: "leicht",
    age: "ab5",
    isPremium: false,
  },
  {
    id: 11,
    title: "Buchstabe O",
    emoji: "⭕",
    description: "Lerne den Buchstaben O - ein einfacher runder Buchstabe zum Nachspuren.",
    category: "buchstaben",
    difficulty: "leicht",
    age: "ab5",
    isPremium: false,
  },
  {
    id: 12,
    title: "Anlaut-Bilder",
    emoji: "🖼️",
    description: "Verbinde die Bilder mit dem passenden Anfangsbuchstaben.",
    category: "buchstaben",
    difficulty: "mittel",
    age: "ab5",
    isPremium: true,
  },

  // === FORMEN & FARBEN ===
  {
    id: 13,
    title: "Formen erkennen",
    emoji: "🔷",
    description: "Finde alle Kreise, Dreiecke und Quadrate und male sie in verschiedenen Farben aus.",
    category: "formen",
    difficulty: "leicht",
    age: "ab3",
    isPremium: false,
  },
  {
    id: 14,
    title: "Muster fortsetzen",
    emoji: "🔴🔵",
    description: "Erkenne das Muster und setze es fort: Kreis, Quadrat, Kreis, Quadrat, ...",
    category: "formen",
    difficulty: "mittel",
    age: "ab4",
    isPremium: false,
  },
  {
    id: 15,
    title: "Symmetrie-Schmetterlinge",
    emoji: "🦋",
    description: "Male die zweite Hälfte des Schmetterlings spiegelgleich aus.",
    category: "formen",
    difficulty: "schwer",
    age: "ab5",
    isPremium: true,
  },

  // === KONZENTRATION & LOGIK ===
  {
    id: 16,
    title: "Fehler finden",
    emoji: "🔍",
    description: "Finde die 5 Unterschiede zwischen den zwei Bildern.",
    category: "konzentration",
    difficulty: "leicht",
    age: "ab4",
    isPremium: false,
  },
  {
    id: 17,
    title: "Einfaches Labyrinth",
    emoji: "🌀",
    description: "Hilf der Maus, den Käse zu finden! Ein einfaches Labyrinth für Einsteiger.",
    category: "konzentration",
    difficulty: "leicht",
    age: "ab4",
    isPremium: false,
  },
  {
    id: 18,
    title: "Was gehört zusammen?",
    emoji: "🧩",
    description: "Verbinde die Dinge, die zusammengehören: Hund und Knochen, Vogel und Nest...",
    category: "konzentration",
    difficulty: "leicht",
    age: "ab3",
    isPremium: false,
  },
  {
    id: 19,
    title: "Reihenfolge ergänzen",
    emoji: "➡️",
    description: "Was kommt als nächstes? Erkenne die Reihenfolge und male das fehlende Bild.",
    category: "konzentration",
    difficulty: "mittel",
    age: "ab5",
    isPremium: true,
  },

  // === JAHRESZEITEN & NATUR ===
  {
    id: 20,
    title: "Frühlings-Ausmalbild",
    emoji: "🌸",
    description: "Male das Frühlingsbild aus: Blumen, Schmetterlinge und die Sonne.",
    category: "jahreszeiten",
    difficulty: "leicht",
    age: "ab3",
    isPremium: false,
  },
  {
    id: 21,
    title: "Sommer-Ausmalbild",
    emoji: "☀️",
    description: "Male das Sommerbild aus: Strand, Eis und Sonnenschein.",
    category: "jahreszeiten",
    difficulty: "leicht",
    age: "ab3",
    isPremium: false,
  },
  {
    id: 22,
    title: "Herbst-Ausmalbild",
    emoji: "🍂",
    description: "Male das Herbstbild aus: Bunte Blätter, Drachen und Kastanien.",
    category: "jahreszeiten",
    difficulty: "leicht",
    age: "ab3",
    isPremium: false,
  },
  {
    id: 23,
    title: "Winter-Ausmalbild",
    emoji: "❄️",
    description: "Male das Winterbild aus: Schneemann, Schneeflocken und warme Mützen.",
    category: "jahreszeiten",
    difficulty: "leicht",
    age: "ab3",
    isPremium: false,
  },
  {
    id: 24,
    title: "Tiere zuordnen",
    emoji: "🐻",
    description: "Welches Tier lebt wo? Verbinde die Tiere mit ihrem Zuhause.",
    category: "jahreszeiten",
    difficulty: "mittel",
    age: "ab4",
    isPremium: false,
  },

  // === SCHNEIDEN & KLEBEN ===
  {
    id: 25,
    title: "Gerade Linien schneiden",
    emoji: "✂️",
    description: "Schneide entlang der geraden Linien. Perfekt für Schneide-Anfänger.",
    category: "schneiden",
    difficulty: "leicht",
    age: "ab3",
    isPremium: false,
  },
  {
    id: 26,
    title: "Kurven schneiden",
    emoji: "〰️",
    description: "Schneide entlang der geschwungenen Linien. Für Fortgeschrittene.",
    category: "schneiden",
    difficulty: "mittel",
    age: "ab4",
    isPremium: false,
  },
  {
    id: 27,
    title: "Formen ausschneiden",
    emoji: "🔶",
    description: "Schneide die Formen aus und klebe sie auf ein neues Blatt.",
    category: "schneiden",
    difficulty: "mittel",
    age: "ab4",
    isPremium: false,
  },
  {
    id: 28,
    title: "Puzzle zusammensetzen",
    emoji: "🧩",
    description: "Schneide die Puzzleteile aus und setze das Bild zusammen.",
    category: "schneiden",
    difficulty: "schwer",
    age: "ab5",
    isPremium: true,
  },
];

export const categoryLabels: Record<WorksheetCategory, { label: string; emoji: string }> = {
  schwunguebungen: { label: "Schwungübungen", emoji: "✍️" },
  zahlen: { label: "Zahlen & Mengen", emoji: "🔢" },
  buchstaben: { label: "Buchstaben", emoji: "🔤" },
  formen: { label: "Formen & Farben", emoji: "🔷" },
  konzentration: { label: "Konzentration", emoji: "🧠" },
  jahreszeiten: { label: "Jahreszeiten", emoji: "🌳" },
  schneiden: { label: "Schneiden & Kleben", emoji: "✂️" },
};

export const difficultyLabels: Record<Difficulty, { label: string; emoji: string }> = {
  leicht: { label: "Leicht", emoji: "⭐" },
  mittel: { label: "Mittel", emoji: "⭐⭐" },
  schwer: { label: "Schwer", emoji: "⭐⭐⭐" },
};

export const ageLabels: Record<Age, { label: string; emoji: string }> = {
  ab3: { label: "Ab 3 Jahren", emoji: "👶" },
  ab4: { label: "Ab 4 Jahren", emoji: "👧" },
  ab5: { label: "Ab 5 Jahren", emoji: "🎒" },
};
