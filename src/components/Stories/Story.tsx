import { StoriesProps } from './interfaces';

export function Story ({id, username, avatar}: StoriesProps) {
	return (
		<div key={id}>
			<img
				className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
				object-contain cursor-pointer hover:scale-110
				transition transform duration-200 ease-out"
				src={avatar}
				alt={username}
			/>
			<p className="text-xs w-14 truncate text-center">{username}</p>
		</div>
	)
}