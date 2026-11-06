/**
 * wedding-data.js — Customer-facing editable data layer for meadow-nikah
 * Configured for Dr Saqib Pervez & Dr Aleena Khan Dawat-e-Walima
 */

window.WEDDING_DATA = {
  order: "groom-first",
  occasion: "Dawat-e-Walima",

  couple: {
    groom: {
      name: "Saqib",
      fullName: "Dr Saqib Pervez",
      line: "Son of Late Pervez Alam Khan",
      blurb: "Beloved grandson of Mrs. Ateequn Nisa & Late Alamgeer Khan. Ready to embark on this blessed new journey.",
      photo: "./editable/assets/groom.jpg",
    },
    bride: {
      name: "Aleena",
      fullName: "Dr Aleena Khan",
      line: "Daughter of Khan Mansur Abbas and Nazneen Khan",
      blurb: "A heart full of grace, warmth and joy, stepping into this lifetime together.",
      photo: "./editable/assets/bride.jpg",
    },
  },

  invitation: {
    host: "Mrs. Ateequn Nisa",
    relation: "W/o Late Alamgeer Khan",
    intro: "cordially invite you to grace the auspicious occasion of",
    event: "Dawat-e-Walima",
    subtitle: "of her beloved grandson",
    withText: "WITH",
  },

  wedding: {
    dateISO: "2026-12-08T19:00:00+05:30",
    endISO: "2026-12-08T23:00:00+05:30",
    dateLabel: "Tuesday, 8 December 2026",
    timeLabel: "Dinner at 7:00 PM onwards",
  },

  religious: {
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    bismillahLatin: "In the name of \"ALLAH\" (SWT) the most gracious and merciful",
    inshaAllah: "Insha Allah",
    ayah: "And of His signs is that He created for you mates from among yourselves, that you may find tranquillity in them; and He placed between you affection and mercy.",
    ayahRef: "Surah Ar-Rum 30:21",
  },

  venue: {
    name: "Safed Baradari",
    city: "Lucknow",
    address: "Safed Baradari, Qaiserbagh, Lucknow, Uttar Pradesh 226001",
    shortAddress: "Qaiserbagh, Lucknow",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Safed+Baradari%2C+Qaiserbagh%2C+Lucknow",
    qrUrl: "https://scan.page/Fzb4BU",
    qrImage: "./editable/assets/venue-qr.png",
    preview: "./editable/assets/map.jpg",
  },

  rsvp: {
    title: "R.S.V.P.",
    note: "Taluqdar's Family with near & Dear",
  },

  wbcf: {
    title: "W.B.C.F.",
    fullName: "With Best Compliments From",
    members: [
      "Dr. Jawed Alam",
      "Dr. Shariq Pervez",
      "Ishrat Jawed, Rimsha Jawed",
    ],
  },

  closing: "Your duas and gracious presence are the blessing we wish for. Come, share this joy with us, and help us begin forever, insha'Allah.",

  bgm: {
    src: "./assets/bgm.mp3",
    title: "Wedding BGM",
    url: "https://youtube.com/shorts/KVPFa8Z7dic?si=8RLheq5MHoPvbBTX",
  },

  images: {
    heroArt: "./editable/assets/hero.jpg",
    introCover: "./editable/assets/ChatGPT Image Aug 12, 2026 at 11_08_45 PM.png",
    introVideo: "./editable/assets/intro_with_bgm.mp4",
  },

  gallery: [
    "./editable/assets/gallery-1.jpg",
    "./editable/assets/gallery-2.jpg",
    "./editable/assets/gallery-3.jpg",
    "./editable/assets/gallery-4.jpg",
    "./editable/assets/gallery-5.jpg",
    "./editable/assets/gallery-6.jpg",
  ],
};
