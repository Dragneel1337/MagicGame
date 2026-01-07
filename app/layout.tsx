import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Magic Game',
	description:
		'Enchanting Magic Memory Game built with React/Next.js: Flip cards in a 5x5 grid to match pairs of mystical fantasy characters like wizards or knights',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.variable} dark`}>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}</body>
		</html>
	);
}
