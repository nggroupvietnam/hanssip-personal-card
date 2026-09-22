/**
 * ============================================================
 * BUSINESS CONFIGURATION — EDIT THIS FILE ONLY
 * ============================================================
 * Every piece of personal/business information, contact link,
 * selling point and placeholder on the page is defined here.
 * You should never need to touch index.html, style.css or
 * main.js just to update your details.
 *
 * Anything wrapped in square brackets, e.g. "[Years of experience]",
 * is an explicit placeholder — nothing on this page is invented.
 * Replace placeholders with real information before publishing.
 * ============================================================
 */
window.BUSINESS = {
  // ---------------------------------------------------------
  // IDENTITY
  // ---------------------------------------------------------
  name: "Tran Phuong Lam",
  title: "Director of Sales and International Relations",
  company: "HANSSIP Industrial Park",
  tagline: "Industrial Land & Investment Solutions",
  heroStatement:
    "Helping manufacturers, investors and businesses find the right industrial land for their next project.",
  location: "HANSSIP Industrial Park, Southern Hanoi, Vietnam",

  // ---------------------------------------------------------
  // IMAGES — place real files at these paths (relative to index.html)
  // ---------------------------------------------------------
  images: {
    portrait: "images/profile.png", // real photo, already in place
    logo: "", // [Placeholder] set to "images/logo.png" to replace the text wordmark with a logo
    heroBackground: "images/hero-industrial.jpg", // [Placeholder] add an industrial/aerial photo here
  },

  // ---------------------------------------------------------
  // CONTACT
  // Phone and email below come from the provided business card.
  // Zalo/WhatsApp links are generated from that same real phone
  // number (zalo.me/<number> and wa.me/<number> are the standard
  // deep-link formats for those apps) — not invented data.
  // ---------------------------------------------------------
  contact: {
    phoneDisplay: "+84 90 456 8688",
    phoneE164: "84904568688", // digits only, no leading +
    email: "lamtp@nggroup.vn",
    zaloUrl: "https://zalo.me/84904568688",
    whatsappUrl: "https://wa.me/84904568688",
    googleMapsUrl: "", // [Placeholder] add a Google Maps link
    linkedinUrl: "", // [Placeholder]
    facebookUrl: "", // [Placeholder]
    website: "https://hanssip.net",
  },

  // ---------------------------------------------------------
  // ABOUT ME
  // ---------------------------------------------------------
  about: {
    intro:
      "I work directly with businesses looking for industrial land and investment opportunities, helping them identify suitable locations and move from initial requirements toward a practical site solution.",
    yearsExperience: "[Years of experience]",
    areasCovered: "[Areas covered]",
    industrialParks: "HANSSIP Industrial Park",
    languages: "[Languages]",
  },

  // ---------------------------------------------------------
  // 10 SELLING POINTS
  // ---------------------------------------------------------
  sellingPoints: [
    { number: "01", title: "Strategic Location", description: "Position your operation where customers, suppliers and logistics networks are within easy reach." },
    { number: "02", title: "Logistics Advantage", description: "Convenient access to major highways, ports, airports and regional economic centers." },
    { number: "03", title: "Industrial-Ready Land", description: "Suitable land solutions for factories, warehouses, logistics facilities and industrial projects." },
    { number: "04", title: "Reliable Infrastructure", description: "Essential infrastructure designed to support demanding industrial operations." },
    { number: "05", title: "Flexible Land Options", description: "Find land that matches your required area, project scale and development plan." },
    { number: "06", title: "Faster Project Start", description: "Reduce the time spent searching and move more quickly toward construction and operation." },
    { number: "07", title: "Investment-Focused Solutions", description: "Focus on locations and commercial conditions that make sense for your investment objectives." },
    { number: "08", title: "International Business Support", description: "Practical assistance for companies establishing or expanding manufacturing operations." },
    { number: "09", title: "Direct Personal Support", description: "Deal directly with a knowledgeable contact who understands your requirements." },
    { number: "10", title: "Let's Find Your Site", description: "Tell me your industry, required area and timeline. I'll help identify suitable opportunities." },
  ],

  // ---------------------------------------------------------
  // INDUSTRIAL LAND OPPORTUNITIES — sample/placeholder data.
  // Replace with real listings; keep isSample:false once real.
  // ---------------------------------------------------------
  opportunities: [
    { isSample: true, name: "[Industrial Park Name]", location: "[Location]", availableArea: "[XX – XX ha]", suitableFor: ["Manufacturing", "Logistics", "Warehouse"], image: "images/park-1.jpg" },
    { isSample: true, name: "[Industrial Park Name]", location: "[Location]", availableArea: "[XX – XX ha]", suitableFor: ["Manufacturing", "Distribution"], image: "images/park-2.jpg" },
    { isSample: true, name: "[Industrial Park Name]", location: "[Location]", availableArea: "[XX – XX ha]", suitableFor: ["Warehouse", "Logistics"], image: "images/park-3.jpg" },
  ],

  // ---------------------------------------------------------
  // WHO I HELP
  // ---------------------------------------------------------
  audiences: [
    { icon: "factory", title: "Manufacturers", description: "Companies establishing or expanding factories." },
    { icon: "package", title: "Logistics & Warehousing", description: "Distribution centers, warehouses and logistics operations." },
    { icon: "globe", title: "Foreign Investors", description: "Companies entering or expanding in the local market." },
    { icon: "trending", title: "Business Expansion", description: "Companies looking for additional land for growth." },
  ],

  // ---------------------------------------------------------
  // LEAD FORM SUBMISSION
  // Currently opens a pre-filled mailto: to the email above —
  // works immediately with no backend. To connect a real API,
  // edit submitLead() in js/main.js (clearly marked TODO there).
  // ---------------------------------------------------------

  // ---------------------------------------------------------
  // SEO / SOCIAL SHARING
  // ---------------------------------------------------------
  seo: {
    title: "Tran Phuong Lam | Industrial Land & Investment Solutions",
    description:
      "Helping manufacturers, investors and businesses find the right industrial land for their next project. Direct contact with HANSSIP Industrial Park's Director of Sales and International Relations.",
    ogImage: "https://nggroupvietnam.github.io/hanssip-personal-card/images/profile.png",
    canonicalUrl: "https://nggroupvietnam.github.io/hanssip-personal-card/",
  },
};
