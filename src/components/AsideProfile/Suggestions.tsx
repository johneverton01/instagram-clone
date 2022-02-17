import { useEffect, useState } from "react"
import faker from '@faker-js/faker';
import { SuggestionsProps } from "./interfaces";
import { Suggestion } from "./Suggestion";

export function Suggestions() {
	const [suggestions, setSuggestions] = useState<SuggestionsProps[]>([]);
	useEffect(() => {
		const suggestions = [...Array(5)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i
		}));

		setSuggestions(suggestions)
	}, []);

	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between text-sm mb-5">
				<h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
				<button className="text-gray-600 font-semibold">See All</button>
			</div>
			{
				suggestions.map(profile => (
					<Suggestion
						id={profile.id}
						name={profile.name}
						username={profile.username}
						avatar={profile.avatar}
					/>
				))
			}
		</div>
	)
}