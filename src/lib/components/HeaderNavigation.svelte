<script lang="ts">
	export let name: string;
	export let route: string;
</script>

<a
	href={route}
	class="rounded-full p-2 text-lg font-light hover:underline hover:decoration-myBlueDark hover:underline-offset-8 active:scale-95"
	>{name}</a
>
