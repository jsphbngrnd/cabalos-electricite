export const SERVICES = [
  {
    n: "01",
    t: "Dépannage & recherche de panne",
    d: "Une prise qui ne fonctionne plus, un disjoncteur qui saute, un éclairage capricieux, une odeur de chaud, un appareil qui fait déclencher le différentiel…",
    details: [
      "Prise hors service ou qui chauffe",
      "Disjoncteur qui saute ou différentiel qui déclenche",
      "Éclairage capricieux ou qui clignote",
      "Odeur de brûlé ou de chaud",
      "Appareil qui provoque une coupure générale",
    ],
    conclusion: "Identification de l'origine du problème, sécurisation et réparation en toute sécurité.",
    price: "120 €/jour · 200 €/soir · 150 €/WE",
    slug: "depannage",
  },
  {
    n: "02",
    t: "Mise aux normes & sécurité",
    d: "Dans de nombreux appartements anciens (notamment à Marseille), les installations ne respectent plus la NF C 15-100.",
    details: [
      "Absence de terre",
      "Tableau obsolète ou sous-dimensionné",
      "Protections insuffisantes ou inadaptées",
      "Circuits surchargés",
      "Connexions vieillissantes ou dégradées",
    ],
    conclusion: "Sécurisation du logement et correction des anomalies révélées par le diagnostic électrique.",
    slug: "mise-aux-normes",
  },
  {
    n: "03",
    t: "Rénovation électrique complète",
    d: "Lors d'un achat, d'une rénovation ou d'un réaménagement — une installation entièrement repensée.",
    details: [
      "Création de nouveaux circuits",
      "Redistribution des prises selon votre usage",
      "Ajout ou déplacement de points d'éclairage",
      "Câblage propre, organisé et repéré",
    ],
    conclusion: "Installation cohérente, adaptée à vos usages et conforme aux normes actuelles.",
    slug: "renovation-complete",
  },
  {
    n: "04",
    t: "Installation d'appareils",
    d: "Certains appareils nécessitent un circuit dédié ou un câblage spécifique — pose et raccordement conformes.",
    details: [
      "Plaques de cuisson",
      "Chauffe-eau (électrique ou thermodynamique)",
      "Climatisation",
      "Radiateurs électriques",
      "VMC",
      "Fours encastrés",
      "Machine à laver & sèche-linge",
    ],
    conclusion: "Dimensionnement du circuit, protection adaptée et installation conforme.",
    slug: "installation-appareils",
  },
  {
    n: "05",
    t: "Création / modification du tableau",
    d: "Le tableau est le cœur de votre installation — il doit être propre, conforme et lisible.",
    details: [
      "Remplacement d'un tableau ancien",
      "Ajout de disjoncteurs",
      "Installation d'interrupteurs différentiels",
      "Réorganisation ou repérage complet",
    ],
    conclusion: "Tableau propre, conforme, lisible et évolutif.",
    slug: "tableau-electrique",
  },
  {
    n: "06",
    t: "Prises, éclairages & petits travaux",
    d: "Pour améliorer votre confort au quotidien, rapidement et dans les règles de l'art.",
    details: [
      "Ajout de prises dans une pièce",
      "Pose de luminaires",
      "Ajout ou déplacement d'interrupteurs",
      "Création de circuits extérieurs",
    ],
    conclusion: "Rapide, propre et réalisé dans les règles de l'art.",
    slug: "petits-travaux",
  },
  {
    n: "07",
    t: "Préparation de rénovation globale",
    d: "Un électricien intervient en coordination avec les autres corps de métier pour un résultat cohérent.",
    details: [
      "Artisans du bâtiment (plaquistes, plombiers, peintres…)",
      "Architectes et maîtres d'œuvre",
      "Décoratrices et designers d'intérieur",
    ],
    conclusion: "Plan électrique cohérent avec l'aménagement prévu et les contraintes techniques.",
    slug: "renovation-globale",
  },
  {
    n: "08",
    t: "Sécurisation avant location / vente",
    d: "Pour éviter les mauvaises surprises lors du diagnostic ou d'un état des lieux.",
    details: [
      "Contrôle complet de l'installation existante",
      "Corrections ciblées des anomalies",
      "Remise en conformité documentée",
    ],
    conclusion: "Idéal avant une mise en location, un achat ou une revente.",
    slug: "securisation-vente",
  },
];

