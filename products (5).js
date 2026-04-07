const PRODUCTS = [
  {
    "name": "Riftbound Leona Radiant Dawn 306/298 Overn…",
    "img": "https://static.dotgg.gg/riftbound/cards/OGN-306.webp",
    "price": "AU $156.66",
    "game": "Riftbound TCG",
    "url": "https://www.ebay.com.au/itm/366332393588"
  },
  {
    "name": "Riftbound Baited Hook 242/298 Epic Origins",
    "img": "https://static.dotgg.gg/riftbound/cards/OGN-242.webp",
    "price": "AU $102.49",
    "game": "Riftbound TCG",
    "url": "https://www.ebay.com.au/itm/366332393587"
  },
  {
    "name": "Pikachu & Zekrom GX 041/173 Double Rare Ta…",
    "img": "https://d31o4i4a5mscn0.cloudfront.net/db-image/static/jp/10fd2423-b4fe-4c72-9ff3-d28f92440681_fd99f01b0553ee7bce84471a9eaf090865e4b39b4d01b278cc4fe384649910cc.jpg",
    "price": "AU $33.90",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330370402"
  },
  {
    "name": "Mega Sableye & Tyranitar GX 054/094 Double…",
    "img": "https://d31o4i4a5mscn0.cloudfront.net/db-image/static/jp/f52368ca-f85a-453b-b63b-3fd6cd87820a_d4f4a972834e9e544ed7faf3ca6aced671ea1d22283afc26f95fedca1549fb36.jpg",
    "price": "AU $22.60",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330370397"
  },
  {
    "name": "Slowpoke & Psyduck GX 011/094 Double Rare …",
    "img": "https://d31o4i4a5mscn0.cloudfront.net/db-image/static/jp/bc74e2d3-a0cc-46dc-a984-06bfb7f4f7fe_aeead2be4b08b170bc6b041e6d6140bf773e830e131d685a9f2b99ac9eca81d9.jpg",
    "price": "AU $67.80",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330370400"
  },
  {
    "name": "Slowpoke & Psyduck GX 095/094 Super Rare M…",
    "img": "https://d31o4i4a5mscn0.cloudfront.net/db-image/static/jp/2c8e034e-9c12-4497-b6a9-13a5e16e76e6_2cb2739439e4010733993114986b8ef28d701e41f10c0ca53982e7eff5549ce7.jpg",
    "price": "AU $169.50",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330370399"
  },
  {
    "name": "Mewtwo & Mew GX 029/094 Double Rare Miracl…",
    "img": "https://d31o4i4a5mscn0.cloudfront.net/db-image/static/jp/4563f9ab-ae2a-4951-88cc-e2e01755ae38_0286b3748d3c779a790a226d3a8688a5f0a4c79481837924b3e6a9c9fb73f269.jpg",
    "price": "AU $49.72",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330370404"
  },
  {
    "name": "Greninja & Zoroark GX 072/173 Double Rare …",
    "img": "https://d31o4i4a5mscn0.cloudfront.net/db-image/static/jp/f4aa6598-c373-4fdc-96ee-9c2916ad1b43_0b6fa4c477cc10ae3e4f83cc695708020e6abbea269c6b9a46562c854eb9a7b1.jpg",
    "price": "AU $28.25",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330370407"
  },
  {
    "name": "Glaceon V 076/069 Super Rare Eevee Heroes",
    "img": "https://d31o4i4a5mscn0.cloudfront.net/db-image/static/jp/3e434796-aeaa-4334-831b-9e21a42096be_fda8e77b078889d6eeb4125d42a591922585e64c451f56114649d42ae8e62dec.jpg",
    "price": "AU $22.83",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330370401"
  },
  {
    "name": "Single Strike Urshifu VMAX 093/184 Triple …",
    "img": "https://d31o4i4a5mscn0.cloudfront.net/db-image/static/jp/28c02ad0-7062-424d-a1bb-e2e562a8af3b_776d508f57aaf8aed2d9b0e4503eca18821194613da4d9473793b38876ae36d9.jpg",
    "price": "AU $4.52",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330370403"
  },
  {
    "name": "Onix NO. 095 Non Holo Common Neo Genesis",
    "img": "https://d31o4i4a5mscn0.cloudfront.net/db-image/updates/card_605e3326-43d1-4259-80d1-7cf0ebe46d45/1767614243557_card.jpg",
    "price": "AU $5",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330380515"
  },
  {
    "name": "Erika's Clefairy NO. 035 Uncommon Gym Heroes",
    "img": "https://d31o4i4a5mscn0.cloudfront.net/db-image/updates/card_1240721e-27b2-4810-ab88-506e40decfed/1767617743001_card.jpg",
    "price": "AU $20",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330380514"
  },
  {
    "name": "Shadow Rider Calyrex VMAX 075/198 Holo VMA…",
    "img": "https://images.pokemontcg.io/swsh6/75_hires.png",
    "price": "AU $2.66",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330400685"
  },
  {
    "name": "Rayquaza V 193/203 Ultra Rare Evolving Skies",
    "img": "https://images.pokemontcg.io/swsh7/193_hires.png",
    "price": "AU $51.03",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/usr/keep.tcg"
  },
  {
    "name": "Vaporeon V 172/203 Ultra Rare Evolving Skies",
    "img": "https://images.pokemontcg.io/swsh7/172_hires.png",
    "price": "AU $36.32",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330400686"
  },
  {
    "name": "Sabrina's Psyduck 99/132 Common Gym Challenge",
    "img": "https://images.pokemontcg.io/gym2/99_hires.png",
    "price": "AU $12.07",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330400681"
  },
  {
    "name": "Erika's Ivysaur 41/132 Uncommon Gym Challenge",
    "img": "https://images.pokemontcg.io/gym2/41_hires.png",
    "price": "AU $16.58",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330400684"
  },
  {
    "name": "Eevee 63/100 Common Sandstorm",
    "img": "https://images.pokemontcg.io/ex2/63_hires.png",
    "price": "AU $9.56",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330400682"
  },
  {
    "name": "Houndoom V 178/189 Ultra Rare Darkness Ablaze",
    "img": "https://images.pokemontcg.io/swsh3/178_hires.png",
    "price": "AU $7.88",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330400679"
  },
  {
    "name": "Cinderace VMAX 194/192 Rainbow Rare Rebel …",
    "img": "https://images.pokemontcg.io/swsh2/194_hires.png",
    "price": "AU $25.66",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330400677"
  },
  {
    "name": "Rillaboom VMAX 193/192 Rainbow Rare Rebel …",
    "img": "https://images.pokemontcg.io/swsh2/193_hires.png",
    "price": "AU $22.01",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330403719"
  },
  {
    "name": "Inteleon VMAX 195/192 Rainbow Rare Rebel C…",
    "img": "https://images.pokemontcg.io/swsh2/195_hires.png",
    "price": "AU $20.24",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330403721"
  },
  {
    "name": "Mega Manectric ex 158/132 Ultra Rare Mega …",
    "img": "https://images.pokemontcg.io/me1/158_hires.png",
    "price": "AU $4.69",
    "game": "Pokémon",
    "url": "https://www.ebay.com.au/itm/366330403717"
  },
  {
    "name": "Dragon Ball Super Energy Marker (E-43) E-4…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/639610_in_1000x1000.jpg",
    "price": "AU $43.43",
    "game": "Dragon Ball Super Card Game",
    "url": "https://www.ebay.com.au/itm/366331632347"
  },
  {
    "name": "Dragon Ball Super Majin Buu : Evil SB01-03…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/639329_in_1000x1000.jpg",
    "price": "AU $318.54",
    "game": "Dragon Ball Super Card Game",
    "url": "https://www.ebay.com.au/itm/366331632349"
  },
  {
    "name": "Flesh and Blood Zen, Tamer of Purpose (Mar…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/543930_in_1000x1000.jpg",
    "price": "AU $124.41",
    "game": "Flesh and Blood TCG",
    "url": "https://www.ebay.com.au/itm/366332372929"
  },
  {
    "name": "Dr.Kureha (Parallel) OP08-015 Rare Two Leg…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/558039_in_1000x1000.jpg",
    "price": "AU $5.65",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350893"
  },
  {
    "name": "Monkey.D.Luffy (CS 2024 Participation) P-041",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/580055_in_1000x1000.jpg",
    "price": "AU $113.00",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350891"
  },
  {
    "name": "[SEALED] One Piece Monkey.D.Luffy (041) P-…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/531486_in_1000x1000.jpg",
    "price": "AU $90.40",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350903"
  },
  {
    "name": "Dracule Mihawk (OP11 Release Event Winner)…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/634530_in_1000x1000.jpg",
    "price": "AU $74.58",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350910"
  },
  {
    "name": "Monkey.D.Luffy (2nd Anniversary Stamped Pr…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/603076_in_1000x1000.jpg",
    "price": "AU $56.50",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350889"
  },
  {
    "name": "Nami (2025 New Year Event) ST01-007 Common",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/610801_in_1000x1000.jpg",
    "price": "AU $56.50",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350905"
  },
  {
    "name": "Portgas.D.Ace (Premium Card Collection -Le…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/566953_in_1000x1000.jpg",
    "price": "AU $45.20",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350887"
  },
  {
    "name": "Sabo (Premium Card Collection -Leader Coll…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/567114_in_1000x1000.jpg",
    "price": "AU $33.90",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350898"
  },
  {
    "name": "Kaido (Premium Card Collection -Leader Col…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/567115_in_1000x1000.jpg",
    "price": "AU $16.95",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350901"
  },
  {
    "name": "Crocodile (Premium Card Collection -Leader…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/567116_in_1000x1000.jpg",
    "price": "AU $11.30",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350909"
  },
  {
    "name": "Eustass\"Captain\"Kid (Premium Card Collecti…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/567117_in_1000x1000.jpg",
    "price": "AU $11.30",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350888"
  },
  {
    "name": "Monkey.D.Luffy (Premium Card Collection -L…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/566952_in_1000x1000.jpg",
    "price": "AU $113.00",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350912"
  },
  {
    "name": "Donquixote Doflamingo (Alternate Art) PRB0…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/653544_in_1000x1000.jpg",
    "price": "AU $11.30",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350911"
  },
  {
    "name": "Jinbe (031) (Alternate Art) OP11-031 Super…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/632394_in_1000x1000.jpg",
    "price": "AU $8.10",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350892"
  },
  {
    "name": "Lim (SP) OP09-037 Super Rare Legacy of the…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/646564_in_1000x1000.jpg",
    "price": "AU $72.93",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350897"
  },
  {
    "name": "Nami (050) (Parallel) OP09-050 Rare Empero…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/596982_in_1000x1000.jpg",
    "price": "AU $18.64",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350895"
  },
  {
    "name": "Sanji (Winner Pack 2025 Vol. 1) EB01-014",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/607971_in_1000x1000.jpg",
    "price": "AU $15.75",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350890"
  },
  {
    "name": "Trafalgar Law (Offline Regional Participat…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/646725_in_1000x1000.jpg",
    "price": "AU $16.87",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350899"
  },
  {
    "name": "Tony Tony.Chopper (Offline Regional Partic…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/646734_in_1000x1000.jpg",
    "price": "AU $43.65",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350906"
  },
  {
    "name": "Camie (Alternate Art) OP06-025 Rare Wings …",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/539789_in_1000x1000.jpg",
    "price": "AU $7.80",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350908"
  },
  {
    "name": "Nefeltari Vivi (118) OP04-118 Secret Rare …",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/515312_in_1000x1000.jpg",
    "price": "AU $14.06",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350907"
  },
  {
    "name": "Carina (Parallel) OP07-005 Rare 500 Years …",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/545784_in_1000x1000.jpg",
    "price": "AU $9.21",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350894"
  },
  {
    "name": "Lilith (Parallel) OP07-111 Super Rare 500 …",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/545911_in_1000x1000.jpg",
    "price": "AU $22.95",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350900"
  },
  {
    "name": "Alvida (Box Topper) OP01-064 Common Romanc…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/453518_in_1000x1000.jpg",
    "price": "AU $11.96",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350896"
  },
  {
    "name": "DON!! Card (Usopp) (Gold) DON!! Premium Bo…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/655911_in_1000x1000.jpg",
    "price": "AU $169.50",
    "game": "One Piece",
    "url": "https://www.ebay.com.au/itm/366330350902"
  },
  {
    "name": "Magic: The Gathering Lightning, Army of On…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/631008_in_1000x1000.jpg",
    "price": "AU $16.02",
    "game": "MTG",
    "url": "https://www.ebay.com.au/itm/366332372607"
  },
  {
    "name": "Magic: The Gathering Lindblum, Industrial …",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/632742_in_1000x1000.jpg",
    "price": "AU $6.63",
    "game": "MTG",
    "url": "https://www.ebay.com.au/itm/366332372610"
  },
  {
    "name": "Magic: The Gathering Overlord of the Mistm…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/575052_in_1000x1000.jpg",
    "price": "AU $5.33",
    "game": "MTG",
    "url": "https://www.ebay.com.au/itm/366332372611"
  },
  {
    "name": "Magic: The Gathering Craterhoof Behemoth (…",
    "img": "https://tcgplayer-cdn.tcgplayer.com/product/623871_in_1000x1000.jpg",
    "price": "AU $32.40",
    "game": "MTG",
    "url": "https://www.ebay.com.au/itm/366332372609"
  },
  {
    "name": "Gundam Gundam Gusion Rebake Full City (R+)…",
    "img": "https://product-images.tcgplayer.com/fit-in/437x437/675697.jpg",
    "price": "AU $26.17",
    "game": "Gundam",
    "url": "https://www.ebay.com.au/itm/366332385924"
  },
  {
    "name": "Gundam Mikazuki Augus (SP) (C+) ST05-010 C…",
    "img": "https://product-images.tcgplayer.com/fit-in/437x437/675731.jpg",
    "price": "AU $35.80",
    "game": "Gundam",
    "url": "https://www.ebay.com.au/itm/366332385926"
  }
];
