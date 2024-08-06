export const getUsers = () =>
	fetch('http://localhost:8008/users').then((loadedUsers) => loadedUsers.json());
