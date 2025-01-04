import { TwitterApi } from 'twitter-api-v2';
import type { GenuaryService } from './types';

const twitterClient = new TwitterApi(process.env.TWITTER_API_KEY!).readOnly;

export const getTwitterPosts: GenuaryService = async (username: string, year: number) => {
	// TODO: Fetch twitter posts.
	return {};
};