export const TARIFS = [
  {
    label: "Journée",
    detail: "Lun – Ven · 9h–18h",
    price: "À partir de 120 € TTC",
    note: "Diagnostic + réparation simple + déplacement. Matériel facturé en supplément. +30 % hors Marseille.",
  },
  {
    label: "Soirée",
    detail: "Lun – Ven · après 18h",
    price: "À partir de 200 € TTC",
    note: "Diagnostic + réparation simple + déplacement. Matériel facturé en supplément. +30 % hors Marseille.",
  },
  {
    label: "Week-end & urgence",
    detail: "Samedi, dimanche, jours fériés",
    price: "À partir de 150 € TTC",
    note: "Diagnostic + réparation simple + déplacement. Matériel facturé en supplément. +30 % hors Marseille.",
  },
];

export const VALUES: [string, string][] = [
  ["Soin & précision",  "Travail propre, câblages organisés, repérages nets, installations fiables."],
  ["Pédagogie",         "J'explique chaque étape simplement, pour que tout soit clair et compris."],
  ["Sécurité",          "Interventions réalisées dans le strict respect de la NF C 15-100."],
  ["Écologie",          "Déplacements à vélo dès que possible, réemploi de matériaux, tri systématique des déchets de chantier (gaines, câbles, cartons, plastiques)."],
  ["Transparence",      "Devis clairs, communication honnête, aucune mauvaise surprise."],
];

export const STEPS: [string, string][] = [
  ["Vous me contactez",    "Par mail ou téléphone, décrivez votre besoin en quelques lignes."],
  ["Diagnostic sur place", "Je me déplace pour voir l'installation, mesurer et comprendre votre usage."],
  ["Devis détaillé",       "Vous recevez un devis clair sous 48 heures. Pas de surprise, pas de frais cachés."],
  ["Intervention",         "Travaux dans le respect de la norme NF C 15-100, chantier rangé chaque soir."],
  ["Je vous explique tout", "Avant de partir : schéma du tableau, repérage, conseils d'entretien. Garantie décennale incluse."],
];

export const PARCOURS = [
  {
    titre: "Le début — bricolage et Beaux-Arts",
    texte: "Passionnée de bricolage depuis toujours, j'ai grandi avec l'envie de comprendre comment les choses sont faites. Mon passage par les Beaux-Arts d'Aix-en-Provence a renforcé cette curiosité : j'y ai appris à travailler le bois, le métal, les volumes, à construire, démonter, fabriquer et expérimenter. Ces années ont posé les bases de mon rapport au geste, au matériau, et à la précision.",
  },
  {
    titre: "L'apprentissage par la pratique",
    texte: "Au fil du temps, j'ai rénové en grande partie mon propre appartement, puis prêté main forte à de nombreux amis pour leurs projets : travaux, aménagements, rénovation d'un restaurant… Toujours avec cette envie d'apprendre, de comprendre, de faire bien.",
  },
  {
    titre: "La reconversion",
    texte: "Après plusieurs années en tant qu'enseignante, j'ai décidé de me reconvertir dans un métier manuel et passionnant : l'électricité. Un domaine technique, exigeant, concret — où chaque installation compte, et où le soin apporté au travail se voit immédiatement dans la sécurité et le confort.",
  },
  {
    titre: "Aujourd'hui",
    texte: "Je réunis tout ce parcours : la curiosité du bricolage, la rigueur des matériaux, la pédagogie de l'enseignement et la précision du métier d'électricienne.",
  },
];

export const PROS: [string, string][] = [
  ["Syndics de copropriété",  "Parties communes, mise aux normes, dépannages récurrents — interlocuteur unique, factures détaillées."],
  ["Maîtres d'œuvre",         "Coordination chantier, planning respecté, relevés et schémas remis en fin de mission."],
  ["Architectes",             "Lecture de plans, intégration discrète des appareillages, choix de luminaires."],
  ["Architectes d'intérieur", "Implantation fine des prises et éclairages, accompagnement sur les références."],
  ["Plaquistes & artisans",   "Passage de gaines, attentes propres avant fermeture, repérages clairs."],
];

export const PROS_DIFF: [string, string][] = [
  ["Réactivité",    "Réponse sous 24 h en semaine. Devis sous 48 h. Intervention planifiée à l'heure dite."],
  ["Certification", "CAP Électricien, habilitations NF C 15-100, RC Pro et décennale — tous les justificatifs sur demande."],
  ["Communication", "Comptes-rendus de chantier, photos, schémas remis. Un interlocuteur, pas un standard."],
  ["Qualité",       "Câblage rangé, repérage clair, finitions soignées. Contrôle visuel de la prestation avant départ."],
];

