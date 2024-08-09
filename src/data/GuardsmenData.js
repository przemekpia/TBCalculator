const guardsmensDataTier1 = [
  { name: "Włócznik I", attack: 50, hp: 150, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 1, category: "army" },
  { name: "Łucznik I", attack: 50, hp: 150, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 1, category: "army" },
  { name: "Jeździec I", attack: 100, hp: 300, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 1, category: "army" },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 1, category: "army" },
];

const guardsmensDataTier2 = [
  { name: "Włócznik II", attack: 90, hp: 270, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 2, category: "army" },
  { name: "Łucznik II", attack: 90, hp: 270, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 2, category: "army" },
  { name: "Jeździec II", attack: 180, hp: 540, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 2, category: "army" },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 2, category: "army" },
];

const guardsmensDataTier3 = [
  { name: "Włócznik III", attack: 160, hp: 480, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 3, category: "army" },
  { name: "Łucznik III", attack: 160, hp: 480, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 3, category: "army" },
  { name: "Jeździec III", attack: 320, hp: 960, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 3, category: "army" },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 3, category: "army" },
];

const guardsmensDataTier4 = [
  { name: "Włócznik IV", attack: 290, hp: 870, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 4, category: "army" },
  { name: "Łucznik IV", attack: 290, hp: 870, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 4, category: "army" },
  { name: "Jeździec IV", attack: 580, hp: 1740, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 4, category: "army" },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 4, category: "army" },
];

const guardsmensDataTier5 = [
  { name: "Włócznik V", attack: 520, hp: 1560, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 5, category: "army" },
  { name: "Łucznik V", attack: 520, hp: 1560, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 5, category: "army" },
  { name: "Jeździec V", attack: 1050, hp: 3150, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 5, category: "army" },
  { name: "Gryf bitewny V", attack: 10000, hp: 30000, leadership: 20, traits: ["Bestia", "Jednostka latająca", "Gwardzista"], tier: 5, category: "army" },
];

const guardsmensDataTier6 = [
  { name: "Ciężki halabardnik VI", attack: 940, hp: 2820, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 6, category: "army" },
  { name: "Ciężki kusznik VI", attack: 940, hp: 2820, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 6, category: "army" },
  { name: "Konny rycerz VI", attack: 1900, hp: 5700, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 6, category: "army" },
  { name: "Gryf bitewny VI", attack: 19000, hp: 57000, leadership: 20, traits: ["Bestia", "Jednostka latająca", "Gwardzista"], tier: 6, category: "army" },
];

const guardsmensDataTier7 = [
  { name: "Ciężki halabardnik VII", attack: 1700, hp: 5100, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 7, category: "army" },
  { name: "Ciężki kusznik VII", attack: 1700, hp: 5100, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 7, category: "army" },
  { name: "Konny rycerz VII", attack: 3400, hp: 10200, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 7, category: "army" },
  { name: "Gryf bitewny VII", attack: 34000, hp: 102000, leadership: 20, traits: ["Bestia", "Jednostka latająca", "Gwardzista"], tier: 7, category: "army" },
];

const guardsmensDataTier8 = [
  { name: "Egzekutor I", attack: 3060, hp: 9180, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 8, category: "army" },
  { name: "Czyściciel I", attack: 3060, hp: 9180, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 8, category: "army" },
  { name: "Destruktor I", attack: 6120, hp: 18360, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 8, category: "army" },
  { name: "Kruk I", attack: 61200, hp: 183600, leadership: 20, traits: ["Jednostka latająca", "Gwardzista", "Człowiek"], tier: 8, category: "army" },
];

const guardsmensDataTier9 = [
  { name: "Egzekutor II", attack: 5510, hp: 16530, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 9, category: "army" },
  { name: "Czyściciel II", attack: 5510, hp: 16530, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 9, category: "army" },
  { name: "Destruktor II", attack: 11020, hp: 33060, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 9, category: "army" },
  { name: "Kruk II", attack: 110200, hp: 330600, leadership: 20, traits: ["Jednostka latająca", "Gwardzista", "Człowiek"], tier: 9, category: "army" },
];


const guardsmens = [
  ["Tier I", guardsmensDataTier1[0], guardsmensDataTier1[1], guardsmensDataTier1[2], guardsmensDataTier1[3]],
  ["Tier II", guardsmensDataTier2[0], guardsmensDataTier2[1], guardsmensDataTier2[2], guardsmensDataTier2[3]],
  ["Tier III", guardsmensDataTier3[0], guardsmensDataTier3[1], guardsmensDataTier3[2], guardsmensDataTier3[3]],
  ["Tier IV", guardsmensDataTier4[0], guardsmensDataTier4[1], guardsmensDataTier4[2], guardsmensDataTier4[3]],
  ["Tier V", guardsmensDataTier5[0], guardsmensDataTier5[1], guardsmensDataTier5[2], guardsmensDataTier5[3]],
  ["Tier VI", guardsmensDataTier6[0], guardsmensDataTier6[1], guardsmensDataTier6[2], guardsmensDataTier6[3]],
  ["Tier VII", guardsmensDataTier7[0], guardsmensDataTier7[1], guardsmensDataTier7[2], guardsmensDataTier7[3]],
  ["Tier VIII", guardsmensDataTier8[0], guardsmensDataTier8[1], guardsmensDataTier8[2], guardsmensDataTier8[3]],
  ["Tier IX", guardsmensDataTier9[0], guardsmensDataTier9[1], guardsmensDataTier9[2], guardsmensDataTier9[3]],
];

export {
  guardsmens,
};
