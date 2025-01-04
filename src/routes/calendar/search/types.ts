export interface GenuaryService {
	(username: string, year: number): Promise<GenuaryData>;
}

export type GenuaryData = Record<string, string[]>;
