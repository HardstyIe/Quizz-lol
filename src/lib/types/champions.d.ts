type Version = `${number}.${number}.${number}`;

export interface APIChampions {
	type: string;
	format: string;
	version: Version;
	data: { [key: string]: Champion };
}

export interface Champion {
	version: Version;
	id: string;
	key: string;
	name: string;
	title: string;
	blurb: string;
	info: Info;
	image: Image;
	tags: Tag[];
	partype: string;
	stats: { [key: string]: number };
}

export interface Image {
	full: string;
	sprite: string;
	group: string;
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface Info {
	attack: number;
	defense: number;
	magic: number;
	difficulty: number;
}

export enum Tag {
	Assassin = 'Assassin',
	Fighter = 'Fighter',
	Mage = 'Mage',
	Marksman = 'Marksman',
	Support = 'Support',
	Tank = 'Tank'
}
