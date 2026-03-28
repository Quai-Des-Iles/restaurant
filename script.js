document.documentElement.classList.add("js");

const siteContent = {
  site: {
    canonical: "https://auquaidesiles.fr/",
    googleBusinessUrl: "",
    annualClosure: {
      active: false,
      fr: "",
      en: ""
    }
  },
  fr: {
    seo: {
      title: "Au Quai des Iles | Restaurant a Saint-Pol-de-Leon face a la mer",
      description: "Au Quai des Iles, restaurant a Saint-Pol-de-Leon face a la baie de Morlaix. Cuisine genereuse entre terre et mer, menus de 10 EUR a 75 EUR, terrasse et reservation par telephone.",
      ogTitle: "Au Quai des Iles | Restaurant a Saint-Pol-de-Leon face a la mer",
      ogDescription: "Une table face a la baie de Morlaix, entre terroir et produits de la mer, avec terrasse et reservation par telephone."
    },
    ui: {
      menu: "Menu",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      switchLanguage: "Afficher la version anglaise"
    },
    copy: {
      "nav.restaurant": "Le restaurant",
      "nav.menus": "Menus",
      "nav.gallery": "Galerie",
      "nav.info": "Infos",
      "actions.language": "English",
      "actions.reserve": "Reserver",
      "actions.call": "Appeler pour reserver",
      "actions.viewMenu": "Voir les menus",
      "actions.route": "Ouvrir l'itineraire",
      "hero.kicker": "Restaurant face a la mer a Saint-Pol-de-Leon",
      "hero.title": "Au Quai des Iles, la table gourmande face a la baie de Morlaix.",
      "hero.text": "Au Quai des Iles accueille ses convives face a la baie de Morlaix, autour d'une cuisine gourmande preparee sur place par le chef Pierre-Yves Martin et son equipe.",
      "hero.badge1": "Vue sur la baie",
      "hero.badge2": "Chef Pierre-Yves Martin",
      "hero.badge3": "Du mercredi au dimanche",
      "hours.lunchLabel": "Dejeuner",
      "hours.lunchValue": "12h00-14h00",
      "hours.dinnerLabel": "Service du soir",
      "hours.dinnerValue": "Des 19h00",
      "about.kicker": "Une adresse ancree a Saint-Pol-de-Leon",
      "about.title": "Un restaurant lumineux, tourne vers la mer et les produits du terroir.",
      "about.text1": "Entre la salle, la terrasse et la baie juste en face, le lieu mise sur une atmosphere simple, accueillante et locale. On vient y chercher des assiettes soignees, des portions genereuses et des produits choisis pour leur fraicheur.",
      "about.text2": "Le chef Pierre-Yves Martin signe une cuisine traditionelle, gourmande et creative, ou homard breton, poisson, viande et desserts maison trouvent chacun leur place selon la saison et l'envie du moment.",
      "about.fact1Value": "Face a la baie",
      "about.fact1Label": "Vue sur mer et baie de Morlaix",
      "about.fact2Value": "4 formules",
      "about.fact2Label": "Des menus lisibles selon le budget",
      "about.fact3Value": "Terrasse & parking",
      "about.fact3Label": "Pratique pour un dejeuner ou un diner au calme",
      "about.cardKicker": "L'esprit du lieu",
      "about.cardTitle": "Une table pour prendre son temps, au bord de l'eau.",
      "about.cardText": "Le rythme reste volontairement clair: un accueil chaleureux, des menus nets, une vue directe sur la baie et une cuisine qui valorise autant la mer que les envies plus terriennes.",
      "menus.kicker": "Les menus",
      "menus.title": "Des prix visibles, des plats qui donnent envie, sans surcharge.",
      "menus.intro": "La carte evolue selon la saison, la peche et l'inspiration de la cuisine. Voici les formules qui structurent l'experience aujourd'hui.",
      "menus.footnote": "Les suggestions peuvent evoluer selon les arrivages et la saison.",
      "experience.kicker": "L'experience sur place",
      "experience.title": "Une escale simple, chaleureuse et pensee pour les repas qui comptent.",
      "experience.text": "On s'y retrouve pour un dejeuner face a la baie, un diner autour d'un homard, un repas de famille avec menu enfant, ou simplement une table ou l'on sait que les informations essentielles sont claires.",
      "experience.cardKicker": "Le plat signature",
      "experience.cardTitle": "Le homard, le poisson, la baie: tout le decor tient deja dans l'assiette.",
      "experience.list1": "Cuisine preparee sur place a partir de produits de qualite.",
      "experience.list2": "Formules lisibles, du menu enfant au menu homard.",
      "experience.list3": "Cadre portuaire agreable pour les repas du midi comme du soir.",
      "gallery.kicker": "Galerie",
      "gallery.title": "Quelques images du lieu, des assiettes et de l'atmosphere.",
      "gallery.captions.0": "Le port, la terrasse et l'adresse du restaurant.",
      "trust.kicker": "Signaux de confiance",
      "trust.title": "Une adresse claire, locale et bien identifiee pour preparer sa venue.",
      "trust.tripadvisor": "Voir la fiche Tripadvisor",
      "trust.facebook": "Suivre sur Facebook",
      "info.kicker": "Infos pratiques",
      "info.title": "Tout ce qu'il faut pour venir, appeler et reserver.",
      "info.addressLabel": "Adresse",
      "info.phoneLabel": "Telephone",
      "info.mobileLabel": "Portable",
      "info.emailLabel": "Email",
      "info.hoursKicker": "Horaires",
      "info.days": "Du mercredi au dimanche",
      "info.eveningService": "Service du soir des 19h00",
      "info.note": "Les horaires du soir peuvent varier, le plus simple reste d'appeler avant de venir.",
      "info.tourism": "Roscoff Tourisme",
      "footer.tagline": "Restaurant face a la baie de Morlaix, a Saint-Pol-de-Leon.",
      "footer.legal": "Mentions legales",
      "footer.privacy": "Confidentialite",
      "footer.meta": "Informations et tarifs releves sur les sources publiques consultees le 28 mars 2026. Pensez a appeler pour confirmer les services du jour."
    },
    menus: [
      {
        subtitle: "Terre & mer",
        name: "Menu de l'Armateur",
        price: "55 EUR / 75 EUR",
        items: [
          "Entree au choix dans Bosco ou Matelot",
          "Homard breton roti ou au bouillon Kari-Gosse",
          "Dessert au choix"
        ],
        condition: "Version terre ou mer selon l'envie."
      },
      {
        subtitle: "Le coeur de carte",
        name: "Menu du Bosco",
        price: "35 EUR / 40 EUR avec fromage",
        items: [
          "Verrine de crevettes ou foie gras",
          "Corolle de limande, lotte ou magret",
          "Gourmandises, mille-feuille d'ananas ou omelette norvegienne"
        ],
        condition: "Disponible avec option fromage affine."
      },
      {
        subtitle: "Le menu dejeuner",
        name: "Menu du Matelot",
        price: "25 EUR",
        items: [
          "Entree, plat et dessert",
          "Moules gratinees, saumon fume, joue de porc ou aile de raie",
          "Une formule lisible pour le midi"
        ],
        condition: "Sauf dimanche et jours feries."
      },
      {
        subtitle: "Pour les plus jeunes",
        name: "Menu Moussaillon",
        price: "10 EUR",
        items: [
          "Filet de poisson, jambon blanc ou steak hache",
          "Frites, riz, salade ou legumes",
          "Glace 2 boules ou mousse au chocolat"
        ],
        condition: "Jusqu'a 10 ans."
      }
    ],
    services: [
      { title: "Terrasse", text: "Pour profiter du port et de la lumiere du littoral." },
      { title: "Parking prive", text: "Un acces pratique juste en face du restaurant." },
      { title: "Wi-Fi", text: "Disponible sur place avec une ambiance calme." },
      { title: "Menu enfant", text: "Une formule simple pour les plus jeunes convives." },
      { title: "A emporter", text: "Plats prepares et click & collect selon le service." },
      { title: "Animaux acceptes", text: "Les compagnons bien eduques sont les bienvenus." }
    ],
    gallery: [
      { alt: "Facade du restaurant Au Quai des Iles a Saint-Pol-de-Leon.", caption: "La terrasse et l'adresse du restaurant face a la baie." },
      { alt: "Homards dresses en cuisine avant le service.", caption: "Homards dresses pour le service." },
      { alt: "Saint-Jacques servies en coquille.", caption: "Saint-Jacques en coquille." },
      { alt: "Salle et terrasse du restaurant face a la mer.", caption: "La salle, la terrasse et la vue." },
      { alt: "Tarte aux pommes servie avec glace caramel.", caption: "Dessert maison et note finale douce." },
      { alt: "Baie de Morlaix au coucher du soleil.", caption: "Le decor naturel qui accompagne le repas." }
    ],
    trust: [
      {
        label: "Le bon repere",
        title: "Saint-Pol-de-Leon",
        text: "Une table posee face a la baie de Morlaix, facile a reperer au port de Saint-Pol-de-Leon."
      },
      {
        label: "Des prix lisibles",
        title: "De 10 EUR a 75 EUR",
        text: "Menu enfant, formule dejeuner, menu gourmand ou homard breton: chacun peut situer son budget."
      },
      {
        label: "Une adresse reconnue",
        title: "Travellers' Choice 2025",
        text: "Tripadvisor reference pres de 400 avis observes le 28 mars 2026, sans qu'il soit necessaire de reproduire les commentaires sur cette page."
      }
    ]
  },
  en: {
    seo: {
      title: "Au Quai des Iles | Seaside restaurant in Saint-Pol-de-Leon",
      description: "Au Quai des Iles is a seaside restaurant in Saint-Pol-de-Leon overlooking Morlaix Bay, with French cuisine, seafood highlights, clear menu prices and phone booking.",
      ogTitle: "Au Quai des Iles | Seaside restaurant in Saint-Pol-de-Leon",
      ogDescription: "A warm table overlooking Morlaix Bay with French cuisine, seafood dishes, terrace seating and booking by phone."
    },
    ui: {
      menu: "Menu",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
      switchLanguage: "Switch back to French"
    },
    copy: {
      "nav.restaurant": "Restaurant",
      "nav.menus": "Menus",
      "nav.gallery": "Gallery",
      "nav.info": "Info",
      "actions.language": "Francais",
      "actions.reserve": "Book",
      "actions.call": "Call to book",
      "actions.viewMenu": "See menus",
      "actions.route": "Open directions",
      "hero.kicker": "Seaside restaurant in Saint-Pol-de-Leon",
      "hero.title": "Au Quai des Iles, a generous table overlooking Morlaix Bay.",
      "hero.text": "Au Quai des Iles welcomes guests facing Morlaix Bay with warm, homemade food prepared by chef Pierre-Yves Martin and his team.",
      "hero.badge1": "Bay views",
      "hero.badge2": "Chef Pierre-Yves Martin",
      "hero.badge3": "Wednesday to Sunday",
      "hours.lunchLabel": "Lunch",
      "hours.lunchValue": "12:00 pm - 2:00 pm",
      "hours.dinnerLabel": "Evening service",
      "hours.dinnerValue": "From 7:00 pm",
      "about.kicker": "A table rooted in Saint-Pol-de-Leon",
      "about.title": "A bright restaurant shaped by the sea, local produce and a calm harbour rhythm.",
      "about.text1": "Between the dining room, the terrace and the bay just across the road, the place feels welcoming, local and easy to enjoy. Guests come for careful plates, generous portions and ingredients chosen for freshness.",
      "about.text2": "Chef Pierre-Yves Martin leads a traditional yet creative kitchen where Breton lobster, fish, meat and homemade desserts each find their place depending on season and mood.",
      "about.fact1Value": "Facing the bay",
      "about.fact1Label": "Sea view over Morlaix Bay",
      "about.fact2Value": "4 menu options",
      "about.fact2Label": "Clear prices for different budgets",
      "about.fact3Value": "Terrace & parking",
      "about.fact3Label": "Easy for lunch or dinner by the water",
      "about.cardKicker": "The spirit of the place",
      "about.cardTitle": "A table made for slowing down by the water.",
      "about.cardText": "The experience stays intentionally clear: warm hospitality, readable menus, a direct bay view and a kitchen that balances seafood with heartier French favourites.",
      "menus.kicker": "Menus",
      "menus.title": "Clear prices, generous dishes, and no clutter.",
      "menus.intro": "The offering changes with the season, the catch and the kitchen's inspiration. Here are the menu formulas currently shaping the experience.",
      "menus.footnote": "Suggestions may change with the season and daily arrivals.",
      "experience.kicker": "The on-site experience",
      "experience.title": "A warm stop made for the meals that matter.",
      "experience.text": "Come for lunch overlooking the bay, dinner around a lobster dish, a family meal with a children's menu, or simply a table where the essential information is easy to understand.",
      "experience.cardKicker": "Signature plate",
      "experience.cardTitle": "Lobster, fish and the bay already tell the whole story.",
      "experience.list1": "Dishes prepared on site from carefully selected ingredients.",
      "experience.list2": "Readable formulas, from children's menu to lobster menu.",
      "experience.list3": "A pleasant harbour setting for both lunch and evening service.",
      "gallery.kicker": "Gallery",
      "gallery.title": "A few views of the place, the plates and the atmosphere.",
      "gallery.captions.0": "The harbour, the terrace and the restaurant itself.",
      "trust.kicker": "Confidence markers",
      "trust.title": "A local address with clear information before you visit.",
      "trust.tripadvisor": "Open Tripadvisor profile",
      "trust.facebook": "Follow on Facebook",
      "info.kicker": "Practical info",
      "info.title": "Everything you need to visit, call and book.",
      "info.addressLabel": "Address",
      "info.phoneLabel": "Phone",
      "info.mobileLabel": "Mobile",
      "info.emailLabel": "Email",
      "info.hoursKicker": "Opening times",
      "info.days": "Wednesday to Sunday",
      "info.eveningService": "Evening service from 7:00 pm",
      "info.note": "Evening service can vary, so the best option is still to call before visiting.",
      "info.tourism": "Roscoff Tourism",
      "footer.tagline": "A restaurant facing Morlaix Bay in Saint-Pol-de-Leon.",
      "footer.legal": "Legal notice",
      "footer.privacy": "Privacy",
      "footer.meta": "Information and prices were gathered from public sources consulted on March 28, 2026. Please call to confirm daily service."
    },
    menus: [
      {
        subtitle: "Land & sea",
        name: "Armateur menu",
        price: "EUR55 / EUR75",
        items: [
          "Starter chosen from the Bosco or Matelot menus",
          "Breton lobster roasted or served with Kari-Gosse broth",
          "Dessert of your choice"
        ],
        condition: "Seafood or surf-and-turf version depending on appetite."
      },
      {
        subtitle: "Main gourmet menu",
        name: "Bosco menu",
        price: "EUR35 / EUR40 with cheese",
        items: [
          "Shrimp verrine or foie gras",
          "Lemon sole corolle, monkfish or duck breast",
          "Petit sweets, pineapple mille-feuille or baked Alaska"
        ],
        condition: "Available with an extra cheese course."
      },
      {
        subtitle: "Lunch formula",
        name: "Matelot menu",
        price: "EUR25",
        items: [
          "Starter, main and dessert",
          "Baked mussels, smoked salmon, pork cheek or skate wing",
          "A straightforward choice for lunch service"
        ],
        condition: "Not available on Sundays or public holidays."
      },
      {
        subtitle: "For younger guests",
        name: "Moussaillon menu",
        price: "EUR10",
        items: [
          "Fish fillet, ham or minced steak",
          "Fries, rice, salad or vegetables",
          "Two scoops of ice cream or chocolate mousse"
        ],
        condition: "Up to 10 years old."
      }
    ],
    services: [
      { title: "Terrace", text: "A good spot to enjoy the harbour light." },
      { title: "Private parking", text: "Easy access right in front of the restaurant." },
      { title: "Wi-Fi", text: "Available on site in a calm setting." },
      { title: "Children's menu", text: "A simple option for younger guests." },
      { title: "Takeaway", text: "Prepared dishes and click & collect depending on service." },
      { title: "Pets welcome", text: "Well-behaved companions are welcome." }
    ],
    gallery: [
      { alt: "Front of Au Quai des Iles in Saint-Pol-de-Leon.", caption: "The terrace and the restaurant facing the bay." },
      { alt: "Lobsters plated in the kitchen before service.", caption: "Lobsters ready for service." },
      { alt: "Scallops served in their shell.", caption: "Scallops served in shell." },
      { alt: "Dining room and terrace facing the sea.", caption: "Dining room, terrace and sea view." },
      { alt: "Apple tart served with caramel ice cream.", caption: "Homemade dessert for a gentle finish." },
      { alt: "Morlaix Bay at sunset.", caption: "The natural backdrop that frames the meal." }
    ],
    trust: [
      {
        label: "Easy landmark",
        title: "Saint-Pol-de-Leon",
        text: "A waterfront table facing Morlaix Bay, easy to spot on Saint-Pol-de-Leon's harbour."
      },
      {
        label: "Clear pricing",
        title: "From EUR10 to EUR75",
        text: "Children's menu, lunch formula, gourmet set or Breton lobster menu: the budget is easy to understand."
      },
      {
        label: "Recognised address",
        title: "Travellers' Choice 2025",
        text: "Tripadvisor lists close to 400 reviews observed on March 28, 2026, without copying third-party comments onto this page."
      }
    ]
  }
};

