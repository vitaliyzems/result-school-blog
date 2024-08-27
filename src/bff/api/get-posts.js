import { transformPost } from '../transformers';

export const getPosts = async () =>
	await fetch(`http://localhost:8008/posts`)
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPosts) => loadedPosts.map(transformPost));
