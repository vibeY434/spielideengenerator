export default function BuchstabeASVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Der Buchstabe A
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Fahre den Buchstaben nach und übe in den Kästchen
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">🅰️</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Large A to trace */}
      <g transform="translate(250, 80)">
        {/* Background A */}
        <text x="150" y="180" textAnchor="middle" fontSize="220" fill="#ccfbf1" fontWeight="bold" fontFamily="Arial">
          A
        </text>
        {/* Dotted A */}
        <text x="150" y="180" textAnchor="middle" fontSize="220" fill="none" stroke="#14b8a6" strokeWidth="4" strokeDasharray="12,8" fontWeight="bold" fontFamily="Arial">
          A
        </text>
        {/* Start point */}
        <circle cx="150" cy="10" r="10" fill="#f97316" />
        <text x="170" y="15" fontSize="12" fill="#f97316" fontWeight="bold">Start</text>
        {/* Arrows showing direction */}
        <path d="M 150 30 L 90 170" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
      </g>

      {/* Arrow marker */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
        </marker>
      </defs>

      {/* A words with emojis */}
      <g transform="translate(50, 290)">
        <text x="0" y="0" fontSize="14" fill="#374151" fontWeight="bold">A wie...</text>

        <g transform="translate(0, 20)">
          <text x="0" y="25" fontSize="30">🍎</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Apfel</text>
        </g>

        <g transform="translate(120, 20)">
          <text x="0" y="25" fontSize="30">🐜</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Ameise</text>
        </g>

        <g transform="translate(250, 20)">
          <text x="0" y="25" fontSize="30">🚗</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Auto</text>
        </g>

        <g transform="translate(360, 20)">
          <text x="0" y="25" fontSize="30">🍍</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Ananas</text>
        </g>

        <g transform="translate(480, 20)">
          <text x="0" y="25" fontSize="30">🐒</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Affe</text>
        </g>
      </g>

      {/* Practice boxes */}
      <text x="50" y="390" fontSize="14" fill="#374151" fontWeight="bold">Übe hier:</text>

      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <g key={i}>
          <rect
            x={50 + (i % 8) * 88}
            y={400}
            width="80"
            height="90"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="2"
            rx="8"
          />
          {/* Light A in first few boxes */}
          {i < 3 && (
            <text
              x={90 + (i % 8) * 88}
              y={470}
              textAnchor="middle"
              fontSize="60"
              fill="#f0fdfa"
              fontWeight="bold"
            >
              A
            </text>
          )}
        </g>
      ))}

      {/* Second row of practice boxes */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={`row2-${i}`}
          x={50 + i * 88}
          y={500}
          width="80"
          height="90"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="2"
          rx="8"
        />
      ))}

      {/* Footer */}
      <text x="400" y="620" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
    </svg>
  );
}
