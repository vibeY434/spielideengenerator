export default function Zahlen6bis10SVG() {
  const zahlen = ["6", "7", "8", "9", "10"];

  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Zahlen 6-10 nachspuren
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Fahre die Zahlen nach - beginne beim orangenen Punkt
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">🔢</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Numbers in a row */}
      {zahlen.map((z, i) => {
        const x = 80 + i * 140;
        const isDouble = z === "10";
        return (
          <g key={i} transform={`translate(${x}, 100)`}>
            {/* Big number to trace */}
            <text
              x={isDouble ? "55" : "55"}
              y="90"
              textAnchor="middle"
              fontSize={isDouble ? "90" : "120"}
              fill="#fef3c7"
              fontWeight="bold"
            >
              {z}
            </text>
            {/* Dotted outline */}
            <text
              x={isDouble ? "55" : "55"}
              y="90"
              textAnchor="middle"
              fontSize={isDouble ? "90" : "120"}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
              strokeDasharray="8,8"
              fontWeight="bold"
            >
              {z}
            </text>
            {/* Start point indicator */}
            <circle cx={isDouble ? "25" : "55"} cy="10" r="8" fill="#f97316" />
            {/* Number label */}
            <text x="55" y="130" textAnchor="middle" fontSize="14" fill="#64748b">
              {z}
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
            fontSize={col === 4 ? "40" : "50"}
            fill="#f1f5f9"
            fontWeight="bold"
          >
            {zahlen[col]}
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