const metaDescription = document.querySelector('meta[name="description"]');
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const twitterTitle = document.querySelector('meta[name="twitter:title"]');
const twitterDescription = document.querySelector('meta[name="twitter:description"]');
const navToggle = document.getElementById("nav-toggle");
const navPanel = document.getElementById("primary-menu");
const langToggle = document.getElementById("lang-toggle");
const navPanelLang = document.getElementById("nav-panel-lang");
const serviceGrid = document.getElementById("service-grid");
const annualClosure = document.getElementById("annual-closure");

let currentLanguage = getSavedLanguage();

applyLanguage(currentLanguage, false);
bindEvents();
setupRevealObserver();
setupParallax();

function getSavedLanguage() {
  try {
    const saved = window.localStorage.getItem("aqdi-lang");
    return saved === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem("aqdi-lang", language);
  } catch {
    return;
  }
}

function applyLanguage(language, persist = true) {
  const locale = siteContent[language];
  currentLanguage = language;

  document.documentElement.lang = language;
  document.title = locale.seo.title;
  metaDescription?.setAttribute("content", locale.seo.description);
  ogTitle?.setAttribute("content", locale.seo.ogTitle);
  ogDescription?.setAttribute("content", locale.seo.ogDescription);
  twitterTitle?.setAttribute("content", locale.seo.ogTitle);
  twitterDescription?.setAttribute("content", locale.seo.ogDescription);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && Object.prototype.hasOwnProperty.call(locale.copy, key)) {
      node.textContent = locale.copy[key];
    }
  });

  renderMenus(locale.menus);
  renderServices(locale.services);
  renderGallery(locale.gallery);
  renderTrust(locale.trust);
  renderAnnualClosure(language);
  renderGoogleBusiness(language);

  [langToggle, navPanelLang].forEach((toggle) => {
    const labelNode = toggle?.lastElementChild;
    if (labelNode) {
      labelNode.textContent = locale.copy["actions.language"];
    }
    if (toggle) {
      toggle.setAttribute("aria-label", locale.ui.switchLanguage);
    }
  });

  if (navToggle) {
    const menuLabel = navToggle.querySelector("span:last-child");
    if (menuLabel) {
      menuLabel.textContent = locale.ui.menu;
    }
    const isOpen = navPanel?.classList.contains("is-open");
    navToggle.setAttribute("aria-label", isOpen ? locale.ui.closeMenu : locale.ui.openMenu);
  }

  if (persist) {
    saveLanguage(language);
  }
}

