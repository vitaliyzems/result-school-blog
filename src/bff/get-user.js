import { getUsers } from './get-users';

export const getUser = async (loginToFind) =>
	await getUsers().find(({ login }) => login === loginToFind);
