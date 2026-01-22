export default function BuchstabeOSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Der Buchstabe O
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Ein einfacher Kreis! Fahre ihn nach und übe in den Kästchen
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">⭕</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Large O to trace */}
      <g transform="translate(250, 80)">
        {/* Background O */}
        <text x="150" y="180" textAnchor="middle" fontSize="220" fill="#dbeafe" fontWeight="bold" fontFamily="Arial">
          O
        </text>
        {/* Dotted O */}
        <text x="150" y="180" textAnchor="middle" fontSize="220" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="12,8" fontWeight="bold" fontFamily="Arial">
          O
        </text>
        {/* Start point - top of O */}
        <circle cx="150" cy="10" r="10" fill="#f97316" />
        <text x="170" y="15" fontSize="12" fill="#f97316" fontWeight="bold">Start</text>
        {/* Arrow showing circular direction */}
        <path d="M 165 15 Q 220 50 220 100" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" />
        <text x="225" y="60" fontSize="20" fill="#f97316">↓</text>
      </g>

      {/* O words with emojis */}
      <g transform="translate(50, 290)">
        <text x="0" y="0" fontSize="14" fill="#374151" fontWeight="bold">O wie...</text>

        <g transform="translate(0, 20)">
          <text x="0" y="25" fontSize="30">🍊</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Orange</text>
        </g>

        <g transform="translate(130, 20)">
          <text x="0" y="25" fontSize="30">👂</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Ohr</text>
        </g>

        <g transform="translate(230, 20)">
          <text x="0" y="25" fontSize="30">👵</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Oma</text>
        </g>

        <g transform="translate(320, 20)">
          <text x="0" y="25" fontSize="30">🐂</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Ochse</text>
        </g>

        <g transform="translate(430, 20)">
          <text x="0" y="25" fontSize="30">🫒</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Olive</text>
        </g>

        <g transform="translate(530, 20)">
          <text x="0" y="25" fontSize="30">🦉</text>
          <text x="45" y="25" fontSize="16" fill="#374151">Eule (Owl)</text>
        </g>
      </g>

      {/* Practice boxes with circles */}
      <text x="50" y="390" fontSize="14" fill="#374151" fontWeight="bold">Übe hier - male schöne Kreise:</text>

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
          {/* Light O/circle in first few boxes */}
          {i < 3 && (
            <circle
              cx={90 + (i % 8) * 88}
              cy={445}
              r="30"
              fill="none"
              stroke="#dbeafe"
              strokeWidth="3"
              strokeDasharray="8,4"
            />
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
