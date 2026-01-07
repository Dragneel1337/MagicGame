import { Header } from './components/Header';
import MagicGame from './components/MagicGame';

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-4">
			<Header />
			<MagicGame />
		</main>
	);
}
