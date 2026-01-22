export default function SpiralenSVG() {
  // Generate spiral path
  const createSpiral = (cx: number, cy: number, size: number) => {
    let path = `M ${cx} ${cy}`;
    const turns = 3;
    const points = 60;
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * turns * Math.PI * 2;
      const r = (i / points) * size;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      path += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    return path;
  };

  const spirals = [
    { cx: 200, cy: 200, size: 60 },
    { cx: 400, cy: 200, size: 60 },
    { cx: 600, cy: 200, size: 60 },
    { cx: 200, cy: 380, size: 60 },
    { cx: 400, cy: 380, size: 60 },
    { cx: 600, cy: 380, size: 60 },
  ];

  return (
    <svg viewBox="0 0 800 600" className="w-full h-auto bg-white rounded-lg">
      {/* Header */}
      <text x="400" y="40" textAnchor="middle" className="fill-teal-600" fontSize="24" fontWeight="bold">
        Spiralen nachfahren
      </text>
      <text x="400" y="65" textAnchor="middle" className="fill-gray-500" fontSize="14">
        Beginne in der Mitte und fahre nach außen
      </text>

      {/* Decoration */}
      <text x="50" y="50" fontSize="30">🌀</text>
      <text x="720" y="50" fontSize="30">✏️</text>

      {/* Spirals */}
      {spirals.map((s, i) => (
        <g key={i}>
          {/* Guide (light) */}
          <path
            d={createSpiral(s.cx, s.cy, s.size)}
            fill="none"
            stroke="#c4b5fd"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Trace line */}
          <path
            d={createSpiral(s.cx, s.cy, s.size)}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2.5"
            strokeDasharray="6,6"
            strokeLinecap="round"
          />
          {/* Start point (center) */}
          <circle cx={s.cx} cy={s.cy} r="6" fill="#f97316" />
        </g>
      ))}

      {/* Instructions */}
      <text x="400" y="490" textAnchor="middle" className="fill-gray-500" fontSize="12">
        Tipp: Vom orangenen Punkt nach außen zeichnen
      </text>

      {/* Footer */}
      <text x="400" y="540" textAnchor="middle" className="fill-gray-400" fontSize="12">
        spielideen-generator.de
      </text>
      <text x="400" y="560" textAnchor="middle" className="fill-gray-400" fontSize="10">
        Schwungübung für Vorschulkinder
      </text>
    </svg>
  );
}
