export default function MengenZaehlenSVG() {
  const items = [
    { emoji: "🍎", count: 3, number: 3 },
    { emoji: "⭐", count: 5, number: 5 },
    { emoji: "🌸", count: 2, number: 2 },
    { emoji: "🐟", count: 4, number: 4 },
    { emoji: "🎈", count: 1, number: 1 },
    { emoji: "🦋", count: 6, number: 6 },
  ];

  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Mengen zählen
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Zähle die Bilder und verbinde sie mit der richtigen Zahl
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">🍎</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Left side - Items to count */}
      {items.map((item, i) => {
        const y = 110 + i * 75;
        return (
          <g key={i}>
            {/* Box */}
            <rect
              x="60"
              y={y}
              width="200"
              height="60"
              fill="#f0fdf4"
              stroke="#86efac"
              strokeWidth="2"
              rx="10"
            />
            {/* Emojis */}
            {Array.from({ length: item.count }).map((_, j) => (
              <text
                key={j}
                x={80 + j * 35}
                y={y + 42}
                fontSize="28"
              >
                {item.emoji}
              </text>
            ))}
            {/* Connection point */}
            <circle cx="270" cy={y + 30} r="8" fill="#22c55e" />
          </g>
        );
      })}

      {/* Right side - Numbers */}
      {numbers.map((num, i) => {
        const y = 110 + i * 75;
        return (
          <g key={i}>
            {/* Connection point */}
            <circle cx="530" cy={y + 30} r="8" fill="#3b82f6" />
            {/* Number box */}
            <rect
              x="550"
              y={y}
              width="60"
              height="60"
              fill="#eff6ff"
              stroke="#93c5fd"
              strokeWidth="2"
              rx="10"
            />
            {/* Number */}
            <text
              x="580"
              y={y + 45}
              textAnchor="middle"
              fontSize="36"
              fill="#1d4ed8"
              fontWeight="bold"
            >
              {num}
            </text>
          </g>
        );
      })}

      {/* Connection area hint */}
      <text x="400" y="320" textAnchor="middle" fontSize="14" fill="#9ca3af">
        Verbinde mit Linien
      </text>
      <path
        d="M 350 300 Q 400 280 450 300"
        fill="none"
        stroke="#d1d5db"
        strokeWidth="2"
        strokeDasharray="5,5"
      />

      {/* Footer */}
      <text x="400" y="570" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
    </svg>
  );
}
