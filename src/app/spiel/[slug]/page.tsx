import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PrintButton from "@/components/PrintButton";
import {
  games,
  getGameBySlug,
  getAllGameSlugs,
  generateSlug,
  activityLabels,
  locationLabels,
  durationLabels,
  ageLabels,
  getGameMaterialCategories,
  materialCategoryLabels,
} from "@/data/games";

// Statische Generierung aller Spielseiten
export async function generateStaticParams() {
  return getAllGameSlugs().map((slug) => ({ slug }));
}

// Dynamische Metadaten pro Spiel
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return { title: "Spiel nicht gefunden" };
  }

  const title = `${game.title} - Spielanleitung für Kindergarten | Spielgenerator`;
  const description = `${game.title}: ${game.description} Perfekt für ${game.minGroupSize}-${game.maxGroupSize} Kinder. Kostenlose Anleitung für Erzieher.`;

  return {
    title,
    description,
    keywords: `${game.title}, Kindergarten Spiel, Kita Spiel, ${activityLabels[game.activity].label}, Anleitung, Kinderspiel`,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://spielgenerator.de/spiel/${slug}`,
    },
    alternates: {
      canonical: `/spiel/${slug}`,
    },
  };
}

export default async function SpielDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  // Ähnliche Spiele finden (gleiche Aktivität, andere ID)
  const similarGames = games
    .filter((g) => g.activity === game.activity && g.id !== game.id)
    .slice(0, 4);

  // Material-Kategorien
  const materialCategories = getGameMaterialCategories(game);

  // Schema.org strukturierte Daten
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: game.title,
    description: game.description,
    totalTime: game.duration === "kurz" ? "PT15M" : game.duration === "mittel" ? "PT30M" : "PT60M",
    tool: game.materials.map((m) => ({ "@type": "HowToTool", name: m })),
    step: [
      {
        "@type": "HowToStep",
        name: "Vorbereitung",
        text: game.materials.length > 0
          ? `Bereite folgende Materialien vor: ${game.materials.join(", ")}`
          : "Dieses Spiel benötigt keine Materialien.",
      },
      {
        "@type": "HowToStep",
        name: "Durchführung",
        text: game.description,
      },
      ...game.variants.map((v, i) => ({
        "@type": "HowToStep",
        name: `Variante ${i + 1}`,
        text: v,
      })),
    ],
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen py-8 px-4 print-content">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb - nur auf Screen */}
          <nav className="mb-6 text-sm print:hidden">
            <Link href="/" className="text-teal-600 hover:text-teal-700">
              Startseite
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{game.title}</span>
          </nav>

          {/* Header */}
          <header className="text-center mb-8">
            <span className="text-6xl md:text-7xl block mb-4">{game.emoji}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
              {game.title}
            </h1>
            <p className="text-lg text-gray-600">{game.description}</p>
          </header>

          {/* Info-Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
              {activityLabels[game.activity].emoji} {activityLabels[game.activity].label}
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {locationLabels[game.location].emoji} {locationLabels[game.location].label}
            </span>
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
              {durationLabels[game.duration].emoji} {durationLabels[game.duration].label}
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              👥 {game.minGroupSize}-{game.maxGroupSize} Kinder
            </span>
            {game.age.map((a) => (
              <span key={a} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                {ageLabels[a].emoji} {ageLabels[a].label}
              </span>
            ))}
          </div>

          {/* Hauptinhalt */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 mb-8">
            {/* Materialien */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>🧰</span> Materialien
              </h2>
              {game.materials.length > 0 ? (
                <ul className="space-y-2">
                  {game.materials.map((material, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 italic">
                  Dieses Spiel benötigt keine Materialien - perfekt für spontane Aktionen!
                </p>
              )}
              {/* Material-Kategorien */}
              <div className="mt-4 flex flex-wrap gap-2">
                {materialCategories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                  >
                    {materialCategoryLabels[cat].emoji} {materialCategoryLabels[cat].label}
                  </span>
                ))}
              </div>
            </section>

            {/* Anleitung */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>📋</span> Spielanleitung
              </h2>
              <div className="bg-teal-50 rounded-2xl p-5">
                <p className="text-gray-700 leading-relaxed">{game.description}</p>
              </div>

              {/* Falls zusätzliche Anleitungsschritte vorhanden */}
              {game.instructions && game.instructions.length > 0 && (
                <ol className="mt-4 space-y-3">
                  {game.instructions.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              )}
            </section>

            {/* Varianten */}
            {game.variants.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span>🎨</span> Varianten & Ideen
                </h2>
                <ul className="space-y-3">
                  {game.variants.map((variant, index) => (
                    <li key={index} className="flex items-start gap-3 bg-amber-50 rounded-xl p-4">
                      <span className="text-amber-500 text-lg">💡</span>
                      <span className="text-gray-700">{variant}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tipps */}
            {game.tips && game.tips.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span>✨</span> Tipps für Erzieher
                </h2>
                <ul className="space-y-2">
                  {game.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Drucken Button - nur auf Screen */}
            <div className="flex justify-center mt-8 print:hidden">
              <PrintButton />
            </div>
          </div>

          {/* Ähnliche Spiele - nur auf Screen */}
          {similarGames.length > 0 && (
            <section className="mb-8 print:hidden">
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                🎲 Ähnliche Spiele
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {similarGames.map((similar) => (
                  <Link
                    key={similar.id}
                    href={`/spiel/${generateSlug(similar.title)}`}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center hover:shadow-lg transition-all hover:scale-105"
                  >
                    <span className="text-3xl block mb-2">{similar.emoji}</span>
                    <span className="text-sm font-medium text-gray-700 line-clamp-2">
                      {similar.title}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Zurück-Link - nur auf Screen */}
          <div className="text-center print:hidden">
            <Link
              href="/"
              className="inline-block text-teal-600 hover:text-teal-700 font-semibold transition-colors"
            >
              ← Zurück zum Spielgenerator
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
