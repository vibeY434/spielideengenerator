"use client";

import { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  worksheets,
  WorksheetCategory,
  Difficulty,
  Age,
  categoryLabels,
  difficultyLabels,
  ageLabels,
  Worksheet,
} from "@/data/worksheets";
import FilterButton from "@/components/FilterButton";
import FilterSection from "@/components/FilterSection";
import { worksheetComponents, worksheetImages } from "@/components/worksheets";
import Image from "next/image";

export default function Arbeitsblaetter() {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<WorksheetCategory | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [selectedAge, setSelectedAge] = useState<Age | null>(null);
  const [showPremiumOnly, setShowPremiumOnly] = useState<boolean | null>(null);

  // Selected worksheet for preview
  const [selectedWorksheet, setSelectedWorksheet] = useState<Worksheet | null>(null);

  // Filter worksheets
  const filteredWorksheets = useMemo(() => {
    return worksheets.filter((ws) => {
      if (selectedCategory && ws.category !== selectedCategory) return false;
      if (selectedDifficulty && ws.difficulty !== selectedDifficulty) return false;
      if (selectedAge && ws.age !== selectedAge) return false;
      if (showPremiumOnly === true && !ws.isPremium) return false;
      if (showPremiumOnly === false && ws.isPremium) return false;
      return true;
    });
  }, [selectedCategory, selectedDifficulty, selectedAge, showPremiumOnly]);

  // Toggle filter helper
  const toggleFilter = <T,>(
    current: T | null,
    value: T,
    setter: (value: T | null) => void
  ) => {
    setter(current === value ? null : value);
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedDifficulty(null);
    setSelectedAge(null);
    setShowPremiumOnly(null);
    setSelectedWorksheet(null);
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <Link href="/" className="inline-block mb-4 text-teal-600 hover:text-teal-700 transition-colors">
            ← Zurück zu Spielideen
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            <span className="text-5xl md:text-6xl">📝</span> Arbeitsblätter
          </h1>
          <p className="text-xl text-gray-600">
            Druckfertige Übungen für Vorschulkinder
          </p>
        </header>

        {/* Filter Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg mb-8">
          {/* Categories */}
          <FilterSection title="Kategorie" emoji="📚">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(categoryLabels) as WorksheetCategory[]).map((cat) => (
                <FilterButton
                  key={cat}
                  label={categoryLabels[cat].label}
                  emoji={categoryLabels[cat].emoji}
                  isActive={selectedCategory === cat}
                  onClick={() => toggleFilter(selectedCategory, cat, setSelectedCategory)}
                />
              ))}
            </div>
          </FilterSection>

          {/* Difficulty */}
          <FilterSection title="Schwierigkeit" emoji="⭐">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(difficultyLabels) as Difficulty[]).map((diff) => (
                <FilterButton
                  key={diff}
                  label={difficultyLabels[diff].label}
                  emoji={difficultyLabels[diff].emoji}
                  isActive={selectedDifficulty === diff}
                  onClick={() => toggleFilter(selectedDifficulty, diff, setSelectedDifficulty)}
                />
              ))}
            </div>
          </FilterSection>

          {/* Age */}
          <FilterSection title="Alter" emoji="👶">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(ageLabels) as Age[]).map((age) => (
                <FilterButton
                  key={age}
                  label={ageLabels[age].label}
                  emoji={ageLabels[age].emoji}
                  isActive={selectedAge === age}
                  onClick={() => toggleFilter(selectedAge, age, setSelectedAge)}
                />
              ))}
            </div>
          </FilterSection>

          {/* Premium Filter */}
          <FilterSection title="Verfügbarkeit" emoji="🔓">
            <div className="flex flex-wrap gap-2">
              <FilterButton
                label="Kostenlos"
                emoji="✅"
                isActive={showPremiumOnly === false}
                onClick={() => toggleFilter(showPremiumOnly, false, setShowPremiumOnly)}
              />
              <FilterButton
                label="Premium"
                emoji="👑"
                isActive={showPremiumOnly === true}
                onClick={() => toggleFilter(showPremiumOnly, true, setShowPremiumOnly)}
              />
            </div>
          </FilterSection>

          {/* Reset Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={resetFilters}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-all"
            >
              🔄 Filter zurücksetzen
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <span className="text-gray-600 text-lg">
            {filteredWorksheets.length} Arbeitsblätter gefunden
          </span>
        </div>

        {/* Worksheets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWorksheets.map((worksheet) => (
            <WorksheetCard
              key={worksheet.id}
              worksheet={worksheet}
              onClick={() => setSelectedWorksheet(worksheet)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredWorksheets.length === 0 && (
          <div className="text-center py-16 bg-white/50 rounded-3xl">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl text-gray-600">
              Keine Arbeitsblätter gefunden.
            </p>
            <p className="text-gray-500 mt-2">
              Passe die Filter an, um Ergebnisse zu sehen.
            </p>
          </div>
        )}

        {/* Preview Modal */}
        {selectedWorksheet && (
          <WorksheetPreview
            worksheet={selectedWorksheet}
            onClose={() => setSelectedWorksheet(null)}
          />
        )}
      </div>
    </main>
  );
}

