<script lang="ts">
	import { onDestroy } from 'svelte';
	import { language } from '$lib/stores/langStore';
	import CvEn from '$lib/assets/cv/cv-en.pdf';
	import CvFr from '$lib/assets/cv/cv-fr.pdf';
	import GitHub from '$lib/assets/github.svelte';
	import Linkedin from '$lib/assets/linkedin.svelte';
	import { t } from 'svelte-i18n';

	let lang = 'En';

	const unsubscribe = language.subscribe((l) => {
		lang = l;
	});

	onDestroy(unsubscribe);
</script>

<div class="mb-12 flex h-12 w-full">
	<div class="flex w-1/4 flex-col items-center justify-center space-x-2 sm:flex-row">
		<a
			href="https://www.linkedin.com/in/luca-deltort/"
			target="_blank"
			class="p-2 transition-all duration-300 hover:translate-x-1"
		>
			<Linkedin />
		</a>
		<a
			href="https://github.com/StEgo2103"
			target="_blank"
			class="p-2 transition-all duration-300 hover:translate-x-1"><GitHub /></a
		>
		<a href="mailto:luca@deltort.net" class="p-2 transition-all duration-300 hover:translate-x-1"
			>luca@deltort.net</a
		>
	</div>
	<div class="flex w-2/4 items-center justify-center">
		<p class="text-sm font-light">© 2024 Luca Deltort</p>
	</div>
	<div class="flex w-1/4 justify-end">
		<button
			class="font-normal underline decoration-myBlueDark underline-offset-8 transition-all duration-300 hover:underline-offset-1 active:scale-95"
			type="button"
			on:click={() => window.open(lang == 'Fr' ? CvFr : CvEn, '_blank')}
		>
			{$t('contactDownload')}
		</button>
	</div>
</div>
