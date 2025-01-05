export interface GenuarySearcher {
	(username: string, year: number): Promise<GenuaryData>;
}

export type GenuaryData = Record<string, string[]>;
