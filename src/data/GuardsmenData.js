const guardsmensDataTier1 = [
  { name: "Włócznik I", attack: 50, hp: 150, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 1 },
  { name: "Łucznik I", attack: 50, hp: 150, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 1 },
  { name: "Jeździec I", attack: 100, hp: 300, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 1 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 1 },
];

const guardsmensDataTier2 = [
  { name: "Włócznik II", attack: 90, hp: 270, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 2 },
  { name: "Łucznik II", attack: 90, hp: 270, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 2 },
  { name: "Jeździec II", attack: 180, hp: 540, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 2 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 2 },
];

const guardsmensDataTier3 = [
  { name: "Włócznik III", attack: 160, hp: 480, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 3 },
  { name: "Łucznik III", attack: 160, hp: 480, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 3 },
  { name: "Jeździec III", attack: 320, hp: 960, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 3 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 3 },
];

const guardsmensDataTier4 = [
  { name: "Włócznik IV", attack: 290, hp: 870, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 4 },
  { name: "Łucznik IV", attack: 290, hp: 870, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 4 },
  { name: "Jeździec IV", attack: 580, hp: 1740, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 4 },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [], tier: 4 },
];

const guardsmensDataTier5 = [
  { name: "Włócznik V", attack: 520, hp: 1560, leadership: 1, traits: ["Gwardzista", "Człowiek","Piechota"], tier: 5 },
  { name: "Łucznik V", attack: 520, hp: 1560, leadership: 1, traits: ["Gwardzista", "Człowiek", "Jednostka strzelecka"], tier: 5 },
  { name: "Jeździec V", attack: 1050, hp: 3150, leadership: 2, traits: ["Gwardzista", "Człowiek","Jeździec"], tier: 5 },
  { name: "Gryf bitewny V", attack: 10000, hp: 30000, leadership: 20, traits: ["Bestia", "Jednostka latająca", "Gwardzista"], tier: 5 },
];

const guardsmensDataTier6 = [
  { name: "Ciężki halabardnik VI", attack: 20, hp: 30, leadership: 40, traits: ["ciężki", "silny"], tier: 6 },
  { name: "Ciężki kusznik VI", attack: 25, hp: 25, leadership: 35, traits: ["ciężki", "celny"], tier: 6 },
  { name: "Konny rycerz VI", attack: 30, hp: 35, leadership: 45, traits: ["ciężki", "mobilny"], tier: 6 },
  { name: "Gryf bitewny VI", attack: 32, hp: 42, leadership: 52, traits: ["latający", "groźny"], tier: 6 },
];

const guardsmensDataTier7 = [
  { name: "Ciężki halabardnik VII", attack: 22, hp: 32, leadership: 42, traits: ["ciężki", "silny"], tier: 7 },
  { name: "Ciężki kusznik VII", attack: 27, hp: 27, leadership: 37, traits: ["ciężki", "celny"], tier: 7 },
  { name: "Konny rycerz VII", attack: 32, hp: 37, leadership: 47, traits: ["ciężki", "mobilny"], tier: 7 },
  { name: "Gryf bitewny VII", attack: 34, hp: 44, leadership: 54, traits: ["latający", "groźny"], tier: 7 },
];

const guardsmensDataTier8 = [
  { name: "Egzekutor I", attack: 24, hp: 34, leadership: 44, traits: ["szybki", "groźny"], tier: 8 },
  { name: "Czyściciel I", attack: 28, hp: 28, leadership: 38, traits: ["mobilny", "celny"], tier: 8 },
  { name: "Destruktor I", attack: 32, hp: 42, leadership: 52, traits: ["ciężki", "silny"], tier: 8 },
  { name: "Kruk I", attack: 36, hp: 46, leadership: 56, traits: ["latający", "groźny"], tier: 8 },
];

const guardsmensDataTier9 = [
  { name: "Egzekutor II", attack: 26, hp: 36, leadership: 46, traits: ["szybki", "groźny"], tier: 9 },
  { name: "Czyściciel II", attack: 30, hp: 30, leadership: 40, traits: ["mobilny", "celny"], tier: 9 },
  { name: "Destruktor II", attack: 34, hp: 44, leadership: 54, traits: ["ciężki", "silny"], tier: 9 },
  { name: "Kruk II", attack: 38, hp: 48, leadership: 58, traits: ["latający", "groźny"], tier: 9 },
];


const guardsmens = [
  ["Tier I", guardsmensDataTier1[0], guardsmensDataTier1[1], guardsmensDataTier1[2], guardsmensDataTier1[3]],
  ["Tier II", guardsmensDataTier2[0], guardsmensDataTier2[1], guardsmensDataTier2[2], guardsmensDataTier2[3]],
  ["Tier III", guardsmensDataTier3[0], guardsmensDataTier3[1], guardsmensDataTier3[2], guardsmensDataTier3[3]],
  ["Tier IV", guardsmensDataTier4[0], guardsmensDataTier4[1], guardsmensDataTier4[2], guardsmensDataTier4[3]],
  ["Tier V", guardsmensDataTier5[0], guardsmensDataTier5[1], guardsmensDataTier5[2], guardsmensDataTier5[3]],
  ["Tier VI", guardsmensDataTier6[0], guardsmensDataTier6[1], guardsmensDataTier6[2], guardsmensDataTier6[3]],
  ["Tier VII", guardsmensDataTier7[0], guardsmensDataTier7[1], guardsmensDataTier7[2], guardsmensDataTier7[3]],
  ["Tier I", guardsmensDataTier8[0], guardsmensDataTier8[1], guardsmensDataTier8[2], guardsmensDataTier8[3]],
  ["Tier II", guardsmensDataTier9[0], guardsmensDataTier9[1], guardsmensDataTier9[2], guardsmensDataTier9[3]],
];

export {
  guardsmens,
};
