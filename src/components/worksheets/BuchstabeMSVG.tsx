export default function BuchstabeMSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Der Buchstabe M
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Fahre den Buchstaben nach und übe in den Kästchen
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">Ⓜ️</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Large M to trace */}
      <g transform="translate(250, 80)">
        {/* Background M */}
        <text x="150" y="180" textAnchor="middle" fontSize="220" fill="#fef3c7" fontWeight="bold" fontFamily="Arial">
          M
        </text>
        {/* Dotted M */}
        <text x="150" y="180" textAnchor="middle" fontSize="220" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="12,8" fontWeight="bold" fontFamily="Arial">
          M
        </text>
        {/* Start point */}
        <circle cx="55" cy="10" r="10" fill="#f97316" />
        <text x="75" y="15" fontSize="12" fill="#f97316" fontWeight="bold">Start</text>
      </g>

      {/* M words with emojis */}
      <g transform="translate(50, 290)">
        <text x="0" y="0" fontSize="14" fill="#374151" fontWeight="bold">M wie...</text>

        <g transform="translate(0, 20)">
          <text x="0" y="25" fontSize="30">👩</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Mama</text>
        </g>

        <g transform="translate(120, 20)">
          <text x="0" y="25" fontSize="30">🐭</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Maus</text>
        </g>

        <g transform="translate(240, 20)">
          <text x="0" y="25" fontSize="30">🌙</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Mond</text>
        </g>

        <g transform="translate(350, 20)">
          <text x="0" y="25" fontSize="30">🥛</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Milch</text>
        </g>

        <g transform="translate(460, 20)">
          <text x="0" y="25" fontSize="30">🐞</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Marienkäfer</text>
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
          {/* Light M in first few boxes */}
          {i < 3 && (
            <text
              x={90 + (i % 8) * 88}
              y={470}
              textAnchor="middle"
              fontSize="55"
              fill="#fef9c3"
              fontWeight="bold"
            >
              M
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
