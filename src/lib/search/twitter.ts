import { Client } from 'twitter-api-sdk';
import type { GenuarySearcher } from './searcher';

const twitterClient = new Client(process.env.TWITTER_API_KEY!);

export const getTwitterPosts: GenuarySearcher = async (username: string, year: number) => {
	// TODO: Fetch twitter posts.
	const posts = await twitterClient.tweets.tweetsFullarchiveSearch({
		query: `from:${username} is:tweet #genuary${year}`
	});
	console.log(posts);
	return {};
};
