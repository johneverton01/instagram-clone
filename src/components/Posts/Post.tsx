import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { Comments } from '../Comments';
import { InputComments } from '../InputComments';
import { PostBottons } from '../PostBottons';
import {PostProps} from './interfaces';

export function Post ({ id, username, userImg, medias, caption } : PostProps) {
	return (
		<div className="bg-white my-7 border rounded-sm">
			<div key={id} className="flex items-center p-5">
				<img
					className="rounded-full h-12 object-contain border p-1 mr-3"
					src={userImg}
					alt={username}
				/>
				<span className="flex-1 font-bold">{username}</span>
				<DotsHorizontalIcon className="h-5" />
				</div>
				<div>
					{medias.map(medias => (
						<img
							className="object-cover w-full"
							key={medias.id}
							src={medias.media}
						/>
					))}
				</div>
				<PostBottons />
				<p className="p-5 truncate">
					<span className="font-bold mr-1">{username} </span>
					{caption}
				</p>
				<Comments />
				<InputComments />


		</div>
	)
}