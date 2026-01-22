export default function FormenErkennenSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Formen erkennen
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Male alle Kreise rot, Dreiecke blau und Quadrate grün aus
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">🔷</text>
      <text x="720" y="50" fontSize="30">🖍️</text>

      {/* Legend */}
      <g transform="translate(100, 90)">
        <circle cx="20" cy="15" r="12" fill="none" stroke="#ef4444" strokeWidth="3" />
        <text x="45" y="20" fontSize="14" fill="#374151">= Rot</text>

        <polygon points="120,3 132,27 108,27" fill="none" stroke="#3b82f6" strokeWidth="3" />
        <text x="145" y="20" fontSize="14" fill="#374151">= Blau</text>

        <rect x="208" y="3" width="24" height="24" fill="none" stroke="#22c55e" strokeWidth="3" />
        <text x="245" y="20" fontSize="14" fill="#374151">= Grün</text>
      </g>

      {/* Shapes to color - scattered layout */}
      {/* Row 1 */}
      <circle cx="120" cy="180" r="35" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <rect x="220" y="145" width="70" height="70" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <polygon points="380,145 420,215 340,215" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <circle cx="520" cy="180" r="30" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <rect x="600" y="150" width="60" height="60" fill="none" stroke="#9ca3af" strokeWidth="2" />

      {/* Row 2 */}
      <polygon points="150,270 190,340 110,340" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <circle cx="280" cy="305" r="40" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <rect x="360" y="265" width="80" height="80" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <polygon points="540,270 580,340 500,340" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <circle cx="680" cy="305" r="35" fill="none" stroke="#9ca3af" strokeWidth="2" />

      {/* Row 3 */}
      <rect x="80" y="390" width="65" height="65" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <circle cx="230" cy="420" r="30" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <polygon points="330,390 375,470 285,470" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <rect x="420" y="385" width="75" height="75" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <circle cx="580" cy="420" r="40" fill="none" stroke="#9ca3af" strokeWidth="2" />
      <polygon points="680,390 720,460 640,460" fill="none" stroke="#9ca3af" strokeWidth="2" />

      {/* Count boxes at bottom */}
      <g transform="translate(150, 510)">
        <circle cx="20" cy="12" r="10" fill="none" stroke="#ef4444" strokeWidth="2" />
        <text x="40" y="17" fontSize="14" fill="#374151">Kreise: ___</text>
      </g>
      <g transform="translate(320, 510)">
        <polygon points="20,2 30,22 10,22" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <text x="40" y="17" fontSize="14" fill="#374151">Dreiecke: ___</text>
      </g>
      <g transform="translate(510, 510)">
        <rect x="10" y="2" width="20" height="20" fill="none" stroke="#22c55e" strokeWidth="2" />
        <text x="40" y="17" fontSize="14" fill="#374151">Quadrate: ___</text>
      </g>

      {/* Footer */}
      <text x="400" y="570" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
    </svg>
  );
}
