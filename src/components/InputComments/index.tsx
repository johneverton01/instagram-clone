import { EmojiHappyIcon } from "@heroicons/react/outline";

export function InputComments () {
	return (
		<form className="flex items-center p-4">
			<EmojiHappyIcon className="h-7" />
			<input
				type="text"
				className="border-none flex-1 focus:ring-0"
				placeholder="Adicione um comentário..."
			/>
			<button
				type="submit"
				className="font-semibold text-blue-400"
			>Publicar</button>
		</form>
	)
}