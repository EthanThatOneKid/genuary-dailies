import type { PageServerLoad } from './$types';
import type { GenuaryPrompt } from '$lib/genuary/prompt';
import { getBskyPosts } from '$lib/search/bsky';
import { getTwitterPosts } from '$lib/search/twitter';
import genuary2022 from '$lib/genuary/2022.json';
import genuary2023 from '$lib/genuary/2023.json';
import genuary2024 from '$lib/genuary/2024.json';
import genuary2025 from '$lib/genuary/2025.json';

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

	const prompts: GenuaryPrompt[] =
		year === 2022
			? genuary2022
			: year === 2023
				? genuary2023
				: year === 2024
					? genuary2024
					: year === 2025
						? genuary2025
						: [];

	const platform = url.searchParams.get('platform') ?? 'bsky';
	const posts = await getPosts(username, year, platform);

	return { username, year, prompts, posts };
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
