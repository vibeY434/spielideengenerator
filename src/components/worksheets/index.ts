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

// Map worksheet IDs to their SVG components
export const worksheetComponents: Record<number, React.ComponentType> = {
  1: WellenlinienSVG,
  2: ZickzackSVG,
  3: SpiralenSVG,
  4: SchleifenSVG,
  5: Zahlen1bis5SVG,
  6: Zahlen6bis10SVG,
  7: MengenZaehlenSVG,
  13: FormenErkennenSVG,
  14: MusterFortsetzenSVG,
  17: LabyrinthSVG,
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
};
