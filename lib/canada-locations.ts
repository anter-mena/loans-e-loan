export type CanadaLocation = {
  name: string;
  slug: string;
  cities: string[];
};

export function slugifyCity(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replaceAll("'", "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const canadaLocations: CanadaLocation[] = [
  {
    name: "Alberta",
    slug: "alberta",
    cities: [
      "Airdrie", "Athabasca", "Banff", "Beaumont", "Beaverlodge", "Black Diamond", "Blairmore", "Bonnyville",
      "Bow Island", "Brooks", "Calgary", "Camrose", "Canmore", "Cardston", "Chestermere", "Claresholm",
      "Coaldale", "Cochrane", "Cold Lake", "Crowsnest Pass", "Devon", "Didsbury", "Drayton Valley", "Drumheller",
      "Edmonton", "Grande Prairie", "Grimshaw", "High Level", "High Prairie", "High River", "Hinton", "Innisfail",
      "Jasper", "Lac La Biche", "Lacombe", "Lamont", "Langdon", "Leduc", "Lethbridge", "Lloydminster",
      "Magrath", "Medicine Hat", "Milk River", "Millet", "Morinville", "Nanton", "Okotoks", "Olds",
      "Peace River", "Pincher Creek", "Ponoka", "Provost", "Raymond", "Red Deer", "Redcliff", "Rocky Mountain House",
      "Sherwood Park", "Slave Lake", "Spruce Grove", "St. Albert", "St. Paul", "Stettler", "Stony Plain",
      "Strathmore", "Sundre", "Sylvan Lake", "Taber", "Three Hills", "Tofield", "Turner Valley", "Vegreville",
      "Vermilion", "Vulcan", "Wainwright", "Wetaskiwin", "Whitecourt",
    ],
  },
  {
    name: "British Columbia",
    slug: "british-columbia",
    cities: [
      "100 Mile House", "Abbotsford", "Agassiz", "Aldergrove", "Armstrong", "Ashcroft", "Barriere", "Burnaby",
      "Burns Lake", "Cache Creek", "Campbell River", "Castlegar", "Central Saanich", "Chase", "Chemainus",
      "Chetwynd", "Chilliwack", "Clearwater", "Colwood", "Comox", "Coquitlam", "Courtenay", "Cranbrook",
      "Cumberland", "Dawson Creek", "Delta", "Duncan", "Elkford", "Enderby", "Esquimalt", "Fernie",
      "Fort Nelson", "Fort St. James", "Fort St. John", "Gibsons", "Golden", "Grand Forks", "Hope", "Houston",
      "Invermere", "Kamloops", "Kaslo", "Kelowna", "Kimberley", "Kitimat", "Ladysmith", "Lake Cowichan",
      "Langford", "Langley", "Lillooet", "Lions Bay", "Logan Lake", "Lumby", "Mackenzie", "Maple Ridge",
      "Merritt", "Mission", "Nakusp", "Nanaimo", "Nelson", "New Westminster", "North Cowichan", "North Saanich",
      "North Vancouver", "Oak Bay", "Oliver", "Osoyoos", "Parksville", "Peachland", "Penticton", "Pitt Meadows",
      "Port Alberni", "Port Coquitlam", "Port Hardy", "Port Moody", "Powell River", "Prince George", "Prince Rupert",
      "Princeton", "Qualicum Beach", "Quesnel", "Revelstoke", "Richmond", "Rossland", "Saanich", "Salmon Arm",
      "Sechelt", "Sicamous", "Sidney", "Smithers", "Sooke", "Sparwood", "Squamish", "Summerland", "Surrey",
      "Terrace", "Tofino", "Trail", "Tumbler Ridge", "Ucluelet", "Valemount", "Vancouver", "Vanderhoof",
      "Vernon", "Victoria", "View Royal", "West Kelowna", "West Vancouver", "Whistler", "White Rock", "Williams Lake",
    ],
  },
  {
    name: "Manitoba",
    slug: "manitoba",
    cities: [
      "Altona", "Beausejour", "Brandon", "Carman", "Churchill", "Dauphin", "Flin Flon", "Gimli", "Killarney",
      "Minnedosa", "Morden", "Neepawa", "Niverville", "Portage la Prairie", "Selkirk", "Steinbach", "Stonewall",
      "Swan River", "The Pas", "Thompson", "Virden", "Winkler", "Winnipeg",
    ],
  },
  {
    name: "New Brunswick",
    slug: "new-brunswick",
    cities: [
      "Bathurst", "Campbellton", "Dieppe", "Edmundston", "Fredericton", "Grand Falls", "Hampton", "Miramichi",
      "Moncton", "Oromocto", "Riverview", "Rothesay", "Saint John", "Shediac", "Sussex", "Tracadie-Sheila",
      "Woodstock",
    ],
  },
  {
    name: "Newfoundland and Labrador",
    slug: "newfoundland-and-labrador",
    cities: [
      "Bay Roberts", "Bishop's Falls", "Bonavista", "Carbonear", "Clarenville", "Conception Bay South",
      "Corner Brook", "Deer Lake", "Gambo", "Gander", "Grand Falls-Windsor", "Happy Valley-Goose Bay",
      "Labrador City", "Lewisporte", "Marystown", "Mount Pearl", "Paradise", "Placentia", "Springdale",
      "St. John's", "Torbay", "Twillingate",
    ],
  },
  {
    name: "Nova Scotia",
    slug: "nova-scotia",
    cities: [
      "Amherst", "Annapolis Royal", "Antigonish", "Baddeck", "Berwick", "Bridgewater", "Digby", "Glace Bay",
      "Guysborough", "Halifax", "Kentville", "Liverpool", "Lunenburg", "Mahone Bay", "New Glasgow",
      "New Waterford", "Oxford", "Parrsboro", "Pictou", "Port Hawkesbury", "Shelburne", "Springhill",
      "Stellarton", "Sydney", "Sydney Mines", "Truro", "Windsor", "Wolfville", "Yarmouth",
    ],
  },
  {
    name: "Nunavut",
    slug: "nunavut",
    cities: ["Baker Lake", "Cambridge Bay", "Iqaluit", "Kugluktuk", "Pangnirtung", "Pond Inlet", "Rankin Inlet"],
  },
  {
    name: "Ontario",
    slug: "ontario",
    cities: [
      "Ajax", "Alliston", "Amherstburg", "Angus", "Arnprior", "Aurora", "Aylmer", "Bancroft", "Barrie",
      "Belleville", "Bracebridge", "Bradford", "Brampton", "Brantford", "Brighton", "Brockville", "Burlington",
      "Caledon", "Cambridge", "Carleton Place", "Chatham-Kent", "Clarington", "Cobourg", "Cochrane",
      "Collingwood", "Cornwall", "Deep River", "Dryden", "Dunnville", "Elliot Lake", "Espanola", "Essex",
      "Fergus", "Fort Erie", "Fort Frances", "Gananoque", "Georgina", "Goderich", "Gravenhurst",
      "Greater Napanee", "Greater Sudbury", "Grimsby", "Guelph", "Haldimand County", "Haliburton",
      "Halton Hills", "Hamilton", "Hanover", "Hawkesbury", "Hearst", "Huntsville", "Ingersoll", "Innisfil",
      "Kapuskasing", "Kawartha Lakes", "Kenora", "Kincardine", "Kingston", "Kingsville", "Kirkland Lake",
      "Kitchener", "Lakeshore", "LaSalle", "Leamington", "Lincoln", "Listowel", "London", "Markham",
      "Meaford", "Midland", "Milton", "Mississauga", "Napanee", "New Tecumseth", "Newmarket", "Niagara Falls",
      "Niagara-on-the-Lake", "Norfolk County", "North Bay", "North Perth", "Oakville", "Orangeville",
      "Orillia", "Oshawa", "Ottawa", "Owen Sound", "Parry Sound", "Pembroke", "Perth", "Petawawa",
      "Peterborough", "Pickering", "Port Colborne", "Port Hope", "Prescott", "Quinte West", "Renfrew",
      "Richmond Hill", "Sarnia", "Saugeen Shores", "Sault Ste. Marie", "Simcoe", "Smiths Falls",
      "South Bruce Peninsula", "St. Catharines", "St. Marys", "St. Thomas", "Stratford", "Strathroy",
      "Tecumseh", "Temiskaming Shores", "Thorold", "Thunder Bay", "Tillsonburg", "Timmins", "Toronto",
      "Trenton", "Uxbridge", "Vaughan", "Wallaceburg", "Wasaga Beach", "Waterloo", "Welland", "West Grey",
      "Whitby", "Whitchurch-Stouffville", "Wiarton", "Windsor", "Wingham", "Woodstock",
    ],
  },
  {
    name: "Prince Edward Island",
    slug: "prince-edward-island",
    cities: [
      "Alberton", "Borden-Carleton", "Cavendish", "Charlottetown", "Cornwall", "Georgetown", "Hunter River",
      "Kensington", "Montague", "Murray Harbour", "Murray River", "North Rustico", "O'Leary", "Souris",
      "Stratford", "Summerside", "Tignish",
    ],
  },
  {
    name: "Quebec",
    slug: "quebec",
    cities: [
      "Alma", "Amos", "Amqui", "Baie-Comeau", "Beaconsfield", "Beauharnois", "Beauport", "Beloeil",
      "Boisbriand", "Boucherville", "Brossard", "Chambly", "Chateauguay", "Coaticook", "Cowansville",
      "Dolbeau-Mistassini", "Dollard-des-Ormeaux", "Dorval", "Drummondville", "Farnham", "Gaspe", "Gatineau",
      "Granby", "Joliette", "Kirkland", "La Prairie", "La Sarre", "La Tuque", "L'Assomption", "Laval",
      "Longueuil", "Louiseville", "Magog", "Marieville", "Mascouche", "Matane", "Mercier", "Mirabel",
      "Mont-Joli", "Mont-Laurier", "Mont-Saint-Hilaire", "Mont-Tremblant", "Montmagny", "Montreal",
      "Napierville", "Pincourt", "Pointe-Claire", "Repentigny", "Rimouski", "Rivière-du-Loup", "Saguenay",
      "Saint-Bruno-de-Montarville", "Saint-Constant", "Saint-Eustache", "Saint-Georges", "Saint-Hyacinthe",
      "Saint-Jean-sur-Richelieu", "Saint-Jerome", "Saint-Lambert", "Sainte-Adele", "Sainte-Julie",
      "Sainte-Marie", "Salaberry-de-Valleyfield", "Sept-Iles", "Shawinigan", "Sherbrooke", "Sorel-Tracy",
      "Terrebonne", "Thetford Mines", "Trois-Rivières", "Val-d'Or", "Varennes", "Vaudreuil-Dorion",
      "Victoriaville", "Westmount",
    ],
  },
  {
    name: "Saskatchewan",
    slug: "saskatchewan",
    cities: [
      "Assiniboia", "Battleford", "Biggar", "Canora", "Carlyle", "Carrot River", "Estevan", "Esterhazy",
      "Foam Lake", "Gravelbourg", "Humboldt", "Indian Head", "Kamsack", "Kerrobert", "Kindersley", "Lanigan",
      "Lloydminster", "Maple Creek", "Martensville", "Meadow Lake", "Melfort", "Melville", "Moose Jaw",
      "Moosomin", "Nipawin", "North Battleford", "Outlook", "Prince Albert", "Regina", "Rosetown", "Saskatoon",
      "Shaunavon", "Swift Current", "Tisdale", "Unity", "Warman", "Weyburn", "Yorkton",
    ],
  },
  {
    name: "Northwest Territories",
    slug: "northwest-territories",
    cities: ["Behchoko", "Fort Simpson", "Fort Smith", "Hay River", "Inuvik", "Norman Wells", "Yellowknife"],
  },
  {
    name: "Yukon",
    slug: "yukon",
    cities: ["Carmacks", "Dawson City", "Faro", "Haines Junction", "Watson Lake", "Whitehorse"],
  },
];

export function getProvinceBySlug(slug: string): CanadaLocation | undefined {
  return canadaLocations.find((p) => p.slug === slug);
}

export function getOtherProvinces(slug: string): CanadaLocation[] {
  return canadaLocations.filter((p) => p.slug !== slug);
}
