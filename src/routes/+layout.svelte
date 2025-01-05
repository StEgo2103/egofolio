<script lang="ts">
	import '../app.css';
	import { locale } from '../i18n';

	let { children } = $props();

	locale.set('en');
</script>

{@render children()}
