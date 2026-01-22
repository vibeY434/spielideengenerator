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
