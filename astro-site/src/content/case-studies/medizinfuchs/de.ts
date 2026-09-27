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

  glance: {
    eyebrow: 'Überblick',
    items: [
      {
        label: 'Ausgangslage',
        value: 'Produktbeschreibungen entstanden Produkt für Produkt von Hand.',
      },
      {
        label: 'Ziel',
        value: 'Automatisiert erzeugen — ohne die Sorgfaltspflicht bei Gesundheitscontent aufzuweichen.',
      },
      {
        label: 'Lösung',
        value: 'Multi-Source-Pipeline mit festem Schema, Guardrails und Quality Gate vor Veröffentlichung.',
      },
      {
        label: 'Ergebnis',
        value: '~70 % weniger manuelle Content-Erstellung, unvollständige Produkte gehen nicht live.',
      },
    ],
    meta: [
      { label: 'Rolle', value: 'Konzept, Pipeline-Entwicklung, Qualitätslogik' },
      { label: 'Umfang', value: 'Produktbeschreibungen, end-to-end' },
    ],
    stackLabel: 'Stack',
    stack: ['Python', 'n8n', 'GPT', 'Gemini', 'Claude'],
    stackNote: 'n8n für frühes Prototyping neben der Python-Kernpipeline.',
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

  goal: {
    eyebrow: 'Ziel',
    headline: 'Was „fertig“ heißen musste',
    lead: 'Automatisierung war nur dann eine Option, wenn sie die Sorgfaltspflicht nicht verwässert. Zielbild und Grenzen standen deshalb vor der ersten Zeile Code fest.',
    criteria: {
      title: 'Erfolgskriterien',
      items: [
        'Beschreibungen ohne manuelle Recherche je Produkt',
        'Mehrere Partnerquellen zu einem konsistenten Text verdichten',
        'Feste Abschnittsstruktur statt frei formulierter Prosa',
        'Über den ganzen Katalog skalierbar, nicht nur im Einzelfall',
      ],
    },
    constraints: {
      title: 'Nicht verhandelbar',
      items: [
        'Keine Fakten, die in keiner Quelle stehen',
        'Pflichtangaben vollständig — sonst keine Veröffentlichung',
        'Widersprüche sichtbar machen, nicht wegmitteln',
        'Jede Ablehnung nachvollziehbar protokolliert',
      ],
    },
    ctaLead: 'Gleiches Muster bei euch?',
    ctaLink: 'Kurzes Gespräch buchen',
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
    eyebrow: 'Modelle & Kosten',
    headline: 'Jede Aufgabe zum günstigsten Modell, das die Qualität hält.',
    lead: 'Kein Einheitsmodell für die ganze Pipeline. Schritte werden getrennt geroutet, Modelle verglichen, und teure Kapazität nur dort eingesetzt, wo sie den Output wirklich bewegt.',
    points: [
      {
        title: 'Routing nach Aufgabe',
        body: 'Strukturierte Extraktion braucht vor allem Schema-Treue — dort reichen günstigere Modelle. Synthese und Guardrails treffen Freigabe und Haftung; dort laufen stärkere Modelle.',
      },
      {
        title: 'Vergleich statt Bauchgefühl',
        body: 'GPT, Gemini und Claude werden je Task gegen Qualität und Kosten gemessen. Das Routing folgt den Zahlen — welches Modell auf welchem Schritt landet, ist Ergebnis, nicht Vorliebe.',
      },
      {
        title: 'Pipeline kostenoptimiert gebaut',
        body: 'Billige Schritte laufen oft und parallel; teure nur, wenn Validierung oder YMYL-Risiko es verlangen. So bleibt der Laufpreis niedrig, ohne die Sorgfaltspflicht zu verwässern.',
      },
    ],
  },

  result: {
    eyebrow: 'Ergebnis',
    headline: 'Weniger Handarbeit — gleiche Sorgfaltspflicht',
    kpi: {
      value: '~70 %',
      label: 'weniger manuelle Content-Erstellung',
    },
    stats: [
      { value: '5–12', label: 'Partnerquellen je Produkt, automatisiert zusammengeführt' },
      { value: '14', label: 'Abschnitte maximal, in fester Reihenfolge — leere entfallen' },
    ],
    body: 'Die Pipeline übernimmt Scraping, Extraktion, Synthese und Qualitätskontrolle. Freigabe bleibt regelbasiert — ohne erfundene Fakten.',
    unchanged: {
      title: 'Was bewusst gleich geblieben ist',
      items: [
        'Ohne vollständige Pflichtangaben geht nichts live',
        'Keine erfundenen Fakten — nur belegte Quellen',
        'Abgelehnte Produkte landen mit Grund im Review',
      ],
    },
  },

  transfer: {
    eyebrow: 'Passt das zu euch?',
    headline: 'Dasselbe Muster, andere Branche',
    lead: 'Die Pipeline ist für Apothekenprodukte gebaut — das Muster nicht. Es greift überall dort, wo Menschen Daten aus vielen Quellen von Hand zu Texten verdichten.',
    signals: [
      {
        title: 'Viele Quellen, ein Datensatz',
        body: 'Eure Leute öffnen pro Datensatz mehrere Lieferanten-, Hersteller- oder Partnerquellen und gleichen sie im Kopf ab.',
      },
      {
        title: 'Inhalte mit Haftungsrisiko',
        body: 'Pflichtangaben, Rechtstexte oder Sicherheitshinweise müssen stimmen — „meistens korrekt“ reicht nicht.',
      },
      {
        title: 'Durchsatz hängt an Köpfen',
        body: 'Mehr Produkte, Märkte oder Sprachen bedeuten bisher schlicht mehr Personen, die dasselbe tun.',
      },
    ],
    ctaLead: 'Wenn zwei davon zutreffen, lohnt sich ein Gespräch. 20 Minuten reichen, um zu klären, ob das Muster trägt.',
    ctaPrimary: 'Gespräch buchen',
    ctaSecondary: 'E-Mail schreiben',
  },
} as const;
