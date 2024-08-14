import { getUsers } from './get-users';

export const getUser = (loginToFind) =>
	getUsers().then((loadedUsers) =>
		loadedUsers.find(({ login }) => login === loginToFind),
	);

// const users = await getUsers();
// return users.find(({ login }) => login === loginToFind);
