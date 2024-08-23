import { transformSession } from '../transformers';

export const getSession = (hash) =>
	fetch(`http://localhost:8008/sessions?hash=${hash}`)
		.then((loadedSession) => loadedSession.json())
		.then(([loadedSession]) => loadedSession && transformSession(loadedSession));
