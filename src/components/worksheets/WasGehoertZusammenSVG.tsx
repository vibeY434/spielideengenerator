export default function WasGehoertZusammenSVG() {
  const pairs = [
    { left: "🐕", leftLabel: "Hund", right: "🦴", rightLabel: "Knochen" },
    { left: "🐦", leftLabel: "Vogel", right: "🪺", rightLabel: "Nest" },
    { left: "🐟", leftLabel: "Fisch", right: "🌊", rightLabel: "Wasser" },
    { left: "🐝", leftLabel: "Biene", right: "🍯", rightLabel: "Honig" },
    { left: "🐰", leftLabel: "Hase", right: "🥕", rightLabel: "Karotte" },
    { left: "🐱", leftLabel: "Katze", right: "🧶", rightLabel: "Wolle" },
  ];

  // Shuffle right side for the exercise
  const shuffledRight = [
    { emoji: "🥕", label: "Karotte" },
    { emoji: "🦴", label: "Knochen" },
    { emoji: "🧶", label: "Wolle" },
    { emoji: "🪺", label: "Nest" },
    { emoji: "🍯", label: "Honig" },
    { emoji: "🌊", label: "Wasser" },
  ];

  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Was gehört zusammen?
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Verbinde die Bilder, die zusammengehören, mit einer Linie
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">🧩</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Example connection */}
      <g transform="translate(200, 85)">
        <rect x="0" y="0" width="400" height="35" fill="#f0fdf4" rx="8" stroke="#86efac" strokeWidth="2" />
        <text x="10" y="24" fontSize="12" fill="#166534">Beispiel: 🌻 Sonnenblume ———— ☀️ Sonne</text>
      </g>

      {/* Left column - Animals/Things */}
      {pairs.map((pair, i) => {
        const y = 140 + i * 70;
        return (
          <g key={`left-${i}`}>
            {/* Left box */}
            <rect
              x="80"
              y={y}
              width="140"
              height="55"
              fill="#eff6ff"
              stroke="#93c5fd"
              strokeWidth="2"
              rx="10"
            />
            <text x="110" y={y + 38} fontSize="32">{pair.left}</text>
            <text x="155" y={y + 35} fontSize="14" fill="#1e40af">{pair.leftLabel}</text>
            {/* Connection point */}
            <circle cx="230" cy={y + 27} r="8" fill="#3b82f6" />
          </g>
        );
      })}

      {/* Right column - Matching items (shuffled) */}
      {shuffledRight.map((item, i) => {
        const y = 140 + i * 70;
        return (
          <g key={`right-${i}`}>
            {/* Connection point */}
            <circle cx="570" cy={y + 27} r="8" fill="#22c55e" />
            {/* Right box */}
            <rect
              x="580"
              y={y}
              width="140"
              height="55"
              fill="#f0fdf4"
              stroke="#86efac"
              strokeWidth="2"
              rx="10"
            />
            <text x="610" y={y + 38} fontSize="32">{item.emoji}</text>
            <text x="655" y={y + 35} fontSize="14" fill="#166534">{item.label}</text>
          </g>
        );
      })}

      {/* Connection area label */}
      <text x="400" y="300" textAnchor="middle" fontSize="14" fill="#9ca3af">
        Ziehe Linien von 🔵 zu 🟢
      </text>

      {/* Dotted guide lines */}
      <path
        d="M 240 167 Q 400 167 560 167"
        fill="none"
        stroke="#d1d5db"
        strokeWidth="2"
        strokeDasharray="8,8"
      />

      {/* Footer */}
      <text x="400" y="570" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
    </svg>
  );
}
