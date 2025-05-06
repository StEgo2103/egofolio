<script lang="ts">
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/Header.svelte';
	import CardProject from '$lib/components/CardProject.svelte';
	import listEducations from '$lib/data/educations';
	import listExperiences from '$lib/data/experiences';
	import { listProjects } from '$lib/data/projects';
	import Footer from '$lib/components/Footer.svelte';
	import { t } from 'svelte-i18n';
</script>

<div transition:fade>
	<div class="w-screen">
		<Header />
	</div>
	<div class="hd:mx-64 mx-4 sm:mx-12 md:mx-32">
		<div id="me" class="mt-20 flex flex-col">
			<div class="flex w-full flex-col">
				<h1 class="text-xl font-medium sm:text-2xl">{$t('aboutTitle')}</h1>
				<div class="flex h-px w-3/5 bg-black"></div>
			</div>
			<div class="mt-5 flex w-full flex-col sm:ml-4">
				<p class="text-lg font-normal sm:text-xl">
					{$t('aboutDescription')}
				</p>
			</div>
			<div
				class="mt-20 flex w-full flex-col justify-between space-y-12 sm:flex-row sm:items-center sm:space-y-0"
			>
				<div class="flex flex-col sm:w-1/2">
					<h1 class="text-xl font-medium">{$t('aboutEducations')}</h1>
					<div class="ml-4">
						{#each listEducations as education}
							<div class="mt-6 flex flex-col">
								<div class="flex h-px w-3/5 bg-black"></div>
								<div class="flex">
									<p class="text-lg font-normal">{education.yearStart} - {education.yearEnd} -</p>
									<a
										href={education.link}
										target="_blank"
										class="ml-1 text-lg font-medium text-myBlueDark underline underline-offset-8 transition-all duration-300 hover:underline-offset-1"
									>
										{education.school}
									</a>
								</div>
								<div class="flex">
									<p class="text-lg font-light">{$t(education.name)}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="flex flex-col sm:w-1/2">
					<h1 class="text-xl font-medium">{$t('aboutExperiences')}</h1>
					<div class="ml-4">
						{#each listExperiences as experience}
							<div class="mt-6 flex flex-col">
								<div class="flex h-px w-3/5 bg-black"></div>
								<div class="flex">
									<p class="text-lg font-normal">{$t(experience.startDate)} - {$t(experience.endDate)} -</p>
									<a
										href={experience.link}
										target="_blank"
										class="ml-1 text-lg font-medium text-myBlueDark underline underline-offset-8 transition-all duration-300 hover:underline-offset-1"
									>
										{experience.company}
									</a>
								</div>
								<div class="flex">
									<p class="text-lg font-light">{$t(experience.job)}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div id="projects" class=" mt-20 flex flex-col justify-center">
			<div class="flex w-full flex-col">
				<h1 class="text-2xl font-medium">{$t('projects')}</h1>
				<div class="flex h-px w-3/5 bg-black"></div>
			</div>
			<div class="mt-5 flex w-full flex-col justify-between">
				{#each listProjects as project}
					<CardProject {project} />
				{/each}
			</div>
		</div>
		<div id="contacts" class="mt-6 sm:mt-20"><Footer /></div>
	</div>
</div>
