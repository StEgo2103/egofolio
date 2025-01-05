<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { t, locale } from 'svelte-i18n';
	import Logo from '$lib/assets/Logo.svelte';
	import HeaderNavigation from './HeaderNavigation.svelte';
	import { language } from '$lib/stores/langStore';

	var lang = 'En';

	onMount(() => {
		language.subscribe((l) => {
			lang = l;
			locale.set(l.toLowerCase());
		});
	});

	function changeLang() {
		language.update((l) => {
			const newLang = l === 'Fr' ? 'En' : 'Fr';
			localStorage.setItem('lang', newLang);
			lang = newLang;
			locale.set(newLang.toLowerCase());
			return newLang;
		});
	}
</script>

<div class="flex flex-col">
	<div class="m-3 flex h-min justify-between">
		<div class="flex w-1/6 justify-center">
			<button type="button" on:click={() => goto('/')}>
				<Logo size={0.5} />
			</button>
		</div>
		<div class="flex w-4/6 items-center justify-center space-x-1 sm:justify-end">
			<HeaderNavigation name={$t('about')} route={'#me'} />
			<HeaderNavigation name={$t('projects')} route={'#projects'} />
			<HeaderNavigation name={$t('contact')} route={'#contacts'} />
		</div>
		<div class="flex w-1/6 justify-center">
			<button
				class="font-normal hover:underline hover:decoration-myBlueDark hover:underline-offset-8 active:scale-95"
				type="button"
				on:click={changeLang}
			>
				{lang}
			</button>
		</div>
	</div>
	<div class="flex h-px bg-black"></div>
</div>
