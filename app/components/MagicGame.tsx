'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { GameOverPopup } from './GameOverPopup';

const magicCards = ['dwarf', 'archer', 'mage', 'knight', 'berserker', 'healer', 'thief', 'assassin'];

let timer = '00:00';
let seconds = 0;
let minutes = 0;
let counter = 0;

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
			counter++;
		}
	};

	const handleReset = () => {
		setCards(shuffledMagicCards);
		setFlipped([]);
		setMatched([]);
		counter = 0;
		minutes = 0;
		seconds = 0;
		timer = '00:00';
	};

	const handleTimer = () => {
		setInterval(() => {
			seconds++;
			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
			const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
			const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
			timer = `${formattedMinutes}:${formattedSeconds}`;
		}, 1000);
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
			<div className="mb-6 flex gap-4">
				<div className="w-full flex justify-around bg-accent rounded-lg shadow-lg px-6 py-4 text-center">
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">Moves</h3>
						<p className="text-3xl font-bold mt-1">{counter}</p>
					</div>
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">Time: </h3>
						<p className="text-3xl font-bold mt-1">{timer}</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-2 lg:grid-cols-4 xs:gap-6 perspective-midrange">
				{cards.map((card, index) => (
					<div
						className={`relative h-32 w-32 flex justify-center transform transition-transform duration-300 cursor-pointer hover:scale-105 ${
							flipped.includes(index) || matched.includes(index) ? 'rotate-y-180' : ''
						}`}
						key={index}
						onClick={() => handleFlip(index)}>
						<Image
							className="rounded-lg object-cover"
							src={flipped.includes(index) || matched.includes(index) ? `/img/${card}.jpg` : `/img/front.jpg`}
							fill
							loading="eager"
							alt="Magic Card"
							sizes="true"
						/>
					</div>
				))}
			</div>
			<div className="mt-6 flex justify-center">
				<Button variant="destructive" className="mt-1 text-xl p-6" onClick={handleReset}>
					Reset Game
				</Button>
			</div>
			{gameOver && <GameOverPopup open={gameOver} counter={counter} handleReset={handleReset} />}
		</div>
	);
}
