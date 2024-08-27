import { transformPost } from '../transformers';

export const getPosts = async (page, limit) =>
	await fetch(`http://localhost:8008/posts?_page=${page}&_limit=${limit}`)
		.then((loadedPosts) =>
			Promise.all([loadedPosts.json(), loadedPosts.headers.get('link')]),
		)
		.then(([loadedPosts, links]) => ({
			posts: loadedPosts.map(transformPost),
			links,
		}));
