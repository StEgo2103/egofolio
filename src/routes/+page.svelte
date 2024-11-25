<script>
	import { Home, Contact, PencilLine } from 'lucide-svelte';
	import GithubSvg from '$lib/svg/github.svg';
	import LinkedInSvg from '$lib/svg/linkedin.svg';

	import DockIcon from '$lib/components/DockIcon.svelte';
	import Dock from '$lib/components/Dock.svelte';

	import * as Tooltip from '$lib/components/ui/tooltip';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	let navs = {
		navbar: [
			{ label: 'Home', icon: Home, href: '#home' },
			{ label: 'About', icon: Contact, href: '#about' },
			{ label: 'Project', icon: PencilLine, href: '#project' }
		],
		contact: [
			{ label: 'Github', icon: GithubSvg, href: '#' },
			{ label: 'LinkedIn', icon: LinkedInSvg, href: '#' }
		]
	};
</script>

<div>
	<Dock
		direction="middle"
		class="fixed left-0 right-0 top-1"
		let:mouseX
		let:distance
		let:magnification
	>
		{#each navs.navbar as item}
			<a href={item.href}>
				<DockIcon {mouseX} {magnification} {distance}>
					<Tooltip.Root>
						<Tooltip.Trigger
							class="hover:bg-surface mx-0 rounded-full p-3 transition-all duration-200"
						>
							<svelte:component this={item.icon} size={22} strokeWidth={1.2} />
						</Tooltip.Trigger>
						<Tooltip.Content sideOffset={8}>
							<p>{item.label}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</DockIcon>
			</a>
		{/each}
		<Separator orientation="vertical" class="h-full w-[0.6px]" />
		{#each navs.contact as item}
			<a href={item.href}>
				<DockIcon {mouseX} {magnification} {distance}>
					<Tooltip.Root>
						<Tooltip.Trigger class="hover:bg-surface rounded-full transition-all duration-200">
							<img src={item.icon} alt={item.label} class="m-3 h-5 w-5" />
						</Tooltip.Trigger>
						<Tooltip.Content sideOffset={9}>
							<p>{item.label}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</DockIcon>
			</a>
		{/each}
	</Dock>
	<div>
		<section id="home" class="h-screen">Home</section>
		<section id="about" class="h-screen">About</section>
		<section id="project" class="h-screen">Project</section>
	</div>
</div>
