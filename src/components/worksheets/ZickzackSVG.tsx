export default function ZickzackSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Zickzack-Muster nachfahren
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Folge den spitzen Linien von links nach rechts
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">⚡</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Zigzag lines - 5 rows */}
      {[120, 200, 280, 360, 440].map((y, i) => (
        <g key={i}>
          {/* Guide line (light background) */}
          <path
            d={`M 80 ${y} L 160 ${y - 35} L 240 ${y} L 320 ${y - 35} L 400 ${y} L 480 ${y - 35} L 560 ${y} L 640 ${y - 35} L 720 ${y}`}
            fill="none"
            stroke="#fde68a"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Trace line (dotted) */}
          <path
            d={`M 80 ${y} L 160 ${y - 35} L 240 ${y} L 320 ${y - 35} L 400 ${y} L 480 ${y - 35} L 560 ${y} L 640 ${y - 35} L 720 ${y}`}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeDasharray="8,8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Start point */}
          <circle cx="80" cy={y} r="8" fill="#f97316" />
          <text x="60" y={y + 5} fontSize="12" fill="#f97316">▶</text>
        </g>
      ))}

      {/* Footer */}
      <text x="400" y="520" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
      <text x="400" y="540" textAnchor="middle" className="fill-gray-400" fontSize="10">
        Schwungübung für Vorschulkinder
      </text>
    </svg>
  );
}
