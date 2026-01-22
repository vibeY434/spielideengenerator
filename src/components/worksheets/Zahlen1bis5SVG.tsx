export default function Zahlen1bis5SVG() {
  const zahlen = [
    { num: "1", path: "M 60 20 L 60 80", tip: "Von oben nach unten" },
    { num: "2", path: "M 40 30 Q 40 20 50 20 Q 70 20 70 35 Q 70 50 40 80 L 70 80", tip: "Bogen, dann runter" },
    { num: "3", path: "M 40 20 L 65 20 Q 75 20 75 35 Q 75 50 55 50 Q 75 50 75 65 Q 75 80 55 80 L 40 80", tip: "Zwei Bögen" },
    { num: "4", path: "M 65 80 L 65 20 M 65 55 L 35 55 L 55 20", tip: "Runter, Strich, hoch" },
    { num: "5", path: "M 70 20 L 40 20 L 40 45 Q 40 45 55 45 Q 75 45 75 62 Q 75 80 55 80 Q 40 80 40 70", tip: "Strich, Bogen" },
  ];

  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Zahlen 1-5 nachspuren
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Fahre die Zahlen nach - beginne beim orangenen Punkt
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">1️⃣</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Numbers in a row */}
      {zahlen.map((z, i) => {
        const x = 80 + i * 140;
        return (
          <g key={i} transform={`translate(${x}, 100)`}>
            {/* Big number to trace */}
            <text x="55" y="90" textAnchor="middle" fontSize="120" fill="#e0f2fe" fontWeight="bold">
              {z.num}
            </text>
            {/* Dotted outline */}
            <text x="55" y="90" textAnchor="middle" fontSize="120" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="8,8" fontWeight="bold">
              {z.num}
            </text>
            {/* Start point indicator */}
            <circle cx="55" cy="10" r="8" fill="#f97316" />
            {/* Number label */}
            <text x="55" y="130" textAnchor="middle" fontSize="14" fill="#64748b">
              {z.num}
            </text>
          </g>
        );
      })}

      {/* Practice rows */}
      <text x="80" y="270" fontSize="16" fill="#64748b" fontWeight="bold">Übe hier:</text>

      {/* Practice boxes */}
      {[0, 1, 2, 3, 4].map((col) => (
        <g key={col}>
          {[0, 1, 2].map((row) => (
            <rect
              key={`${col}-${row}`}
              x={80 + col * 140}
              y={290 + row * 90}
              width="100"
              height="80"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2"
              rx="8"
            />
          ))}
          {/* Light number in first box */}
          <text
            x={130 + col * 140}
            y={355}
            textAnchor="middle"
            fontSize="50"
            fill="#f1f5f9"
            fontWeight="bold"
          >
            {col + 1}
          </text>
        </g>
      ))}

      {/* Footer */}
      <text x="400" y="570" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
    </svg>
  );
}
