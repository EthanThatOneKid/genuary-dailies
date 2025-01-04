# Genuary Dailies

Visualizes Genuary posts of a user on social media.

## Genuary

> GENUARY is an artificially generated month of time where we build code that
> makes beautiful things.
>
> GENUARY happens on all the social media sites at once. If you like, you can
> use hashtags to keep track of things: share your work and tag it with
> **#genuary** and **#genuary2025** and also **#genuary1**, **#genuary2**, etc,
> depending on which prompt it is.
>
> \- [genuary.art](https://genuary.art)

_Genuary Dailies_ is not affiliated with **Genuary** or its creators.

## SvelteHack 2024

_Genuary Dailies_ is a submission for
[SvelteHack 2024](https://hack.sveltesociety.dev/2024) (Oct 19, 2024 through Jan
10, 2025).

## Development

This project uses [SvelteKit](https://svelte.dev/docs/kit/introduction), created
using the command `npx sv create .` using the [Deno](https://deno.com/)
JavaScript runtime.

Once you've created a project and installed dependencies with
`deno task prebuild`, start a development server:

```bash
deno task dev

# or start the server and open the app in a new browser tab
deno task dev -- --open
```

Format with `deno task format` and lint with `deno task lint`. Check Svelte
files with `deno task check`.

You can preview the production build with `deno task preview`.

### Building

To create a production version of your app:

```bash
deno task build
```

### Deployment

[![Deploy](https://github.com/EthanThatOneKid/genuary-dailies/actions/workflows/deploy.yaml/badge.svg)](https://github.com/EthanThatOneKid/genuary-dailies/actions/workflows/deploy.yaml)

_Genuary Dailies_ is deployed to [Deno Deploy](https://deno.com/deploy) using a
GitHub workflow ([source](.github/workflows/deploy.yaml)).

---

Developed with ❄️ by [**@EthanThatOneKid**](https://github.com/EthanThatOneKid)
