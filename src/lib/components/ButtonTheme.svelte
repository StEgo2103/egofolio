<script lang="ts">
	import { onMount } from 'svelte';
	import { Moon, Sun } from 'lucide-svelte';
	import { isDark } from '$lib/stores/themeStore';

	let index = 0;

	onMount(() => {
		isDark.subscribe((dark) => {
			index = dark ? 1 : 0;
		});
	});

	function toggleTheme() {
		isDark.update((dark) => {
			const newTheme = !dark;
			localStorage.setItem('theme', newTheme ? 'dark' : 'light');
			index = newTheme ? 1 : 0;
			return newTheme;
		});
	}
</script>

<button
	on:click={toggleTheme}
	class="flex h-min space-x-3 rounded-full border-2 border-black p-1 transition-all duration-300 ease-in-out dark:border-white"
>
	<div
		class="transform rounded-full transition-all duration-300 ease-in-out"
		class:bg-myBlueDark={index === 0}
	>
		<Sun color="white" class="m-3" />
	</div>

	<div
		class="transform rounded-full transition-all duration-300 ease-in-out"
		class:bg-myBlueDark={index === 1}
	>
		<Moon color={index === 1 ? 'white' : 'black'} class="m-3" />
	</div>
</button>