// Worksheet Card Component
function WorksheetCard({
  worksheet,
  onClick,
}: {
  worksheet: Worksheet;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] border border-gray-100"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-4xl">{worksheet.emoji}</span>
        {worksheet.isPremium && (
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full">
            👑 Premium
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{worksheet.title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{worksheet.description}</p>
      <div className="flex flex-wrap gap-1">
        <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
          {categoryLabels[worksheet.category].emoji} {categoryLabels[worksheet.category].label}
        </span>
        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
          {difficultyLabels[worksheet.difficulty].emoji}
        </span>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {ageLabels[worksheet.age].label}
        </span>
      </div>
    </div>
  );
}

// Worksheet Preview Modal
function WorksheetPreview({
  worksheet,
  onClose,
}: {
  worksheet: Worksheet;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  // Render the worksheet content for printing (simpler, no premium lock)
  const renderPrintContent = () => {
    if (worksheet.isPremium) {
      return null;
    }

    if (worksheetImages.has(worksheet.id)) {
      // Use regular img tag for print (Next/Image can cause issues with printing)
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/worksheets/ID${worksheet.id}.png`}
          alt={worksheet.title}
          style={{ width: '100%', height: 'auto' }}
        />
      );
    }

    if (worksheetComponents[worksheet.id]) {
      const WorksheetSVG = worksheetComponents[worksheet.id];
      return <WorksheetSVG />;
    }

    return null;
  };

  // Render the worksheet content for preview
  const renderPreviewContent = () => {
    if (worksheet.isPremium) {
      return (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔒</div>
          <p className="text-gray-600 mb-2">Premium-Inhalt</p>
          <p className="text-sm text-gray-500">
            Dieses Arbeitsblatt ist Teil des Premium-Pakets.
          </p>
          <button className="mt-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all">
            🔓 Premium freischalten
          </button>
        </div>
      );
    }

    if (worksheetImages.has(worksheet.id)) {
      return (
        <Image
          src={`/worksheets/ID${worksheet.id}.png`}
          alt={worksheet.title}
          width={800}
          height={600}
          className="w-full h-auto"
          priority
        />
      );
    }

    if (worksheetComponents[worksheet.id]) {
      const WorksheetSVG = worksheetComponents[worksheet.id];
      return <WorksheetSVG />;
    }

    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">{worksheet.emoji}</div>
        <p className="text-gray-500 text-sm">Arbeitsblatt in Vorbereitung</p>
        <p className="text-xs text-gray-400 mt-2">
          Dieses Arbeitsblatt wird bald verfügbar sein!
        </p>
      </div>
    );
  };

  // Print area rendered via portal directly to body
  const printArea = mounted ? createPortal(
    <div className="print-area">
      {renderPrintContent()}
    </div>,
    document.body
  ) : null;

  return (
    <>
      {/* Print-only content - rendered via portal to body */}
      {printArea}

      {/* Modal - hidden when printing */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 no-print">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between rounded-t-3xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{worksheet.emoji}</span>
              <div>
                <h2 className="text-xl font-bold text-gray-800">{worksheet.title}</h2>
                <p className="text-sm text-gray-500">{categoryLabels[worksheet.category].label}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Description */}
            <p className="text-gray-700 mb-6">{worksheet.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
                {difficultyLabels[worksheet.difficulty].emoji} {difficultyLabels[worksheet.difficulty].label}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {ageLabels[worksheet.age].emoji} {ageLabels[worksheet.age].label}
              </span>
              {worksheet.isPremium && (
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm">
                  👑 Premium
                </span>
              )}
            </div>

            {/* Preview Area */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6 min-h-[300px] border-2 border-dashed border-gray-200">
              {renderPreviewContent()}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 justify-center">
              {!worksheet.isPremium && (worksheetImages.has(worksheet.id) || worksheetComponents[worksheet.id]) && (
                <>
                  <button
                    onClick={handlePrint}
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2"
                  >
                    🖨️ Drucken
                  </button>
                  <button
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 opacity-50 cursor-not-allowed"
                    title="Kommt bald!"
                  >
                    📥 PDF herunterladen
                  </button>
                </>
              )}
              <button
                onClick={onClose}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl transition-all"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
