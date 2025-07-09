<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { t } from 'svelte-i18n';

	export let project: Project;

	let showDescription = false;

	function toggleDescription() {
		showDescription = !showDescription;
	}
</script>

<div class="hd:w-3/4 mb-6 flex h-min w-full flex-col">
	<div
		class="flex h-10 items-center justify-between px-2"
		style="background-color: {project.backgroundColour}; color: {project.textColour};"
	>
		<h1 class="text-xl font-medium">{project.name}</h1>
		<p class="text-sm font-light">{$t(project.tag)}</p>
	</div>
	<div class="px-2">
		<div class="flex flex-col">
			<div class="flex justify-between">
				<div class="flex">
					<p class="mr-1 text-sm font-light">
						{project.technologies.length > 1 ? $t('projectsTechnologies') : $t('projectsTechnology')} :
					</p>
					{#each project.technologies as tech, index}
						<p class="mr-1 text-sm font-light">
							{tech}
							{#if index < project.technologies.length - 1}
								/
							{/if}
						</p>
					{/each}
				</div>
				<div class="flex">
					{#if project.website !== ''}
						<a
							href={project.website}
							target="_blank"
							class="text-sm font-light underline underline-offset-8 transition-all duration-300 hover:underline-offset-1"
						>
							{$t('projectsWebsite')}
						</a>
					{/if}
					{#if project.github !== ''}
						<a
							href={project.github}
							target="_blank"
							class="ml-2 text-sm font-light underline underline-offset-8 transition-all duration-300 hover:underline-offset-1"
						>
							GitHub
						</a>
					{/if}
				</div>
			</div>

			<div class="">
				<button
					on:click={toggleDescription}
					class="text-sm font-normal transition-all duration-300 hover:text-myBlueDark"
				>
					{showDescription ? $t('projectsLess') : $t('projectsMore')}
				</button>
			</div>

			{#if showDescription}
				<div
					class="rounded-m mt-2 p-2 text-sm font-normal"
					style="background-color: {project.backgroundColour}; color: {project.textColour};"
				>
					{@html $t(project.description)}
				</div>
			{/if}
		</div>
	</div>
</div>
