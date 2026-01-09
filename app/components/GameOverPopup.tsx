import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function GameOverPopup({
	open,
	counter,
	handleReset,
}: {
	open: boolean;
	counter: number;
	handleReset: () => void;
}) {
	return (
		<AlertDialog open={open}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Congratulations! 🎉</AlertDialogTitle>
					<AlertDialogDescription>
						You've successfully matched all the magic cards in <span className="font-bold text-lg">{counter}</span>{' '}
						moves! Your memory skills are truly magical. Would you like to play again?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction onClick={handleReset}>Play Again</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
