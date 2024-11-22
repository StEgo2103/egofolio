<script lang="ts">
	import type { Project } from '$lib/projects';
	import { t, locale } from 'svelte-i18n';
	import GitHub from '$lib/img/github.svg';
	import Globe from '$lib/img/globe.svg';

	export let project: Project;

	function getIconTech(tech: string) {
		switch (tech) {
			case 'svelte':
				return 'https://skillicons.dev/icons?i=svelte';
			case 'flutter':
				return 'https://skillicons.dev/icons?i=flutter';
			case 'swift':
				return 'https://skillicons.dev/icons?i=swift';
			default:
				return 'https://skillicons.dev/icons?i=html';
		}
	}
</script>

<div class="w-full pb-6"></div>
<div class="flex flex-col gap-y-4">
	<div class="flex justify-between">
		<h2 class="text-2xl font-bold">{project.name}</h2>
		<div class="flex gap-x-5">
			{#if project.url}
				<a href={project.url} target="_blank" rel="noopener noreferrer" class="btn-action">
					<img src={Globe} alt="globe" class="w-6 h-6" />
				</a>
			{/if}
			{#if project.github}
				<a href={project.github} target="_blank" rel="noopener noreferrer" class="btn-action">
					<img src={GitHub} alt="github" class="w-6 h-6" />
				</a>
			{/if}
		</div>
	</div>
	<div class="flex justify-start w-full">
		<p>{$t(project.description)}</p>
	</div>
	<div class="flex justify-end">
		{#each project.technologies as technology}
			<div class="flex gap-x-2">
				<img src={getIconTech(technology)} alt={technology} class="w-6 h-6" />
			</div>
		{/each}
	</div>
</div>

<style>
	h2 {
		color: white;
	}

	a {
		color: white;
	}

	p {
		color: white;
	}

	.btn-action {
		transition: transform 0.2s ease;
	}

	@media (min-width: 768px) {
		.btn-action:hover {
			transform: scale(1.2);
		}
	}
</style>
