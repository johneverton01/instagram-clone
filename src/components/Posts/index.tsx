import { Post } from './Post';

const fakePost = [
		{
			id: '134',
			username: 'John',
			userImg: 'https://github.com/johneverton01.png',
			medias: [{ id: '756', media: 'https://github.com/johneverton01.png'}],
			caption: 'Fake description',
		},
		{
			id: '253',
			username: 'John',
			userImg: 'https://github.com/johneverton01.png',
			medias: [{ id: '342', media: 'https://github.com/johneverton01.png'}],
			caption: 'Fake description',
		}
];




export function Posts () {
	return (
		<div>
			{fakePost.map(post => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					medias={post.medias}
					caption={post.caption}
				/>
			))}
		</div>
	)
}