export default function SchleifenSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Schleifen-Girlande
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Verbinde die Schleifen zu einer Girlande
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">🎀</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Loop lines - 4 rows */}
      {[140, 240, 340, 440].map((y, i) => (
        <g key={i}>
          {/* Guide loops */}
          <path
            d={`M 80 ${y}
               C 80 ${y - 50} 160 ${y - 50} 160 ${y}
               C 160 ${y + 50} 240 ${y + 50} 240 ${y}
               C 240 ${y - 50} 320 ${y - 50} 320 ${y}
               C 320 ${y + 50} 400 ${y + 50} 400 ${y}
               C 400 ${y - 50} 480 ${y - 50} 480 ${y}
               C 480 ${y + 50} 560 ${y + 50} 560 ${y}
               C 560 ${y - 50} 640 ${y - 50} 640 ${y}
               C 640 ${y + 50} 720 ${y + 50} 720 ${y}`}
            fill="none"
            stroke="#fbcfe8"
            strokeWidth="18"
            strokeLinecap="round"
          />
          {/* Trace line */}
          <path
            d={`M 80 ${y}
               C 80 ${y - 50} 160 ${y - 50} 160 ${y}
               C 160 ${y + 50} 240 ${y + 50} 240 ${y}
               C 240 ${y - 50} 320 ${y - 50} 320 ${y}
               C 320 ${y + 50} 400 ${y + 50} 400 ${y}
               C 400 ${y - 50} 480 ${y - 50} 480 ${y}
               C 480 ${y + 50} 560 ${y + 50} 560 ${y}
               C 560 ${y - 50} 640 ${y - 50} 640 ${y}
               C 640 ${y + 50} 720 ${y + 50} 720 ${y}`}
            fill="none"
            stroke="#ec4899"
            strokeWidth="2.5"
            strokeDasharray="8,8"
            strokeLinecap="round"
          />
          {/* Start point */}
          <circle cx="80" cy={y} r="7" fill="#f97316" />
          <text x="55" y={y + 5} fontSize="14" fill="#f97316">▶</text>
        </g>
      ))}

      {/* Footer */}
      <text x="400" y="520" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
      <text x="400" y="540" textAnchor="middle" className="fill-gray-400" fontSize="10">
        Schwungübung für Vorschulkinder - Vorbereitung Schreibschrift
      </text>
    </svg>
  );
}
