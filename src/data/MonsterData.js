const monsterDataTier3 = [
  { name: "Szmaragdowy smok", attack: 4500, hp: 13500, leadership: 7, traits: ["Smok", "Jednostka latająca"], tier: 3 },
  { name: "Żywiołak wody", attack: 1900, hp: 5700, leadership: 3, traits: ["Żywiołak", "Jednostka strzelecka"], tier: 3 },
  { name: "Kamienny gargulec", attack: 5200, hp: 15600, leadership: 8, traits: ["Jednostka latająca", "Olbrzym"], tier: 3 },
  { name: "Odyniec bojowy", attack: 3900, hp: 11700, leadership: 6, traits: ["Bestia", "Jeździec"], tier: 3 },
];

const monsterDataTier4 = [
  { name: "Magiczny smok", attack: 15000, hp: 45000, leadership: 13, traits: ["Smok", "Jednostka strzelecka"], tier: 4 },
  { name: "Lodowy feniks", attack: 17000, hp: 51000, leadership: 15, traits: ["Żywiołak", "Jednostka latająca"], tier: 4 },
  { name: "Wieloręki strażnik", attack: 13000, hp: 39000, leadership: 11, traits: ["Olbrzym", "Piechota"], tier: 4 },
  { name: "Gorgona meduza", attack: 12000, hp: 36000, leadership: 10, traits: ["Bestia", "Jednostka strzelecka"], tier: 4 },
];

const monsterDataTier5 = [
  { name: "Pustynny pogromca", attack: 42000, hp: 126000, leadership: 20, traits: ["Smok", "Jeździec"], tier: 5 },
  { name: "Płonący centaur", attack: 44000, hp: 132000, leadership: 21, traits: ["Żywiołak", "Jeździec"], tier: 5 },
  { name: "Dwugłowy ogr", attack: 48000, hp: 144000, leadership: 23, traits: ["Olbrzym", "Piechota"], tier: 5 },
  { name: "Przerażająca mantykora", attack: 46000, hp: 138000, leadership: 22, traits: ["Bestia", "Jednostka latająca"], tier: 5 },
];

const monsterDataTier6 = [
  { name: "Kryształowy smok", attack: 120000, hp: 360000, leadership: 33, traits: ["Smok", "Piechota"], tier: 6 },
  { name: "Rubinowy golem", attack: 130000, hp: 390000, leadership: 35, traits: ["Żywiołak", "Piechota"], tier: 6 },
  { name: "Jeździec trolli", attack: 110000, hp: 330000, leadership: 30, traits: ["Olbrzym", "Jeździec"], tier: 6 },
  { name: "Niszczyciel dżungli", attack: 130000, hp: 390000, leadership: 34, traits: ["Bestia", "Piechota"], tier: 6 },
];

const monsterDataTier7 = [
  { name: "Czarny smok", attack: 300000, hp: 900000, leadership: 44, traits: ["Smok", "Jednostka latająca"], tier: 7 },
  { name: "Pan wiatru", attack: 310000, hp: 930000, leadership: 45, traits: ["Żywiołak", "Piechota"], tier: 7 },
  { name: "Niszczycielski kolos", attack: 290000, hp: 870000, leadership: 43, traits: ["Olbrzym", "Jednostka strzelecka"], tier: 7 },
  { name: "Prastary potwór", attack: 280000, hp: 840000, leadership: 41, traits: ["Bestia", "Jeździec"], tier: 7 },
];

const monsterDataTier8 = [
  { name: "Burzyciel I", attack: 650000, hp: 1950000, leadership: 53, traits: ["Smok", "Jeździec"], tier: 8 },
  { name: "Ognisty Feniks I", attack: 660000, hp: 1980000, leadership: 54, traits: ["Żywiołak", "Jednostka latająca"], tier: 8 },
  { name: "Kraken I", attack: 670000, hp: 2010000, leadership: 55, traits: ["Olbrzym", "Piechota"], tier: 8 },
  { name: "Szachraj I", attack: 640000, hp: 1920000, leadership: 52, traits: ["Bestia", "Jednostka strzelecka"], tier: 8 },
];

const monsterDataTier9 = [
  { name: "Burzyciel II", attack: 1170000, hp: 3510000, leadership: 53, traits: ["Smok", "Jeździec"], tier: 9 },
  { name: "Ognisty Feniks II", attack: 1190000, hp: 3570000, leadership: 54, traits: ["Żywiołak", "Jednostka latająca"], tier: 9 },
  { name: "Kraken II", attack: 1210000, hp: 3630000, leadership: 55, traits: ["Olbrzym", "Piechota"], tier: 9 },
  { name: "Szachraj II", attack: 1150000, hp: 3450000, leadership: 52, traits: ["Bestia", "Jednostka strzelecka"], tier: 9 },
];


const monsters = [
  ["Tier III", monsterDataTier3[0], monsterDataTier3[1], monsterDataTier3[2], monsterDataTier3[3]],
  ["Tier IV", monsterDataTier4[0], monsterDataTier4[1], monsterDataTier4[2], monsterDataTier4[3]],
  ["Tier V", monsterDataTier5[0], monsterDataTier5[1], monsterDataTier5[2], monsterDataTier5[3]],
  ["Tier VI", monsterDataTier6[0], monsterDataTier6[1], monsterDataTier6[2], monsterDataTier6[3]],
  ["Tier VII", monsterDataTier7[0], monsterDataTier7[1], monsterDataTier7[2], monsterDataTier7[3]],
  ["Tier I", monsterDataTier8[0], monsterDataTier8[1], monsterDataTier8[2], monsterDataTier8[3]],
  ["Tier II", monsterDataTier9[0], monsterDataTier9[1], monsterDataTier9[2], monsterDataTier9[3]],
];

export {
  monsters
};
