import { generateDate } from './generateDate';

export const addUser = (login, password) =>
	fetch('http://localhost:8008/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registered_at: generateDate(),
			role_id: 2,
		}),
	});
