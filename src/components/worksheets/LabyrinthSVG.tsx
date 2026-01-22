export default function LabyrinthSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Labyrinth - Hilf der Maus!
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Finde den Weg zum Käse - ohne die Wände zu berühren
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">🐭</text>
      <text x="720" y="50" fontSize="30">🧀</text>

      {/* Maze container */}
      <rect x="100" y="100" width="600" height="400" fill="#fefce8" stroke="#84cc16" strokeWidth="4" rx="10" />

      {/* Maze walls */}
      <g stroke="#65a30d" strokeWidth="8" strokeLinecap="round" fill="none">
        {/* Outer walls already covered by rect */}

        {/* Horizontal walls */}
        <line x1="100" y1="180" x2="250" y2="180" />
        <line x1="330" y1="180" x2="500" y2="180" />
        <line x1="580" y1="180" x2="700" y2="180" />

        <line x1="180" y1="260" x2="350" y2="260" />
        <line x1="430" y1="260" x2="620" y2="260" />

        <line x1="100" y1="340" x2="200" y2="340" />
        <line x1="280" y1="340" x2="400" y2="340" />
        <line x1="480" y1="340" x2="550" y2="340" />
        <line x1="630" y1="340" x2="700" y2="340" />

        <line x1="150" y1="420" x2="300" y2="420" />
        <line x1="380" y1="420" x2="520" y2="420" />
        <line x1="600" y1="420" x2="650" y2="420" />

        {/* Vertical walls */}
        <line x1="200" y1="100" x2="200" y2="140" />
        <line x1="400" y1="100" x2="400" y2="140" />
        <line x1="550" y1="100" x2="550" y2="140" />

        <line x1="280" y1="180" x2="280" y2="220" />
        <line x1="550" y1="180" x2="550" y2="240" />

        <line x1="150" y1="260" x2="150" y2="300" />
        <line x1="400" y1="220" x2="400" y2="260" />
        <line x1="650" y1="260" x2="650" y2="320" />

        <line x1="250" y1="340" x2="250" y2="400" />
        <line x1="450" y1="300" x2="450" y2="340" />
        <line x1="580" y1="340" x2="580" y2="380" />

        <line x1="350" y1="420" x2="350" y2="500" />
        <line x1="550" y1="420" x2="550" y2="460" />
      </g>

      {/* Start - Mouse */}
      <text x="115" y="145" fontSize="40">🐭</text>
      <text x="110" y="175" fontSize="12" fill="#65a30d" fontWeight="bold">START</text>

      {/* End - Cheese */}
      <text x="640" y="480" fontSize="40">🧀</text>
      <text x="635" y="510" fontSize="12" fill="#65a30d" fontWeight="bold">ZIEL</text>

      {/* Hint arrows */}
      <text x="180" y="130" fontSize="16" fill="#a3e635">→</text>

      {/* Footer */}
      <text x="400" y="560" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
    </svg>
  );
}
