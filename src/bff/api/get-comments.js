import { transformComment } from '../transformers';

export const getComments = async (postId) =>
	await fetch(`http://localhost:8008/comments?post_id=${postId}`)
		.then((loadedComments) => loadedComments.json())
		.then((loadedComments) => loadedComments.map(transformComment));
