import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Search } from "./Search";

export function Header() {
	return (
		<header className="shadow-sm border-b bg-white sticky top-0 z-50" >
			<div className="flex justify-between max-w-6xl mx-5 py-3 lg:mx-auto">
				<Logo />
				<Search />
				<Notification
					name="John Everton"
					profile="https://github.com/johneverton01.png"
				/>
			</div>
		</header>
	);
}