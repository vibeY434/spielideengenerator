export default function KurvenSchneidenSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Kurven schneiden
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Schneide entlang der geschwungenen Linien - folge dem Weg!
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">✂️</text>
      <text x="720" y="50" fontSize="30">〰️</text>

      {/* Wave line 1 - Ocean theme */}
      <g transform="translate(0, 80)">
        <text x="40" y="35" fontSize="24">✂️</text>
        <path
          d="M 80 30 Q 160 0 240 30 Q 320 60 400 30 Q 480 0 560 30 Q 640 60 720 30"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M 80 30 Q 160 0 240 30 Q 320 60 400 30 Q 480 0 560 30 Q 640 60 720 30"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="3"
          strokeDasharray="10,5"
          strokeLinecap="round"
        />
        <text x="730" y="40" fontSize="28">🐟</text>
      </g>

      {/* Zigzag line 2 */}
      <g transform="translate(0, 170)">
        <text x="40" y="35" fontSize="24">✂️</text>
        <path
          d="M 80 30 L 160 0 L 240 30 L 320 0 L 400 30 L 480 0 L 560 30 L 640 0 L 720 30"
          fill="none"
          stroke="#22c55e"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        <path
          d="M 80 30 L 160 0 L 240 30 L 320 0 L 400 30 L 480 0 L 560 30 L 640 0 L 720 30"
          fill="none"
          stroke="#22c55e"
          strokeWidth="3"
          strokeDasharray="10,5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="730" y="40" fontSize="28">🐍</text>
      </g>

      {/* S-Curve 3 */}
      <g transform="translate(0, 260)">
        <text x="40" y="35" fontSize="24">✂️</text>
        <path
          d="M 80 50 Q 200 0 320 30 Q 440 60 560 30 Q 680 0 720 20"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M 80 50 Q 200 0 320 30 Q 440 60 560 30 Q 680 0 720 20"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="3"
          strokeDasharray="10,5"
          strokeLinecap="round"
        />
        <text x="730" y="30" fontSize="28">🦋</text>
      </g>

      {/* Loop curve 4 */}
      <g transform="translate(0, 350)">
        <text x="40" y="35" fontSize="24">✂️</text>
        <path
          d="M 80 30 Q 120 30 160 10 Q 200 -10 240 10 Q 280 30 320 30 Q 360 30 400 10 Q 440 -10 480 10 Q 520 30 560 30 Q 600 30 640 10 Q 680 -10 720 10"
          fill="none"
          stroke="#ec4899"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M 80 30 Q 120 30 160 10 Q 200 -10 240 10 Q 280 30 320 30 Q 360 30 400 10 Q 440 -10 480 10 Q 520 30 560 30 Q 600 30 640 10 Q 680 -10 720 10"
          fill="none"
          stroke="#ec4899"
          strokeWidth="3"
          strokeDasharray="10,5"
          strokeLinecap="round"
        />
        <text x="730" y="20" fontSize="28">🎀</text>
      </g>

      {/* Hill curve 5 */}
      <g transform="translate(0, 430)">
        <text x="40" y="50" fontSize="24">✂️</text>
        <path
          d="M 80 50 Q 180 0 280 50 Q 380 100 480 50 Q 580 0 680 50 L 720 50"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M 80 50 Q 180 0 280 50 Q 380 100 480 50 Q 580 0 680 50 L 720 50"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="3"
          strokeDasharray="10,5"
          strokeLinecap="round"
        />
        <text x="730" y="60" fontSize="28">⛰️</text>
      </g>

      {/* Difficulty indicator */}
      <g transform="translate(60, 520)">
        <text x="0" y="0" fontSize="11" fill="#6b7280">Schwierigkeit: ⭐ leicht → ⭐⭐⭐ schwer</text>
      </g>

      {/* Footer */}
      <text x="400" y="570" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
    </svg>
  );
}
