// Motifs traditionnels marocains avec couleurs prédéfinies
export interface Pattern {
  id: string;
  name: string;
  colors: string[];
  primaryColor: string;
  thumbnail: string;
  image?: string; // Image principale du motif (à ajouter plus tard)
  description: string;
}

// Variantes de taille avec prix spécifiques et images
export interface SizeVariant {
  id: string;
  size: string;
  dimensions?: string;
  price: number;
  description?: string;
  image?: string; // Image spécifique à cette variante
}

// Nouveau modèle Product avec variantes et motifs
export interface Product {
  id: number;
  name: string;
  basePrice: number; // Prix de base pour affichage
  image: string;
  description: string;
  category: string;
  sizeVariants: SizeVariant[];
  availablePatterns: string[]; // IDs des motifs disponibles
  images?: { [key: string]: string | string[] }; // Images par motif ou galerie
}

// Motifs traditionnels marocains avec vos vraies images + nouveaux motifs
export const patterns: Pattern[] = [
  // Nouvelles options sans peinture/émaille
  {
    id: "sans_peinture_sans_emaille",
    name: "Sans peinture ou motifs ou émaille",
    colors: ["#D4A574", "#C69963", "#B8926A"],
    primaryColor: "#D4A574",
    thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F986b72e4b4f24af29f91a03fec9600c2?format=webp&width=100",
    description: "Terre cuite naturelle brute sans finition",
  },
  {
    id: "sans_peinture_avec_emaille",
    name: "Sans peinture ou motifs mais avec émaille",
    colors: ["#F5F5DC", "#E8E8DC", "#DCDCB8"],
    primaryColor: "#F5F5DC",
    thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F29b9b699bce244c8acfdc843dc4610c2?format=webp&width=100",
    description: "Émaille transparent sur terre cuite naturelle",
  },
  {
    id: "bleu_traditionnel",
    name: "Bleu Traditionnel (Braya)",
    colors: ["#1E40AF", "#3B82F6", "#FFFFFF"],
    primaryColor: "#1E40AF",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F986b72e4b4f24af29f91a03fec9600c2?format=webp&width=100",
    description: "Motif classique bleu et blanc braya",
  },
  {
    id: "vert_pistache",
    name: "Vert Pistache",
    colors: ["#84CC16", "#A3E635", "#FFFFFF"],
    primaryColor: "#84CC16",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F29b9b699bce244c8acfdc843dc4610c2?format=webp&width=100",
    description: "Motif vert pistache élégant",
  },
  {
    id: "vert_bouteille",
    name: "Vert Bouteille",
    colors: ["#166534", "#16A34A", "#FFFFFF"],
    primaryColor: "#166534",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F16dbb9f6c9c049eba5f30b68e15fa66d?format=webp&width=100",
    description: "Vert bouteille profond",
  },
  {
    id: "jaune_safran",
    name: "Jaune",
    colors: ["#F59E0B", "#FDE047", "#FFFFFF"],
    primaryColor: "#F59E0B",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F3939f319708d44d18591685e9c0430a5?format=webp&width=100",
    description: "Jaune traditionnel",
  },
  {
    id: "violet_royal",
    name: "Violet Royal",
    colors: ["#7C3AED", "#A855F7", "#FFFFFF"],
    primaryColor: "#7C3AED",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F0097031f16c44bc49f44368a6baede9b?format=webp&width=100",
    description: "Violet royal majestueux",
  },
  {
    id: "bleu_ciel",
    name: "Bleu Ciel",
    colors: ["#0EA5E9", "#38BDF8", "#FFFFFF"],
    primaryColor: "#0EA5E9",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fdb69265b502c45fb933bb01086a390ff?format=webp&width=100",
    description: "Bleu ciel apaisant",
  },
  {
    id: "bleu_marine",
    name: "Bleu Marine",
    colors: ["#1E3A8A", "#3B82F6", "#FFFFFF"],
    primaryColor: "#1E3A8A",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F37ca92a904c044668a438cdaa2fbbda4?format=webp&width=100",
    description: "Bleu marine profond",
  },
  {
    id: "rouge_tomate",
    name: "Rouge",
    colors: ["#DC2626", "#EF4444", "#FFFFFF"],
    primaryColor: "#DC2626",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F4b0e13d990aa4159a1e08db525e89746?format=webp&width=100",
    description: "Rouge vibrant",
  },
  {
    id: "rouge_brique",
    name: "Rouge Brique",
    colors: ["#92400E", "#D97706", "#FFFFFF"],
    primaryColor: "#92400E",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fab239efef22f431e8fcb3e14300660b8?format=webp&width=100",
    description: "Rouge brique authentique",
  },
  {
    id: "marron_terre",
    name: "Marron Terre",
    colors: ["#78350F", "#A16207", "#F3E8E8"],
    primaryColor: "#78350F",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Feee501545165441badab6ee427bd6a14?format=webp&width=100",
    description: "Marron terre naturel",
  },
  {
    id: "noir_elegant",
    name: "Noire",
    colors: ["#1F2937", "#374151", "#FFFFFF"],
    primaryColor: "#1F2937",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F986b72e4b4f24af29f91a03fec9600c2?format=webp&width=100",
    description: "Noir élégant avec motifs blancs",
  },
  {
    id: "multicolore",
    name: "Multicolore",
    colors: ["#DC2626", "#F59E0B", "#16A34A", "#3B82F6", "#7C3AED"],
    primaryColor: "#DC2626",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F29b9b699bce244c8acfdc843dc4610c2?format=webp&width=100",
    description: "Motif multicolore traditionnel",
  },
  {
    id: "orange_berbere",
    name: "Orange Berbère",
    colors: ["#EA580C", "#FB923C", "#FFFFFF"],
    primaryColor: "#EA580C",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F4b0e13d990aa4159a1e08db525e89746?format=webp&width=100",
    description: "Orange berbère chaleureux",
  },
  // Motifs spéciaux pour personnalisation avancée
  {
    id: "parentheses",
    name: "Parenthèses",
    colors: ["#1E40AF", "#FFFFFF", "#DC2626"],
    primaryColor: "#1E40AF",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fa927d76d2a344e26a0e874259409829b?format=webp&width=100",
    description: "Motif parenthèses traditionnel",
  },
  {
    id: "geometrique",
    name: "Géométrique",
    colors: ["#92400E", "#F59E0B", "#FFFFFF"],
    primaryColor: "#92400E",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F7b7636748fbe45379816dd330558bd96?format=webp&width=100",
    description: "Motif géométrique classique",
  },
  {
    id: "motif_traditionnel",
    name: "Traditionnel",
    colors: ["#1E40AF", "#DC2626", "#F59E0B", "#FFFFFF"],
    primaryColor: "#1E40AF",
    thumbnail:
      "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fb300d27859544de3a803b0c957bf17d1?format=webp&width=100",
    description: "Motif traditionnel authentique marocain",
  },
];

