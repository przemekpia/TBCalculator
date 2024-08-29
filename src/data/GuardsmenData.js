const guardsmensDataTier1 = [
  { name: { PL: "Włócznik I", EN: "Spear I" }, attack: 50, hp: 150, leadership: 1, traits: ["Gwardzista", "Człowiek", "Piechota"], tier: 1, category: "army" },
  { name: { PL: "Łucznik I", EN: "Archer I" }, attack: 50, hp: 150, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 1, category: "army" },
  { name: { PL: "Jeździec I", EN: "Cavalry I" }, attack: 100, hp: 300, leadership: 2, traits: ["Gwardzista", "Człowiek", "Jeździec"], tier: 1, category: "army" },
  { name: { PL: "", EN: "" }, attack: 0, hp: 0, leadership: 0, traits: [], tier: 1, category: "army" },
];


const guardsmensDataTier2 = [
  { name: { PL: "Włócznik II", EN: "Spear II" }, attack: 90, hp: 270, leadership: 1, traits: ["Gwardzista", "Człowiek", "Piechota"], tier: 2, category: "army" },
  { name: { PL: "Łucznik II", EN: "Archer II" }, attack: 90, hp: 270, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 2, category: "army" },
  { name: { PL: "Jeździec II", EN: "Cavalry II" }, attack: 180, hp: 540, leadership: 2, traits: ["Gwardzista", "Człowiek", "Jeździec"], tier: 2, category: "army" },
  { name: { PL: "", EN: "" }, attack: 0, hp: 0, leadership: 0, traits: [], tier: 2, category: "army" },
];


const guardsmensDataTier3 = [
  { name: { PL: "Włócznik III", EN: "Spear III" }, attack: 160, hp: 480, leadership: 1, traits: ["Gwardzista", "Człowiek", "Piechota"], tier: 3, category: "army" },
  { name: { PL: "Łucznik III", EN: "Archer III" }, attack: 160, hp: 480, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 3, category: "army" },
  { name: { PL: "Jeździec III", EN: "Cavalry III" }, attack: 320, hp: 960, leadership: 2, traits: ["Gwardzista", "Człowiek", "Jeździec"], tier: 3, category: "army" },
  { name: { PL: "", EN: "" }, attack: 0, hp: 0, leadership: 0, traits: [], tier: 3, category: "army" },
];


const guardsmensDataTier4 = [
  { name: { PL: "Włócznik IV", EN: "Spear IV" }, attack: 290, hp: 870, leadership: 1, traits: ["Gwardzista", "Człowiek", "Piechota"], tier: 4, category: "army" },
  { name: { PL: "Łucznik IV", EN: "Archer IV" }, attack: 290, hp: 870, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 4, category: "army" },
  { name: { PL: "Jeździec IV", EN: "Cavalry IV" }, attack: 580, hp: 1740, leadership: 2, traits: ["Gwardzista", "Człowiek", "Jeździec"], tier: 4, category: "army" },
  { name: { PL: "", EN: "" }, attack: 0, hp: 0, leadership: 0, traits: [], tier: 4, category: "army" },
];


const guardsmensDataTier5 = [
  { name: { PL: "Włócznik V", EN: "Spear V" }, attack: 520, hp: 1560, leadership: 1, traits: ["Gwardzista", "Człowiek", "Piechota"], tier: 5, category: "army" },
  { name: { PL: "Łucznik V", EN: "Archer V" }, attack: 520, hp: 1560, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 5, category: "army" },
  { name: { PL: "Jeździec V", EN: "Cavalry V" }, attack: 1050, hp: 3150, leadership: 2, traits: ["Gwardzista", "Człowiek", "Jeździec"], tier: 5, category: "army" },
  { name: { PL: "Gryf bitewny V", EN: "Battle Gryphon V" }, attack: 10000, hp: 30000, leadership: 20, traits: ["Bestia", "Jednostka latająca", "Gwardzista"], tier: 5, category: "army" },
];


const guardsmensDataTier6 = [
  { name: { PL: "Ciężki halabardnik VI", EN: "Heavy Halberdier VI" }, attack: 940, hp: 2820, leadership: 1, traits: ["Gwardzista", "Człowiek", "Piechota"], tier: 6, category: "army" },
  { name: { PL: "Ciężki kusznik VI", EN: "Heavy Crossbowman VI" }, attack: 940, hp: 2820, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 6, category: "army" },
  { name: { PL: "Konny rycerz VI", EN: "Mounted Knight VI" }, attack: 1900, hp: 5700, leadership: 2, traits: ["Gwardzista", "Człowiek", "Jeździec"], tier: 6, category: "army" },
  { name: { PL: "Gryf bitewny VI", EN: "Battle Gryphon VI" }, attack: 19000, hp: 57000, leadership: 20, traits: ["Bestia", "Jednostka latająca", "Gwardzista"], tier: 6, category: "army" },
];


const guardsmensDataTier7 = [
  { name: { PL: "Ciężki halabardnik VII", EN: "Heavy Halberdier VII" }, attack: 1700, hp: 5100, leadership: 1, traits: ["Gwardzista", "Człowiek", "Piechota"], tier: 7, category: "army" },
  { name: { PL: "Ciężki kusznik VII", EN: "Heavy Crossbowman VII" }, attack: 1700, hp: 5100, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 7, category: "army" },
  { name: { PL: "Konny rycerz VII", EN: "Mounted Knight VII" }, attack: 3400, hp: 10200, leadership: 2, traits: ["Gwardzista", "Człowiek", "Jeździec"], tier: 7, category: "army" },
  { name: { PL: "Gryf bitewny VII", EN: "Battle Gryphon VII" }, attack: 34000, hp: 102000, leadership: 20, traits: ["Bestia", "Jednostka latająca", "Gwardzista"], tier: 7, category: "army" },
];


const guardsmensDataTier8 = [
  { name: { PL: "Egzekutor I", EN: "Executor I" }, attack: 3060, hp: 9180, leadership: 1, traits: ["Gwardzista", "Człowiek", "Piechota"], tier: 8, category: "army" },
  { name: { PL: "Czyściciel I", EN: "Cleaner I" }, attack: 3060, hp: 9180, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 8, category: "army" },
  { name: { PL: "Destruktor I", EN: "Destroyer I" }, attack: 6120, hp: 18360, leadership: 2, traits: ["Gwardzista", "Człowiek", "Jeździec"], tier: 8, category: "army" },
  { name: { PL: "Kruk I", EN: "Raven I" }, attack: 61200, hp: 183600, leadership: 20, traits: ["Jednostka latająca", "Gwardzista", "Człowiek"], tier: 8, category: "army" },
];


const guardsmensDataTier9 = [
  { name: { PL: "Egzekutor II", EN: "Executor II" }, attack: 5510, hp: 16530, leadership: 1, traits: ["Gwardzista", "Człowiek", "Piechota"], tier: 9, category: "army" },
  { name: { PL: "Czyściciel II", EN: "Cleaner II" }, attack: 5510, hp: 16530, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 9, category: "army" },
  { name: { PL: "Destruktor II", EN: "Destroyer II" }, attack: 11020, hp: 33060, leadership: 2, traits: ["Gwardzista", "Człowiek", "Jeździec"], tier: 9, category: "army" },
  { name: { PL: "Kruk II", EN: "Raven II" }, attack: 110200, hp: 330600, leadership: 20, traits: ["Jednostka latająca", "Gwardzista", "Człowiek"], tier: 9, category: "army" },
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

