export interface PostsProps {
	posts: PostProps[]
}

export interface PostProps {
	id: string;
	username: string;
	userImg: string;
	medias: Media[];
	caption: string;
}

export type Media = {
	id: string;
	media: string;
}