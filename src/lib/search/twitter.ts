import { env } from '$env/dynamic/private';
import { Client } from 'twitter-api-sdk';
import type { GenuarySearcher } from './searcher';

const twitterClient = new Client(env.TWITTER_API_KEY!);

export const getTwitterPosts: GenuarySearcher = async (username: string, year: number) => {
	const posts = await twitterClient.tweets.tweetsFullarchiveSearch({
		query: `from:${username} is:tweet #genuary${year}`
	});

	// TODO: Get the actual posts.
	console.dir(posts, { depth: null });
	return {};
};
