<script lang="ts">
	import type { PageData } from './$types';
	import { generateCalendar } from './calendar';

	let { data }: { data: PageData } = $props();

	const calendar = generateCalendar(data.year, 0);
</script>

<svelte:head>
	<title>@{data.username} - {data.year}</title>
	<meta name="description" content="Genuary dailies for @{data.username} in {data.year}" />
</svelte:head>

<div class="mx-auto max-w-4xl p-4">
	<h2 class="mb-4 text-center text-2xl font-bold">
		<a
			href="https://bsky.app/profile/{data.username}"
			class="text-blue-600"
			target="_blank"
			rel="noopener noreferrer">@{data.username}</a
		>
		{data.year}
	</h2>
	<div class="grid grid-cols-2 gap-2 sm:grid-cols-7">
		{#each ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as day}
			<div class="text-center font-semibold">{day}</div>
		{/each}
		{#each calendar as week}
			{#each week as date}
				{#if date !== null}
					{@const { description } = data.prompts.find((p) => p.date === date)!}
					{@const post = data.posts[date]}
					{@const content = `<span class="text-ellipsis text-sm">${date}<br /><span title="${description}">${description}</span></span>`}
					{#if post}
						<a
							href={post.at(0)}
							target="_blank"
							rel="noopener noreferrer"
							class="block h-32 overflow-hidden border bg-blue-100 p-2"
						>
							{@html content}
						</a>
					{:else}
						<div class="h-32 overflow-hidden border bg-gray-100 p-2">
							{@html content}
						</div>
					{/if}
				{:else}
					<div class="h-32 p-2"></div>
				{/if}
			{/each}
		{/each}
	</div>
</div>