// Couleurs communes à tous les produits
const commonPatterns = [
  "bleu_traditionnel",
  "vert_pistache",
  "vert_bouteille",
  "jaune_safran",
  "violet_royal",
  "bleu_ciel",
  "bleu_marine",
  "rouge_tomate",
  "rouge_brique",
  "marron_terre",
  "noir_elegant",
  "multicolore",
  "orange_berbere"
];

// Couleurs spéciales pour Qssria et Gourde seule uniquement
const specialPatterns = [
  "sans_peinture_sans_emaille",
  "sans_peinture_avec_emaille"
];

// Catalogue de produits avec images dynamiques par variante
export const products: Product[] = [
  // 1. QASSRIA - 3 tailles (Images bols/soupières)
  {
    id: 1,
    name: "Qassria Traditionnelle",
    basePrice: 50,
    category: "Poterie décorative",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fab239efef22f431e8fcb3e14300660b8?format=webp&width=400",
    description:
      "Poterie artisanale marocaine fabriquée selon les méthodes traditionnelles par Idriss Belkhadir",
    sizeVariants: [
      { 
        id: "35cm", 
        size: "35 cm", 
        price: 50, 
        description: "Petite taille",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fab239efef22f431e8fcb3e14300660b8?format=webp&width=400"
      },
      { 
        id: "40cm", 
        size: "40 cm", 
        price: 60, 
        description: "Taille moyenne",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F4b0e13d990aa4159a1e08db525e89746?format=webp&width=400"
      },
      { 
        id: "45cm", 
        size: "45 cm", 
        price: 70, 
        description: "Grande taille",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fab239efef22f431e8fcb3e14300660b8?format=webp&width=400"
      },
    ],
    availablePatterns: [...commonPatterns, ...specialPatterns],
  },

  // 2. TAJINE - 12cm unitaire
  {
    id: 2,
    name: "Tajine",
    basePrice: 10,
    category: "Art de la table",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fa927d76d2a344e26a0e874259409829b?format=webp&width=400",
    description: "Tajine traditionnel marocain",
    sizeVariants: [
      {
        id: "12cm",
        size: "12 cm",
        price: 10,
        description: "Tajine individuel",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fa927d76d2a344e26a0e874259409829b?format=webp&width=400"
      },
    ],
    availablePatterns: commonPatterns,
  },

  // 3. ASSIETTES - Toutes variantes regroupées avec images dynamiques
  {
    id: 3,
    name: "Assiettes",
    basePrice: 8,
    category: "Art de la table",
    image: "https://images.unsplash.com/photo-1578749760903-03b75f5edffc?w=400&h=400&fit=crop",
    description: "Collection d'assiettes traditionnelles en terre cuite",
    sizeVariants: [
      {
        id: "petite",
        size: "Petite assiette",
        price: 8,
        description: "Assiette individuelle",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Ff3e53dadda404802bd643e83ce72c310?format=webp&width=400"
      },
      {
        id: "service_complet",
        size: "Grande + 6 petites",
        price: 60,
        description: "1 grande assiette + 6 petites assiettes",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fb2fea3dac3ba45baae6ddcb69815359c?format=webp&width=400"
      },
      {
        id: "rectangulaire",
        size: "Assiette rectangulaire",
        price: 45,
        description: "Format rectangulaire pour présentation",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F7984cf5bc73c4bb083c034e5308b4c20?format=webp&width=400"
      },
    ],
    availablePatterns: commonPatterns,
  },

  // 4. SOUPIÈRE + BOLS - Toutes variantes regroupées avec images dynamiques
  {
    id: 4,
    name: "Soupière et Bols",
    basePrice: 8,
    category: "Art de la table",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fb3da53b73a6c4243aeac4177f3f8f545?format=webp&width=400",
    description: "Service de soupe traditionnel et bols individuels",
    sizeVariants: [
      {
        id: "bol_8cm",
        size: "Bol 8cm",
        price: 8,
        description: "Bol petit format",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fb3da53b73a6c4243aeac4177f3f8f545?format=webp&width=400"
      },
      {
        id: "bol_12cm",
        size: "Bol 12cm",
        price: 10,
        description: "Bol grand format",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fb3da53b73a6c4243aeac4177f3f8f545?format=webp&width=400"
      },
      {
        id: "soupiere_6bols_8cm",
        size: "Soupière + 6 bols 8cm",
        price: 70,
        description: "Service complet avec bols 8cm",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fb3da53b73a6c4243aeac4177f3f8f545?format=webp&width=400"
      },
      {
        id: "soupiere_6bols_12cm",
        size: "Soupière + 6 bols 12cm",
        price: 80,
        description: "Service complet avec bols 12cm",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fb3da53b73a6c4243aeac4177f3f8f545?format=webp&width=400"
      },
    ],
    availablePatterns: commonPatterns,
  },

  // 5. GOURDE ET VERRES - Toutes variantes regroupées avec images dynamiques
  {
    id: 5,
    name: "Gourde et Verres",
    basePrice: 15,
    category: "Art de la table",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F5d0532bd8dd84b259a455c07d215e98a?format=webp&width=400",
    description: "Service à boire traditionnel en terre cuite",
    sizeVariants: [
      {
        id: "verre_assiette",
        size: "Verre + Assiette",
        price: 15,
        description: "Verre avec assiette assortie",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F5d0532bd8dd84b259a455c07d215e98a?format=webp&width=400"
      },
      {
        id: "gourde_seule",
        size: "Gourde seule",
        price: 50,
        description: "Gourde traditionnelle uniquement",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F1a41d7d58f6445a0b2b55caf52dcdafb?format=webp&width=400"
      },
      {
        id: "pack_complet",
        size: "Gourde + 6 verres + 6 assiettes",
        price: 90,
        description: "Service complet à boire",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F1a41d7d58f6445a0b2b55caf52dcdafb?format=webp&width=400"
      },
    ],
    availablePatterns: commonPatterns,
  },

  // 6. FERAQA - 6 modèles regroupés avec images dynamiques
  {
    id: 6,
    name: "Feraqa",
    basePrice: 60,
    category: "Symboles traditionnels",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F16dbb9f6c9c049eba5f30b68e15fa66d?format=webp&width=400",
    description: "Collection de Feraqa - Symboles traditionnels de protection",
    sizeVariants: [
      {
        id: "khmissa",
        size: "Khmissa",
        price: 70,
        description: "Modèle Khmissa traditionnel",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fcf6080c012884a91a9aac8792a852131?format=webp&width=400"
      },
      {
        id: "plateau_tajines",
        size: "Plateau + 4 tajines",
        price: 60,
        description: "Feraqa avec plateau et 4 petits tajines",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2Fce840e4abbea4934b926a6590d7f9ef4?format=webp&width=400"
      },
      {
        id: "bolbol",
        size: "Bolbol",
        price: 70,
        description: "Modèle Bolbol traditionnel",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F4117228912fc453dab64b03b091cf061?format=webp&width=400"
      },
      {
        id: "carre",
        size: "Carré",
        price: 75,
        description: "Modèle carré géométrique",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F7b7636748fbe45379816dd330558bd96?format=webp&width=400"
      },
      {
        id: "traditionnelle",
        size: "Traditionnelle",
        price: 60,
        description: "Modèle traditionnel classique",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F6cee35b1b28f4f96a3f3db53b74303e8?format=webp&width=400"
      },
      {
        id: "floral",
        size: "Floral",
        price: 65,
        description: "Modèle floral délicat",
        image: "https://cdn.builder.io/api/v1/image/assets%2Fd8cf247061ae4e73b8c8529275e40675%2F888b62b68ea2490d9e6da722781123e5?format=webp&width=400"
      },
    ],
    availablePatterns: [
      "bleu_ciel",
      "violet_royal",
      "rouge_brique",
      "noir_elegant",
      "marron_terre",
      "vert_bouteille",
    ],
  },

  // 7. TABLE SAFIOTE - Formule spéciale avec toutes les couleurs et motifs
  {
    id: 7,
    name: "Table Safiote",
    basePrice: 600,
    category: "Formules spéciales",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    description: "Formule complète pour table familiale traditionnelle de Safi",
    sizeVariants: [
      {
        id: "formule_complete",
        size: "Formule complète",
        price: 600,
        description: "1 soupière + 12 bols 8cm, 2 grandes assiettes + 24 petites, 2 assiettes rectangulaires, 3 feraqa au choix",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
      },
    ],
    availablePatterns: commonPatterns,
    images: {
      "gallery": [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1578749760903-03b75f5edffc?w=400&h=400&fit=crop"
      ]
    },
  },
];

