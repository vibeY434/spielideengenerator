export default function WellenlinienSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Wellenlinien nachfahren
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Fahre die Linien von links nach rechts nach
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">🌊</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Wave lines to trace - 5 rows */}
      {[120, 200, 280, 360, 440].map((y, i) => (
        <g key={i}>
          {/* Guide line (dashed) */}
          <path
            d={`M 80 ${y} Q 160 ${y - 30} 240 ${y} Q 320 ${y + 30} 400 ${y} Q 480 ${y - 30} 560 ${y} Q 640 ${y + 30} 720 ${y}`}
            fill="none"
            stroke="#99f6e4"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {/* Trace line (dotted) */}
          <path
            d={`M 80 ${y} Q 160 ${y - 30} 240 ${y} Q 320 ${y + 30} 400 ${y} Q 480 ${y - 30} 560 ${y} Q 640 ${y + 30} 720 ${y}`}
            fill="none"
            stroke="#14b8a6"
            strokeWidth="3"
            strokeDasharray="8,8"
            strokeLinecap="round"
          />
          {/* Start arrow */}
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
