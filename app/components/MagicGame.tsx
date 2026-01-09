'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { GameOverPopup } from './GameOverPopup';
import { shuffleMagicCards } from '@/lib/cards';

export default function MagicGame({ shuffledMagicCards }: { shuffledMagicCards: string[] }) {
	const [cards, setCards] = useState<string[]>(shuffledMagicCards);
	const [flipped, setFlipped] = useState<number[]>([]);
	const [matched, setMatched] = useState<number[]>([]);
	const [count, setCount] = useState(0);
	const [secondsElapsed, setSecondsElapsed] = useState<number>(0);

	const gameOver = matched.length === cards.length;
	const minutes = Math.floor(secondsElapsed / 60);
	const seconds = secondsElapsed % 60;

	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const handleFlip = (index: number) => {
		if (!flipped.includes(index) && flipped.length < 2) {
			setFlipped([...flipped, index]);
			setCount(prevCount => prevCount + 1);
		}
	};

	const handleReset = () => {
		setCards(shuffleMagicCards());
		setFlipped([]);
		setMatched([]);
		setCount(0);
		setSecondsElapsed(0);
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
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
			}, 800);
		}
	}, [cards, flipped, matched]);

	useEffect(() => {
		if (count === 1 && timerRef.current === null) {
			timerRef.current = setInterval(() => {
				setSecondsElapsed(prev => prev + 1);
			}, 1000);
		}
	}, [count]);

	useEffect(() => {
		if (gameOver && timerRef.current) {
			clearInterval(timerRef.current);
		}
	}, [gameOver]);

	return (
		<div>
			<div className="mb-6 flex gap-4">
				<div className="w-full flex justify-around bg-accent rounded-lg shadow-lg px-6 py-4 text-center">
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">Moves</h3>
						<p className="text-3xl font-bold mt-1">{count}</p>
					</div>
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">Time: </h3>
						<p className="text-3xl font-bold mt-1">
							{minutes}:{seconds.toString().padStart(2, '0')}
						</p>
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
				<Button variant="destructive" className="mt-1 text-xl p-6 cursor-pointer" onClick={handleReset}>
					Reset Game
				</Button>
			</div>
			{gameOver && <GameOverPopup open={gameOver} counter={count} handleReset={handleReset} />}
		</div>
	);
}
