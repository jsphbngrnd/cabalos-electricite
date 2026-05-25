export interface Zone {
  slug: string
  name: string
  shortName: string
  postalCode: string
  type: 'arrondissement' | 'ville'
  description: string
  neighborhoods?: string[]
  keywords: string[]
}

export const zones: Zone[] = [
  // 16 arrondissements marseillais
  {
    slug: "electricien-marseille-13001",
    name: "Marseille 1er arrondissement",
    shortName: "Marseille 13001",
    postalCode: "13001",
    type: "arrondissement",
    description: "Le 1er arrondissement de Marseille, cœur historique de la ville autour du Vieux-Port, du quartier Belsunce et de la Canebière, concentre de nombreux immeubles haussmanniens et appartements anciens nécessitant des remises aux normes électriques.",
    neighborhoods: ["Vieux-Port", "Belsunce", "Canebière", "Noailles"],
    keywords: ["électricien marseille centre", "électricien vieux-port marseille"]
  },
  {
    slug: "electricien-marseille-13002",
    name: "Marseille 2ème arrondissement",
    shortName: "Marseille 13002",
    postalCode: "13002",
    type: "arrondissement",
    description: "Le 2ème arrondissement, entre La Joliette et le quartier en pleine transformation d'Euroméditerranée, voit fleurir de nombreux programmes de rénovation et de construction neuve nécessitant des installations électriques modernes.",
    neighborhoods: ["La Joliette", "Euroméditerranée", "Arenc", "La Belle de Mai"],
    keywords: ["électricien joliette marseille", "électricien euroméditerranée"]
  },
  {
    slug: "electricien-marseille-13003",
    name: "Marseille 3ème arrondissement",
    shortName: "Marseille 13003",
    postalCode: "13003",
    type: "arrondissement",
    description: "Le 3ème arrondissement de Marseille, secteur populaire et dynamique autour de la Belle de Mai et Saint-Mauront, est en pleine mutation urbaine avec de nombreux projets de réhabilitation nécessitant la mise aux normes des installations électriques.",
    neighborhoods: ["Belle de Mai", "Saint-Mauront", "Villette"],
    keywords: ["électricien belle de mai marseille", "rénovation électrique 13003"]
  },
  {
    slug: "electricien-marseille-13004",
    name: "Marseille 4ème arrondissement",
    shortName: "Marseille 13004",
    postalCode: "13004",
    type: "arrondissement",
    description: "Le 4ème arrondissement, quartiers de La Blancarde, Chutes-Lavie et Saint-Just, est un secteur résidentiel très actif avec de nombreuses maisons individuelles et copropriétés des années 60-80 nécessitant des mises à jour électriques.",
    neighborhoods: ["La Blancarde", "Chutes-Lavie", "Saint-Just", "Cinq-Avenues"],
    keywords: ["électricien blancarde marseille", "tableau électrique 13004"]
  },
  {
    slug: "electricien-marseille-13005",
    name: "Marseille 5ème arrondissement",
    shortName: "Marseille 13005",
    postalCode: "13005",
    type: "arrondissement",
    description: "Le 5ème arrondissement, quartiers de la Plaine, Notre-Dame-du-Mont et Castellane, est un secteur très prisé à Marseille, mêlant immeubles anciens haussmanniens et rénovations contemporaines avec des besoins électriques variés.",
    neighborhoods: ["La Plaine", "Notre-Dame-du-Mont", "Castellane", "Cours Julien"],
    keywords: ["électricien la plaine marseille", "électricien cours julien marseille"]
  },
  {
    slug: "electricien-marseille-13006",
    name: "Marseille 6ème arrondissement",
    shortName: "Marseille 13006",
    postalCode: "13006",
    type: "arrondissement",
    description: "Le 6ème arrondissement, quartier huppé du Périer, Vauban et du Prado, est l'un des plus résidentiels de Marseille. Ses immeubles bourgeois et appartements de standing requièrent des installations électriques soignées et modernes.",
    neighborhoods: ["Périer", "Vauban", "Prado", "Talabot"],
    keywords: ["électricien périer marseille", "électricien prado marseille", "électricien standing marseille"]
  },
  {
    slug: "electricien-marseille-13007",
    name: "Marseille 7ème arrondissement",
    shortName: "Marseille 13007",
    postalCode: "13007",
    type: "arrondissement",
    description: "Le 7ème arrondissement, quartiers du Roucas-Blanc, Endoume et du Vallon des Auffes, est l'un des arrondissements les plus recherchés de Marseille avec de belles villas et appartements en bord de mer nécessitant des installations électriques haut de gamme.",
    neighborhoods: ["Roucas-Blanc", "Endoume", "Vallon des Auffes", "Malmousque"],
    keywords: ["électricien roucas blanc marseille", "électricien endoume marseille"]
  },
  {
    slug: "electricien-marseille-13008",
    name: "Marseille 8ème arrondissement",
    shortName: "Marseille 13008",
    postalCode: "13008",
    type: "arrondissement",
    description: "Le 8ème arrondissement, secteur du Prado, Bonneveine et de la Pointe Rouge, est l'arrondissement le plus peuplé de Marseille. Ses nombreuses résidences, villas et copropriétés sont une demande constante en installations et rénovations électriques.",
    neighborhoods: ["Bonneveine", "Pointe Rouge", "Roy d'Espagne", "Mazargues"],
    keywords: ["électricien bonneveine marseille", "électricien pointe rouge marseille"]
  },
  {
    slug: "electricien-marseille-13009",
    name: "Marseille 9ème arrondissement",
    shortName: "Marseille 13009",
    postalCode: "13009",
    type: "arrondissement",
    description: "Le 9ème arrondissement, entre les Calanques, la Madrague et Saint-Loup, est un secteur résidentiel calme avec de nombreuses maisons individuelles et villas nécessitant installations et mises aux normes électriques.",
    neighborhoods: ["Les Calanques", "Madrague de Montredon", "Saint-Loup", "La Cayolle"],
    keywords: ["électricien calanques marseille", "électricien madrague marseille"]
  },
  {
    slug: "electricien-marseille-13010",
    name: "Marseille 10ème arrondissement",
    shortName: "Marseille 13010",
    postalCode: "13010",
    type: "arrondissement",
    description: "Le 10ème arrondissement, quartiers de La Capelette, Saint-Loup et La Pomme, est un arrondissement résidentiel populaire avec de nombreuses maisons de ville et appartements des années 70-90 demandant modernisation électrique.",
    neighborhoods: ["La Capelette", "Saint-Loup", "La Pomme", "Montredon"],
    keywords: ["électricien capelette marseille", "rénovation électrique 13010"]
  },
  {
    slug: "electricien-marseille-13011",
    name: "Marseille 11ème arrondissement",
    shortName: "Marseille 13011",
    postalCode: "13011",
    type: "arrondissement",
    description: "Le 11ème arrondissement, secteurs de La Valentine, Les Accates et Saint-Menet, est un arrondissement périphérique résidentiel à dominante pavillonnaire, avec une forte demande en tableaux électriques et rénovation.",
    neighborhoods: ["La Valentine", "Les Accates", "Saint-Menet", "Sainte-Marguerite"],
    keywords: ["électricien la valentine marseille", "tableau électrique 13011"]
  },
  {
    slug: "electricien-marseille-13012",
    name: "Marseille 12ème arrondissement",
    shortName: "Marseille 13012",
    postalCode: "13012",
    type: "arrondissement",
    description: "Le 12ème arrondissement, quartiers de Château-Gombert, La Millière et Les Olives, est un secteur très résidentiel avec de nombreuses villas et lotissements récents, idéal pour les installations électriques neuves et rénovations.",
    neighborhoods: ["Château-Gombert", "La Millière", "Les Olives", "Font-Vert"],
    keywords: ["électricien château-gombert marseille", "installation électrique maison 13012"]
  },
  {
    slug: "electricien-marseille-13013",
    name: "Marseille 13ème arrondissement",
    shortName: "Marseille 13013",
    postalCode: "13013",
    type: "arrondissement",
    description: "Le 13ème arrondissement, secteurs des Caillols, La Millière et La Rose, est un arrondissement résidentiel calme avec de nombreuses maisons individuelles et un tissu de copropriétés des années 80.",
    neighborhoods: ["Les Caillols", "La Rose", "Saint-Barnabé", "La Millière"],
    keywords: ["électricien les caillols marseille", "tableau électrique 13013"]
  },
  {
    slug: "electricien-marseille-13014",
    name: "Marseille 14ème arrondissement",
    shortName: "Marseille 13014",
    postalCode: "13014",
    type: "arrondissement",
    description: "Le 14ème arrondissement, quartiers des Bourrely, Saint-Barthélemy et Consolat, est un secteur nord de Marseille en pleine transformation avec de nombreux projets de réhabilitation du parc immobilier existant.",
    neighborhoods: ["Les Bourrely", "Saint-Barthélemy", "Consolat", "Septèmes-Les-Vallons"],
    keywords: ["électricien nord marseille", "mise aux normes 13014"]
  },
  {
    slug: "electricien-marseille-13015",
    name: "Marseille 15ème arrondissement",
    shortName: "Marseille 13015",
    postalCode: "13015",
    type: "arrondissement",
    description: "Le 15ème arrondissement, secteur de Marseille Nord avec La Viste, Saint-Antoine et Cabucelle, est un arrondissement en renouveau urbain avec de nombreux programmes de réhabilitation et une forte demande en services électriques.",
    neighborhoods: ["La Viste", "Saint-Antoine", "Cabucelle", "Les Aygalades"],
    keywords: ["électricien marseille nord", "rénovation électrique 13015"]
  },
  {
    slug: "electricien-marseille-13016",
    name: "Marseille 16ème arrondissement",
    shortName: "Marseille 13016",
    postalCode: "13016",
    type: "arrondissement",
    description: "Le 16ème arrondissement, côte nord avec L'Estaque, Niolon et La Couronne, est un secteur aux paysages exceptionnels mêlant habitations balnéaires, villas et résidences avec des besoins spécifiques en installations électriques.",
    neighborhoods: ["L'Estaque", "Niolon", "La Couronne", "Riou"],
    keywords: ["électricien l'estaque marseille", "électricien côte bleue marseille"]
  },
  // Villes périphériques
  {
    slug: "electricien-aubagne",
    name: "Aubagne",
    shortName: "Aubagne",
    postalCode: "13400",
    type: "ville",
    description: "Aubagne, ville de 46 000 habitants aux portes de Marseille, présente un tissu résidentiel dense mêlant maisons provençales, quartiers pavillonnaires et copropriétés récentes avec une forte demande en services électriques de qualité.",
    neighborhoods: ["Centre-ville", "La Tourtelle", "La Pounche", "Les Passons"],
    keywords: ["electricien aubagne", "électricien aubagne 13400", "rénovation électrique aubagne"]
  },
  {
    slug: "electricien-aix-en-provence",
    name: "Aix-en-Provence",
    shortName: "Aix-en-Provence",
    postalCode: "13100",
    type: "ville",
    description: "Aix-en-Provence, ville universitaire et culturelle de 145 000 habitants, compte de nombreux hôtels particuliers, résidences étudiantes et maisons de maître nécessitant des installations électriques soignées et conformes aux normes.",
    neighborhoods: ["Mazarin", "Sextius", "Les Milles", "Jas de Bouffan"],
    keywords: ["electricien aix-en-provence", "électricien aix 13100", "mise aux normes aix-en-provence"]
  },
  {
    slug: "electricien-martigues",
    name: "Martigues",
    shortName: "Martigues",
    postalCode: "13500",
    type: "ville",
    description: "Martigues, la 'Venise provençale' de 48 000 habitants, avec ses quartiers sur l'étang de Berre et ses zones résidentielles, génère une demande régulière en services électriques pour particuliers et professionnels.",
    neighborhoods: ["Jonquières", "L'Île", "Ferrières", "Lavéra"],
    keywords: ["electricien martigues", "électricien martigues 13500"]
  },
  {
    slug: "electricien-allauch",
    name: "Allauch",
    shortName: "Allauch",
    postalCode: "13190",
    type: "ville",
    description: "Allauch, commune résidentielle huppée de 20 000 habitants aux portes de Marseille, est prisée pour ses maisons individuelles et villas avec jardins. Ses habitants recherchent des artisans de qualité pour leurs projets électriques.",
    neighborhoods: ["Village d'Allauch", "Le Plan de Cuques", "Les Quatre-Saisons"],
    keywords: ["electricien allauch", "électricien allauch 13190", "installation électrique allauch"]
  },
  {
    slug: "electricien-la-ciotat",
    name: "La Ciotat",
    shortName: "La Ciotat",
    postalCode: "13600",
    type: "ville",
    description: "La Ciotat, ville balnéaire de 36 000 habitants célèbre pour ses chantiers navals et ses calanques, concentre un important parc immobilier de résidences secondaires et principales demandant des mises aux normes électriques régulières.",
    neighborhoods: ["Centre-ville", "Les Lecques", "La Madrague", "Les Calanques"],
    keywords: ["electricien la ciotat", "électricien la ciotat 13600"]
  },
  {
    slug: "electricien-gardanne",
    name: "Gardanne",
    shortName: "Gardanne",
    postalCode: "13120",
    type: "ville",
    description: "Gardanne, commune de 21 000 habitants entre Marseille et Aix-en-Provence, connaît un développement résidentiel important avec de nombreuses constructions neuves et rénovations nécessitant des installations électriques fiables.",
    neighborhoods: ["Centre-ville", "Valbarelle", "Biver"],
    keywords: ["electricien gardanne", "électricien gardanne 13120"]
  },
  {
    slug: "electricien-toulon",
    name: "Toulon",
    shortName: "Toulon",
    postalCode: "83000",
    type: "ville",
    description: "Toulon, préfecture du Var et deuxième ville de la région PACA, est accessible dans le rayon d'intervention de Cabalos Électricité. Ses immeubles anciens du centre et ses quartiers résidentiels génèrent une forte demande en rénovation et mise aux normes électriques.",
    neighborhoods: ["Centre-ville", "Le Mourillon", "Pont du Las", "Cap Brun"],
    keywords: ["electricien toulon", "électricien toulon 83000", "rénovation électrique toulon"]
  },
  {
    slug: "electricien-peypin",
    name: "Peypin",
    shortName: "Peypin",
    postalCode: "13124",
    type: "ville",
    description: "Peypin, village provençal de 5 000 habitants entre Aubagne et Gardanne, est une commune résidentielle pavillonnaire prisée des familles. Ses maisons individuelles avec piscines et jardins génèrent une demande croissante en installation et rénovation électrique.",
    neighborhoods: ["Centre-village", "Les Clots", "Les Bastides"],
    keywords: ["electricien peypin", "électricien peypin 13124", "installation électrique peypin"]
  },
  {
    slug: "electricien-la-destrousse",
    name: "La Destrousse",
    shortName: "La Destrousse",
    postalCode: "13112",
    type: "ville",
    description: "La Destrousse, commune de la vallée de l'Huveaune aux portes d'Aubagne, est un village résidentiel calme avec un tissu pavillonnaire dense. Ses habitants font appel à des artisanes de qualité pour leurs travaux électriques.",
    neighborhoods: ["Centre-village", "Le Défends", "La Bastide"],
    keywords: ["electricien la destrousse", "électricien la destrousse 13112"]
  },
  {
    slug: "electricien-napolon",
    name: "Napolon",
    shortName: "Napolon",
    postalCode: "13114",
    type: "ville",
    description: "Napolon, commune rurale et résidentielle entre Aubagne et Gémenos, offre un cadre de vie provençal apprécié. Ses maisons de caractère et constructions récentes nécessitent des installations électriques soignées et conformes aux normes.",
    neighborhoods: ["Village de Napolon", "Les Consacs"],
    keywords: ["electricien napolon", "électricien napolon 13114"]
  },
  {
    slug: "electricien-cassis",
    name: "Cassis",
    shortName: "Cassis",
    postalCode: "13260",
    type: "ville",
    description: "Cassis, célèbre station balnéaire de 7 500 habitants aux calanques, concentre un important parc de résidences secondaires et de belles villas. Ses propriétaires exigeants recherchent des artisanes qualifiées pour leurs travaux électriques.",
    neighborhoods: ["Port de Cassis", "La Presqu'île", "Les Calanques", "Cassis-Plage"],
    keywords: ["electricien cassis", "électricien cassis 13260", "rénovation électrique cassis"]
  },
  {
    slug: "electricien-ceyreste",
    name: "Ceyreste",
    shortName: "Ceyreste",
    postalCode: "13600",
    type: "ville",
    description: "Ceyreste, commune résidentielle entre La Ciotat et Cassis, est un village provençal avec un tissu pavillonnaire de qualité. Ses maisons individuelles et constructions récentes nécessitent des installations et mises aux normes électriques régulières.",
    neighborhoods: ["Centre-village", "Les Mayons", "La Gardiole"],
    keywords: ["electricien ceyreste", "électricien ceyreste 13600"]
  }
]

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find(z => z.slug === slug)
}

export function generateZoneStaticParams() {
  return zones.map(z => ({ slug: z.slug }))
}
