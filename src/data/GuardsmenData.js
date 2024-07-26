const guardsmensDataTier1 = [
  { name: "Włócznik I", attack: 10, hp: 20, leadership: 30, traits: ["szybki", "silny"] },
  { name: "Łucznik I", attack: 15, hp: 15, leadership: 25, traits: ["celny", "zwrotny"] },
  { name: "Jeździec I", attack: 20, hp: 25, leadership: 35, traits: ["mobilny", "silny"] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
];
const guardsmensDataTier2 = [
  { name: "Włócznik II", attack: 12, hp: 22, leadership: 32, traits: ["szybki", "silny"] },
  { name: "Łucznik II", attack: 17, hp: 17, leadership: 27, traits: ["celny", "zwrotny"] },
  { name: "Jeździec II", attack: 22, hp: 27, leadership: 37, traits: ["mobilny", "silny"] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
];
const guardsmensDataTier3 = [
  { name: "Włócznik III", attack: 14, hp: 24, leadership: 34, traits: ["szybki", "silny"] },
  { name: "Łucznik III", attack: 19, hp: 19, leadership: 29, traits: ["celny", "zwrotny"] },
  { name: "Jeździec III", attack: 24, hp: 29, leadership: 39, traits: ["mobilny", "silny"] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
];
const guardsmensDataTier4 = [
  { name: "Włócznik IV", attack: 16, hp: 26, leadership: 36, traits: ["szybki", "silny"] },
  { name: "Łucznik IV", attack: 21, hp: 21, leadership: 31, traits: ["celny", "zwrotny"] },
  { name: "Jeździec IV", attack: 26, hp: 31, leadership: 41, traits: ["mobilny", "silny"] },
  { name: "", attack: 0, hp: 0, leadership: 0, traits: [] },
];
const guardsmensDataTier5 = [
  { name: "Włócznik V", attack: 18, hp: 28, leadership: 38, traits: ["szybki", "silny"] },
  { name: "Łucznik V", attack: 23, hp: 23, leadership: 33, traits: ["celny", "zwrotny"] },
  { name: "Jeździec V", attack: 28, hp: 33, leadership: 43, traits: ["mobilny", "silny"] },
  { name: "Gryf bitewny V", attack: 30, hp: 40, leadership: 50, traits: ["latający", "groźny"] },
];
const guardsmensDataTier6 = [
  { name: "Ciężki halabardnik VI", attack: 20, hp: 30, leadership: 40, traits: ["ciężki", "silny"] },
  { name: "Ciężki kusznik VI", attack: 25, hp: 25, leadership: 35, traits: ["ciężki", "celny"] },
  { name: "Konny rycerz VI", attack: 30, hp: 35, leadership: 45, traits: ["ciężki", "mobilny"] },
  { name: "Gryf bitewny VI", attack: 32, hp: 42, leadership: 52, traits: ["latający", "groźny"] },
];
const guardsmensDataTier7 = [
  { name: "Ciężki halabardnik VII", attack: 22, hp: 32, leadership: 42, traits: ["ciężki", "silny"] },
  { name: "Ciężki kusznik VII", attack: 27, hp: 27, leadership: 37, traits: ["ciężki", "celny"] },
  { name: "Konny rycerz VII", attack: 32, hp: 37, leadership: 47, traits: ["ciężki", "mobilny"] },
  { name: "Gryf bitewny VII", attack: 34, hp: 44, leadership: 54, traits: ["latający", "groźny"] },
];
const guardsmensDataTier8 = [
  { name: "Egzekutor I", attack: 24, hp: 34, leadership: 44, traits: ["szybki", "groźny"] },
  { name: "Czyściciel I", attack: 28, hp: 28, leadership: 38, traits: ["mobilny", "celny"] },
  { name: "Destruktor I", attack: 32, hp: 42, leadership: 52, traits: ["ciężki", "silny"] },
  { name: "Kruk I", attack: 36, hp: 46, leadership: 56, traits: ["latający", "groźny"] },
];
const guardsmensDataTier9 = [
  { name: "Egzekutor II", attack: 26, hp: 36, leadership: 46, traits: ["szybki", "groźny"] },
  { name: "Czyściciel II", attack: 30, hp: 30, leadership: 40, traits: ["mobilny", "celny"] },
  { name: "Destruktor II", attack: 34, hp: 44, leadership: 54, traits: ["ciężki", "silny"] },
  { name: "Kruk II", attack: 38, hp: 48, leadership: 58, traits: ["latający", "groźny"] },
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
