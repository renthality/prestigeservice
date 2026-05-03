export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: { packs: "Packs", why: "Pourquoi nous", discord: "Discord" },
    hero: {
      tagline: "GTA V Legacy · Service Premium Sécurisé",
      title: "Prestige Service",
      subtitle: "Le sommet du service GTA V Legacy",
      description:
        "Accès immédiat · Service premium sécurisé · Résultat garanti. Tenues, garages, niveaux et millions livrés avec prestige par une équipe disponible 24/7.",
      cta_discord: "Rejoindre le Discord",
      cta_packs: "Commander maintenant",
    },
    packs: {
      label: "Nos offres",
      title: "Choisissez votre niveau de prestige",
      subtitle: "Trois rangs d'excellence. Une seule promesse : la qualité, livrée immédiatement.",
      order: "Commander maintenant",
      popular: "Populaire",
      best: "Meilleure offre",
      micro_instant: "Accès instantané",
      micro_secure: "Paiement sécurisé",
      delivery: "Livraison rapide après achat via Discord",
      silver: {
        name: "Pack Silver",
        price: "10€",
        features: [
          "5 tenues modées aléatoires",
          "1 garage complet moddé",
          "Unlock All",
          "Niveau au choix (50 → 150)",
          "50M GTA$",
          "Accès courses modées",
        ],
      },
      gold: {
        name: "Pack Gold",
        price: "20€",
        features: [
          "10 tenues modées aléatoires",
          "3 garages complets moddés",
          "Unlock All",
          "Niveau au choix (150 → 200)",
          "100M GTA$",
          "Accès courses modées",
        ],
      },
      diamond: {
        name: "Pack Diamond",
        price: "30€",
        features: [
          "15 tenues modées au choix",
          "5 garages complets moddés",
          "Unlock All",
          "Niveau libre (0 → 8000)",
          "200M GTA$",
          "Accès courses modées",
          "Jeu entièrement débloqué",
        ],
      },
    },
    why: {
      label: "Pourquoi nous",
      title: "L'excellence, par défaut",
      subtitle: "Quatre piliers qui définissent notre service.",
      items: [
        { title: "Accès immédiat", desc: "Livraison express dès la commande validée.", icon: "zap" },
        { title: "100% sécurisé", desc: "Méthodes éprouvées, comptes entièrement protégés.", icon: "shield" },
        { title: "Résultat garanti", desc: "Des centaines de clients satisfaits.", icon: "check" },
        { title: "Support 24/7", desc: "Une équipe dédiée disponible jour et nuit.", icon: "chat" },
      ],
    },
    discord: {
      label: "Communauté privée",
      title: "Rejoignez Discord pour commander",
      subtitle:
        "Rejoignez notre Discord pour accéder aux services et passer commande rapidement. Support dédié, annonces exclusives, livraison express.",
      cta: "Rejoindre le Discord",
    },
    footer: {
      tagline: "Le sommet du service GTA V Legacy.",
      links: { discord: "Discord", terms: "Conditions", support: "Support" },
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: { packs: "Packs", why: "Why us", discord: "Discord" },
    hero: {
      tagline: "GTA V Legacy · Secure Premium Service",
      title: "Prestige Service",
      subtitle: "The peak of GTA V Legacy service",
      description:
        "Instant access · Secure premium service · Guaranteed results. Outfits, garages, levels and millions delivered with prestige by a 24/7 dedicated team.",
      cta_discord: "Join the Discord",
      cta_packs: "Order now",
    },
    packs: {
      label: "Our offers",
      title: "Choose your level of prestige",
      subtitle: "Three ranks of excellence. One promise: quality, delivered instantly.",
      order: "Order now",
      popular: "Popular",
      best: "Best offer",
      micro_instant: "Instant access",
      micro_secure: "Secure payment",
      delivery: "Fast delivery after purchase via Discord",
      silver: {
        name: "Silver Pack",
        price: "€10",
        features: [
          "5 random modded outfits",
          "1 fully modded garage",
          "Unlock All",
          "Level of your choice (50 → 150)",
          "50M GTA$",
          "Access to modded races",
        ],
      },
      gold: {
        name: "Gold Pack",
        price: "€20",
        features: [
          "10 random modded outfits",
          "3 fully modded garages",
          "Unlock All",
          "Level of your choice (150 → 200)",
          "100M GTA$",
          "Access to modded races",
        ],
      },
      diamond: {
        name: "Diamond Pack",
        price: "€30",
        features: [
          "15 hand-picked modded outfits",
          "5 fully modded garages",
          "Unlock All",
          "Any level (0 → 8000)",
          "200M GTA$",
          "Access to modded races",
          "Fully unlocked game",
        ],
      },
    },
    why: {
      label: "Why us",
      title: "Excellence, by default",
      subtitle: "Four pillars that define our service.",
      items: [
        { title: "Instant access", desc: "Express delivery as soon as your order is confirmed.", icon: "zap" },
        { title: "100% secure", desc: "Proven methods, fully protected accounts.", icon: "shield" },
        { title: "Guaranteed results", desc: "Hundreds of satisfied clients across the community.", icon: "check" },
        { title: "24/7 support", desc: "A dedicated team available day and night.", icon: "chat" },
      ],
    },
    discord: {
      label: "Private community",
      title: "Join Discord to order",
      subtitle:
        "Join our Discord to access our services and place your order quickly. Dedicated support, exclusive announcements, express delivery.",
      cta: "Join the Discord",
    },
    footer: {
      tagline: "The peak of GTA V Legacy service.",
      links: { discord: "Discord", terms: "Terms", support: "Support" },
      rights: "All rights reserved.",
    },
  },
};

export type Translation = typeof translations.fr;
