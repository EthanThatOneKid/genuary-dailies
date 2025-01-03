<script>
	const currentYear = new Date().getFullYear();
</script>

<div class="flex min-h-screen flex-col bg-slate-50">
	<header class="border-b bg-white">
		<nav class="container mx-auto flex h-16 items-center justify-between px-4">
			<a href="/" class="text-2xl font-bold text-slate-900 hover:text-slate-700">
				Genuary Dailies
			</a>
			<a
				href="/leaderboard"
				class="px-4 py-2 text-sm font-medium text-slate-900 hover:text-slate-700"
			>
				Leaderboard
			</a>
		</nav>
	</header>

	<main class="container mx-auto flex-1 space-y-12 px-4 py-8">
		<section class="mx-auto max-w-xl space-y-6">
			<h1 class="text-center text-4xl font-bold text-slate-900">Share Your Genuary Art</h1>

			<form method="GET" action="/search" class="space-y-4 rounded-lg bg-white p-6 shadow-sm">
				<div class="space-y-2">
					<label for="username" class="block text-sm font-medium text-slate-700">
						Bluesky Username
					</label>
					<input
						type="text"
						id="username"
						name="username"
						required
						class="w-full rounded-md border border-slate-300 px-3 py-2"
						placeholder="@username.bsky.social"
					/>
				</div>

				<div class="space-y-2">
					<label for="year" class="block text-sm font-medium text-slate-700"> Year </label>
					<input
						type="number"
						id="year"
						name="year"
						value={currentYear}
						required
						class="w-full rounded-md border border-slate-300 px-3 py-2"
					/>
				</div>

				<button
					type="submit"
					class="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
				>
					Search Posts
				</button>
			</form>
		</section>

		<section class="prose prose-slate mx-auto max-w-2xl">
			<h2 class="text-2xl font-bold text-slate-900">What is Genuary?</h2>
			<p class="text-slate-700">
				GENUARY is an artificially generated month of time where we build code that makes beautiful
				things. It's happening during the month of January every year.
			</p>

			<h3 class="text-xl font-semibold text-slate-900">How to Participate</h3>
			<ol class="list-inside list-decimal space-y-2 text-slate-700">
				<li>Create generative art based on the daily prompts</li>
				<li>Share your work on Bluesky with the #genuary hashtag</li>
				<li>Use this site to track and showcase your daily creations</li>
			</ol>

			<p class="text-slate-700">
				Each day has a different prompt. You don't have to follow the prompt exactly. You can
				interpret it however you want. The goal is to create something every day.
			</p>
		</section>
	</main>

	<footer class="border-t bg-white">
		<div class="container mx-auto px-4 py-8">
			<div class="space-y-4 text-center">
				<p class="text-sm text-slate-600">
					View the source code on
					<a
						href="https://github.com/EthanThatOneKid/genuary-dailies"
						class="text-blue-600 hover:underline"
					>
						GitHub
					</a>
				</p>
				<p class="text-sm text-slate-600">
					GENUARY was created by
					<a href="https://genuary.art" class="text-blue-600 hover:underline">
						the GENUARY team
					</a>. This website is not affiliated with the Genuary team.
				</p>
			</div>
		</div>
	</footer>
</div>
