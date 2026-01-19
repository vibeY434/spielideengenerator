export type Activity = "bewegung" | "spiel" | "basteln" | "malen";
export type Location = "drinnen" | "draussen";
export type Duration = "kurz" | "mittel" | "lang";
export type Age = "u3" | "ue3";

export interface Game {
  id: number;
  title: string;
  emoji: string;
  description: string;
  materials: string[];
  variants: string[];
  activity: Activity;
  location: Location;
  duration: Duration;
  age: Age[];
  minGroupSize: number;
  maxGroupSize: number;
}

export const games: Game[] = [
  {
    id: 1,
    title: "Stopptanz",
    emoji: "💃",
    description:
      "Musik an - alle tanzen! Musik aus - alle erstarren wie Statuen. Wer sich bewegt, scheidet aus oder bekommt eine lustige Aufgabe.",
    materials: ["Musikanlage", "Tanzmusik"],
    variants: [
      "Mit Tierbewegungen tanzen",
      "In Zeitlupe tanzen",
      "Nur auf einem Bein stehen beim Stopp",
    ],
    activity: "bewegung",
    location: "drinnen",
    duration: "kurz",
    age: ["u3", "ue3"],
    minGroupSize: 4,
    maxGroupSize: 30,
  },
  {
    id: 2,
    title: "Schatzsuche",
    emoji: "🗺️",
    description:
      "Verstecke kleine Schätze im Garten oder Gruppenraum. Die Kinder suchen mit einer einfachen Schatzkarte oder nach Hinweisen.",
    materials: ["Kleine Schätze (Steine, Muscheln)", "Schatzkarte", "Körbchen"],
    variants: [
      "Farben-Schatzsuche: nur rote Dinge sammeln",
      "Team-Schatzsuche",
      "Mit Verkleidung als Piraten",
    ],
    activity: "spiel",
    location: "draussen",
    duration: "mittel",
    age: ["ue3"],
    minGroupSize: 2,
    maxGroupSize: 15,
  },
  {
    id: 3,
    title: "Fingerfarben-Baum",
    emoji: "🌳",
    description:
      "Male einen Baumstamm vor und die Kinder drücken bunte Fingerabdrücke als Blätter darauf. Perfekt für jede Jahreszeit!",
    materials: [
      "Fingerfarben",
      "Großes Papier",
      "Malkittel",
      "Feuchttücher",
    ],
    variants: [
      "Herbstbaum mit orange/roten Blättern",
      "Frühlingsbaum mit Blüten",
      "Winterbaum mit weißen Schneeflocken",
    ],
    activity: "malen",
    location: "drinnen",
    duration: "mittel",
    age: ["u3", "ue3"],
    minGroupSize: 2,
    maxGroupSize: 10,
  },
  {
    id: 4,
    title: "Raupe aus Eierkarton",
    emoji: "🐛",
    description:
      "Schneide Eierkartons in Streifen und lass die Kinder sie bunt bemalen. Mit Pfeifenreinigern werden Fühler angebracht.",
    materials: [
      "Eierkartons",
      "Farben",
      "Pinsel",
      "Pfeifenreiniger",
      "Wackelaugen",
    ],
    variants: [
      "Als Schlange gestalten",
      "Mit Glitzer verzieren",
      "Namen auf die Raupe schreiben",
    ],
    activity: "basteln",
    location: "drinnen",
    duration: "mittel",
    age: ["ue3"],
    minGroupSize: 2,
    maxGroupSize: 12,
  },
  {
    id: 5,
    title: "Fangen mit Twist",
    emoji: "🏃",
    description:
      "Klassisches Fangen, aber wer gefangen wird, muss wie ein Tier laufen (Frosch hüpfen, Krebs krabbeln) bis er jemanden fängt.",
    materials: [],
    variants: [
      "Kettenfangen: Gefangene fassen sich an",
      "Versteinern: Erlösen durch Antippen",
      "Mit Softbällen zum Abwerfen",
    ],
    activity: "bewegung",
    location: "draussen",
    duration: "kurz",
    age: ["ue3"],
    minGroupSize: 5,
    maxGroupSize: 25,
  },
  {
    id: 6,
    title: "Knete selber machen",
    emoji: "🎨",
    description:
      "Stellt zusammen bunte Knete her! Mehl, Salz, Wasser, Öl und Lebensmittelfarbe mischen - fertig ist der Spielspaß.",
    materials: [
      "2 Tassen Mehl",
      "1 Tasse Salz",
      "1 Tasse Wasser",
      "2 EL Öl",
      "Lebensmittelfarbe",
    ],
    variants: [
      "Glitzerknete mit Glitzer",
      "Duftknete mit Vanilleextrakt",
      "Verschiedene Farben marmorieren",
    ],
    activity: "basteln",
    location: "drinnen",
    duration: "lang",
    age: ["ue3"],
    minGroupSize: 2,
    maxGroupSize: 8,
  },
  {
    id: 7,
    title: "Seifenblasen-Kunst",
    emoji: "🫧",
    description:
      "Füge Farbe zur Seifenblasenflüssigkeit hinzu und puste die Blasen auf weißes Papier. Magische Muster entstehen!",
    materials: [
      "Seifenblasenflüssigkeit",
      "Lebensmittelfarbe",
      "Weißes Papier",
      "Pustestäbe",
    ],
    variants: [
      "Verschiedene Farben übereinander",
      "Große Riesenblasen machen",
      "Blasen mit Strohhalmen pusten",
    ],
    activity: "malen",
    location: "draussen",
    duration: "kurz",
    age: ["u3", "ue3"],
    minGroupSize: 2,
    maxGroupSize: 15,
  },
  {
    id: 8,
    title: "Klatschspiele",
    emoji: "👏",
    description:
      "Bei mir, bei dir - klassische Klatschspiele fördern Rhythmus und Koordination. Perfekt für Wartezeiten!",
    materials: [],
    variants: [
      "Mit Füßen stampfen",
      "Im Kreis weitergeben",
      "Eigene Reime erfinden",
    ],
    activity: "spiel",
    location: "drinnen",
    duration: "kurz",
    age: ["u3", "ue3"],
    minGroupSize: 2,
    maxGroupSize: 20,
  },
  {
    id: 9,
    title: "Naturmandala",
    emoji: "🍂",
    description:
      "Sammelt Naturmaterialien und legt gemeinsam ein großes Mandala auf den Boden. Blätter, Steine, Stöckchen - alles ist erlaubt!",
    materials: ["Naturmaterialien", "Evtl. Korb zum Sammeln"],
    variants: [
      "Jedes Kind legt ein eigenes kleines Mandala",
      "Themen-Mandala (nur Herbst)",
      "Mandala fotografieren",
    ],
    activity: "basteln",
    location: "draussen",
    duration: "mittel",
    age: ["ue3"],
    minGroupSize: 3,
    maxGroupSize: 20,
  },
  {
    id: 10,
    title: "Bewegungsparcours",
    emoji: "🤸",
    description:
      "Baut einen Parcours mit Stühlen, Kissen, Reifen und Seilen. Krabbeln, balancieren, hüpfen - los gehts!",
    materials: [
      "Stühle",
      "Kissen",
      "Reifen",
      "Seile",
      "Matten",
    ],
    variants: [
      "Rückwärts durch den Parcours",
      "Mit Zeitstoppuhr",
      "Als Hindernis-Staffel",
    ],
    activity: "bewegung",
    location: "drinnen",
    duration: "lang",
    age: ["u3", "ue3"],
    minGroupSize: 4,
    maxGroupSize: 20,
  },
  {
    id: 11,
    title: "Murmelbilder",
    emoji: "🔮",
    description:
      "Lege Papier in einen Kartondeckel, gib Farbkleckse darauf und rolle Murmeln durch die Farbe. Tolle abstrakte Kunst!",
    materials: [
      "Kartondeckel",
      "Papier",
      "Murmeln",
      "Fingerfarben",
    ],
    variants: [
      "Mit verschiedenen Kugelgrößen",
      "Glitzerfarbe verwenden",
      "Mehrere Farben nacheinander",
    ],
    activity: "malen",
    location: "drinnen",
    duration: "kurz",
    age: ["u3", "ue3"],
    minGroupSize: 2,
    maxGroupSize: 10,
  },
  {
    id: 12,
    title: "Sackhüpfen",
    emoji: "🦘",
    description:
      "In Jutesäcke oder große Stoffbeutel steigen und um die Wette hüpfen. Klassiker mit Lachgarantie!",
    materials: ["Jutesäcke oder große Stoffbeutel", "Startlinie markieren"],
    variants: [
      "Slalom um Hütchen",
      "Staffellauf",
      "Rückwärts hüpfen",
    ],
    activity: "bewegung",
    location: "draussen",
    duration: "kurz",
    age: ["ue3"],
    minGroupSize: 4,
    maxGroupSize: 20,
  },
  {
    id: 13,
    title: "Fühlbox",
    emoji: "🎁",
    description:
      "Verschiedene Gegenstände in eine Box legen, die Kinder ertasten blind was drin ist. Spannend und lehrreich!",
    materials: [
      "Karton mit Loch",
      "Verschiedene Gegenstände",
      "Tuch zum Abdecken",
    ],
    variants: [
      "Nur Naturmaterialien",
      "Gegenstände beschreiben",
      "In Teams raten",
    ],
    activity: "spiel",
    location: "drinnen",
    duration: "kurz",
    age: ["u3", "ue3"],
    minGroupSize: 2,
    maxGroupSize: 15,
  },
  {
    id: 14,
    title: "Handabdruck-Tiere",
    emoji: "✋",
    description:
      "Aus bunten Handabdrücken entstehen Tiere: Fische, Vögel, Schmetterlinge. Einfach Details hinzumalen!",
    materials: [
      "Fingerfarben",
      "Papier",
      "Pinsel für Details",
      "Feuchttücher",
    ],
    variants: [
      "Füße-Abdrücke als Pinguine",
      "Familien-Handabdruck-Bild",
      "Handabdruck-Kalender",
    ],
    activity: "malen",
    location: "drinnen",
    duration: "mittel",
    age: ["u3", "ue3"],
    minGroupSize: 2,
    maxGroupSize: 12,
  },
  {
    id: 15,
    title: "Blinde Kuh",
    emoji: "🙈",
    description:
      "Ein Kind bekommt die Augen verbunden und muss die anderen fangen. Wer gefangen wird, ist als nächstes dran!",
    materials: ["Augenbinde oder Tuch"],
    variants: [
      "Stimmen erraten",
      "Mit Glöckchen am Arm",
      "In begrenztem Bereich",
    ],
    activity: "spiel",
    location: "drinnen",
    duration: "kurz",
    age: ["ue3"],
    minGroupSize: 5,
    maxGroupSize: 15,
  },
  {
    id: 16,
    title: "Pappteller-Masken",
    emoji: "🎭",
    description:
      "Aus Papptellern werden Tiermasken oder Fantasiefiguren. Ausschneiden, bemalen, Gummiband dran - fertig!",
    materials: [
      "Pappteller",
      "Farben",
      "Schere",
      "Gummiband",
      "Federn, Wolle etc.",
    ],
    variants: [
      "Superhelden-Masken",
      "Jahreszeitliche Motive",
      "Theaterstück mit Masken",
    ],
    activity: "basteln",
    location: "drinnen",
    duration: "mittel",
    age: ["ue3"],
    minGroupSize: 2,
    maxGroupSize: 15,
  },
  {
    id: 17,
    title: "Wasserstaffel",
    emoji: "💧",
    description:
      "Wasser mit Schwamm oder Löffel transportieren und in Eimer füllen. Welches Team ist schneller?",
    materials: [
      "Eimer",
      "Schwämme oder Löffel",
      "Wasser",
      "Handtücher",
    ],
    variants: [
      "Auf dem Kopf balancieren",
      "Mit Bechern und Löchern",
      "Hindernisse einbauen",
    ],
    activity: "bewegung",
    location: "draussen",
    duration: "mittel",
    age: ["ue3"],
    minGroupSize: 6,
    maxGroupSize: 24,
  },
  {
    id: 18,
    title: "Stempelbilder",
    emoji: "🥔",
    description:
      "Kartoffeln halbieren und Muster reinschnitzen. Dann bunt stempeln! Auch mit Korken, Blättern oder Schwämmen.",
    materials: [
      "Kartoffeln",
      "Stempelfarbe",
      "Papier",
      "Messer (für Erwachsene)",
    ],
    variants: [
      "Mit Obst und Gemüse stempeln",
      "Geschenkpapier gestalten",
      "Stoffbeutel bedrucken",
    ],
    activity: "malen",
    location: "drinnen",
    duration: "mittel",
    age: ["ue3"],
    minGroupSize: 2,
    maxGroupSize: 10,
  },
  {
    id: 19,
    title: "Bällebad-Schatzsuche",
    emoji: "🔴",
    description:
      "Verstecke kleine Gegenstände im Bällebad oder in einer Wanne mit Bällen. Die Kinder tauchen ein und suchen!",
    materials: [
      "Bällebad oder Wanne",
      "Viele Bälle",
      "Kleine Schätze zum Verstecken",
    ],
    variants: [
      "Nur bestimmte Farben finden",
      "Zahlen oder Buchstaben suchen",
      "Auf Zeit spielen",
    ],
    activity: "spiel",
    location: "drinnen",
    duration: "kurz",
    age: ["u3", "ue3"],
    minGroupSize: 2,
    maxGroupSize: 6,
  },
  {
    id: 20,
    title: "Windräder basteln",
    emoji: "🌀",
    description:
      "Aus buntem Papier Windräder falten und auf Stöcke stecken. Dann raus und den Wind fangen!",
    materials: [
      "Buntes Papier",
      "Holzstäbe",
      "Pinnnadeln oder Musterklammern",
      "Schere",
    ],
    variants: [
      "Mit Glitzerpapier",
      "Verschiedene Größen",
      "Wettrennen: wer dreht am schnellsten?",
    ],
    activity: "basteln",
    location: "drinnen",
    duration: "mittel",
    age: ["ue3"],
    minGroupSize: 2,
    maxGroupSize: 15,
  },
];

export const activityLabels: Record<Activity, { label: string; emoji: string }> = {
  bewegung: { label: "Bewegung", emoji: "🏃" },
  spiel: { label: "Spiel", emoji: "🎲" },
  basteln: { label: "Basteln", emoji: "✂️" },
  malen: { label: "Malen", emoji: "🖌️" },
};

export const locationLabels: Record<Location, { label: string; emoji: string }> = {
  drinnen: { label: "Drinnen", emoji: "🏠" },
  draussen: { label: "Draußen", emoji: "🌳" },
};

export const durationLabels: Record<Duration, { label: string; emoji: string }> = {
  kurz: { label: "Kurz (5-15 Min)", emoji: "⚡" },
  mittel: { label: "Mittel (15-30 Min)", emoji: "⏱️" },
  lang: { label: "Lang (30+ Min)", emoji: "🕐" },
};

export const ageLabels: Record<Age, { label: string; emoji: string }> = {
  u3: { label: "Unter 3 Jahre", emoji: "👶" },
  ue3: { label: "Über 3 Jahre", emoji: "👧" },
};
