import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-gray-200/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2025 spielgenerator.de
          </p>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-gray-500 hover:text-teal-600 text-sm transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-gray-500 hover:text-teal-600 text-sm transition-colors"
            >
              Datenschutz
            </Link>
          </nav>
        </div>

        {/* Tagline */}
        <p className="text-center text-gray-400 text-xs mt-4">
          Kostenlose Spielideen für Kindergärten und Kitas
        </p>
      </div>
    </footer>
  );
}
