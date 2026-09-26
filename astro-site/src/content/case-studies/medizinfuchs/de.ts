/**
 * Medizinfuchs case study — German copy.
 */

export const medizinfuchsDe = {
  meta: {
    title: 'Medizinfuchs — Automatisierte Produktbeschreibungen | Scalentic',
    description:
      'Wie Medizinfuchs GmbH mit einer Multi-Source-Pipeline ~70 % der manuellen Content-Erstellung für Produktbeschreibungen eingespart hat.',
    ogTitle: 'Fallstudie Medizinfuchs: Automatisierte Produktbeschreibungen',
    ogDescription:
      'Von manueller Anreicherung zu einer bewachten Multi-Source-Pipeline. ~70 % weniger manuelle Content-Erstellung.',
  },

  hero: {
    eyebrow: 'Fallstudie',
    title: 'Automatisierte Produktbeschreibungen',
    summary:
      'Von manueller Anreicherung zu einer bewachten Multi-Source-Pipeline — mit Qualitätsgate vor Veröffentlichung.',
    clientLabel: 'Kunde',
    client: 'Medizinfuchs GmbH',
    clientNote: 'Preisvergleichsplattform für Apothekenprodukte',
    clientUrl: 'https://www.medizinfuchs.de/',
    logo: {
      src: '/assets/case-studies/medizinfuchs-logo.svg',
      alt: 'Medizinfuchs Logo',
      width: 210,
      height: 78,
    },
    kpi: {
      value: '~70 %',
      label: 'weniger manuelle Content-Erstellung',
    },
  },

  challenge: {
    eyebrow: 'Ausgangslage',
    headline: 'Manuell ging nicht mehr skalierbar',
    lead: 'Produktdaten-Anreicherung und Beschreibungen entstanden Produkt für Produkt von Hand.',
    before: {
      title: 'Vorher',
      items: [
        'Quellen pro Produkt öffnen und abgleichen',
        'Attribute und Texte manuell schreiben',
        'Rechtliche Pflichtangaben einzeln prüfen',
      ],
    },
    after: {
      title: 'Nachher',
      items: [
        '5–12 Partnerquellen automatisiert einlesen',
        'Strukturiert extrahieren, zusammenführen, absichern',
        'Nur freigegebene Beschreibungen veröffentlichen',
      ],
    },
  },

  pipeline: {
    eyebrow: 'Pipeline',
    headline: 'Vom PZN zur veröffentlichten Beschreibung',
    lead: 'Jeder Schritt hat eine klare Aufgabe. Produkte ohne Pflichtangaben gehen nicht live.',
    nodes: [
      {
        id: 'pzn',
        label: 'PZN',
        short: 'Produkt-ID',
        detail:
          'Jedes Produkt wird über seine PZN identifiziert — der Einstiegspunkt für die gesamte Pipeline.',
      },
      {
        id: 'sources',
        label: '5–12 Quellen',
        short: 'Partner-Shops',
        detail:
          'Zu jeder PZN werden Produktseiten von 5 bis 12 Partner-Online-Apotheken als Quellen herangezogen — darunter Aponeo, apolux, Pharmeo, Shop-Apotheke und DocMorris.',
      },
      {
        id: 'etl',
        label: 'Scraping & ETL',
        short: 'Normalisieren',
        detail:
          'Produktseiten werden in großem Maßstab gescraped und in ein einheitliches Format gebracht.',
      },
      {
        id: 'extract',
        label: 'Strukturierte Extraktion',
        short: 'Festes Schema',
        detail:
          'Ein LLM schreibt jede Quelle in ein festes Schema: Attribute, Sicherheit, Vorteile, FAQs und verknüpfte Dokumente.',
      },
      {
        id: 'synth',
        label: 'Multi-Source-Synthese',
        short: 'Zusammenführen',
        detail:
          'Sammeln → kategorisieren → abgleichen → nach Quellvertrauen priorisieren → synthetisieren. Harte Widersprüche folgen der Quellpriorität; bei Gleichstand erscheinen beide Werte unter „Nicht zugeordnet“.',
      },
      {
        id: 'guard',
        label: 'Guardrails',
        short: 'YMYL / E-A-T',
        detail:
          'Keine erfundenen Fakten, keine Interpretation, keine Verallgemeinerung, kein Mittelwert bei Konflikten. Pflichttexte für Nahrungsergänzungsmittel werden automatisch ergänzt.',
      },
      {
        id: 'gate',
        label: 'Quality Gate',
        short: 'Freigabe',
        detail:
          'Fehlen Pflichtabschnitte oder -informationen, wird das Produkt nicht veröffentlicht. Der Grund wird für die Prüfung protokolliert.',
      },
      {
        id: 'publish',
        label: 'Veröffentlicht',
        short: 'Beschreibung',
        detail:
          'Nur freigegebene Produkte erscheinen mit bis zu 14 Abschnitten in fester Reihenfolge — leere Abschnitte entfallen.',
      },
    ],
    reject: {
      id: 'review',
      label: 'Log / Review',
      detail:
        'Abgelehnte Produkte landen im Review mit nachvollziehbarem Ablehnungsgrund — nichts geht stillschweigend live.',
    },
    hint: 'Schritt oder tippen für Details.',
  },

  sources: {
    eyebrow: 'Quellen',
    headline: '5–12 Quellen, eine strukturierte Beschreibung',
    lead: 'Pro Produkt fließen zwischen fünf und zwölf Partnerquellen ein. Die Pipeline kategorisiert, gleicht ab und priorisiert nach Quellvertrauen — statt Texte zu mischen.',
    partners: ['Aponeo', 'apolux', 'Pharmeo', 'Shop-Apotheke', 'DocMorris', '… bis 12'],
    stages: [
      { id: 'collect', label: 'Sammeln' },
      { id: 'categorize', label: 'Kategorisieren' },
      { id: 'reconcile', label: 'Abgleichen' },
      { id: 'prioritize', label: 'Priorisieren' },
      { id: 'synthesize', label: 'Synthetisieren' },
    ],
    outputLabel: 'Strukturierte Produktbeschreibung',
    diagramAria:
      'Zwischen fünf und zwölf Partnerquellen fließen über Kategorisieren, Abgleichen und Priorisieren in eine strukturierte Produktbeschreibung',
  },

  guardrails: {
    eyebrow: 'Guardrails',
    headline: 'Gesundheitscontent unter YMYL-Regeln',
    lead: 'Die Pipeline darf Fakten zusammenführen — nicht erfinden oder interpretieren.',
    allowed: {
      title: 'Erlaubt',
      items: [
        'Fakten aus Quellen extrahieren und zuordnen',
        'Ergänzende Details zusammenführen',
        'Pflichttexte für Nahrungsergänzungsmittel automatisch ergänzen',
        'Widersprüche nach Quellpriorität oder transparent ausweisen',
      ],
    },
    forbidden: {
      title: 'Nicht erlaubt',
      items: [
        'Fakten erfinden',
        'Quellen interpretieren oder verallgemeinern',
        'Konflikte durch Mittelwerte „lösen“',
        'Unvollständige Produkte veröffentlichen',
      ],
    },
  },

  output: {
    eyebrow: 'Ausgabe',
    headline: 'Bis zu 14 Abschnitte — feste Reihenfolge',
    lead: 'Nur Abschnitte mit Inhalt werden ausgegeben. Leere Felder entfallen.',
    sections: [
      { id: 'haupt', title: 'Hauptbeschreibung', hasData: true },
      { id: 'eigenschaften', title: 'Eigenschaften', hasData: true },
      { id: 'anwendung', title: 'Anwendung', hasData: true },
      { id: 'verzehr', title: 'Verzehrempfehlung', hasData: true },
      { id: 'gebrauch', title: 'Gebrauchsanweisung', hasData: false },
      { id: 'aufbewahrung', title: 'Aufbewahrung', hasData: true },
      { id: 'zutaten', title: 'Zutaten', hasData: true },
      { id: 'inhaltsstoffe', title: 'Inhaltsstoffe (Tabelle)', hasData: true, highlight: true },
      { id: 'allergie', title: 'Allergiehinweise', hasData: true },
      { id: 'naehrwert', title: 'Nährwerttabelle', hasData: false },
      { id: 'groesse', title: 'Größentabelle', hasData: false },
      { id: 'warn', title: 'Warnhinweise', hasData: true },
      { id: 'hersteller', title: 'Herstellerdaten', hasData: true },
      { id: 'nicht', title: 'Nicht zugeordnet', hasData: false },
    ],
    skippedNote: 'Ohne Daten — übersprungen',
    ingredientsTable: {
      caption: 'Beispiel: Inhaltsstoffe (Ausschnitt)',
      headers: ['Stoff', 'Menge'],
      rows: [
        ['Vitamin C', '80 mg'],
        ['Zink', '10 mg'],
        ['Biotin', '50 µg'],
      ],
    },
  },

  models: {
    eyebrow: 'Modelle',
    headline: 'Passendes Modell je Aufgabe — Kosten und Qualität im Blick',
    lead: 'Modellwahl über GPT, Gemini und Claude, optimiert nach Kosten und Qualität.',
    badges: ['GPT', 'Gemini', 'Claude'],
    routingLabel: 'Routing',
    routing: [
      { task: 'Strukturierte Extraktion', model: 'best fit' },
      { task: 'Synthese & Guardrails', model: 'best fit' },
    ],
  },

  tech: {
    eyebrow: 'Technik',
    headline: 'Stack',
    badges: ['Python', 'n8n', 'GPT', 'Gemini', 'Claude'],
    note: 'n8n für frühes Prototyping neben der Python-Kernpipeline.',
  },

  result: {
    eyebrow: 'Ergebnis',
    headline: 'Weniger Handarbeit — gleiche Sorgfaltspflicht',
    kpi: {
      value: '~70 %',
      label: 'weniger manuelle Content-Erstellung',
    },
    body: 'Die Pipeline übernimmt Scraping, Extraktion, Synthese und Qualitätskontrolle. Freigabe bleibt regelbasiert — ohne erfundene Fakten.',
    ctaPrimary: 'Gespräch buchen',
    ctaSecondary: 'E-Mail schreiben',
  },
} as const;
