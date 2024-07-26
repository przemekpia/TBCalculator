const specialistsDataTier1 = [
  { name: "Rycerz I", attack: 100, hp: 300, leadership: 5, traits: ["Wojownik", "Obrońca"] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
];

const specialistsDataTier2 = [
  { name: "Rycerz II", attack: 110, hp: 330, leadership: 6, traits: ["Wojownik", "Obrońca"] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
];

const specialistsDataTier3 = [
  { name: "Rycerz III", attack: 120, hp: 360, leadership: 7, traits: ["Wojownik", "Obrońca"] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
];

const specialistsDataTier4 = [
  { name: "Rycerz IV", attack: 130, hp: 390, leadership: 8, traits: ["Wojownik", "Obrońca"] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
];

const specialistsDataTier5 = [
  { name: "Rycerz V", attack: 140, hp: 420, leadership: 9, traits: ["Wojownik", "Obrońca"] },
  { name: "Elitarny Kusznik V", attack: 150, hp: 450, leadership: 10, traits: ["Łucznik", "Strzelec"] },
  { name: "Jeździec lwów V", attack: 160, hp: 480, leadership: 11, traits: ["Jeździec", "Szybki"] },
  { name: "Sęp V", attack: 170, hp: 510, leadership: 12, traits: ["Latający", "Groźny"] },
];

const specialistsDataTier6 = [
  { name: "Ciężki Rycerz VI", attack: 180, hp: 540, leadership: 13, traits: ["Ciężki", "Silny"] },
  { name: "Elitarny Kusznik VI", attack: 190, hp: 570, leadership: 14, traits: ["Ciężki", "Celny"] },
  { name: "Jeździec lwów VI", attack: 200, hp: 600, leadership: 15, traits: ["Ciężki", "Mobilny"] },
  { name: "Sęp VI", attack: 210, hp: 630, leadership: 16, traits: ["Latający", "Groźny"] },
];

const specialistsDataTier7 = [
  { name: "Ciężki Rycerz VII", attack: 220, hp: 660, leadership: 17, traits: ["Ciężki", "Silny"] },
  { name: "Elitarny Kusznik VII", attack: 230, hp: 690, leadership: 18, traits: ["Ciężki", "Celny"] },
  { name: "Jeździec lwów VII", attack: 240, hp: 720, leadership: 19, traits: ["Ciężki", "Mobilny"] },
  { name: "Sęp VII", attack: 250, hp: 750, leadership: 20, traits: ["Latający", "Groźny"] },
];

const specialistsDataTier8 = [
  { name: "Pojedynkowicz I", attack: 260, hp: 780, leadership: 21, traits: ["Szybki", "Groźny"] },
  { name: "Legitymista I", attack: 270, hp: 810, leadership: 22, traits: ["Mobilny", "Celny"] },
  { name: "Białogrzywy husarz I", attack: 280, hp: 840, leadership: 23, traits: ["Ciężki", "Silny"] },
  { name: "Królewski lew I", attack: 290, hp: 870, leadership: 24, traits: ["Latający", "Groźny"] },
];

const specialistsDataTier9 = [
  { name: "Pojedynkowicz II", attack: 300, hp: 900, leadership: 25, traits: ["Szybki", "Groźny"] },
  { name: "Legitymista II", attack: 310, hp: 930, leadership: 26, traits: ["Mobilny", "Celny"] },
  { name: "Białogrzywy husarz II", attack: 320, hp: 960, leadership: 27, traits: ["Ciężki", "Silny"] },
  { name: "Królewski lew II", attack: 330, hp: 990, leadership: 28, traits: ["Latający", "Groźny"] },
];

const specialists = [
  ["Tier I", specialistsDataTier1[0], specialistsDataTier1[1], specialistsDataTier1[2], specialistsDataTier1[3]],
  ["Tier II", specialistsDataTier2[0], specialistsDataTier2[1], specialistsDataTier2[2], specialistsDataTier2[3]],
  ["Tier III", specialistsDataTier3[0], specialistsDataTier3[1], specialistsDataTier3[2], specialistsDataTier3[3]],
  ["Tier IV", specialistsDataTier4[0], specialistsDataTier4[1], specialistsDataTier4[2], specialistsDataTier4[3]],
  ["Tier V", specialistsDataTier5[0], specialistsDataTier5[1], specialistsDataTier5[2], specialistsDataTier5[3]],
  ["Tier VI", specialistsDataTier6[0], specialistsDataTier6[1], specialistsDataTier6[2], specialistsDataTier6[3]],
  ["Tier VII", specialistsDataTier7[0], specialistsDataTier7[1], specialistsDataTier7[2], specialistsDataTier7[3]],
  ["Tier VIII", specialistsDataTier8[0], specialistsDataTier8[1], specialistsDataTier8[2], specialistsDataTier8[3]],
  ["Tier IX", specialistsDataTier9[0], specialistsDataTier9[1], specialistsDataTier9[2], specialistsDataTier9[3]],
];

export {
  specialists,
};