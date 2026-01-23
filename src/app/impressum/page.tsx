import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Spielgenerator",
  description: "Impressum und Kontaktdaten von spielgenerator.de",
};

export default function Impressum() {
  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <Link
            href="/"
            className="inline-block mb-4 text-teal-600 hover:text-teal-700 transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            <span className="text-5xl md:text-6xl">📋</span> Impressum
          </h1>
        </header>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dominik Weyh<br />
              Adolf-Ernst-Schuth-Straße 2a<br />
              55122 Mainz
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Kontakt
            </h2>
            <p className="text-gray-700 leading-relaxed">
              E-Mail:{" "}
              <a
                href="mailto:info@spielgenerator.de"
                className="text-teal-600 hover:text-teal-700 underline"
              >
                info@spielgenerator.de
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dominik Weyh<br />
              Adolf-Ernst-Schuth-Straße 2a<br />
              55122 Mainz
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Haftungsausschluss
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Haftung für Inhalte
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Haftung für Links
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
