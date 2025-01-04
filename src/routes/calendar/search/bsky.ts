import { XRPC, simpleFetchHandler } from '@atcute/client';
import '@atcute/bluesky/lexicons';
import type { GenuaryService } from './types';

const xrpc = new XRPC({ handler: simpleFetchHandler({ service: 'https://api.bsky.app' }) });

export const getBskyPosts: GenuaryService = async (username: string, year: number) => {
	const { data } = await search(username, year);
	return Object.fromEntries(
		Object.entries(
			Object.groupBy(data.posts, (post) => findDate((post.record as { facets: TagFacet[] }).facets))
		).map(([date, posts]) => [
			date,
			posts?.map((post) => bksyPostURItoURL(username, post.uri)) ?? []
		])
	);
};

async function search(username: string, year: number) {
	const tag = `genuary${year}`;
	return await xrpc.get('app.bsky.feed.searchPosts', {
		params: { q: tag, author: username, tag: [tag] }
	});
}

function bksyPostURItoURL(username: string, uri: string) {
	const match = uri.match(/at:\/\/(did:plc:[a-z0-9]{24})\/app\.bsky\.feed\.post\/([a-z0-9]{13})/);
	if (match === null) {
		throw new Error('Invalid post URI');
	}

	const postID = match[2];
	return `https://bsky.app/profile/${username}/post/${postID}`;
}

function findDate(facets: TagFacet[]): string {
	for (const facet of facets) {
		for (const feature of facet.features) {
			if (feature.$type !== 'app.bsky.richtext.facet#tag') {
				continue;
			}

			if (feature.tag.startsWith('genuary')) {
				if (!/^genuary\d{1,2}$/.test(feature.tag)) {
					continue;
				}

				return feature.tag.slice('genuary'.length);
			}
		}
	}

	throw new Error('No date found');
}

interface TagFacet {
	features: TagFeature[];
}

interface TagFeature {
	$type: 'app.bsky.richtext.facet#tag';
	tag: string;
}
