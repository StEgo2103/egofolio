<script lang="ts">
	import { onMount } from 'svelte';
	import usFlag from '$lib/img/flag_us.svg';
	import frFlag from '$lib/img/flag_fr.svg';

	let cursor;
	let activeSection = 'home';
	let lang = 'fr';

	const sections = ['home', 'projects', 'contact'];

	const updateActiveSection = () => {
		sections.forEach((section) => {
			const element = document.getElementById(section);
			if (element && window.scrollY >= element.offsetTop - 50) {
				activeSection = section;
			}
		});
	};

	const updateCursor = () => {
		const activeLink = document.querySelector(`.navbar.active`);
		if (activeLink) {
			const linkRect = activeLink.getBoundingClientRect();
			document.documentElement.style.setProperty(
				'--cursorX',
				`${(activeLink as HTMLElement).offsetLeft}px`
			);
			document.documentElement.style.setProperty('--cursorWidth', `${linkRect.width}px`);
		}
	};

	const setLang = (newLang: string) => {
		if (newLang === lang) return;
		lang = newLang;
	};

	onMount(() => {
		window.addEventListener('scroll', updateActiveSection);
		window.addEventListener('resize', updateActiveSection);
		updateActiveSection();
		updateCursor();
		window.addEventListener('scroll', () => {
			updateActiveSection();
			updateCursor();
		});
		return () => {
			window.removeEventListener('scroll', updateActiveSection);
			window.removeEventListener('resize', updateActiveSection);
		};
	});
</script>

<div class="mx-10">
	<div class="fixed right-10">
		<div class="flex justify-end">
			<div class="flex gap-x-5 border-1 border-black bg-white p-3 mt-5 rounded-xl relative">
				<a class="navbar" href="#home" class:active={activeSection === 'home'}>Home</a>
				<a class="navbar" href="#projects" class:active={activeSection === 'projects'}>Projects</a>
				<a class="navbar" href="#contact" class:active={activeSection === 'contact'}>Contact</a>
				<div class="border-l-1 border-black h-auto"></div>
				<button
					type="button"
					class="flag"
					style={lang === 'fr' ? 'border-width: 1px; border-color: black; border-radius: 4px' : ''}
					on:click={() => setLang('fr')}
				>
					<img src={frFlag} alt="fr flag" />
				</button>
				<button
					type="button"
					class="flag"
					style={lang === 'en' ? 'border-width: 1px; border-color: black; border-radius: 4px' : ''}
					on:click={() => setLang('en')}
				>
					<img src={usFlag} alt="us flag" />
				</button>
				<div
					class="absolute bottom-1 rounded-lg left-0 h-1 bg-egoBlue transition-all ease-in-out duration-300"
					bind:this={cursor}
					style="transform: translateX(var(--cursorX)); width: var(--cursorWidth);"
				></div>
			</div>
		</div>
	</div>
	<section id="home" class="flex justify-center items-center h-screen">
		<div class="w-auto flex flex-col items-center">
			<h1 class="text-8xl pb-4 font-normal">Hey 👋, I'm Luca</h1>
			<div class="w-full border-1 border-black"></div>
			<h2 class="text-5xl pt-4 font-light">Web & Mobile Developer</h2>
		</div>
	</section>
	<section id="projects" class="flex items-center h-screen">Projects Section</section>
	<section id="contact" class="flex items-center h-screen">Contact Section</section>
</div>

<style lang="postcss">
	.border-l-1 {
		border-left-width: 1px;
	}

	.border-1 {
		border-width: 1px;
	}

	a {
		position: relative;
		transition: transform 0.3s ease;
	}

	a:hover {
		transform: translateY(-4px) scale(1.1);
	}

	.flag {
		transition: transform 0.3s ease;
	}

	.flag:hover {
		transform: scale(1.1);
	}
</style>
