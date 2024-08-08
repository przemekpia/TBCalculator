const specialistsDataTier1 = [
  { name: "Rycerz I", attack: 50, hp: 150, leadership: 1, traits: ["Człowiek", "Piechota", "Specjalista"], tier: 1 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 1 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 1 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 1 },
];

const specialistsDataTier2 = [
  { name: "Rycerz II", attack: 90, hp: 270, leadership: 1, traits: ["Człowiek", "Piechota", "Specjalista"], tier: 2 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 2 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 2 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 2 },
];

const specialistsDataTier3 = [
  { name: "Rycerz III", attack: 160, hp: 480, leadership: 1, traits: ["Człowiek", "Piechota", "Specjalista"], tier: 3 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 3 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 3 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 3 },
];

const specialistsDataTier4 = [
  { name: "Rycerz IV", attack: 290, hp: 870, leadership: 1, traits: ["Człowiek", "Piechota", "Specjalista"], tier: 4 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 4 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 4 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 4 },
];

const specialistsDataTier5 = [
  { name: "Rycerz V", attack: 520, hp: 1560, leadership: 1, traits: ["Człowiek", "Piechota", "Specjalista"], tier: 5 },
  { name: "Elitarny Kusznik V", attack: 520, hp: 1560, leadership: 1, traits: ["Człowiek", "Jednostka strzelecka", "Specjalista"], tier: 5 },
  { name: "Jeździec lwów V", attack: 1050, hp: 3150, leadership: 2, traits: ["Człowiek", "Jeździec", "Specjalista"], tier: 5 },
  { name: "Sęp V", attack: 520, hp: 1560, leadership: 1, traits: ["Jednostka latająca", "Człowiek", "Specjalista"], tier: 5 },
];

const specialistsDataTier6 = [
  { name: "Ciężki Rycerz VI", attack: 940, hp: 2820, leadership: 1, traits: ["Człowiek", "Piechota", "Specjalista"], tier: 6 },
  { name: "Elitarny Kusznik VI", attack: 940, hp: 2820, leadership: 1, traits: ["Człowiek", "Jednostka strzelecka", "Specjalista"], tier: 6 },
  { name: "Jeździec lwów VI", attack: 1900, hp: 5700, leadership: 2, traits: ["Człowiek", "Jeździec", "Specjalista"], tier: 6 },
  { name: "Sęp VI", attack: 940, hp: 2820, leadership: 1, traits: ["Jednostka latająca", "Człowiek", "Specjalista"], tier: 6 },
];

const specialistsDataTier7 = [
  { name: "Ciężki Rycerz VII", attack: 1700, hp: 5100, leadership: 1, traits: ["Człowiek", "Piechota", "Specjalista"], tier: 7 },
  { name: "Elitarny Kusznik VII", attack: 1700, hp: 5100, leadership: 1, traits: ["Człowiek", "Jednostka strzelecka", "Specjalista"], tier: 7 },
  { name: "Jeździec lwów VII", attack: 3400, hp: 10200, leadership: 2, traits: ["Człowiek", "Jeździec", "Specjalista"], tier: 7 },
  { name: "Sęp VII", attack: 1700, hp: 5100, leadership: 1, traits: ["Jednostka latająca", "Człowiek", "Specjalista"], tier: 7 },
];

const specialistsDataTier8 = [
  { name: "Pojedynkowicz I", attack: 3060, hp: 9180, leadership: 1, traits: ["Człowiek", "Piechota", "Specjalista"], tier: 8 },
  { name: "Legitymista I", attack: 3060, hp: 9180, leadership: 1, traits: ["Człowiek", "Jednostka strzelecka", "Specjalista"], tier: 8 },
  { name: "Białogrzywy husarz I", attack: 6120, hp: 18360, leadership: 2, traits: ["Człowiek", "Jeździec", "Specjalista"], tier: 8 },
  { name: "Królewski lew I", attack: 61200, hp: 183600, leadership: 20, traits: ["Bestia", "Jednostka latająca", "Specjalista"], tier: 8 },
];

const specialistsDataTier9 = [
  { name: "Pojedynkowicz II", attack: 5510, hp: 16530, leadership: 1, traits: ["Człowiek", "Piechota", "Specjalista"], tier: 9 },
  { name: "Legitymista II", attack: 5510, hp: 16530, leadership: 1, traits: ["Człowiek", "Jednostka strzelecka", "Specjalista"], tier: 9 },
  { name: "Białogrzywy husarz II", attack: 11020, hp: 33060, leadership: 2, traits: ["Człowiek", "Jeździec", "Specjalista"], tier: 9 },
  { name: "Królewski lew II", attack: 110200, hp: 330600, leadership: 20, traits: ["Bestia", "Jednostka latająca", "Specjalista"], tier: 9 },
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