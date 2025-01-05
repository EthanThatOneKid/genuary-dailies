import { default as genuary2022 } from './2022.json';
import { default as genuary2023 } from './2023.json';
import { default as genuary2024 } from './2024.json';
import { default as genuary2025 } from './2025.json';

export function genuaryPrompt(year: number): GenuaryPrompt[] {
	switch (year) {
		case 2022: {
			return genuary2022;
		}

		case 2023: {
			return genuary2023;
		}

		case 2024: {
			return genuary2024;
		}

		case 2025: {
			return genuary2025;
		}

		default: {
			throw new Error('Invalid year');
		}
	}
}

export interface GenuaryPrompt {
	date: number;
	credit: string;
	description: string;
	info?: string;
}
