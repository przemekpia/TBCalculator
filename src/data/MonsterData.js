const monsterDataTier3 = [
  ["Szmaragdowy smok", 4500, 13500, 7, ["Smok", "Jednostka latająca"]],
  ["Żywiołak wody", 1900, 5700, 3, ["Zywiołak", "Jednostka strzelecka"]],
  ["Kamienny gargulec", 5200, 15600, 8, ["Jednostka latająca", "Olbrzym"]],
  ["Odyniec bojowy", 3900, 11700, 6,["Bestia", "Jeździec"]],
];
const monsterDataTier4 = [
  ["Magiczny smok", 15000, 45000, 13, ["Smok", "Jednostka strzelecka"]],
  ["Lodowy feniks", 17000, 51000, 15, ["Zywiołak", "Jednostka latająca"]],
  ["Wieloręki strażnik", 13000, 39000, 11, ["Olbrzym", "Piechota"]],
  ["Gorgona meduza", 12000, 36000, 10,["Bestia", "Jednostka strzelecka"]],
];
const monsterDataTier5 = [
  ["Pustynny pogromca", 42000, 126000, 20, ["Smok", "Jeździec"]],
  ["Płonący centaur", 44000, 132000, 21, ["Zywiołak", "Jeździec"]],
  ["Dwugłowy ogr", 48000, 144000, 23, ["Olbrzym", "Piechota"]],
  ["Przerażająca mantykora", 46000, 138000, 22,["Bestia", "Jednostka latająca"]],
];
const monsterDataTier6 = [
  ["Kryształowy smok", 120000, 360000, 33, ["Smok", "Piechota"]],
  ["Rubinowy golem", 130000, 390000, 35, ["Zywiołak", "Piechota"]],
  ["Jeździec trolli", 110000, 330000, 30, ["Olbrzym", "Jeździec"]],
  ["Niszczyciel dżungli", 130000, 390000, 34,["Bestia", "Piechota"]],
];
const monsterDataTier7 = [
  ["Czarny smok", 300000, 900000, 44, ["Smok", "Jednostka latająca"]],
  ["Pan wiatru", 310000, 930000, 45, ["Zywiołak", "Piechota"]],
  ["Niszczycielski kolos", 290000, 870000, 43, ["Olbrzym", "Jednostka strzelecka"]],
  ["Prastary potwór", 280000, 840000, 41,["Bestia", "Jeździec"]],
];

const monsterDataTier8 = [
  ["Burzyciel I", 650000, 1950000, 53, ["Smok", "Jeździec"]],
  ["Ognisty Feniks I", 660000, 1980000, 54, ["Zywiołak", "Jednostka latająca"]],
  ["Kraken I", 670000, 2010000, 55, ["Olbrzym", "Piechota"]],
  ["Szachraj I", 640000, 1920000, 52,["Bestia", "Jednostka strzelecka"]],
];
const monsterDataTier9 = [
  ["Burzyciel II", 1170000, 3510000, 53, ["Smok", "Jeździec"]],
  ["Ognisty Feniks II", 1190000, 3570000, 54, ["Zywiołak", "Jednostka latająca"]],
  ["Kraken II", 1210000, 3630000, 55, ["Olbrzym", "Piechota"]],
  ["Szachraj II", 1150000, 3450000, 52,["Bestia", "Jednostka strzelecka"]],
];

const rowsMonsters = [
  ["Tier I", "", "", "", ""],
  ["Tier II", "", "", "", ""],
  ["Tier III", monsterDataTier3[0][0], monsterDataTier3[1][0], monsterDataTier3[2][0], monsterDataTier3[3][0]],
  ["Tier IV", monsterDataTier4[0][0], monsterDataTier4[1][0], monsterDataTier4[2][0], monsterDataTier4[3][0]],
  ["Tier V", monsterDataTier5[0][0], monsterDataTier5[1][0], monsterDataTier5[2][0], monsterDataTier5[3][0]],
  ["Tier VI", monsterDataTier6[0][0], monsterDataTier6[1][0], monsterDataTier6[2][0], monsterDataTier6[3][0]],
  ["Tier VII", monsterDataTier7[0][0], monsterDataTier7[1][0], monsterDataTier7[2][0], monsterDataTier7[3][0]],
  ["Tier I", monsterDataTier8[0][0], monsterDataTier8[1][0], monsterDataTier8[2][0], monsterDataTier8[3][0]],
  ["Tier II", monsterDataTier9[0][0], monsterDataTier9[1][0], monsterDataTier9[2][0], monsterDataTier9[3][0]],
];

export {
  monsterDataTier3,
  monsterDataTier4,
  monsterDataTier5,
  monsterDataTier6,
  monsterDataTier7,
  rowsMonsters
};
