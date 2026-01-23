"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2"
    >
      🖨️ Anleitung drucken
    </button>
  );
}
