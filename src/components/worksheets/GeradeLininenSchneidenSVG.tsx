export default function GeradeLininenSchneidenSVG() {
  const rewards = ["⭐", "🌟", "💫", "✨", "🎈", "🎉", "🏆", "🎁"];

  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Gerade Linien schneiden
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Schneide entlang der gestrichelten Linien - von links nach rechts
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">✂️</text>
      <text x="720" y="50" fontSize="30">✂️</text>

      {/* Cutting strips - 8 rows */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const y = 90 + i * 60;
        const stripHeight = 45 - i * 2; // Gets narrower

        return (
          <g key={i}>
            {/* Strip background */}
            <rect
              x="60"
              y={y}
              width="680"
              height={stripHeight}
              fill={i % 2 === 0 ? "#fef3c7" : "#dbeafe"}
              stroke={i % 2 === 0 ? "#fbbf24" : "#60a5fa"}
              strokeWidth="1"
              rx="4"
            />

            {/* Cutting line (dashed) */}
            <line
              x1="60"
              y1={y + stripHeight}
              x2="740"
              y2={y + stripHeight}
              stroke="#374151"
              strokeWidth="2"
              strokeDasharray="10,5"
            />

            {/* Scissors icon at start */}
            <text x="30" y={y + stripHeight / 2 + 8} fontSize="20">✂️</text>

            {/* Reward emoji at end */}
            <text x="750" y={y + stripHeight / 2 + 10} fontSize="24">{rewards[i]}</text>

            {/* Arrow showing direction */}
            {i === 0 && (
              <g>
                <line x1="100" y1={y + stripHeight + 15} x2="200" y2={y + stripHeight + 15} stroke="#f97316" strokeWidth="2" />
                <polygon points="200,10 210,15 200,20" fill="#f97316" transform={`translate(0, ${y + stripHeight})`} />
                <text x="120" y={y + stripHeight + 30} fontSize="10" fill="#f97316">Schneiderichtung</text>
              </g>
            )}
          </g>
        );
      })}

      {/* Tips */}
      <g transform="translate(60, 540)">
        <text x="0" y="0" fontSize="12" fill="#6b7280">💡 Tipp: Halte die Schere ruhig und drehe das Papier, nicht die Schere!</text>
      </g>

      {/* Footer */}
      <text x="400" y="580" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
    </svg>
  );
}
