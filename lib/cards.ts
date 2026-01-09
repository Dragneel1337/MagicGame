const magicCards = ['dwarf', 'archer', 'mage', 'knight', 'berserker', 'healer', 'thief', 'assassin'];

const magicCardsAll = [
	'dwarf',
	'archer',
	'mage',
	'knight',
	'berserker',
	'healer',
	'thief',
	'assassin',
	'tank',
	'samurai',
	'warlord',
	'paladin',
	'pirate',
	'water mage',
	'bard',
	'alchemist',
	'gunslinger',
	'shadow',
];

export const shuffleMagicCards = () => {
	return [...magicCards, ...magicCards]
		.map(card => ({ card, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ card }) => card);
};
