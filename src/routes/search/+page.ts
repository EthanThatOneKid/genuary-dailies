import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	const username = url.searchParams.get('username');
	if (username === null) {
		throw new Error('username is required');
	}

	const yearString = url.searchParams.get('year');
	if (yearString === null) {
		throw new Error('year is required');
	}

	const year = parseInt(yearString);
	return { username, year };
};