function renderMenus(items) {
  document.querySelectorAll("[data-menu-card]").forEach((card, index) => {
    const item = items[index];
    if (!item) return;

    const subtitle = card.querySelector("[data-menu-subtitle]");
    const name = card.querySelector("[data-menu-name]");
    const price = card.querySelector("[data-menu-price]");
    const condition = card.querySelector("[data-menu-condition]");
    const list = card.querySelector(".menu-list");

    if (subtitle) subtitle.textContent = item.subtitle;
    if (name) name.textContent = item.name;
    if (price) price.textContent = item.price;
    if (condition) condition.textContent = item.condition;
    if (list) {
      list.replaceChildren(...item.items.map((entry) => {
        const li = document.createElement("li");
        li.textContent = entry;
        return li;
      }));
    }
  });
}

function renderServices(items) {
  if (!serviceGrid) return;
  serviceGrid.replaceChildren(...items.map((item) => {
    const article = document.createElement("article");
    article.className = "service-card";

    const title = document.createElement("h3");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;

    article.append(title, text);
    return article;
  }));
}

function renderGallery(items) {
  if (!items.length) return;

  const heroCaption = document.querySelector(".photo-card-main figcaption");
  const heroImage = document.querySelector(".photo-card-main img");
  if (heroCaption) heroCaption.textContent = items[0].caption;
  if (heroImage) heroImage.alt = items[0].alt;

  document.querySelectorAll("[data-gallery-index]").forEach((figure) => {
    const item = items[Number(figure.getAttribute("data-gallery-index"))];
    if (!item) return;
    const image = figure.querySelector("img");
    const caption = figure.querySelector("figcaption");
    if (image) image.alt = item.alt;
    if (caption) caption.textContent = item.caption;
  });
}

