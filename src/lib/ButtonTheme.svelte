<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let isDark = false;
	let index = 0;

	onMount(() => {
		if (typeof localStorage !== 'undefined') {
			isDark = localStorage.getItem('theme') === 'dark';
			index = isDark ? 1 : 0;
			if (isDark) {
				window.document.body.classList.add('dark');
			}
		}
	});

	function toggle() {
		isDark = !isDark;
		index = isDark ? 1 : 0;

		if (typeof localStorage !== 'undefined') {
			window.document.body.classList.toggle('dark', isDark);
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		}
	}
</script>

<button
	on:click={toggle}
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
		<Moon color={isDark ? 'white' : 'black'} class="m-3" />
	</div>
</button>
