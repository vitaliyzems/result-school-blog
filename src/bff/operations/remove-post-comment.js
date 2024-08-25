import { deleteComment, getComments, getPost, getUsers } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removePostComment = async (hash, postId, id) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	await deleteComment(id);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	const users = await getUsers();

	const commentsWithAuthor = comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user.login,
		};
	});

	return {
		error: null,
		res: { ...post, comments: commentsWithAuthor },
	};
};
