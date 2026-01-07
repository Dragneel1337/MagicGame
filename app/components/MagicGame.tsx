'use client';

import { useState } from 'react';

const magicCards = [
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

const shuffledMagicCards = magicCards
	.map(card => ({ card, sort: Math.random() }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ card }) => card);

export default function MagicGame() {
	const [cards, setCards] = useState<string[]>(shuffledMagicCards);
	return (
		<div className="grid grid-cols-4">
			{cards.map((card, index) => (
				<div></div>
			))}
		</div>
	);
}
