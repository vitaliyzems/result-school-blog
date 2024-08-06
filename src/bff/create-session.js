import { logout, removeComment } from './session';
import { ROLE } from '../constants';

export const createSession = (roleId) => {
	const session = {
		logout,
	};

	switch (roleId) {
		case ROLE.ADMIN:
			session.removeComment = removeComment;
			break;
		case ROLE.MODERATOR:
			session.removeComment = removeComment;
			break;
		case ROLE.READER:
			break;
		default:
		// Ничего не делать
	}
	if (roleId === 2) {
	}

	return session;
};
