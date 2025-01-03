<script lang="ts">
	import ButtonTheme from './ButtonTheme.svelte';
	import HeaderNavigation from './HeaderNavigation.svelte';
</script>

<div
	class="fixed m-3 flex h-min w-screen justify-between rounded-full bg-mySurfaceLight bg-opacity-70 dark:bg-mySurfaceDark"
>
	<div class="w-1/6">
		<ButtonTheme />
	</div>
	<div class="flex w-2/6 items-center justify-between">
		<HeaderNavigation name={'Home'} route={'#me'} />
		<HeaderNavigation name={'Projects'} route={'#projects'} />
		<HeaderNavigation name={'Contacts'} route={'#contacts'} />
	</div>
	<div class="w-1/6"></div>
</div>
