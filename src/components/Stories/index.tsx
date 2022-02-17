import faker from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { StoriesProps } from './interfaces';
import { Story } from './Story';

export function Stories () {
	const [stories, setStories] = useState<StoriesProps[]>([])
	useEffect(() => {
		const stories = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),
			id: i,
		}));

		setStories(stories)
	}, [])

	return (
		<div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border
		rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-100'>
			{stories.map((story) => (
				<Story
					key={story.id}
					avatar={story.avatar}
					username={story.username}
				/>
			))}
		</div>
	)
}