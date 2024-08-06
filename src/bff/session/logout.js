export const logout = (session) => {
	Object.keys(session).forEach((key) => {
		delete session[key];
	});
};
