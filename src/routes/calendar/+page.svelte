<script lang="ts">
	import type { PageData } from './$types';
	import GenuarySearch from '$lib/components/genuary-search.svelte';
	import { generateCalendar } from './calendar';

	let { data }: { data: PageData } = $props();

	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const calendar = generateCalendar(data.year, 0);
</script>

<svelte:head>
	<title>{data.username} | Genuary Dailies {data.year}</title>
	<meta
		name="description"
		content="Visualize daily Genuary posts of {data.username} in {data.year}."
	/></svelte:head
>

<div class="mx-auto max-w-4xl space-y-4 p-4">
	<GenuarySearch username={data.username} year={data.year} />

	<div class="grid grid-cols-2 gap-2 sm:grid-cols-7">
		{#each days as day}
			<div class="hidden text-center font-semibold sm:block">{day}</div>
		{/each}

		{#each calendar as week}
			{#each week as date, dayIndex}
				{#if date !== null}
					{@const { description } = data.prompts.find((p) => p.date === date)!}
					{@const post = data.posts[date]}
					{@const content = `<span class="text-ellipsis text-sm"><b>${date}</b><br><span title="${description}">${description}</span></span>`}
					{#if post}
						<a
							href={post.at(0)}
							target="_blank"
							rel="noopener noreferrer"
							class="block h-32 overflow-hidden border bg-blue-100 p-2"
						>
							<span class="block font-semibold sm:hidden">{days[dayIndex]}</span>
							{@html content}
						</a>
					{:else}
						<div class="h-32 overflow-hidden border bg-gray-100 p-2">
							<span class="block font-semibold sm:hidden">{days[dayIndex]}</span>
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
