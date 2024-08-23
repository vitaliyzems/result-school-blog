import { generateDate } from '../utils';

export const addComment = (userId, postId, content) =>
	fetch('http://localhost:8008/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author_id: userId,
			post_id: postId,
			content,
			published_at: generateDate(),
		}),
	});
