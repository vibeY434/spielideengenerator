# 🎯 Projektübergabe: Spielideen-Generator für Claude Code

## Projektstatus: MVP LÄUFT LOKAL ✅

Der Spielideen-Generator für Kindergärten ist als funktionierendes MVP fertig und läuft lokal unter `http://localhost:3000`.

---

## 📁 Projektverzeichnis

```
E:\Business\spielideengenerator
```

---

## 🛠 Tech-Stack

| Komponente | Technologie |
|------------|-------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Font | Nunito (Google Fonts) |
| Daten | Statisches JSON im Code (keine Datenbank) |
| Hosting (geplant) | Vercel |
| Domain (geplant) | spielideen-generator.de |

---

## 📂 Projektstruktur (erwartet)

```
spielideengenerator/
├── app/
│   ├── layout.js          # HTML-Struktur, Meta-Tags, Font
│   ├── page.js            # Hauptkomponente mit allen Features
│   └── globals.css        # Tailwind + Custom Styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

---

## ✅ Was bereits funktioniert

1. **100 kuratierte Spielideen** mit:
   - Titel
   - Beschreibung
   - Altersgruppe (U3/Ü3)
   - Gruppengröße (min/max)
   - Ort (drinnen/draußen)
   - Kategorie (Bewegung, Spiel, Basteln, Malen)
   - Dauer (kurz/mittel/lang)
   - Material-Liste
   - Varianten

2. **Filter-System**:
   - Aktivitätstyp (Bewegung, Spiel, Basteln, Malen)
   - Ort (Drinnen/Draußen)
   - Dauer (kurz/mittel/lang)
   - Alter (U3/Ü3)
   - Gruppengröße (Slider 2-30)

3. **UI/UX**:
   - Tablet-optimiert mit großen Buttons
   - Warme Farben (Teal, Orange, Amber)
   - Glassmorphism-Elemente
   - Emojis statt Text wo möglich
   - Responsive Design

4. **Zufallsgenerator**:
   - Button "Spielidee finden" zeigt passendes Spiel
   - Button "Neue Spielidee" für nächsten Vorschlag
   - "Filter anpassen" zum Zurückkehren

---

## ❌ Was noch fehlt

### Deployment
- [ ] Git Repository initialisieren
- [ ] GitHub Repository erstellen
- [ ] Vercel Deployment
- [ ] Domain spielideen-generator.de verbinden

---

## 🚀 Geplante Erweiterungen (priorisiert)

### Phase 1: Content-Erweiterung
- [ ] **10-15 Kartenspiele mit Skat-Blatt** hinzufügen
  - Mau-Mau, Schwarzer Peter, Quartett, Uno-Varianten etc.
  - Neue Kategorie "Kartenspiele" oder unter "Spiel"
  - Material: "Skat-Blatt (32 Karten)" oder "Uno-Karten"

- [ ] **Druckbare Arbeitsblätter** erstellen
  - Ausmalbilder passend zu Spielen
  - Bastelvorlagen
  - Bewegungsparcours-Vorlagen

### Phase 2: Monetarisierung (Affiliate)
- [ ] **Affiliate-Bereich unter jeder Spielidee**
  - Abschnitt "📦 Passendes Material*"
  - Dezente Text-Links (keine Banner)
  - Pflicht-Kennzeichnung im Footer

- [ ] **Affiliate-Partner**:
  | Partner | Provision | Cookie | Registrierung |
  |---------|-----------|--------|---------------|
  | edumero/Betzold | 8-9% | 60 Tage | AWIN |
  | Amazon PartnerNet | 1-7% | 24h | partnernet.amazon.de |
  | Thalia | 11-12% | ? | AWIN |

- [ ] **Datenmodell erweitern**:
  ```javascript
  {
    id: 1,
    titel: "Schubkarren-Rennen",
    // ... bestehende Felder ...
    affiliateLinks: [
      { name: "Markierungshütchen", url: "AFFILIATE_URL", partner: "edumero" },
      { name: "Stoppuhr", url: "AFFILIATE_URL", partner: "amazon" }
    ]
  }
  ```

### Phase 3: Premium/Freemium-Modell
- [ ] **Kostenlos bleibt**:
  - Alle Spielideen durchsuchen
  - Basis-Filter

- [ ] **Premium (2,99€/Monat oder 0,99€ Einzelkauf)**:
  - PDF-Export von Spielkarten
  - Druckfertige Arbeitsblätter
  - Erweiterte Filter (Förderschwerpunkt, Wetter)
  - Werbefreie Nutzung
  - "Meine Favoriten" speichern

- [ ] **Technische Optionen für Payment**:
  - Gumroad (schnell, einfach)
  - Stripe (flexibel, 2,9% + 0,25€)
  - Digistore24 (deutsche Abwicklung)
  - Steady (10% Provision, null Technik)

### Phase 4: PDF-Export
- [ ] **PDF-Generierung implementieren**:
  - Option A: `html2pdf.js` (clientseitig, einfacher)
  - Option B: `Puppeteer` (serverseitig, mehr Kontrolle)
  
- [ ] **Spielkarten-Design für Druck**:
  - A6 oder A5 Format
  - Vorderseite: Titel, Emoji, Kategorie
  - Rückseite: Anleitung, Material, Varianten

### Phase 5: Weitere Features (später)
- [ ] Erweiterte Filter: Förderschwerpunkt, Wetter, Gruppendynamik
- [ ] Favoriten speichern (localStorage)
- [ ] PWA für Offline-Nutzung
- [ ] Buchtipps-Sektion mit Thalia-Affiliate
- [ ] B2B-Lizenzen für Kita-Träger

---

## 💰 Einnahme-Prognose (bei 10.000 Besuchern/Monat)

| Quelle | Conversion | Einnahmen/Monat |
|--------|------------|-----------------|
| edumero-Affiliate | 1% kaufen, Ø 50€ | 40-50 € |
| Amazon-Affiliate | 2% kaufen, Ø 15€ | 15-25 € |
| Thalia-Affiliate | 0,5% kaufen, Ø 20€ | 10-15 € |
| PDF-Premium | 0,5% Einzelkauf | 30-50 € |
| **Gesamt** | | **~100-140 €** |

---

## 🎨 Design-Richtlinien

- **Farben**: Teal (#14b8a6), Orange, Amber, Emerald
- **Font**: Nunito (Google Fonts)
- **Stil**: Freundlich, kindgerecht, nicht überladen
- **Buttons**: Groß, rounded-2xl oder rounded-3xl
- **Karten**: Glassmorphism (bg-white/70 backdrop-blur)
- **Emojis**: Aktiv nutzen statt Icons

---

## 📋 DSGVO & Rechtliches

- ✅ Keine personenbezogenen Daten
- ✅ Keine Cookies (noch)
- ✅ Kein Tracking (noch)
- ⚠️ Bei Affiliate: Kennzeichnungspflicht
- ⚠️ Bei Cookies später: Consent-Banner nötig

---

## 🔧 Entwicklungsumgebung

- **OS**: Windows
- **Editor**: VS Code
- **Terminal**: VS Code Terminal / PowerShell
- **Node.js**: Installiert (Version prüfen mit `node --version`)
- **npm**: Verfügbar

---

## 📝 Arbeitsweise mit Dominik

- Dominik ist Einsteiger im Vibe-Coding
- Klare Schritt-für-Schritt-Anleitungen bevorzugt
- Immer nachfragen bevor größere Änderungen
- Erklärungen kurz halten, Fokus auf Umsetzung
- Bei Fehlern: Konkrete Lösung statt lange Erklärung

---

## ⚡ Sofort-Aufgaben für Claude Code

1. **Projekt verifizieren**: `cd E:\Business\spielideengenerator && dir`
2. **Lokal starten**: `npm run dev` (falls nicht läuft)
3. **Git initialisieren**: `git init && git add . && git commit -m "Initial commit"`
4. **Vercel deployen**: `vercel`
5. **Dann**: Kartenspiele hinzufügen oder Affiliate-Bereich bauen

---

## 📞 Übergabe-Notiz

Dieses Projekt wurde in Claude Desktop App (Chat + Code-Modus) gestartet. Die Dateien wurden von Claude generiert und liegen in `E:\Business\spielideengenerator`. Das MVP läuft lokal. Dominik möchte jetzt komplett in Claude Code weiterarbeiten für mehr Automatisierung.

**Nächster logischer Schritt**: Deployment auf Vercel, dann Feature-Erweiterungen.

---

*Erstellt am: Januar 2025*
*Für: Claude Code Übergabe*
