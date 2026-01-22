import WellenlinienSVG from "./WellenlinienSVG";
import ZickzackSVG from "./ZickzackSVG";
import SpiralenSVG from "./SpiralenSVG";
import SchleifenSVG from "./SchleifenSVG";
import Zahlen1bis5SVG from "./Zahlen1bis5SVG";
import Zahlen6bis10SVG from "./Zahlen6bis10SVG";
import MengenZaehlenSVG from "./MengenZaehlenSVG";
import FormenErkennenSVG from "./FormenErkennenSVG";
import MusterFortsetzenSVG from "./MusterFortsetzenSVG";
import LabyrinthSVG from "./LabyrinthSVG";
import BuchstabeASVG from "./BuchstabeASVG";
import BuchstabeMSVG from "./BuchstabeMSVG";
import BuchstabeOSVG from "./BuchstabeOSVG";
import WasGehoertZusammenSVG from "./WasGehoertZusammenSVG";
import GeradeLininenSchneidenSVG from "./GeradeLininenSchneidenSVG";
import KurvenSchneidenSVG from "./KurvenSchneidenSVG";
import FormenAusschneidenSVG from "./FormenAusschneidenSVG";

// IDs that have image files in public/worksheets/
export const worksheetImages: Set<number> = new Set([
  8,  // Mehr oder weniger (Premium)
  9,  // Buchstabe A - hat jetzt auch Bild
  10, // Buchstabe M - hat jetzt auch Bild
  11, // Buchstabe O - hat jetzt auch Bild
  12, // Anlaut-Bilder (Premium)
  15, // Symmetrie-Schmetterlinge (Premium)
  16, // Fehler finden
  19, // Reihenfolge ergänzen (Premium)
  20, // Frühlings-Ausmalbild
  21, // Sommer-Ausmalbild
  22, // Herbst-Ausmalbild
  23, // Winter-Ausmalbild
  24, // Tiere zuordnen
  28, // Puzzle zusammensetzen (Premium)
]);

// Map worksheet IDs to their SVG components
export const worksheetComponents: Record<number, React.ComponentType> = {
  // Schwungübungen
  1: WellenlinienSVG,
  2: ZickzackSVG,
  3: SpiralenSVG,
  4: SchleifenSVG, // Premium, aber SVG verfügbar

  // Zahlen
  5: Zahlen1bis5SVG,
  6: Zahlen6bis10SVG,
  7: MengenZaehlenSVG,

  // Buchstaben
  9: BuchstabeASVG,
  10: BuchstabeMSVG,
  11: BuchstabeOSVG,

  // Formen
  13: FormenErkennenSVG,
  14: MusterFortsetzenSVG,

  // Konzentration
  17: LabyrinthSVG,
  18: WasGehoertZusammenSVG,

  // Schneiden
  25: GeradeLininenSchneidenSVG,
  26: KurvenSchneidenSVG,
  27: FormenAusschneidenSVG,
};

export {
  WellenlinienSVG,
  ZickzackSVG,
  SpiralenSVG,
  SchleifenSVG,
  Zahlen1bis5SVG,
  Zahlen6bis10SVG,
  MengenZaehlenSVG,
  FormenErkennenSVG,
  MusterFortsetzenSVG,
  LabyrinthSVG,
  BuchstabeASVG,
  BuchstabeMSVG,
  BuchstabeOSVG,
  WasGehoertZusammenSVG,
  GeradeLininenSchneidenSVG,
  KurvenSchneidenSVG,
  FormenAusschneidenSVG,
};