function renderTrust(items) {
  document.querySelectorAll("[data-trust-card]").forEach((card, index) => {
    const item = items[index];
    if (!item) return;

    const label = card.querySelector("[data-trust-label]");
    const title = card.querySelector("[data-trust-title]");
    const text = card.querySelector("[data-trust-text]");

    if (label) label.textContent = item.label;
    if (title) title.textContent = item.title;
    if (text) text.textContent = item.text;
  });
}

function renderAnnualClosure(language) {
  if (!annualClosure) return;
  const closure = siteContent.site.annualClosure;
  if (!closure.active) {
    annualClosure.classList.add("is-hidden");
    annualClosure.textContent = "";
    return;
  }

  annualClosure.textContent = closure[language];
  annualClosure.classList.remove("is-hidden");
}

function renderGoogleBusiness(language) {
  const url = siteContent.site.googleBusinessUrl;
  ["google-business-slot", "google-business-footer"].forEach((id) => {
    const slot = document.getElementById(id);
    if (!slot) return;

    slot.replaceChildren();
    slot.classList.add("is-hidden");

    if (!url) return;

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = language === "fr" ? "Google Business" : "Google Business";
    slot.append(link);
    slot.classList.remove("is-hidden");
  });
}

function bindEvents() {
  [langToggle, navPanelLang].forEach((toggle) => {
    toggle?.addEventListener("click", () => {
      const next = currentLanguage === "fr" ? "en" : "fr";
      applyLanguage(next);
      toggleMenu(false);
    });
  });

  navToggle?.addEventListener("click", () => {
    const nextState = !navPanel?.classList.contains("is-open");
    toggleMenu(nextState);
  });

  navPanel?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  document.addEventListener("click", (event) => {
    if (!navPanel || !navToggle) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (navPanel.contains(target) || navToggle.contains(target)) return;
    toggleMenu(false);
  });
}

function toggleMenu(isOpen) {
  if (!navPanel || !navToggle) return;
  navPanel.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? siteContent[currentLanguage].ui.closeMenu : siteContent[currentLanguage].ui.openMenu
  );
}

function setupRevealObserver() {
  const nodes = [...document.querySelectorAll(".reveal")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!nodes.length) return;

  if (reducedMotion || typeof IntersectionObserver === "undefined") {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.16
  });

  nodes.forEach((node) => observer.observe(node));
}

function setupParallax() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = [...document.querySelectorAll(".parallax")];
  if (reducedMotion || !items.length) return;

  let ticking = false;

  const update = () => {
    items.forEach((item) => {
      const speed = Number(item.getAttribute("data-speed") || "0.02");
      const rect = item.getBoundingClientRect();
      const centerOffset = window.innerHeight / 2 - (rect.top + rect.height / 2);
      item.style.setProperty("--parallax-offset", `${(centerOffset * speed).toFixed(1)}px`);
    });
    ticking = false;
  };

  const requestTick = () => {
    if (ticking) return;
    window.requestAnimationFrame(update);
    ticking = true;
  };

  update();
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", requestTick);
}
