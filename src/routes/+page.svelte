<script lang="ts">
	import { goto } from '$app/navigation';
	import LogoAnimate from '$lib/assets/LogoAnimate.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			goto('/home');
		}, 2500);
	});
</script>

<div class="flex h-screen items-center justify-center">
	<LogoAnimate size={1.5} />
</div>
