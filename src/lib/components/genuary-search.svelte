<script lang="ts">
	const originalYear = 2022;
	const currentYear = new Date().getFullYear();

	let props: { username?: string; year?: number } = $props();
</script>

<section class="mx-auto max-w-xl space-y-6">
	<h1 class="text-center text-4xl font-bold text-slate-900">Genuary Dailies</h1>

	<form method="GET" action="/calendar" class="space-y-4 rounded-lg bg-white p-6 shadow-sm">
		<div class="space-y-2">
			<div
				class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
			>
				<div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">@</div>
				<input
					type="text"
					name="username"
					id="username"
					class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
					placeholder="username.bsky.social"
					minlength="1"
					value={props.username ?? ''}
				/>
				<div class="grid shrink-0 grid-cols-1 focus-within:relative">
					<select
						id="year"
						name="year"
						aria-label="Year"
						class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						value={props.year ?? currentYear}
					>
						{#each Array(currentYear - originalYear + 1)
							.fill(0)
							.map((_, i) => currentYear - i) as year}
							<option value={year}>{year}</option>
						{/each}
					</select>
					<svg
						class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
						viewBox="0 0 16 16"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							fill-rule="evenodd"
							d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</div>

			<button
				type="submit"
				class="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-blue-700"
			>
				Search Posts
			</button>
		</div>
	</form>
</section>
