const bdd = [
	{
		id: 4,
		name: 'Abomination',
		biography: {
			'full-name': 'Emil Blonsky',
			'place-of-birth': 'Zagreb, Yugoslavia',
			'first-appearance': 'Tales to Astonish #90',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human / Radiation',
			eye: 'Green',
			hair: 'No hair'
		},
		work: {
			occupation: 'Ex-Spy',
			base: 'Mobile'
		},
		connections: {
			'group-affiliation': 'former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten',
			relatives: 'Nadia Dornova Blonsky (wife, separated)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1.jpg'
	},
	{
		id: 5,
		name: 'Abraxas',
		biography: {
			'full-name': 'Abraxas',
			'place-of-birth': 'Within Eternity',
			'first-appearance': 'Fantastic Four Annual #2001',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Cosmic Entity',
			eye: 'Blue',
			hair: 'Black'
		},
		work: {
			occupation: 'Dimensional destroyer',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Cosmic Beings',
			relatives: 'Eternity ("Father")'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/181.jpg'
	},
	{
		id: 9,
		name: 'Agent 13',
		biography: {
			'full-name': 'Sharon Carter',
			'place-of-birth': '-',
			'first-appearance': 'Tales of Suspense #75',
			alignment: 'good',
			publisher: 'Sharon Carter'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Agent of SHIELD',
			base: 'S.H.I.E.L.D. Headquarters, New York City'
		},
		connections: {
			'group-affiliation': 'gent of SHIELD.; former member of the Femme Force',
			relatives: 'Harrison Carter (father), Amanda Carter (mother), Margaret "Peggy" Carter (sister)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/167.jpg'
	},
	{
		id: 11,
		name: 'Agent Zero',
		biography: {
			'full-name': 'Christoph Nord',
			'place-of-birth': 'Unrevealed location in former East Germany',
			'first-appearance': '-',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: 'Mercenary, former government operative, freedom fighter',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Formerly Weapon X, Weapon Plus, Team X, Cell Six, former bodyguard of Psi-Borg, former agent of Major Barrington',
			relatives: 'Unidentified parents (deceased), Andreas Nord (brother, deceased), Ginetta Lucia Barsalini (wife, deceased), unnamed child (deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/396.jpg'
	},
	{
		id: 13,
		name: 'Ajax',
		biography: {
			'full-name': 'Francis',
			'place-of-birth': '-',
			'first-appearance': 'Deadpool #14 (March, 1998)',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Cyborg',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Formerly Weapon X',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10422.jpg'
	},
	{
		id: 14,
		name: 'Alan Scott',
		biography: {
			'full-name': 'Alan Ladd Wellington Scott',
			'place-of-birth': 'Gotham City',
			'first-appearance': 'All-American Comics 16 (1940)',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: '-',
			base: 'Gotham City and New York City; Formerly Capitol City'
		},
		connections: {
			'group-affiliation': 'Justice Society of America; Formerly Checkmate; the Sentinels of Magic; Formerly All-Star Squadron',
			relatives: 'Harlequin (Molly Mayne-Scott) (wife), Thorn (Rose Canton) (first wife, deceased), Todd Rice (Obsidian, son), Jennie-Lynn Hayden (Jade, daughter, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/698.jpg'
	},
	{
		id: 18,
		name: 'Alien',
		biography: {
			'full-name': 'Xenomorph',
			'place-of-birth': 'Your chest :)',
			'first-appearance': 'Alien (1979)',
			alignment: 'bad',
			publisher: 'Dark Horse Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Xenomorph XX121',
			eye: '-',
			hair: 'No hair'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: 'Alien Queen (mother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10449.jpg'
	},
	{
		id: 21,
		name: 'Ammo',
		biography: {
			'full-name': '-',
			'place-of-birth': '-',
			'first-appearance': 'Daredevil #252 (March, 1988)',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: 'Gang leader , criminal , former soldier',
			base: 'New York City'
		},
		connections: {
			'group-affiliation': 'Former leader of the Wildboys',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/184.jpg'
	},
	{
		id: 30,
		name: 'Ant-Man',
		biography: {
			'full-name': 'Hank Pym',
			'place-of-birth': 'Elmsford, New York',
			'first-appearance': 'Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)',
			alignment: 'good',
			publisher: 'Giant-Man'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Adventurer, Biochemist, former manager of Avengers Compound',
			base: 'Avengers Compound, Los Angeles; formerly Infinite Avengers Mansion; Captive aboard a Skrull ship; Avengers Mansion, New York City, New York'
		},
		connections: {
			'group-affiliation': 'Avengers Academy, Secret Avengers; formerly Mighty Avengers, Avengers (founding member), Defenders, Future Iron Man\'s Team',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/857.jpg'
	},
	{
		id: 34,
		name: 'Anti-Venom',
		biography: {
			'full-name': 'Eddie Brock',
			'place-of-birth': 'San Francisco, California',
			'first-appearance': 'Amazing Spider-Man #569 (as Anti-Venom)',
			alignment: '-',
			publisher: 'Toxin'
		},
		appearance: {
			gender: 'Male',
			race: 'Symbiote',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Vigilante; former journalist for the Daily Globe',
			base: 'New York, New York'
		},
		connections: {
			'group-affiliation': '-',
			relatives: 'Carl Brock (father, estranged), Janine Brock (mother, deceased), Mary Brock (sister), Ann Weying (ex-wife, deceased), Symbiotes'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1485.jpg'
	},
	{
		id: 38,
		name: 'Aquaman',
		biography: {
			'full-name': 'Orin',
			'place-of-birth': 'Atlantis',
			'first-appearance': 'More Fun Comics #73 (November, 1941)',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Atlantean',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Protector of the Seas and Oceans, King of Poseidonis',
			base: 'Atlantean Royal Palace; Poseidonis, Atlantis'
		},
		connections: {
			'group-affiliation': 'Justice League, Aquaman Family, Atlantean Royal Family; formerly Black Lantern Corps, Justice League International, Justice League Detroit, U.N.',
			relatives: 'Koryak (son), Arthur Curry, Jr. (son), A.J. (son), Orm Marius (half-brother), Debbie Perkins (half-sister), Drin (adopted brother), Atlanna (mother), Atlan (father), Atlena (aunt), Porm (adopted mother), Tom Curry (adopted father), Mera (wife), Hila (sister-in-law), Haumond (uncle), Kraken (uncle), Honsu (grandfather), Lorelei (grandmother), Manu (ancestor), Nala (ancestor), Fatima (ancestor), Kalunga (ancestor), Gana (ancestor), Fiona (ancestor), Regin (ancestor), Kordax (ancestor), Bazil (ancestor), Cora (ancestor), Illya (ancestor), Dardanus (ancestor), Alloroc (ancestor), Cole (ancestor), Narmea (ancestor), Orin (ancestor), Loma (ancestor), Shalako (ancestor), Thorvall (ancestor)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/634.jpg'
	},
	{
		id: 43,
		name: 'Ares',
		biography: {
			'full-name': '-',
			'place-of-birth': '-',
			'first-appearance': 'Thor #12',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: 'Brown',
			hair: 'Brown'
		},
		work: {
			occupation: '-',
			base: 'Avengers Tower, formerly Olympus'
		},
		connections: {
			'group-affiliation': 'Avengers, Mighty Avengers, Olympic Pantheon; Warhawks',
			relatives: 'Zeus (father), Hera (mother), Enyo (wife), Deimos, Phobos, Alexander (sons), Neptune, Pluto (uncles), Demeter, Hestia (aunts), Hephaestus (brother), Apollo, Dionysus, Hercules, Hermes(half-brothers), Artemis, Pallas Athena, Venus, (half-sisters)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1118.jpg'
	},
	{
		id: 44,
		name: 'Ariel',
		biography: {
			'full-name': 'Ariel',
			'place-of-birth': '-',
			'first-appearance': 'Fallen Angels #1 (1987)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Purple',
			hair: 'Pink'
		},
		work: {
			occupation: 'Leader, refugee alien; former alien mutant-hunter and hedonist',
			base: '-'
		},
		connections: {
			'group-affiliation': 'X-Men, Formerly Fallen Angels',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1348.jpg'
	},
	{
		id: 47,
		name: 'Astro Boy',
		biography: {
			'full-name': 'Atom',
			'place-of-birth': '-',
			'first-appearance': '-',
			alignment: 'good',
			publisher: '-'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1159.jpg'
	},
	{
		id: 48,
		name: 'Atlas',
		biography: {
			'full-name': 'Erik Josten',
			'place-of-birth': 'Milwaukee, Wisconsin',
			'first-appearance': 'Incredible Hulk #449',
			alignment: 'good',
			publisher: 'Goliath'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Brown',
			hair: 'Red'
		},
		work: {
			occupation: 'Adventurer; former professional criminal, mercenary, dock worker, soldier',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Thunderbolts, formerly Revengers, Defenders (New Jersey Initiative team), Masters of Evil, Maggia, Grim Reaper\'s Lethal Legion, Mandarin\'s Minions, Emissaries of Evil; former partner of Citizen V (Dallas Riordan) and Swordsman, Count Nefaria\'s Lethal Legi',
			relatives: 'Unidentified parents (deceased), Carl (brother, deceased), Conrad (brother), Lindy (sister, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/878.jpg'
	},
	{
		id: 52,
		name: 'Atom Girl',
		biography: {
			'full-name': 'Salu Digby',
			'place-of-birth': '-',
			'first-appearance': 'Teen Titans/Legion Special #1 (2004)',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Black',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: 'United Planets, 31st century'
		},
		connections: {
			'group-affiliation': 'Legion of Super-Heroes',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1180.jpg'
	},
	{
		id: 56,
		name: 'Aurora',
		biography: {
			'full-name': 'Jeanne-Marie Beaubier',
			'place-of-birth': 'Montreal, Quebec, Canada',
			'first-appearance': 'X-Men #121 (1979)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Mutant',
			eye: 'Blue',
			hair: 'Black'
		},
		work: {
			occupation: 'Adventurer; former terrorist, nun, history/geography teacher',
			base: 'Laval, Quebec, Canada'
		},
		connections: {
			'group-affiliation': 'Alpha Flight, Alpha Flight (Space Program), Royal Canadian Mounted Police; formerly Weapon X, ally of the Havok\'s Brotherhood, Headbangers , Children of the Vault, X-Men (interim member)',
			relatives: 'Jean-Baptiste Beaubier (father, deceased), unidentified mother (deceased), Jean-Paul Beaubier (Northstar, twin brother) Joanna Beaubier (adopted niece, deceased); Lois and Genevieve Martin (first cousins once removed/adopted parents, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1289.jpg'
	},
	{
		id: 61,
		name: 'Banshee',
		biography: {
			'full-name': 'ean Cassidy',
			'place-of-birth': 'Cassidy Keep, Ireland',
			'first-appearance': 'X-Men #28 (January, 1967)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Green',
			hair: 'Strawberry Blond'
		},
		work: {
			occupation: 'Currently founder and director of operation for X-Corps, formerly Adventurer and Headmaster at the Massachusetts Academy, in charge of Generation X, Interpol Inspector and Agent, freelance detective, professional criminal, involuntary operative for Factor',
			base: 'Muir Island, off the coast of Scotland. formerly Massachusetts Academy; Xavier Institute'
		},
		connections: {
			'group-affiliation': 'Currently X-Corps, formerly Generation X, Factor Three, X-Men"',
			relatives: 'Maeve Rourke Cassidy (wife, deceased), Thomas (Black Tom, cousin), Theresa Rourke (Siryn, daughter)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/26.jpg'
	},
	{
		id: 63,
		name: 'Batgirl',
		biography: {
			'full-name': 'Barbara Gordon',
			'place-of-birth': '-',
			'first-appearance': 'Detective Comics #359',
			alignment: 'good',
			publisher: 'Oracle'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Green',
			hair: 'Red'
		},
		work: {
			occupation: '-',
			base: 'Gotham City, formerly Metropolis, Platinum Flats'
		},
		connections: {
			'group-affiliation': '-',
			relatives: 'James Gordon (father), Barbara Eileen (mother), James Gordon, Jr. (brother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1111.jpg'
	},
	{
		id: 69,
		name: 'Batman',
		biography: {
			'full-name': 'Terry McGinnis',
			'place-of-birth': 'Gotham City, 25th Century',
			'first-appearance': 'Batman Beyond #1',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: '21st Century Gotham City'
		},
		connections: {
			'group-affiliation': 'Batman Family, Justice League Unlimited',
			relatives: 'Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg'
	},
	{
		id: 75,
		name: 'Beast',
		biography: {
			'full-name': 'Henry Philip McCoy',
			'place-of-birth': 'Dunfee, Illinois',
			'first-appearance': 'X-MEN Vol. 1 #1, (in furry ape form) AMAZING ADVENTURES #11, (in current feline form) NEW X-MEN Vol. 1 #114',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Blue',
			hair: 'Blue'
		},
		work: {
			occupation: 'Biochemist, formerly Xavier Institute for Higher Learning science and math Instructor, mutant activist, college lecturer, researcher, professional wrestler',
			base: 'Xavier Institute, Salem Center, Westchester County, New York'
		},
		connections: {
			'group-affiliation': 'Secret Avengers, S.W.O.R.D.; formerly X-Men (founding member); X-Club (founding member); Initiative; 198; X-Treme X-Men; Acolytes (while mind-controlled); Queen\'s Vengeance; X-Factor/X-Terminators (founding member); Rejects; Defenders, Avengers',
			relatives: 'Sadie McCoy (paternal grandmother), Norton McCoy (father), Edna McCoy (mother), Robert McCoy (paternal great-uncle), John McCoy (uncle)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/27.jpg'
	},
	{
		id: 86,
		name: 'Binary',
		biography: {
			'full-name': 'Carol Danvers',
			'place-of-birth': 'Boston, Massachusetts',
			'first-appearance': '(as Carol Danvers) MARVEL SUPER HEROES #13, (as Ms. Marvel) MS. MARVEL #1, (as Binary) X-MEN # 164, AVENGERS Vol. 3, # 4',
			alignment: 'good',
			publisher: 'Captain Marvel'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Former National Aeronautics and Space Administration security Chief, former magazine editor, former freelance writer, former military intelligence officer',
			base: 'Avengers Mansion'
		},
		connections: {
			'group-affiliation': 'currently Avengers, former companion to the X-Men (as Carol Danvers), former member of the Starjammers (as Binary), Former Avenger (as Ms. Marvel)',
			relatives: 'Joseph (father), Marie (mother), Steve (brother, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/30.jpg'
	},
	{
		id: 92,
		name: 'Bishop',
		biography: {
			'full-name': 'Lucas Bishop',
			'place-of-birth': 'A mutant relocation camp in an undisclosed location on an alternate 21st Century Earth',
			'first-appearance': 'Uncanny X-Men #282 (November, 1991)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Brown',
			hair: 'No hair'
		},
		work: {
			occupation: '(current) Adventurer, (former) Commander in the XSE (Xavier\'s Security Enforcers)',
			base: 'Formerly Xavier Institute for Higher Learning, Salem Center, Westchester County, New York'
		},
		connections: {
			'group-affiliation': '"Clean City"; formerly Stryfe; X-Men; X.S.E. (Storm\'s team); X-Treme X-Men; X.S.E. (Hecate\'e\'s team); The Twelve',
			relatives: 'Burnum Bishop (father, deceased), Kadee Bishop (mother, deceased), Shard (sister, deceased), unnamed grandmother, Gateway (great-grandfather), Aliyah Bishop (alternate reality daughter)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/31.jpg'
	},
	{
		id: 99,
		name: 'Black Cat',
		biography: {
			'full-name': 'Felicia Hardy',
			'place-of-birth': 'Queens, New York',
			'first-appearance': 'Amazing Spider-Man #194 (July, 1979)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Green',
			hair: 'Blond'
		},
		work: {
			occupation: 'Cat burglar; Private investigator, founder of Cat\'s Eye Investigations',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Formerly Heroes for Hire',
			relatives: 'Walter Hardy (father, deceased), Lydia Hardy (mother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/32.jpg'
	},
	{
		id: 103,
		name: 'Black Lightning',
		biography: {
			'full-name': 'Jefferson Pierce',
			'place-of-birth': '-',
			'first-appearance': 'Black Lightning #1 (April 1977)',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: 'Brown',
			hair: 'No hair'
		},
		work: {
			occupation: 'Crime Fighter, High School teacher, Former gold-medal-winning Olympic Decathlete, formerly Secretary of Education under Presidents Pete Ross and Lex Luthor.',
			base: 'Chicago, Illinois; Metropolis, The Hall & The JLA Watchtower'
		},
		connections: {
			'group-affiliation': 'Justice League of America (current), formerly Presidential Cabinet, The Outsiders (sporadically), Batman\'s Brother Eye attack group',
			relatives: 'Unnamed father (deceased), Lynn Stewart (ex-wife), Joanna Pierce (niece, deceased), Anissa Pierce (Thunder, daughter), Jennifer Pierce (Lightning, daughter)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1128.jpg'
	},
	{
		id: 106,
		name: 'Black Panther',
		biography: {
			'full-name': 'T\'Challa',
			'place-of-birth': 'Wakanda, Africa',
			'first-appearance': 'Fantastic Four Vol. 1 #52 (1966)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Brown',
			hair: 'black'
		},
		work: {
			occupation: 'King and Chieftain of Wakanda, scientist; former school teacher',
			base: 'Wakanda, Mobile'
		},
		connections: {
			'group-affiliation': 'Formerly Fantastic Four, Secret Avengers, Avengers, Pendragons, Queen\'s Vengeance, former Fantastic Force financier',
			relatives: 'Bashenga (paternal ancestor, deceased), Azzuri the Wise (paternal grandfather, deceased), Nanali (paternal grandmother, deceased), Chanda (paternal grandfather, presumably deceased), T�Chaka (father, deceased), S\'Yan (uncle, deceased), N�Yami (mother, deceased), Ramonda (stepmother), Hunter (adopted brother), Jakarra (half-brother), Shuri (sister), Ororo Munroe (wife), Joshua Itobo, Ishanta, Zuni, M\'Koni, T\'Shan (cousins), Wheeler (cousin by marriage, deceased), Billy Wheeler (1st cousin once removed)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/247.jpg'
	},
	{
		id: 107,
		name: 'Black Widow',
		biography: {
			'full-name': 'Natasha Romanoff',
			'place-of-birth': '-',
			'first-appearance': 'Tales of Suspense #52',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Green',
			hair: 'Auburn'
		},
		work: {
			occupation: 'Adventurer, Intelligence agent, former ballerina',
			base: 'Mobile'
		},
		connections: {
			'group-affiliation': 'Secret Avengers; formerly Thunderbolts (as Yelena Belova), Nick Fury, Mighty Avengers, S.H.I.E.L.D., Avengers, Champions of Los Angeles, Lady Liberators, KGB, "Marvel Knights", partner of Daredevil, Hawkeye, Boris Turgenov, Logan',
			relatives: 'Unnamed parents (presumed deceased); Alexi Shostakov (Red Guardian, estranged husband); Vindiktor (alleged brother, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/248.jpg'
	},
	{
		id: 112,
		name: 'Blade',
		biography: {
			'full-name': 'Eric Brooks',
			'place-of-birth': 'Soho, London,England',
			'first-appearance': 'Tomb of Dracula Vol. 1 #10 (1973)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Vampire',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: 'Vampire hunter, former private investigator.',
			base: 'Mobile'
		},
		connections: {
			'group-affiliation': 'Formerly Noah van Helsing\'s vampire hunters, Nightstalkers, Midnight Sons, the Nine, Quincy Harker\'s vampire hunters, Ogun Strong\'s vampire hunters, Bloodshadows gang',
			relatives: 'Tara Brooks (mother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/33.jpg'
	},
	{
		id: 119,
		name: 'Blob',
		biography: {
			'full-name': 'Frederick J. Dukes',
			'place-of-birth': 'Lubbock, Texas',
			'first-appearance': 'X-Men #3 (1964)',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: 'Brown',
			hair: 'Brown'
		},
		work: {
			occupation: 'Former criminal, terrorist, government agent, carnival performer',
			base: '-'
		},
		connections: {
			'group-affiliation': 'X-Cell, formerly X-Corps, Magneto\'s army, Brotherhood Of Evil Mutants, Freedom Force, Factor Three, former partner of Unus',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1119.jpg'
	},
	{
		id: 140,
		name: 'Buffy',
		biography: {
			'full-name': 'Buffy Anne Summers',
			'place-of-birth': '-',
			'first-appearance': 'Dark Horse Presents 1998 Annual',
			alignment: 'good',
			publisher: 'Dark Horse Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Green',
			hair: 'Blond'
		},
		work: {
			occupation: 'Slayer ; (formerly) Waitress ; DoubleMeat Palace employee ; Sunnydale High Counselor',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Slayer Army, Scooby Gang, (formerly) The Initiative, Watchers Council',
			relatives: 'Joyce Summers (mother, deceased) ; Hank Summers (father) ; Dawn Summers (sister) ; Celia (cousin, deceased) ; Arlene (aunt)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10430.jpg'
	},
	{
		id: 142,
		name: 'Bumblebee',
		biography: {
			'full-name': 'Karen Beecher',
			'place-of-birth': '-',
			'first-appearance': 'Teen Titans #45',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: 'San Francisco, California'
		},
		connections: {
			'group-affiliation': 'Doom Patrol, S.T.A.R. Labs, Formerly Teen Titans',
			relatives: 'Mal Duncan (husband)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1542.jpg'
	},
	{
		id: 144,
		name: 'Bushido',
		biography: {
			'full-name': 'Ryuko Orsono',
			'place-of-birth': '-',
			'first-appearance': 'Titans: Secret Files & Origins #2',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Teen Titans',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1541.jpg'
	},
	{
		id: 146,
		name: 'Callisto',
		biography: {
			'full-name': 'Callisto',
			'place-of-birth': '-',
			'first-appearance': 'X-MEN (first series) #169',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Blue',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: 'The Xavier Institute, Salem Center, Westchester County, New York State, (former) The Alley (beneath Manhattan\'s surface), X-Factor I\'s sentient starship'
		},
		connections: {
			'group-affiliation': 'Excalibur, Morlocks, Gene Nation',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/271.jpg'
	},
	{
		id: 149,
		name: 'Captain America',
		biography: {
			'full-name': 'Steve Rogers',
			'place-of-birth': 'Manhattan, New York City, New York',
			'first-appearance': 'Captain America Comics #1 (March 1941)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.',
			base: 'New York City'
		},
		connections: {
			'group-affiliation': 'Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)',
			relatives: 'Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/274.jpg'
	},
	{
		id: 156,
		name: 'Captain Marvel',
		biography: {
			'full-name': 'Billy Batson',
			'place-of-birth': 'Fawcett City, United States',
			'first-appearance': 'Whiz Comics no. 2 (1940)',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Marvel Family, Justice Society of America',
			relatives: 'C.C. Batson (father, deceased), Marilyn Batson (mother, deceased), Ebenezer Batson (uncle), Mary Batson (Mary Marvel, sister)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/278.jpg'
	},
	{
		id: 161,
		name: 'Captain Universe',
		biography: {
			'full-name': '-',
			'place-of-birth': '-',
			'first-appearance': 'Micronauts #8 (August, 1979)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: '-',
			race: 'God / Eternal',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/855.jpg'
	},
	{
		id: 165,
		name: 'Catwoman',
		biography: {
			'full-name': 'Selina Kyle',
			'place-of-birth': 'Gotham City',
			'first-appearance': 'Detective Comics #569',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Green',
			hair: 'Black'
		},
		work: {
			occupation: 'Thief',
			base: 'Gotham City'
		},
		connections: {
			'group-affiliation': 'Batman Family, Outsiders; formerly Birds of Prey, Injustice League, Secret Society of Super-Villains',
			relatives: 'Brian Kyle (father, deceased), Maria Kyle (mother, deceased), Maggie Kyle (sister), Helena Kyle (daughter)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/659.jpg'
	},
	{
		id: 168,
		name: 'Cerebra',
		biography: {
			'full-name': 'Shakti Haddad',
			'place-of-birth': '-',
			'first-appearance': 'X-Men 2099 #1 (October, 1993)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Mutant',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'X-Men (2099), Halo City Protectorate, X-Nation',
			relatives: 'Zail Haddad (father)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1512.jpg'
	},
	{
		id: 169,
		name: 'Chamber',
		biography: {
			'full-name': 'Jonothon Evan Starsmore',
			'place-of-birth': 'United Kingdom',
			'first-appearance': 'Generation X #1 (November, 1994)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Brown',
			hair: 'Brown'
		},
		work: {
			occupation: 'Adventurer',
			base: 'Utopia; formerly New Warriors HQ; Xavier Institute for Higher Learning, Salem Center, Westchester County, New York; Massachusetts Academy, Snow Valley, Massachusetts'
		},
		connections: {
			'group-affiliation': 'X-Men; formerly New Warriors; Clan Akkaba; Weapon X; Generation X',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/44.jpg'
	},
	{
		id: 172,
		name: 'Cheetah',
		biography: {
			'full-name': 'Priscilla Rich',
			'place-of-birth': '-',
			'first-appearance': 'Wonder Woman Vol1 #6 (Fall 1943)',
			alignment: 'bad',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Green',
			hair: 'Blond'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Villainy Inc',
			relatives: 'Claudia Rich (cousin), Debi Domaine (niece)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/661.jpg'
	},
	{
		id: 176,
		name: 'Chuck Norris',
		biography: {
			'full-name': 'Carlos Ray Norris',
			'place-of-birth': 'Ryan, Oklahoma, United States',
			'first-appearance': '-',
			alignment: 'good',
			publisher: '-'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/954.jpg'
	},
	{
		id: 185,
		name: 'Colossus',
		biography: {
			'full-name': 'Piotr Nikolaievitch Rasputin',
			'place-of-birth': 'Ust-Ordynski Collective, near Lake Baikal, Siberia, Russia',
			'first-appearance': 'Giant-Size X-Men #1 (May, 1975)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Silver',
			hair: 'Black'
		},
		work: {
			occupation: '(current) Adventurer, student, (former) Artist',
			base: '(current) Professor Charles Xavier\'s Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Isle, Scotland,; a loft in Soho, Manhattan, Ust-Ordynski Collective, Lake Baikal, Siberia, U.S.S.R., X-Men Headquarters in Austra'
		},
		connections: {
			'group-affiliation': 'X-Men; formerly Excalibur, Acolytes, Defender',
			relatives: 'Grigory Efimovich Rasputin (great-grandfather, deceased), Elena (great-grandmother, deceased), Ivan Rasputin (great-grand uncle, deceased), Grigory Rasputin (grandfather, deceased), Nikolai Rasputin (father, deceased), Alexandra Rasputina (mother, deceased), Vladimir Rasputin (uncle, deceased), unidentified aunt & uncle (deceased), Illyana Nikolievna Rasputina (Magik, sister, deceased), Mikhail Rasputin (brother), Peter Jr. (son), Larissa Mishchenko (cousin, deceased), Konstantin (cousin, deceased), Klara (cousin, deceased), Dimitriy (cousin, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/48.jpg'
	},
	{
		id: 186,
		name: 'Copycat',
		biography: {
			'full-name': 'Vanessa Carlysle',
			'place-of-birth': '-',
			'first-appearance': 'New Mutants #98 (February, 1991)',
			alignment: 'neutral',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Mutant',
			eye: 'Red',
			hair: 'White'
		},
		work: {
			occupation: '-',
			base: 'Mobile; formerly Adirondack Mountains, Xavier\'s School for Gifted Youngsters'
		},
		connections: {
			'group-affiliation': 'Weapon X/Weapon Plus and Six Pack (as Copycat), X-Force and New Mutants (as Domino)',
			relatives: 'Burt Carlysle (father, deceased), Dorothy Carlysle (mother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10423.jpg'
	},
	{
		id: 191,
		name: 'Crystal',
		biography: {
			'full-name': 'Crystallia Amaquelin',
			'place-of-birth': 'Attilan',
			'first-appearance': 'Fantastic Four #45 (1965)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Inhuman',
			eye: 'Green',
			hair: 'Red'
		},
		work: {
			occupation: 'Mother, adventuress',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Inhumans (Royal Family); formerly Fantastic Four, Avengers, Queen\'s Vengeance',
			relatives: 'Quelin (father), Ambur (mother), Medusa (sister), Gorgon, Karnak, Triton (cousins), Black Bolt (cousin, brother-in-law), Pietro Maximoff (Quicksilver, estranged husband), Luna (daughter), Ahura (nephew), extensive extended family'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/305.jpg'
	},
	{
		id: 194,
		name: 'Cyborg',
		biography: {
			'full-name': 'Victor Stone',
			'place-of-birth': 'New York City, New York',
			'first-appearance': 'DC Comics Presents #26 (October, 1980)',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Cyborg',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: 'Adventurer, Teen Titan',
			base: 'San Francisco'
		},
		connections: {
			'group-affiliation': 'Justice League; formerly Teen Titans, Titans, Titans East, New Teen Titans',
			relatives: 'Silas Stone (father), Elinore Stone (mother), Tucker Stone (grandfather), Maude Stone (grandmother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1204.jpg'
	},
	{
		id: 196,
		name: 'Cyclops',
		biography: {
			'full-name': 'Scott Summers',
			'place-of-birth': 'Anchorage, Alaska',
			'first-appearance': 'X-Men #1 (September, 1963)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Brown',
			hair: 'Brown'
		},
		work: {
			occupation: 'Leader of mutant race, adventurer, headmaster, former student, radio announcer',
			base: 'Xavier Institute, Salem Center, Westchester County, New York'
		},
		connections: {
			'group-affiliation': 'X-Men (leader, founding member); formerly X-Force (founder); Corsairs (squad leader); The Twelve; X-Factor/X-Terminators (founding member); 198',
			relatives: 'Oscar Summers (adoptive paternal distant ancestor, deceased); Daniel Summers (paternal distant ancestor, deceased); Amanda Mueller (Black Womb) (paternal distant ancestor); unnamed great-grandfather, deceased; Gloria Dayne (Fontanelle) (paternal distant ancestor); Philip Summers (paternal grandfather); Deborah Summers (paternal grandmother); Christopher Summers (Corsair) (father, deceased); Katherine Ann Summers (mother, deceased); Jack Winters (Jack O\'Diamonds) (former foster father); Alexander Summers (Havok) (brother); Gabriel Summers (Vulcan) (brother, deceased); Madelyne Pryor-Summers (Red Queen) (first wife/second wife\'s clone, deceased); Jean Grey-Summers (Phoenix) (second wife, deceased); Nathan Summers (Cable) (son, deceased); Gailyn Bailey (niece, deceased); Joseph Bailey (nephew, deceased); Adam Neramani (X-Treme) (nephew, alleged half-brother); Hope Summers (adoptive granddaughter); Stryfe (son\'s clone); Summers and Grey Family Tree (more relatives)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/50.jpg'
	},
	{
		id: 197,
		name: 'Cypher',
		biography: {
			'full-name': 'Douglas Aaron Ramsey',
			'place-of-birth': '-',
			'first-appearance': 'New Mutants (Vol. 1) #13',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: '-',
			race: '-',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Student, Adventurer',
			base: 'Professor Charles Xavier\'s School for Gifted Youngsters, Salem Center, Westchester County, New York'
		},
		connections: {
			'group-affiliation': 'New Mutants',
			relatives: 'Phillip Ramsey (father), Sheila Ramsey (mother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/168.jpg'
	},
	{
		id: 199,
		name: 'Danny Cooper',
		biography: {
			'full-name': '-',
			'place-of-birth': '-',
			'first-appearance': '-',
			alignment: 'good',
			publisher: 'HarperCollins'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: 'Brown',
			hair: 'Blond'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1152.jpg'
	},
	{
		id: 201,
		name: 'Daredevil',
		biography: {
			'full-name': 'Matt Murdock',
			'place-of-birth': 'New York City, New York',
			'first-appearance': 'Daredevil #1 (April, 1964)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Red'
		},
		work: {
			occupation: 'Adventurer, vigilante, Attorney at Law',
			base: 'Hell\'s Kitchen, New York, New York, Shadowland (formerly)'
		},
		connections: {
			'group-affiliation': 'Formerly: partner of Black Widow (Natasha Romanoff), Defenders, S.H.I.E.L.D., Marvel Knights, Secret Avengers (Civil War), Hand leader.',
			relatives: 'Jonathan "Battling Jack" Murdock (Father, deceased), Maggie Murdock (aka Sister Maggie, Mother), Milla Donovan (ex-wife)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/52.jpg'
	},
	{
		id: 213,
		name: 'Deadpool',
		biography: {
			'full-name': 'Wade Wilson',
			'place-of-birth': 'Canada',
			'first-appearance': 'New Mutants #98 (February, 1991)',
			alignment: 'neutral',
			publisher: 'Evil Deadpool'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Brown',
			hair: 'No hair'
		},
		work: {
			occupation: 'Mercenary; former enforcer, government operative, sumo wrestler, soldier, assassin, anti-hero, others',
			base: 'Cavern-X, Sedona, Arizona, Mobile'
		},
		connections: {
			'group-affiliation': 'Thunderbolts (Strike Team), shares body with Agent Preston; formerly X-Force, Deadpool Corps, Agency X, S.H.I.E.L.D.; Code Red, Six Pack, One World Church, DP Inc., Weapon X, Weapon Plus, Heroes for Hire, Secret Defenders, Frightful Four, Team Deadpool, L',
			relatives: 'Thomas "Mickey" Wilson (father, deceased); Hailey Wilson (mother, deceased); Gretchen Wilson, Orksa (ex-wives); Evil Deadpool (clone); Widdle Wade (clone)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/835.jpg'
	},
	{
		id: 214,
		name: 'Deadshot',
		biography: {
			'full-name': 'Floyd Lawton',
			'place-of-birth': '-',
			'first-appearance': 'Batman #59 (June, 1950)',
			alignment: 'bad',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Brown',
			hair: 'Brown'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/670.jpg'
	},
	{
		id: 226,
		name: 'Doctor Strange',
		biography: {
			'full-name': 'Stephen Strange',
			'place-of-birth': 'Philadelphia, Pennsylvania',
			'first-appearance': 'Strange Tales #110 (July, 1963)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Grey',
			hair: 'Black'
		},
		work: {
			occupation: 'Sorcerer Supreme, retired neurosurgeon',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Defenders, underground Avengers; formerly the Order, Midnight Sons; former disciple of the Ancient One',
			relatives: 'Eugene (father, deceased), Beverly (mother, deceased), Victor (Khiron, brother, apparently deceased), Donna (sister, deceased), Clea (wife, estranged), Umar (mother-in-law), Orini (father-in-law), Dormammu (uncle-in-law)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/55.jpg'
	},
	{
		id: 227,
		name: 'Domino',
		biography: {
			'full-name': 'Neena Thurman',
			'place-of-birth': 'Project: Armageddon base, Everglades, Florida',
			'first-appearance': 'X-Force #8 (March, 1992)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Blue',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'X-Men; formerly X-Force; 198; X-Corporation; The Underground; X-Force; Six Pack',
			relatives: 'Beatrice (mother), Lazarus (brother), Milo Thurman (husband, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/902.jpg'
	},
	{
		id: 228,
		name: 'Donatello',
		biography: {
			'full-name': '-',
			'place-of-birth': '-',
			'first-appearance': 'Teenage Mutant Ninja Turtles #1',
			alignment: 'good',
			publisher: 'IDW Publishing'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Green',
			hair: 'No hair'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: 'Leonardo (brother), Michelangelo (brother), Raphael (brother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10330.jpg'
	},
	{
		id: 230,
		name: 'Doomsday',
		biography: {
			'full-name': 'Doomsday',
			'place-of-birth': 'Krypton',
			'first-appearance': 'Superman: The Man of Steel #17 (Nov 1992)',
			alignment: 'bad',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Alien',
			eye: 'Red',
			hair: 'White'
		},
		work: {
			occupation: 'Destroyer',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Secret Society of Super Villains, Suicide Squad, Apokolips',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/679.jpg'
	},
	{
		id: 235,
		name: 'Ego',
		biography: {
			'full-name': 'Ego',
			'place-of-birth': 'The Black Galaxy',
			'first-appearance': 'THOR #132',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: '-',
			race: '-',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: 'Inapplicable',
			base: 'Mobile'
		},
		connections: {
			'group-affiliation': '-',
			relatives: 'Inapplicable'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/6.jpg'
	},
	{
		id: 236,
		name: 'Elastigirl',
		biography: {
			'full-name': 'Helen Parr',
			'place-of-birth': '-',
			'first-appearance': 'The Incredibles (Movies, 2004)',
			alignment: 'good',
			publisher: 'Dark Horse Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Brown',
			hair: 'Brown'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Incredible Family (co-leader), National Supers Agency (ties), Edna Mode (receives costumes and gadgets from her), Frozone (long-time friend), Mirage (ally), Snug Porter (receives aircraft from him)',
			relatives: 'Robert Parr(Mr Incredible, husband), Violet Parr(Violet, daughter), Dashiell Parr (Dash, son), Jack-jack (son)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/870.jpg'
	},
	{
		id: 238,
		name: 'Elektra',
		biography: {
			'full-name': 'Elektra Natchios',
			'place-of-birth': '-',
			'first-appearance': 'Daredevil #168',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Blue',
			hair: 'Black'
		},
		work: {
			occupation: 'Assassin, adventurer, mercenary, former student, dancer',
			base: '-'
		},
		connections: {
			'group-affiliation': 'S.H.I.E.L.D.; formerly Thunderbolts, Hand, Chaste, Heroes For Hire, Code Red, partner of Daredevil and Deadpool',
			relatives: 'Hugo Kostas Natchios (father, deceased), Christina Natchios (mother, deceased), Orestez Natchios (older brother), Demetrios Natchios (Uncle), Alexia Natchios (Aunt)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/625.jpg'
	},
	{
		id: 239,
		name: 'Elle Bishop',
		biography: {
			'full-name': '-',
			'place-of-birth': '-',
			'first-appearance': 'Heroes S02E05 - Fight or Flight',
			alignment: 'bad',
			publisher: 'NBC - Heroes'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Agent of the Company',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: 'Bob Bishop (Father)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1021.jpg'
	},
	{
		id: 241,
		name: 'Emma Frost',
		biography: {
			'full-name': 'Emma Frost',
			'place-of-birth': 'Boston, Massachusetts',
			'first-appearance': 'UNCANNY X-MEN #132',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: '-',
			base: '(current) Emma Frost operates from the Massachusetts Academy, Snow Valley, Massachusetts, (former) Hellfire Club mansion in New York City, a home in the Berkshire Mountains in Massachusetts (near the Massachusetts Academy), and places of residence in vari'
		},
		connections: {
			'group-affiliation': 'Active member of the X-Men, Instructor for Generation X, The Inner Circle of the Hellfire Club',
			relatives: 'Winston Frost (father), Hazel Frost (mother), Christian Frost (brother) Adrienne Frost (sister, deceased,) Cordelia Frost (sister)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/325.jpg'
	},
	{
		id: 242,
		name: 'Enchantress',
		biography: {
			'full-name': 'June Moone',
			'place-of-birth': '-',
			'first-appearance': 'Strange Adventures #187',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Artist; Magician',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Forgotten Villains, Sentinels of Magic, Shadowpact, Suicide Squad',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/687.jpg'
	},
	{
		id: 245,
		name: 'Ethan Hunt',
		biography: {
			'full-name': 'Ethan Hunt',
			'place-of-birth': 'Madison, Wisconsin, United States of America',
			'first-appearance': '-',
			alignment: 'good',
			publisher: '-'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Brown',
			hair: 'Brown'
		},
		work: {
			occupation: 'IMF Agent, Training Officer (former), Field Agent, Field Team Leader',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Formerly: United States Army',
			relatives: 'Nathan Hunt (Father), Margaret Hunt (Mother), Donald Hunt (Uncle)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg'
	},
	{
		id: 247,
		name: 'Evil Deadpool',
		biography: {
			'full-name': 'Wade Wilson',
			'place-of-birth': '-',
			'first-appearance': 'Deadpool Vol 2 #44 (December, 2011)',
			alignment: 'bad',
			publisher: 'Deadpool'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'White',
			hair: 'Red'
		},
		work: {
			occupation: 'Mercenary, Assasin',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Evil Deadpool Corps',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10090.jpg'
	},
	{
		id: 249,
		name: 'Exodus',
		biography: {
			'full-name': 'Bennet du Paris',
			'place-of-birth': '-',
			'first-appearance': 'X-Factor #92 (July, 1993)',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Blue',
			hair: 'Black'
		},
		work: {
			occupation: 'Terrorist, would-be conqueror, Former leader of the Acolytes, Crusader',
			base: 'Currently mobile, Formerly Avalon'
		},
		connections: {
			'group-affiliation': 'Acolytes, formerly Brotherhood and Marauders',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1517.jpg'
	},
	{
		id: 251,
		name: 'Falcon',
		biography: {
			'full-name': 'Sam Wilson',
			'place-of-birth': 'New York, New York',
			'first-appearance': 'Captain America #117 (September, 1969)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: 'Crimefighter, (former) freelance artist',
			base: 'New York, New York; formerly Avengers Mansion, New York City, New York; S.H.I.E.L.D. Helicarrier.'
		},
		connections: {
			'group-affiliation': 'Mighty Avengers, Avengers, S.H.I.E.L.D.; partner of Redwing; formerly Heroes For Hire, partner of Captain America, Secret Avengers, S.H.I.E.L.D. Super-Agents (leader), Defenders, ally of Secret Warriors , Defenders for a Day',
			relatives: 'Paul Wilson (father, deceased); Darlene Wilson (mother, deceased); Sarah Wilson (sister), Gideon Wilson (brother); Jim Wilson (nephew, deceased); Jody Casper (nephew)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/56.jpg'
	},
	{
		id: 257,
		name: 'Firebird',
		biography: {
			'full-name': 'Bonita Juarez',
			'place-of-birth': 'Buena Vista, New Mexico',
			'first-appearance': 'INCREDIBLE HULK Vol. 2 #265',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: 'Social worker, adventurer',
			base: 'New Mexico'
		},
		connections: {
			'group-affiliation': 'Catholic Church; formerly the Rangers, provisional member of the Avengers West Coast, Queen\'s Vengeance',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/58.jpg'
	},
	{
		id: 263,
		name: 'Flash',
		biography: {
			'full-name': 'Jay Garrick',
			'place-of-birth': 'Hibbardsville, Kansas',
			'first-appearance': 'Flash Comics #1 (January 1940)',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Brown / White'
		},
		work: {
			occupation: 'Research Scientist, part-time Director of Garrick Laboratories',
			base: 'Keystone City, Kansas'
		},
		connections: {
			'group-affiliation': 'Justice Society of America, Flash Family; formerly All-Star Squadron',
			relatives: 'Joseph Garrick (father), Joan Williams (wife), Arthur Williams (father-in-law), unnamed adopted son (deceased), Bart Allen (Flash II, ward)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/891.jpg'
	},
	{
		id: 268,
		name: 'Forge',
		biography: {
			'full-name': '-',
			'place-of-birth': 'Unrevealed, presumably in the American West',
			'first-appearance': 'Uncanny X-Men #184',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: '-',
			race: '-',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: 'Inventor working for the U.S. government, former soldier',
			base: 'Arlington, Virginia'
		},
		connections: {
			'group-affiliation': 'X-Factor',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/62.jpg'
	},
	{
		id: 271,
		name: 'Frenzy',
		biography: {
			'full-name': 'Joanna Cargill',
			'place-of-birth': '-',
			'first-appearance': 'X-Factor Vol 1 #4',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: 'Mercenary',
			base: 'Mobile; formerly Avalon in Earth orbit; Genosha; California'
		},
		connections: {
			'group-affiliation': 'Acolytes, formerly Alliance of Evil; temporarily X-Men while controlled by Jean Grey, Femizons',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1108.jpg'
	},
	{
		id: 273,
		name: 'Galactus',
		biography: {
			'full-name': 'Galan',
			'place-of-birth': '(Galan) Taa; (Galactus) the Cosmic Egg',
			'first-appearance': 'Fantastic Four #48 (March 1966)',
			alignment: 'neutral',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Cosmic Entity',
			eye: 'Black',
			hair: 'Black'
		},
		work: {
			occupation: 'Planet Devourer, Third Force of the Universe - balance between Eternity and Death, Nullifying Abraxas\' Influence on the Multiverse, Third Face of the Living Tribunal - representing Equity',
			base: 'Worldship (aka Taa II); though he is generally mobile throughout the universe via his spherical starship in search of suitable planets to consume.'
		},
		connections: {
			'group-affiliation': 'Heralds of Galactus; formerly God Squad',
			relatives: 'Galan ("father"), Galacta (daughter)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/862.jpg'
	},
	{
		id: 274,
		name: 'Gambit',
		biography: {
			'full-name': 'Remy Etienne LeBeau',
			'place-of-birth': 'New Orleans, Louisiana',
			'first-appearance': '(as Gambit) Uncanny X-Men #266 (1990), (as Death) X-Men #184 (2006)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Red',
			hair: 'Brown'
		},
		work: {
			occupation: 'Jean Grey School for Higher Learning, Salem Center, Westchester County, New York; formerly Utopia, San Francisco Bay, California; Xavier Institute, Salem Center, Westchester County, New York; New Orleans; Paris; Cairo; Illinois',
			base: '(current) Xavier Institute, Salem Center, Westchester County, New York; (former) New Orleans, Louisiana; Paris, France; Cairo, Illinois'
		},
		connections: {
			'group-affiliation': 'X-Men (Team Wolverine); formerly Marauders, Horsemen of Apocalypse, Chevaliers, X-Treme X-Men, Thieves & Unified Guild\'s of New Orleans, Crimson Pirates',
			relatives: 'Jean-Luc LeBeau (father), Belladonna (aka Bella Donna Boudreaux) (wife, separated)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/64.jpg'
	},
	{
		id: 275,
		name: 'Gamora',
		biography: {
			'full-name': 'Gamora Zen Whoberi Ben Titan',
			'place-of-birth': 'Planet Zen Whoberi, Silican System, Milky Way',
			'first-appearance': 'Strange Tales #180 (June, 1975)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Zen-Whoberian',
			eye: 'Yellow',
			hair: 'Black'
		},
		work: {
			occupation: 'Assassin, mercenary, adventurer',
			base: 'C.I.T.T.; formerly Godthab Omega, Monster Island, Sanctuary II and the pocket-dimension within the Soul Gem; Earth-7528'
		},
		connections: {
			'group-affiliation': 'Guardians of the Galaxy ; formerly Phalanx\'s Selects, Graces (Leader), Infinity Watch ; United Front ; former minion of Thanos; ally of Adam Warlock and Pip the Troll',
			relatives: 'Thanos (foster father), Thane (foster brother), Unnamed former Symbiote'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/65.jpg'
	},
	{
		id: 276,
		name: 'Garbage Man',
		biography: {
			'full-name': 'Richard Ethan Morse',
			'place-of-birth': '-',
			'first-appearance': 'Weird Worlds #1 (2011)',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1467.jpg'
	},
	{
		id: 278,
		name: 'General Zod',
		biography: {
			'full-name': 'Dru-Zod',
			'place-of-birth': 'Krypton',
			'first-appearance': 'Action Comics #845',
			alignment: 'bad',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Kryptonian',
			eye: 'Black',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: 'Formerly Krypton; formerly the Phantom Zone; currently Earth'
		},
		connections: {
			'group-affiliation': 'Phantom Zone criminals; former member of the Kryptonian Defense Council',
			relatives: 'Ursa (mate/wife); Lor-Zod (son); Admiral Zod (possible ancestor)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/837.jpg'
	},
	{
		id: 279,
		name: 'Genesis',
		biography: {
			'full-name': 'Tyler Dayspring',
			'place-of-birth': '-',
			'first-appearance': 'As Tolliver, mentioned) New Mutants #98 (1991), (as Tolliver, seen) X-Force #5 (1991), (as Genesis) Cable #18 (1994)',
			alignment: 'good',
			publisher: '"Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Former would-be world conqueror, arms dealer, soldier, freedom fighter',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Formerly Dark Riders (leader), former servant of Stryfe, formerly New Canaanites, Clan Chosen',
			relatives: 'Nathan Christopher Summers (Cable, adopted father), Aliya Jenskot (mother, deceased), Stryfe (cloned uncle, deceased), Rachel Summers (Marvel Girl, alternate timeline aunt), Scott Summers (Cyclops, grandfather), Madelyne Pryor-Summers (grandmother, deceased), Alexander Summers (Havok, great-uncle), Gabriel Summers (Vulcan, great-uncle), Christopher Summers (Corsair, great-grandfather), Katherine Anne Summers (great-grandmother, deceased), Philip Summers (great-great-grandfather), Deborah Summers (great-great-grandmother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1055.jpg'
	},
	{
		id: 280,
		name: 'Ghost Rider',
		biography: {
			'full-name': 'Johnny Blaze',
			'place-of-birth': 'Waukegan, Illinois',
			'first-appearance': 'Marvel Spotlight #5 (August, 1972)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Demon',
			eye: 'Red',
			hair: 'No hair'
		},
		work: {
			occupation: 'Former stunt motorcyclist',
			base: 'Mobile, Quentin Carnival'
		},
		connections: {
			'group-affiliation': 'Quentin Carnival Formerly Midnight Sons, Legion of Monsters, The Champions',
			relatives: 'Barton (father, deceased), Clara (mother, deceased), Craig "Crash" Simpson (stepfather, deceased), Mona Simpson (stepmother, deceased), Roxanne Simpson (wife)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/67.jpg'
	},
	{
		id: 282,
		name: 'Giant-Man',
		biography: {
			'full-name': 'Hank Pym',
			'place-of-birth': '-',
			'first-appearance': '-',
			alignment: 'good',
			publisher: 'Ant-Man'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/858.jpg'
	},
	{
		id: 289,
		name: 'Goku',
		biography: {
			'full-name': 'Kakarot',
			'place-of-birth': '-',
			'first-appearance': 'Dragon Ball #1',
			alignment: 'good',
			publisher: 'Shueisha'
		},
		appearance: {
			gender: 'Male',
			race: 'Saiyan',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Saiyajin, Son family, Z-Fighters',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1284.jpg'
	},
	{
		id: 296,
		name: 'Gravity',
		biography: {
			'full-name': 'Greg Willis',
			'place-of-birth': 'Sheboygan, Wisconsin',
			'first-appearance': 'Gravity #1 (August, 2005)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Brown'
		},
		work: {
			occupation: 'Student',
			base: 'New York City'
		},
		connections: {
			'group-affiliation': 'Young Allies; Formerly Great Lakes Initiative, Heavy Hitters',
			relatives: 'Richard Willis (father), Mary Willis (mother)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/74.jpg'
	},
	{
		id: 303,
		name: 'Groot',
		biography: {
			'full-name': 'Groot',
			'place-of-birth': '-',
			'first-appearance': 'Tales to Astonish #13 (November, 1960)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Flora Colossus',
			eye: 'Yellow',
			hair: '-'
		},
		work: {
			occupation: '-',
			base: 'Area 13 (the Howling Commandos\' base)'
		},
		connections: {
			'group-affiliation': 'Guardians of the Galaxy, Unnamed Kree covert ops team, formerly Galactic Council, Howling Commandos',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10017.jpg'
	},
	{
		id: 307,
		name: 'Han Solo',
		biography: {
			'full-name': 'Han Solo',
			'place-of-birth': 'Corellia',
			'first-appearance': 'Star Wars: Episode IV - A New Hope (1977)',
			alignment: 'good',
			publisher: 'George Lucas'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Brown',
			hair: 'Brown'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10456.jpg'
	},
	{
		id: 308,
		name: 'Hancock',
		biography: {
			'full-name': 'John Hancock',
			'place-of-birth': '-',
			'first-appearance': '-',
			alignment: 'good',
			publisher: 'Sony Pictures'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Brown',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1109.jpg'
	},
	{
		id: 309,
		name: 'Harley Quinn',
		biography: {
			'full-name': 'Harley Quinn',
			'place-of-birth': '-',
			'first-appearance': 'Batman: Harley Quinn (October, 1999)',
			alignment: 'bad',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Psychiatrist',
			base: 'Gotham City'
		},
		connections: {
			'group-affiliation': 'Formerly The Quintets, The Joker, Poison Ivy, Secret Six',
			relatives: 'Barry Quinzel (brother), Sharon Quinzel (mother), Nick Quinzel (father), Jenny Quinzel (niece), Nicky Quinzel (nephew)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/701.jpg'
	},
	{
		id: 313,
		name: 'Hawkeye',
		biography: {
			'full-name': 'Clint Barton',
			'place-of-birth': 'Waverly, Iowa',
			'first-appearance': 'Tales of Suspense #57 (September, 1964)',
			alignment: 'good',
			publisher: 'Goliath'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Adventurer',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Avengers, Thunderbolts, Avengers West Coast, Great Lakes Avengers, Shadows, Chain Gang, former partner of the Black Widow',
			relatives: 'Harold Barton (father, deceased), Edith Barton (mother, deceased), Bernard Barton (brother, deceased), Barbara Morse (wife, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/73.jpg'
	},
	{
		id: 322,
		name: 'Hellboy',
		biography: {
			'full-name': 'Anung Un Rama',
			'place-of-birth': '-',
			'first-appearance': 'Dime Press #4 (May 1, 1993)',
			alignment: 'good',
			publisher: 'Dark Horse Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Demon',
			eye: 'Gold',
			hair: 'Black'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Abe Sapien, Liz Sherman, Roger the Homunculus, Savage Dragon, the Goon, Batman, Starman, Ghost, Painkiller Jane, Lobster Johnson, Torch of Liberty',
			relatives: 'Catherine Tanner-Tremaine (mother, deceased), two unnamed maternal half-siblings (deceased), Professor Trevor Bruttenholm (foster father)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/813.jpg'
	},
	{
		id: 327,
		name: 'Hit-Girl',
		biography: {
			'full-name': 'Mindy McCready',
			'place-of-birth': '-',
			'first-appearance': '-',
			alignment: 'good',
			publisher: 'Icon Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1336.jpg'
	},
	{
		id: 329,
		name: 'Hollow',
		biography: {
			'full-name': 'Monet St. Croix',
			'place-of-birth': '-',
			'first-appearance': 'Generation X #1 (1994)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Blue',
			hair: 'Red'
		},
		work: {
			occupation: '-',
			base: 'Massachusetts Academy; Phil Urich\'s aprtment'
		},
		connections: {
			'group-affiliation': 'Generation X, The Loners',
			relatives: 'M, Emplate, St. Croix Twins'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/931.jpg'
	},
	{
		id: 332,
		name: 'Hulk',
		biography: {
			'full-name': 'Bruce Banner',
			'place-of-birth': 'Dayton, Ohio',
			'first-appearance': 'Incredible Hulk #1 (May, 1962)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human / Radiation',
			eye: 'Green',
			hair: 'Green'
		},
		work: {
			occupation: 'Nuclear physicist, Agent of S.H.I.E.L.D.',
			base: '(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico'
		},
		connections: {
			'group-affiliation': 'Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four',
			relatives: 'Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. \'Thunderbolt\' Ross (father)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/83.jpg'
	},
	{
		id: 333,
		name: 'Human Torch',
		biography: {
			'full-name': 'Johnny Storm',
			'place-of-birth': 'Glenville, Long Island, New York',
			'first-appearance': 'Fantastic Four #1 (1961)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human / Radiation',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Adventurer',
			base: 'Pier Four, New York City'
		},
		connections: {
			'group-affiliation': 'Fantastic Four',
			relatives: 'Susan Richards - Invisible Woman (sister), Franklin Richards (nephew), Reed Richards - Mister Fantastic (brother-in-law) Lyja (ex-wife)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/362.jpg'
	},
	{
		id: 339,
		name: 'Iceman',
		biography: {
			'full-name': 'Bobby Drake',
			'place-of-birth': 'Fort Washington, Long Island, New York',
			'first-appearance': 'X-Men #1',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Brown',
			hair: 'Brown'
		},
		work: {
			occupation: 'Adventurer, formerly teacher, accountant, student',
			base: '-'
		},
		connections: {
			'group-affiliation': 'X-Men (Jean Grey School member, founding member); formerly Murder Circus (brainwashed), Excelsiors (squad leader), The Twelve, X-Factor/X-Terminators (founding member), Chosen (Dualers), Secret Defenders, Defenders, Champions (founder and founding member)',
			relatives: 'William Robert Drake (father), Madeline Beatrice Bass Drake (mother), Mary (cousin), Joel (cousin), Anne (aunt)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/816.jpg'
	},
	{
		id: 341,
		name: 'Indiana Jones',
		biography: {
			'full-name': 'Indiana Jones',
			'place-of-birth': 'Princeton, New Jersey',
			'first-appearance': 'Raiders of the Lost Ark (1981)',
			alignment: 'good',
			publisher: 'George Lucas'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: 'Archaeologist',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10560.jpg'
	},
	{
		id: 344,
		name: 'Invisible Woman',
		biography: {
			'full-name': 'Susan Storm Richards',
			'place-of-birth': 'Glenville, Long Island, New York',
			'first-appearance': 'FANTASTIC FOUR #1',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Human / Radiation',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Member of the Fantastic Four, financial manager for Fantastic Four Inc, occasional model and actress',
			base: 'Pier Four, New York City'
		},
		connections: {
			'group-affiliation': 'Fantastic Four, formerly; Secret Avengers, Avengers, Brides of Set, Pawns of Death',
			relatives: 'Reed Richards (Mister Fantastic, husband), Franklin Richards (son), Valeria Richards (daughter), Johnny Storm (Human Torch, brother), Franklin Storm (father, deceased), Mary Storm (mother, deceased), Marygay Jewel Dinkins (aunt), "Bones" (cousin), Evelyn Richards (mother-in-law, deceased), Nathaniel Richards (father-in-law), Cassandra Richards (Warlord, mother-in-law, deceased), unnamed child of Nathaniel Richards (brother-in-law), Tara Richards (Huntara, sister-in-law), Kristoff Vernard (alleged brother-in-law), Lyja (sister-in-law)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/620.jpg'
	},
	{
		id: 346,
		name: 'Iron Man',
		biography: {
			'full-name': 'Tony Stark',
			'place-of-birth': 'Long Island, New York',
			'first-appearance': 'Tales of Suspence #39 (March, 1963)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Black'
		},
		work: {
			occupation: 'Inventor, Industrialist; former United States Secretary of Defense',
			base: 'Seattle, Washington'
		},
		connections: {
			'group-affiliation': 'Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.',
			relatives: 'Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/85.jpg'
	},
	{
		id: 370,
		name: 'Joker',
		biography: {
			'full-name': 'Jack Napier',
			'place-of-birth': '-',
			'first-appearance': 'Batman #1 (Spring 1940)',
			alignment: 'bad',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Green',
			hair: 'Green'
		},
		work: {
			occupation: '-',
			base: 'Arkham Asylum, Gotham City; Ha-Hacienda'
		},
		connections: {
			'group-affiliation': 'Black Glove, Injustice Gang, Injustice League, Joker League of Anarchy',
			relatives: 'Jeannie (wife, deceased); Unborn son (deceased); Melvin Reipan (cousin, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/719.jpg'
	},
	{
		id: 373,
		name: 'Judge Dredd',
		biography: {
			'full-name': 'Joseph Dredd',
			'place-of-birth': 'Mega City One',
			'first-appearance': '2000 AD no. 2 (5 March 1977)',
			alignment: 'good',
			publisher: 'Rebellion'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: 'Mega-City Judge',
			base: 'Mega City One'
		},
		connections: {
			'group-affiliation': '-',
			relatives: 'Rico Dredd (brother), Judge Kraken (clone), Vienna (niece)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1163.jpg'
	},
	{
		id: 383,
		name: 'Kick-Ass',
		biography: {
			'full-name': 'Dave Lizewski',
			'place-of-birth': 'New York City',
			'first-appearance': 'Kick Ass #1',
			alignment: 'good',
			publisher: 'Icon Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: 'Student',
			base: '-'
		},
		connections: {
			'group-affiliation': '-',
			relatives: 'Mother (unnamed, deceased), Father (unnamed)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1158.jpg'
	},
	{
		id: 396,
		name: 'Krypto',
		biography: {
			'full-name': 'Krypto the Superdog',
			'place-of-birth': '-',
			'first-appearance': 'Adventure Comics #210 (March, 1955)',
			alignment: 'good',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Kryptonian',
			eye: 'Blue',
			hair: 'White'
		},
		work: {
			occupation: '-',
			base: 'Smallville, Kansas'
		},
		connections: {
			'group-affiliation': 'Superman',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/725.jpg'
	},
	{
		id: 405,
		name: 'Lex Luthor',
		biography: {
			'full-name': 'Lex Lutho',
			'place-of-birth': '-',
			'first-appearance': 'Action Comics #23',
			alignment: 'bad',
			publisher: 'DC Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Green',
			hair: 'No hair'
		},
		work: {
			occupation: 'Owner of LexCorp',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Injustice Gang, Injustice League, Society of Supervillains',
			relatives: 'Casey and Elaine Griggs (foster parents, deceased), Lena Luthor (sister pre-Crisis; daughter post-Crisis), Elizabeth Perske (ex-wife), Perry J. White Jr. (son, deceased), Contessa Erica Alexandra del Portenza (wife, assumed deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/727.jpg'
	},
	{
		id: 414,
		name: 'Loki',
		biography: {
			'full-name': 'Loki Laufeyson',
			'place-of-birth': 'Jotunheim, Asgard',
			'first-appearance': 'Journey into Mystery Vol. 1 #85',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Asgardian',
			eye: 'Green',
			hair: 'Black'
		},
		work: {
			occupation: 'God of evil; former god of mischief and madness',
			base: 'Asgard'
		},
		connections: {
			'group-affiliation': 'Asgardians, Karnilla, Enchantress, Skurge the Executioner, Cobra, Mister Hyde, Absorbing Man, Igron, Tyr, Lorelei, Hela, Ulik, Frost Giants, Storm Giants (former), Dormammu, "Acts of Vengeance" prime movers (Dr. Doom, Magneto, Red Skull, Mandari',
			relatives: 'Laufey (father, deceased), Farbauti (mother, deceased), Sigyn (wife, deceased), Odin (foster father, deceased), Frigga (foster mother, deceased), Thor, Vidar (foster brothers, deceased), Hela,Fenris (Wolf), Jordmungand (Midgard Serpent) (children, deceased), Arkin (cousin, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/928.jpg'
	},
	{
		id: 418,
		name: 'Luke Skywalker',
		biography: {
			'full-name': 'Luke Skywalker',
			'place-of-birth': 'Tatooine',
			'first-appearance': 'Star Wars: Episode IV - A New Hope (1977)',
			alignment: 'good',
			publisher: 'George Lucas'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'Blond'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Alliance to Restore the Republic, Jedi Order, Alliance of Free Planets, Bright Tree Village, New Republic, New Jedi Order',
			relatives: 'Darth Vader (father), Princes Leia (Sister), Yoda (Master), Obi-Wan Kenobi (Master)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10447.jpg'
	},
	{
		id: 423,
		name: 'Magneto',
		biography: {
			'full-name': 'Erik Magnus Lensherr',
			'place-of-birth': 'Unrevealed, probably somewhere in Northern Europe',
			'first-appearance': 'X-MEN Vol. 1 #1',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Mutant',
			eye: 'Grey',
			hair: 'White'
		},
		work: {
			occupation: 'Currently Revolutionary and Conqueror, formerly Volunteer Orderly, Secret Agent',
			base: 'Currently unrevealed, formerly Asteroid M; various hidden bases on Earth including one in Antarctica; an island in the Bermuda Triangle; Professor Xavier\'s School for Gifted Youngsters, Salem Center, Westchester County, New York'
		},
		connections: {
			'group-affiliation': 'Currently None, formerly Brotherhood of Evil Mutants I and II, X-Men, teacher of the New Mutants, Lords Cardinal of the Hellfire Club, leader of the Acolytes',
			relatives: 'Magda (wife, deceased), Anya (daughter, deceased), Pietro Maximoff (Quicksilver, son), Wanda Maximoff (Scarlet Witch, daughter), Lorna Dane (Polaris, daughter), Joseph (clone, deceased), Luna (granddaughter)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/12.jpg'
	},
	{
		id: 430,
		name: 'Mandarin',
		biography: {
			'full-name': 'Khan',
			'place-of-birth': 'China',
			'first-appearance': 'Tales of Suspense #50 (February, 1964)',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: 'Human',
			eye: 'Blue',
			hair: 'White'
		},
		work: {
			occupation: 'Would-be conqueror; former janitor, businessman and crimelord, government administrator',
			base: 'Prometheus Corporation; formerly Dragon of Heaven; Palace of the Star Dragon in the Valley of Spirits'
		},
		connections: {
			'group-affiliation': 'Current CEO of Prometheus Corporation; has employed the Avatars, Living Laser, Power Man, Swordsman, Enchantress, Executioner, Sandman, and Ladykiller',
			relatives: 'Unidentified father, mother, paternal aunt (all deceased). Mei-Ling (fianc�e, deceased), Temujin (son), Genghis Khan (alleged ancestor, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1175.jpg'
	},
	{
		id: 433,
		name: 'Marvel Girl',
		biography: {
			'full-name': 'Rachel Anne Summers',
			'place-of-birth': '-',
			'first-appearance': 'UNCANNY X-MEN #141',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: 'Green',
			hair: 'Red'
		},
		work: {
			occupation: 'Adventurer',
			base: 'Xavier Institute of Higher Learning, Salem Center, Westchester County, New York (formerly) Braddock Lighthouse, England'
		},
		connections: {
			'group-affiliation': 'Starjammers, formerly X-Men, former servant of Elias Bogan, formerly Clan Askani (leader), Excalibur, former servant of Ahab',
			relatives: 'Scott Summers (Cyclops, alternate timeline father, deceased in own time), Jean Grey-Summers (Phoenix, alternate timeline mother, deceased in own time), Alex Summers (Havok, alternate timeline uncle), Franklin Richards (alternate future husband), Jonathan Reed Richards (Hyperstorm, alternate future son), David Richards (alternate future son)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/94.jpg'
	},
	{
		id: 438,
		name: 'Maverick',
		biography: {
			'full-name': 'Christopher Bradley',
			'place-of-birth': '-',
			'first-appearance': 'X-Men Unlimited #8 (1995)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: 'Blue',
			hair: 'Black'
		},
		work: {
			occupation: 'Mercenary; former adventurer, student',
			base: '-'
		},
		connections: {
			'group-affiliation': '(As Maverick) Formerly Gene Nation, Cable�s Underground; (as Bolt) formerly New Warriors',
			relatives: 'Robert Bradley (Frank Johnson, father), Marion Bradley (Rose Johnson, mother), Catherine Bradley (Jennifer Johnson, sister)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/257.jpg'
	},
	{
		id: 441,
		name: 'Medusa',
		biography: {
			'full-name': 'Medusalith Amaquelin Boltagon',
			'place-of-birth': 'Island of Attilan, Atlantic Ocean',
			'first-appearance': 'Fantastic Four Vol. 1 #36 (1965)',
			alignment: 'good',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Inhuman',
			eye: 'Green',
			hair: 'Red'
		},
		work: {
			occupation: 'Queen, Royal interpreter',
			base: 'Attilan'
		},
		connections: {
			'group-affiliation': 'Inhumans, Fantastic Four',
			relatives: 'Kobar, La (maternal grandparents), Azur (maternal aunt), Mander (maternal uncle-by-marriage), Quelin (father), Ambur (mother), Crystal (sister), Black Bolt (husband, second cousin), Ahura (son), Karnak (cousin), Triton (cousin), Psynapse (second cousin), Maximus (brother-in-law, second cousin), Ronan the Accuser (brother-in-law), Quicksilver (ex-brother-in-law), Luna (niece)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/96.jpg'
	},
	{
		id: 443,
		name: 'Mephisto',
		biography: {
			'full-name': '-',
			'place-of-birth': 'Hell',
			'first-appearance': '-',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Male',
			race: '-',
			eye: 'White',
			hair: 'Black'
		},
		work: {
			occupation: 'Lord of a realm of Hell',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Hell-lords, Lords of the Splinter Realms; formerly manipulator of the Six-Fingered Hand',
			relatives: 'Blackheart (son), Mephista (daughter); presumptive relationship to other Hell-lords; quasi-paternal relationship to Mikal Drakonmegas (Hellfire) and Daimon (Hellstorm) and Satana Hellstrom; formerly engaged to unidentified demoness'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/1322.jpg'
	},
	{
		id: 469,
		name: 'Monica Dawson',
		biography: {
			'full-name': 'Monica Dawson',
			'place-of-birth': '-',
			'first-appearance': 'Heroes S02E04 - The Kindness of Strangers',
			alignment: 'good',
			publisher: 'NBC - Heroes'
		},
		appearance: {
			gender: 'Female',
			race: '-',
			eye: '-',
			hair: '-'
		},
		work: {
			occupation: 'Fast food service',
			base: 'New Orleans, LA'
		},
		connections: {
			'group-affiliation': '-',
			relatives: 'Nana Dawson (Grandmother), Damon (brother), DL Hawkins (cousin), Niki Sanders (cousin-in-law once removed), Micah Sanders (second cousin)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/942.jpg'
	},
	{
		id: 480,
		name: 'Mystique',
		biography: {
			'full-name': 'Raven Darkholme',
			'place-of-birth': '-',
			'first-appearance': '(as Raven Darkholme) MS. MARVEL #16, (as Mystique) MS. MARVEL #18',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Mutant',
			eye: 'Yellow (without irises)',
			hair: 'Red / Orange'
		},
		work: {
			occupation: 'Special operative for Germany and the United States governments, (former) German Freedom Fighter, special operative in the Weapon X Project Team',
			base: 'Arlington, Virginia'
		},
		connections: {
			'group-affiliation': 'Founder and leader of the third Brotherhood of Evil Mutants, now known as Freedom Force; X-Factor, X-Men',
			relatives: 'Rogue (unofficial foster daughter), Ralph Brickman (husband), Gloria Brickman (daughter), Graydon Creed (son, deceased)'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/817.jpg'
	},
	{
		id: 487,
		name: 'Nebula',
		biography: {
			'full-name': '-',
			'place-of-birth': '-',
			'first-appearance': 'Avengers #257 (July, 1985)',
			alignment: 'bad',
			publisher: 'Marvel Comics'
		},
		appearance: {
			gender: 'Female',
			race: 'Luphomoid',
			eye: 'Blue',
			hair: 'No hair'
		},
		work: {
			occupation: '-',
			base: '-'
		},
		connections: {
			'group-affiliation': 'Graces, United Front, former leader of a mercenary band',
			relatives: '-'
		},
		image: 'https://www.superherodb.com/pictures2/portraits/10/100/10632.jpg'
	},
]

/* ** Skeleton ** *
	{
		id: ,
		name: '',
		biography: {
			'full-name': '',
			'place-of-birth': '',
			'first-appearance': '',
			alignment: '',
			publisher: ''
		},
		appearance: {
			gender: '',
			race: '',
			eye: '',
			hair: ''
		},
		work: {
			occupation: '',
			base: ''
		},
		connections: {
			'group-affiliation': '',
			relatives: ''
		},
		image: ''
	},
*/
