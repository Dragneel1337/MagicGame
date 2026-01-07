'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

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

const cardSize = 128;

const shuffledMagicCards = [...magicCards, ...magicCards]
	.map(card => ({ card, sort: Math.random() }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ card }) => card);

export default function MagicGame() {
	const [cards, setCards] = useState<string[]>(shuffledMagicCards);
	const [flipped, setFlipped] = useState<number[]>([]);
	const [matched, setMatched] = useState<number[]>([]);

	const gameOver = matched.length === cards.length;

	const handleFlip = (index: number) => {
		if (!flipped.includes(index) && flipped.length < 2) {
			setFlipped([...flipped, index]);
		}
	};

	useEffect(() => {
		const checkMatch = () => {
			const [firstIndex, secondIndex] = flipped;
			if (cards[firstIndex] === cards[secondIndex]) {
				setMatched([...matched, ...flipped]);
			}
			setFlipped([]);
		};
		if (flipped.length === 2) {
			setTimeout(() => {
				checkMatch();
			}, 1000);
		}
	}, [cards, flipped, matched]);

	return (
		<div>
			<h1 className="text-center mb-4 text-3xl">Magic Game</h1>
			{gameOver && (
				<h2 className="mb-4 text-2xl font-bold text-green-600">Congratulations! You've matched all the cards!</h2>
			)}
			<div className="grid grid-cols-4 gap-2 lg:grid-cols-4 xs:gap-6">
				{cards.map((card, index) => (
					<div className="flex justify-center transform cursor-pointer" key={index} onClick={() => handleFlip(index)}>
						{flipped.includes(index) || matched.includes(index) ? (
							<Image
								className="rounded-lg"
								src={`/img/${card}.jpg`}
								width={cardSize}
								height={cardSize}
								alt="Magic Card"
							/>
						) : (
							<Image
								className="rounded-lg"
								src={`/img/front.jpg`}
								width={cardSize}
								height={cardSize}
								loading="eager"
								alt="Magic Card"
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
