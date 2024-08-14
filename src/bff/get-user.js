export const getUser = async (loginToFind) => {
	const loadedUsers = await fetch(
		`http://localhost:8008/users?login=${loginToFind}`,
	).then((loadedUsers) => loadedUsers.json());

	return loadedUsers[0];
};
