export default function FormenAusschneidenSVG() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Formen ausschneiden
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Schneide die Formen aus und klebe sie auf ein neues Blatt!
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">✂️</text>
      <text x="720" y="50" fontSize="30">🔷</text>

      {/* Row 1 */}
      {/* Circle - Red */}
      <g transform="translate(100, 100)">
        <circle cx="60" cy="60" r="55" fill="#fecaca" stroke="#ef4444" strokeWidth="3" strokeDasharray="10,5" />
        <circle cx="60" cy="60" r="45" fill="#fee2e2" />
        <text x="60" y="70" textAnchor="middle" fontSize="16" fill="#dc2626" fontWeight="bold">Kreis</text>
      </g>

      {/* Square - Blue */}
      <g transform="translate(280, 100)">
        <rect x="5" y="5" width="110" height="110" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="3" strokeDasharray="10,5" rx="4" />
        <rect x="15" y="15" width="90" height="90" fill="#dbeafe" rx="2" />
        <text x="60" y="70" textAnchor="middle" fontSize="14" fill="#1d4ed8" fontWeight="bold">Quadrat</text>
      </g>

      {/* Triangle - Green */}
      <g transform="translate(460, 100)">
        <polygon points="60,5 115,110 5,110" fill="#bbf7d0" stroke="#22c55e" strokeWidth="3" strokeDasharray="10,5" />
        <polygon points="60,20 100,95 20,95" fill="#dcfce7" />
        <text x="60" y="80" textAnchor="middle" fontSize="13" fill="#16a34a" fontWeight="bold">Dreieck</text>
      </g>

      {/* Row 2 */}
      {/* Rectangle - Yellow */}
      <g transform="translate(100, 260)">
        <rect x="0" y="20" width="130" height="80" fill="#fef08a" stroke="#eab308" strokeWidth="3" strokeDasharray="10,5" rx="4" />
        <rect x="10" y="30" width="110" height="60" fill="#fef9c3" rx="2" />
        <text x="65" y="70" textAnchor="middle" fontSize="13" fill="#ca8a04" fontWeight="bold">Rechteck</text>
      </g>

      {/* Star - Orange */}
      <g transform="translate(300, 250)">
        <polygon
          points="60,5 72,40 110,40 80,62 90,100 60,78 30,100 40,62 10,40 48,40"
          fill="#fed7aa"
          stroke="#f97316"
          strokeWidth="3"
          strokeDasharray="10,5"
        />
        <polygon
          points="60,15 70,42 100,42 76,60 84,90 60,72 36,90 44,60 20,42 50,42"
          fill="#ffedd5"
        />
        <text x="60" y="60" textAnchor="middle" fontSize="12" fill="#ea580c" fontWeight="bold">Stern</text>
      </g>

      {/* Heart - Pink */}
      <g transform="translate(480, 250)">
        <path
          d="M 60 95 C 20 60 20 30 45 20 C 60 15 60 30 60 30 C 60 30 60 15 75 20 C 100 30 100 60 60 95"
          fill="#fbcfe8"
          stroke="#ec4899"
          strokeWidth="3"
          strokeDasharray="10,5"
        />
        <path
          d="M 60 85 C 30 58 30 35 48 27 C 58 23 60 35 60 35 C 60 35 62 23 72 27 C 90 35 90 58 60 85"
          fill="#fce7f3"
        />
        <text x="60" y="60" textAnchor="middle" fontSize="12" fill="#db2777" fontWeight="bold">Herz</text>
      </g>

      {/* Instructions */}
      <g transform="translate(100, 420)">
        <rect x="0" y="0" width="600" height="80" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" rx="10" />
        <text x="20" y="30" fontSize="14" fill="#166534" fontWeight="bold">📋 Anleitung:</text>
        <text x="20" y="50" fontSize="12" fill="#166534">1. Schneide alle Formen entlang der gestrichelten Linie aus</text>
        <text x="20" y="68" fontSize="12" fill="#166534">2. Klebe sie auf ein neues Blatt und male ein Bild damit!</text>
      </g>

      {/* Scissors hint */}
      <text x="650" y="450" fontSize="40">✂️</text>

      {/* Footer */}
      <text x="400" y="540" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
    </svg>
  );
}
