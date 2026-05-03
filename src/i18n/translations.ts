export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: { packs: "Packs", why: "Pourquoi nous", discord: "Discord" },
    hero: {
      tagline: "GTA V Legacy · Service Premium",
      title: "Prestige Service",
      subtitle: "Le sommet du service GTA V Legacy",
      description:
        "Une expérience exclusive, rapide et sécurisée pour les joueurs exigeants. Tenues, garages, niveaux et millions livrés avec prestige.",
      cta_discord: "Rejoindre Discord",
      cta_packs: "Voir les packs",
    },
    packs: {
      label: "Nos offres",
      title: "Choisissez votre rang",
      subtitle: "Trois niveaux d'excellence, une seule promesse : la qualité.",
      order: "Commander maintenant",
      popular: "Populaire",
      best: "Best Value",
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
        { title: "Rapide", desc: "Livraison express dès la commande validée.", icon: "zap" },
        { title: "Sécurisé", desc: "Méthodes éprouvées, comptes protégés.", icon: "shield" },
        { title: "Fiable", desc: "Des centaines de clients satisfaits.", icon: "check" },
        { title: "Support actif", desc: "Une équipe disponible jour et nuit.", icon: "chat" },
      ],
    },
    discord: {
      label: "Communauté privée",
      title: "Accédez aux services Prestige",
      subtitle:
        "Rejoignez notre communauté privée et accédez à un service personnalisé, des annonces exclusives et un support dédié.",
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
      tagline: "GTA V Legacy · Premium Service",
      title: "Prestige Service",
      subtitle: "The peak of GTA V Legacy service",
      description:
        "An exclusive, fast and secure experience for demanding players. Outfits, garages, levels and millions — delivered with prestige.",
      cta_discord: "Join Discord",
      cta_packs: "View packs",
    },
    packs: {
      label: "Our offers",
      title: "Choose your rank",
      subtitle: "Three levels of excellence, one single promise: quality.",
      order: "Order now",
      popular: "Popular",
      best: "Best Value",
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
        { title: "Fast", desc: "Express delivery as soon as your order is confirmed.", icon: "zap" },
        { title: "Secure", desc: "Proven methods, fully protected accounts.", icon: "shield" },
        { title: "Reliable", desc: "Hundreds of satisfied clients across the community.", icon: "check" },
        { title: "Active support", desc: "A dedicated team available day and night.", icon: "chat" },
      ],
    },
    discord: {
      label: "Private community",
      title: "Access Prestige services",
      subtitle:
        "Join our private community and unlock personalized service, exclusive announcements and dedicated support.",
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
