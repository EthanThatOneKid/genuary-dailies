import type { PageLoad } from './$types';
import { getBskyPosts } from '$lib/search/bsky';
import { getTwitterPosts } from '$lib/search/twitter';

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

	const platform = url.searchParams.get('platform') ?? 'bsky';
	const posts = await getPosts(username, year, platform);

	return { username, year, posts };
};

function getPosts(username: string, year: number, platform: string) {
	switch (platform) {
		case 'bsky': {
			return getBskyPosts(username, year);
		}

		case 'twitter': {
			return getTwitterPosts(username, year);
		}

		default: {
			throw new Error('Invalid platform');
		}
	}
}