export const REVIEWS = [
  {
    body: "On peut dire que cette électricienne a les fils qui se touchent ! Elle nous a refait notre local à neuf et nous avons désormais la lumière à tous les étages ! Merci pour le professionnalisme et surtout les bons moments, voilà un beau travail d'artisan !",
    who: "Revue Allumefeu",
    role: "Local professionnel",
    accent: true,
  },
  {
    body: "Emma a fait toute l'électricité de ma cuisine avec les saignées et le raccordement au compteur, super travail, je recommande.",
    who: "Joseph B.",
    role: "Cuisine complète",
    accent: false,
  },
  {
    body: "Consciencieuse, fiable et pédagogue, je recommande les yeux fermés ! Super travail, merci pour l'intervention rapide.",
    who: "Cathy H.",
    role: "Marseille",
    accent: true,
  },
  {
    body: "Cabalos électricité a sauvé mon chantier ! Suite au travail bâclé d'un soit disant professionnel du métier, j'ai fait appel à Emma qui a su tout rattraper.",
    who: "Mona T.",
    role: "Marseille",
    accent: false,
  },
  {
    body: "Excellent travail, propre et soigné. Emma a littéralement sauvé mon chantier ! Je recommande ++",
    who: "Léa",
    role: "Marseille",
    accent: false,
  },
  {
    body: "Intervention rapide et efficace, nous sommes ravis d'avoir fait appel à Emma !",
    who: "Antoine G.",
    role: "Marseille",
    accent: false,
  },
  {
    body: "Extra, très rapide et super compétente, explique bien et fort sympathique. Je recommande vivement.",
    who: "Valérie J.",
    role: "Marseille",
    accent: false,
  },
  {
    body: "Travail de qualité et respect des normes de sécurité. Excellent service.",
    who: "Gemma M.",
    role: "Marseille",
    accent: false,
  },
  {
    body: "Merci pour le dépannage. Grâce à vous mon compteur refonctionne.",
    who: "Antoine B.",
    role: "Dépannage",
    accent: false,
  },
  {
    body: "Tout parfait, merci Emma !",
    who: "Arthur B.",
    role: "Marseille",
    accent: false,
  },
];

export const FAQ: [string, string][] = [
  ["Qui est Cabalos Électricité ?", "Emma Cabal, électricienne indépendante installée à Marseille. Titulaire du CAP Électricien, elle possède les habilitations électriques réglementaires et est assurée en RC Pro."],
  ["Quelle est la zone d'intervention ?", "Marseille intra-muros (16 arrondissements) et environ 30 km autour : Aubagne, Aix-en-Provence, Cassis, La Ciotat, Allauch, Martigues."],
  ["Intervenez-vous en urgence ?", "Oui pour les pannes courantes — appel le matin, intervention l'après-midi quand c'est possible. À partir de 120 € TTC en journée (200 € le soir, 150 € le week-end). Tarif majoré de 30 % hors Marseille."],
  ["Comment obtenir un devis ?", "Par formulaire, mail ou téléphone. Diagnostic sur place gratuit, devis détaillé envoyé sous 48 heures."],
  ["Quel budget prévoir pour une rénovation électrique ?", "Cela dépend de la surface et de l'état existant. Un devis gratuit après diagnostic sur place permet de chiffrer précisément."],
];

export const ZONES_ARR = [
  "13001","13002","13003","13004","13005","13006","13007","13008",
  "13009","13010","13011","13012","13013","13014","13015","13016",
];

export const ZONES_VILLES = [
  "Aubagne","Aix-en-Provence","Cassis","La Ciotat","Allauch","Martigues",
  "Gardanne","Toulon","Peypin","La Destrousse","Napolon","Ceyreste",
];

export const STATS: [string, string][] = [
  ["28+",    "zones d'intervention"],
  ["16",     "arrondissements"],
  ["48 h",   "devis détaillé"],
  ["5,0 ★",  "Google · 10 avis"],
];

export const CERTIFICATIONS = [
  "CAP Électricien",
  "Habilitations électriques B1V, BR, BC",
  "Norme NF C 15-100 (en vigueur)",
  "RC Professionnelle assurée",
  "Micro-entreprise déclarée",
  "Membre Annuaire Fabricoleuses",
];

export const NAV_LINKS = [
  { slug: "/prestations",     label: "Prestations" },
  { slug: "/zones",           label: "Zones" },
  { slug: "/professionnels",  label: "Professionnels" },
  { slug: "/a-propos",        label: "À propos" },
  { slug: "/contact",         label: "Contact" },
];
