import { HeartIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, UsersIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { ProfileProps } from './interfaces'

export function Notification ({name, profile}: ProfileProps) {
	return (
		<div className="flex items-center justify-end space-x-4">
			<HomeIcon className="navBtn" />
			<MenuIcon className="h-6 md:hidden cursor-pointer" />

			<div className="relative navBtn" >
				<PaperAirplaneIcon className="navBtn rotate-45" />
				<span className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500
				rounded-full flex items-center
				justify-center animate-pulse text-white">3</span>
			</div>
			<PlusCircleIcon className="navBtn" />
			<UsersIcon className="navBtn" />
			<HeartIcon className="navBtn" />

			<img alt={name} src={profile} className="h-10 rounded-full cursor-pointer" />
		</div>
	)
}