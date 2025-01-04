import type { PageLoad } from './$types';
import { getBskyPosts } from './search/bsky';

export const load: PageLoad = async ({ url }) => {
	const username = url.searchParams.get('username');
	if (username === null) {
		throw new Error('username is required');
	}

	const yearString = url.searchParams.get('year');
	if (yearString === null) {
		throw new Error('year is required');
	}

	const year = parseInt(yearString);
	const bskyPosts = await getBskyPosts(username, year);
	return { username, year, bskyPosts };
};
