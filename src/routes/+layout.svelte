<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { locale } from '../i18n';
	import { language } from '$lib/stores/langStore';

	let { children } = $props();

	locale.set('en');

	onMount(() => {
		language.subscribe((l) => {
			locale.set(l.toLowerCase());
		});
	});
</script>

{@render children()}
