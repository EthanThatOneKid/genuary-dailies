import type { PageServerLoad } from './$types';
import { genuaryPrompt } from '$lib/genuary/prompt';
import { getBlueskyPosts } from '$lib/genuary/search';

export const load: PageServerLoad = async ({ url }) => {
	const username = url.searchParams.get('username');
	if (username === null) {
		throw new Error('username is required');
	}

	const yearString = url.searchParams.get('year');
	if (yearString === null) {
		throw new Error('year is required');
	}

	const year = parseInt(yearString);
	if (year < 2022 || year > 2025) {
		throw new Error('Invalid year');
	}

	const prompts = genuaryPrompt(year);

	const platform = url.searchParams.get('platform') ?? 'bluesky';
	const posts = await getPosts(username, year, platform);

	return { username, year, prompts, posts };
};

function getPosts(username: string, year: number, platform: string) {
	switch (platform) {
		case 'bluesky': {
			return getBlueskyPosts(username, year);
		}

		default: {
			throw new Error('Invalid platform');
		}
	}
}
