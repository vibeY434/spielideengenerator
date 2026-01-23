import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Spielgenerator",
  description: "Datenschutzerklärung von spielgenerator.de - Informationen zum Umgang mit Ihren Daten.",
};

export default function Datenschutz() {
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
            <span className="text-5xl md:text-6xl">🔒</span> Datenschutzerklärung
          </h1>
        </header>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-8 space-y-8">

          {/* Verantwortlicher */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. Verantwortlicher
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Dominik Weyh<br />
              Adolf-Ernst-Schuth-Straße 2a<br />
              55122 Mainz<br />
              E-Mail:{" "}
              <a
                href="mailto:info@spielgenerator.de"
                className="text-teal-600 hover:text-teal-700 underline"
              >
                info@spielgenerator.de
              </a>
            </p>
          </section>

          {/* Allgemeines */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
              Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
              gesetzlichen Bestimmungen (DSGVO, TMG). In dieser Datenschutzerklärung
              informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung
              auf unserer Website.
            </p>
          </section>

          {/* Hosting */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. Hosting
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diese Website wird bei Vercel Inc. gehostet. Vercel ist ein
              Cloud-Hosting-Dienst mit Servern in verschiedenen Ländern, darunter
              auch in den USA.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Anbieter:</strong><br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beim Besuch unserer Website werden automatisch technische Informationen
              (sog. Server-Logfiles) erfasst, darunter:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Seite</li>
              <li>Übertragene Datenmenge</li>
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL (zuvor besuchte Seite)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Unser berechtigtes Interesse liegt in der Sicherstellung
              eines störungsfreien Betriebs der Website. Vercel hat sich zur Einhaltung
              der EU-Datenschutzstandards verpflichtet und bietet entsprechende
              Datenschutzvereinbarungen (DPA) an.
            </p>
          </section>

          {/* SSL */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. SSL-Verschlüsselung
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
              des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem
              Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diese Website verwendet ausschließlich technisch notwendige Cookies,
              die für den Betrieb der Website erforderlich sind. Es werden keine
              Tracking-Cookies oder Cookies zu Werbezwecken eingesetzt.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der
              Speicherung von Cookies zur technisch fehlerfreien Bereitstellung
              unserer Dienste.
            </p>
          </section>

          {/* Google Analytics - Platzhalter */}
          {/*
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. Google Analytics
            </h2>
            <p className="text-gray-700 leading-relaxed">
              [Dieser Abschnitt wird bei Aktivierung von Google Analytics ergänzt.]
            </p>
          </section>
          */}

          {/* Externe Links / Affiliate */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. Externe Links und Affiliate-Links
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unsere Website enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter verantwortlich.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Teilweise handelt es sich bei den Links um sogenannte Affiliate-Links
              zu Partnershops (z.B. Betzold, Amazon, Thalia). Wenn Sie über einen
              solchen Link einkaufen, erhalten wir eine kleine Provision. Für Sie
              entstehen dabei keine zusätzlichen Kosten. Affiliate-Links sind mit
              einem Sternchen (*) gekennzeichnet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bei Klick auf einen Affiliate-Link werden Sie auf die Website des
              jeweiligen Anbieters weitergeleitet. Dort gelten die
              Datenschutzbestimmungen des jeweiligen Anbieters.
            </p>
          </section>

          {/* Rechte der Nutzer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              7. Ihre Rechte
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
              betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können
                Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten
                verlangen.
              </li>
              <li>
                <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können
                die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei
                uns gespeicherten Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die
                Löschung Ihrer bei uns gespeicherten Daten verlangen, soweit nicht
                die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung,
                zur Erfüllung einer rechtlichen Verpflichtung oder aus anderen
                Gründen erforderlich ist.
              </li>
              <li>
                <strong>Recht auf Einschränkung (Art. 18 DSGVO):</strong> Sie können
                die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie
                können verlangen, dass wir Ihnen Ihre Daten in einem strukturierten,
                gängigen und maschinenlesbaren Format übermitteln.
              </li>
              <li>
                <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können
                jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten
                Widerspruch einlegen.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a
                href="mailto:info@spielgenerator.de"
                className="text-teal-600 hover:text-teal-700 underline"
              >
                info@spielgenerator.de
              </a>
            </p>
          </section>

          {/* Beschwerderecht */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              8. Beschwerderecht bei einer Aufsichtsbehörde
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
              gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei
              einer Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die
              Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
              Die für uns zuständige Aufsichtsbehörde ist der Landesbeauftragte
              für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz.
            </p>
          </section>

          {/* Aktualität */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              9. Aktualität dieser Datenschutzerklärung
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
              Januar 2025. Durch die Weiterentwicklung unserer Website oder aufgrund
              geänderter gesetzlicher Vorgaben kann es notwendig werden, diese
              Datenschutzerklärung zu ändern.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