// Fonction utilitaire pour obtenir le motif par ID
export const getPatternById = (id: string): Pattern | undefined => {
  return patterns.find((pattern) => pattern.id === id);
};

// Fonction spéciale pour obtenir les patterns selon le produit et la variante
export const getAvailablePatternsForProductVariant = (productId: number, variantId?: string): string[] => {
  const product = products.find(p => p.id === productId);
  if (!product) return [];

  // Cas spéciaux pour Qssria (id: 1) - toutes les couleurs + options spéciales
  if (productId === 1) {
    return [...commonPatterns, ...specialPatterns];
  }

  // Cas spécial pour Gourde seule (id: 5, variantId: "gourde_seule") - toutes les couleurs + options spéciales
  if (productId === 5 && variantId === "gourde_seule") {
    return [...commonPatterns, ...specialPatterns];
  }

  // Pour tous les autres produits - couleurs communes uniquement
  return commonPatterns;
};

// Fonction pour obtenir tous les motifs disponibles pour un produit (avec variante optionnelle)
export const getAvailablePatternsForProduct = (product: Product, variantId?: string): Pattern[] => {
  // Utiliser la nouvelle fonction intelligente pour obtenir les patterns disponibles
  const availablePatternIds = getAvailablePatternsForProductVariant(product.id, variantId);

  return patterns.filter((pattern) =>
    availablePatternIds.includes(pattern.id),
  );
};

// Fonction pour calculer le prix d'une variante
export const calculateVariantPrice = (
  product: Product,
  sizeVariantId: string,
): number => {
  const variant = product.sizeVariants.find((v) => v.id === sizeVariantId);
  return variant ? variant.price : product.basePrice;
};

// Fonction pour obtenir l'image d'une variante
export const getVariantImage = (
  product: Product,
  sizeVariantId: string,
): string => {
  const variant = product.sizeVariants.find((v) => v.id === sizeVariantId);
  return variant?.image || product.image;
};

// Fonction pour générer le nom complet du produit avec variante et motif
export const generateProductVariantName = (
  product: Product,
  sizeVariantId: string,
  patternId: string,
): string => {
  const variant = product.sizeVariants.find((v) => v.id === sizeVariantId);
  const pattern = getPatternById(patternId);

  let name = product.name;

  if (variant && variant.size !== "Standard" && variant.size !== "Unique") {
    name += ` ${variant.size}`;
  }

  if (pattern) {
    name += ` motif ${pattern.name}`;
  }

  return name;
};
