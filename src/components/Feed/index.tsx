import { Posts } from "../Posts";
import { Stories } from "../Stories";

export function Feed() {
	return (
		<section className="col-span-2">
			<Stories />
			<Posts />
		</section>
	)
}