import { MiniProfile } from "./MiniProfile";
import { Suggestions } from "./Suggestions";

export function AsideProfile () {
	return (
		<section className="hidden xl:inline-grid md:col-span-1">
			<div className="fixed">
				<MiniProfile />
				<Suggestions />
			</div>
		</section>
	)
}