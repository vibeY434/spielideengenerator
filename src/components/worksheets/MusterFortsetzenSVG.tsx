export default function MusterFortsetzenSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Muster fortsetzen
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Erkenne das Muster und zeichne weiter
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">🔴🔵</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Pattern 1: Circle, Square */}
      <g transform="translate(0, 90)">
        <text x="60" y="35" fontSize="14" fill="#6b7280">1.</text>
        <circle cx="120" cy="30" r="20" fill="#ef4444" />
        <rect x="170" y="10" width="40" height="40" fill="#3b82f6" />
        <circle cx="260" cy="30" r="20" fill="#ef4444" />
        <rect x="310" y="10" width="40" height="40" fill="#3b82f6" />
        <circle cx="400" cy="30" r="20" fill="#ef4444" />
        {/* Empty slots */}
        <rect x="450" y="10" width="40" height="40" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
        <circle cx="540" cy="30" r="20" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
        <rect x="590" y="10" width="40" height="40" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
      </g>

      {/* Pattern 2: Triangle, Triangle, Circle */}
      <g transform="translate(0, 175)">
        <text x="60" y="35" fontSize="14" fill="#6b7280">2.</text>
        <polygon points="120,10 140,50 100,50" fill="#22c55e" />
        <polygon points="180,10 200,50 160,50" fill="#22c55e" />
        <circle cx="250" cy="30" r="20" fill="#f59e0b" />
        <polygon points="310,10 330,50 290,50" fill="#22c55e" />
        <polygon points="370,10 390,50 350,50" fill="#22c55e" />
        {/* Empty slots */}
        <circle cx="440" cy="30" r="20" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
        <polygon points="500,10 520,50 480,50" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
        <polygon points="560,10 580,50 540,50" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
      </g>

      {/* Pattern 3: Big, Small, Big, Small */}
      <g transform="translate(0, 260)">
        <text x="60" y="35" fontSize="14" fill="#6b7280">3.</text>
        <circle cx="120" cy="30" r="25" fill="#8b5cf6" />
        <circle cx="180" cy="30" r="12" fill="#8b5cf6" />
        <circle cx="240" cy="30" r="25" fill="#8b5cf6" />
        <circle cx="300" cy="30" r="12" fill="#8b5cf6" />
        <circle cx="360" cy="30" r="25" fill="#8b5cf6" />
        {/* Empty slots */}
        <circle cx="420" cy="30" r="12" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
        <circle cx="480" cy="30" r="25" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
        <circle cx="540" cy="30" r="12" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
      </g>

      {/* Pattern 4: Colors RGB */}
      <g transform="translate(0, 345)">
        <text x="60" y="35" fontSize="14" fill="#6b7280">4.</text>
        <rect x="100" y="10" width="35" height="40" fill="#ef4444" rx="5" />
        <rect x="145" y="10" width="35" height="40" fill="#22c55e" rx="5" />
        <rect x="190" y="10" width="35" height="40" fill="#3b82f6" rx="5" />
        <rect x="235" y="10" width="35" height="40" fill="#ef4444" rx="5" />
        <rect x="280" y="10" width="35" height="40" fill="#22c55e" rx="5" />
        {/* Empty slots */}
        <rect x="325" y="10" width="35" height="40" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" rx="5" />
        <rect x="370" y="10" width="35" height="40" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" rx="5" />
        <rect x="415" y="10" width="35" height="40" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" rx="5" />
      </g>

      {/* Pattern 5: Shapes increasing */}
      <g transform="translate(0, 430)">
        <text x="60" y="50" fontSize="14" fill="#6b7280">5.</text>
        <text x="110" y="55" fontSize="30">⭐</text>
        <text x="165" y="55" fontSize="30">⭐⭐</text>
        <text x="260" y="55" fontSize="30">⭐⭐⭐</text>
        {/* Empty slots */}
        <rect x="400" y="20" width="80" height="50" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" rx="5" />
        <rect x="500" y="20" width="100" height="50" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" rx="5" />
      </g>

      {/* Footer */}
      <text x="400" y="540" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
    </svg>
  );
}
