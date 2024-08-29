const monsterDataTier3 = [
  { name: { PL: "Szmaragdowy smok", EN: "Szmaragdowy smok" }, attack: 4500, hp: 13500, leadership: 7, traits: ["Smok", "Jednostka latająca"], tier: 3, category: "monsters" },
  { name: { PL: "Żywiołak wody", EN: "Żywiołak wody" }, attack: 1900, hp: 5700, leadership: 3, traits: ["Żywiołak", "Jednostka strzelecka"], tier: 3, category: "monsters" },
  { name: { PL: "Kamienny gargulec", EN: "Kamienny gargulec" }, attack: 5200, hp: 15600, leadership: 8, traits: ["Jednostka latająca", "Olbrzym"], tier: 3, category: "monsters" },
  { name: { PL: "Odyniec bojowy", EN: "Odyniec bojowy" }, attack: 3900, hp: 11700, leadership: 6, traits: ["Bestia", "Jeździec"], tier: 3, category: "monsters" },
];

const monsterDataTier4 = [
  { name: { PL: "Magiczny smok", EN: "Magiczny smok" }, attack: 15000, hp: 45000, leadership: 13, traits: ["Smok", "Jednostka strzelecka"], tier: 4, category: "monsters" },
  { name: { PL: "Lodowy feniks", EN: "Lodowy feniks" }, attack: 17000, hp: 51000, leadership: 15, traits: ["Żywiołak", "Jednostka latająca"], tier: 4, category: "monsters" },
  { name: { PL: "Wieloręki strażnik", EN: "Wieloręki strażnik" }, attack: 13000, hp: 39000, leadership: 11, traits: ["Olbrzym", "Piechota"], tier: 4, category: "monsters" },
  { name: { PL: "Gorgona meduza", EN: "Gorgona meduza" }, attack: 12000, hp: 36000, leadership: 10, traits: ["Bestia", "Jednostka strzelecka"], tier: 4, category: "monsters" },
];

const monsterDataTier5 = [
  { name: { PL: "Pustynny pogromca", EN: "Pustynny pogromca" }, attack: 42000, hp: 126000, leadership: 20, traits: ["Smok", "Jeździec"], tier: 5, category: "monsters" },
  { name: { PL: "Płonący centaur", EN: "Płonący centaur" }, attack: 44000, hp: 132000, leadership: 21, traits: ["Żywiołak", "Jeździec"], tier: 5, category: "monsters" },
  { name: { PL: "Dwugłowy ogr", EN:"Dwugłowy ogr" }, attack: 48000, hp: 144000, leadership: 23, traits: ["Olbrzym", "Piechota"], tier: 5, category: "monsters" },
  { name: { PL: "Przerażająca mantykora", EN: "Przerażająca mantykora" }, attack: 46000, hp: 138000, leadership: 22, traits: ["Bestia", "Jednostka latająca"], tier: 5, category: "monsters" },
];

const monsterDataTier6 = [
  { name: { PL: "Kryształowy smok", EN:"Kryształowy smok" }, attack: 120000, hp: 360000, leadership: 33, traits: ["Smok", "Piechota"], tier: 6, category: "monsters" },
  { name: { PL: "Rubinowy golem", EN: "Rubinowy golem" }, attack: 130000, hp: 390000, leadership: 35, traits: ["Żywiołak", "Piechota"], tier: 6, category: "monsters" },
  { name: { PL: "Jeździec trolli", EN: "Jeździec trolli" }, attack: 110000, hp: 330000, leadership: 30, traits: ["Olbrzym", "Jeździec"], tier: 6, category: "monsters" },
  { name: { PL: "Niszczyciel dżungli", EN: "Niszczyciel dżungli" }, attack: 130000, hp: 390000, leadership: 34, traits: ["Bestia", "Piechota"], tier: 6, category: "monsters" },
];

const monsterDataTier7 = [
  { name: { PL: "Czarny smok", EN: "Czarny smok" }, attack: 300000, hp: 900000, leadership: 44, traits: ["Smok", "Jednostka latająca"], tier: 7, category: "monsters" },
  { name: { PL: "Pan wiatru", EN: "Pan wiatru" }, attack: 310000, hp: 930000, leadership: 45, traits: ["Żywiołak", "Piechota"], tier: 7, category: "monsters" },
  { name: { PL: "Niszczycielski kolos", EN: "Niszczycielski kolos" }, attack: 290000, hp: 870000, leadership: 43, traits: ["Olbrzym", "Jednostka strzelecka"], tier: 7, category: "monsters" },
  { name: { PL: "Prastary potwór", EN: "Prastary potwór" }, attack: 280000, hp: 840000, leadership: 41, traits: ["Bestia", "Jeździec"], tier: 7, category: "monsters" },
];

const monsterDataTier8 = [
  { name: { PL: "Burzyciel I", EN: "Burzyciel I" }, attack: 650000, hp: 1950000, leadership: 53, traits: ["Smok", "Jeździec"], tier: 8, category: "monsters" },
  { name: { PL: "Ognisty Feniks I", EN: "Ognisty Feniks I" }, attack: 660000, hp: 1980000, leadership: 54, traits: ["Żywiołak", "Jednostka latająca"], tier: 8, category: "monsters" },
  { name: { PL: "Kraken I", EN: "Kraken I" }, attack: 670000, hp: 2010000, leadership: 55, traits: ["Olbrzym", "Piechota"], tier: 8, category: "monsters" },
  { name: { PL: "Szachraj I", EN: "Szachraj I" }, attack: 640000, hp: 1920000, leadership: 52, traits: ["Bestia", "Jednostka strzelecka"], tier: 8, category: "monsters" },
];

const monsterDataTier9 = [
  { name: { PL: "Burzyciel II", EN: "Burzyciel II" }, attack: 1170000, hp: 3510000, leadership: 53, traits: ["Smok", "Jeździec"], tier: 9, category: "monsters" },
  { name: { PL: "Ognisty Feniks II", EN: "Ognisty Feniks II" }, attack: 1190000, hp: 3570000, leadership: 54, traits: ["Żywiołak", "Jednostka latająca"], tier: 9, category: "monsters" },
  { name: { PL: "Kraken II", EN: "Kraken II" }, attack: 1210000, hp: 3630000, leadership: 55, traits: ["Olbrzym", "Piechota"], tier: 9, category: "monsters" },
  { name: { PL: "Szachraj II", EN: "Szachraj II" }, attack: 1150000, hp: 3450000, leadership: 52, traits: ["Bestia", "Jednostka strzelecka"], tier: 9, category: "monsters" },
];

const monsters = [
  ["Tier III", monsterDataTier3[0], monsterDataTier3[1], monsterDataTier3[2], monsterDataTier3[3]],
  ["Tier IV", monsterDataTier4[0], monsterDataTier4[1], monsterDataTier4[2], monsterDataTier4[3]],
  ["Tier V", monsterDataTier5[0], monsterDataTier5[1], monsterDataTier5[2], monsterDataTier5[3]],
  ["Tier VI", monsterDataTier6[0], monsterDataTier6[1], monsterDataTier6[2], monsterDataTier6[3]],
  ["Tier VII", monsterDataTier7[0], monsterDataTier7[1], monsterDataTier7[2], monsterDataTier7[3]],
  ["Tier VIII", monsterDataTier8[0], monsterDataTier8[1], monsterDataTier8[2], monsterDataTier8[3]],
  ["Tier IX", monsterDataTier9[0], monsterDataTier9[1], monsterDataTier9[2], monsterDataTier9[3]],
];

export {
  monsters
};
