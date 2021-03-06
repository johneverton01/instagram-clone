import {SuggestionsProps} from './interfaces'

export function Suggestion({ id, avatar, name, username }: SuggestionsProps) {
	return (
		<div key={id} className="flex items-center justify-between mt-3">
			<img
				className="w-10 h-10 rounded-full border p-[2px]"
				src={avatar}
				alt={name}
			/>
			<div className="flex-1 ml-4">
				<h2 className="font-semibold text-sm">{username}</h2>
				<h3 className="text-xs text-gray-400">New on Instagram</h3>
			</div>
				<button className="text-blue-400 text-sm text-semibold">Follow</button>
		</div>
	)
}