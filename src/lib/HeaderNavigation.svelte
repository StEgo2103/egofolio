<script lang="ts">
	export let name: string;
	export let route: string;
</script>

<a
	href={route}
	class="hover:bg-myOnSurfaceLight dark:hover:bg-myOnSurfaceDark rounded-full p-2 text-xl text-black transition-all duration-300 ease-in-out active:scale-95 dark:text-white"
	>{name}</a
>
