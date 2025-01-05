import type { PageServerLoad } from './$types';
import type { GenuaryPrompt } from '$lib/genuary/prompt';
import { genuaryPrompt } from '$lib/genuary/prompt';
import { getBlueskyPosts, getTwitterPosts } from '$lib/genuary/search';

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

	const prompts: GenuaryPrompt[] = genuaryPrompt(year);
	const platform = url.searchParams.get('platform') ?? 'bluesky';
	const posts = await getPosts(username, year, platform);

	return { username, year, prompts, posts };
};

function getPosts(username: string, year: number, platform: string) {
	switch (platform) {
		case 'bluesky': {
			return getBlueskyPosts(username, year);
		}

		case 'twitter': {
			return getTwitterPosts(username, year);
		}

		default: {
			throw new Error('Invalid platform');
		}
	}
}
