<script lang="ts">
	import ProjectCard from './../lib/components/project-card.svelte';
	import { onMount } from 'svelte';
	import { t, locale, init } from 'svelte-i18n';
	import { projects } from '$lib/projects';
	import usFlag from '$lib/img/flag_us.svg';
	import frFlag from '$lib/img/flag_fr.svg';
	import GitHub from '$lib/img/github-dark.svg';
	import LinkedIn from '$lib/img/linkedin.svg';

	let cursor;
	let activeSection = 'home';
	let lang = 'fr';

	const sections = ['home', 'projects', 'contact'];

	const updateActiveSection = () => {
		const reachedBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

		if (reachedBottom) {
			activeSection = sections[sections.length - 1];
		} else {
			sections.forEach((section) => {
				const element = document.getElementById(section);
				if (element && window.scrollY >= element.offsetTop - 50) {
					activeSection = section;
				}
			});
		}
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
		locale.set(newLang);
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

<div class="">
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
					style={lang === 'fr'
						? 'border-width: 1px; border-color: black; border-radius: 4px'
						: 'opacity: 0.5'}
					on:click={() => setLang('fr')}
				>
					<img src={frFlag} alt="fr-flag" />
				</button>
				<button
					type="button"
					class="flag"
					style={lang === 'en'
						? 'border-width: 1px; border-color: black; border-radius: 4px'
						: 'opacity: 0.5'}
					on:click={() => setLang('en')}
				>
					<img src={usFlag} alt="us-flag" />
				</button>
				<div
					class="absolute bottom-1 rounded-lg left-0 h-1 bg-egoBlue transition-all ease-in-out duration-300"
					bind:this={cursor}
					style="transform: translateX(var(--cursorX)); width: var(--cursorWidth);"
				></div>
			</div>
		</div>
	</div>
	<section id="home" class="w-full flex flex-col justify-center items-center">
		<div class="w-auto flex flex-col justify-center items-center h-screen">
			<h1 class="text-8xl pb-4 font-normal">{$t('title')}</h1>
			<div class="w-full border-1 border-black"></div>
			<h2 class="text-5xl pt-4 font-light">{$t('job')}</h2>
		</div>
		<div class="w-4/5 bio h-4/5">
			<p class="text-xl">
				{@html $t('bio')}
			</p>
			<p class="text-xl py-8">
				{@html $t('education')}
			</p>
			<p class="text-xl">
				{@html $t('contact')}
			</p>
		</div>
	</section>
	<section id="projects" class="pt-80">
		<div class="bg-blackEgo">
			<div class="p-10">
				<h2 class="text-white text-5xl underline font-light pb-8">{$t('projects')}</h2>
				{#each projects as project, index}
					<ProjectCard {project} />
					{#if index < projects.length - 1}
						<hr class="my-4 border-white" />
					{/if}
				{/each}
			</div>
		</div>
	</section>
	<section id="contact" class="flex justify-center items-center py-8">
		<div class="flex justify-center items-center w-full">
			<div class="flex justify-center gap-x-4 w-1/3">
				<a
					href="https://www.linkedin.com/in/luca-deltort/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={LinkedIn} alt="linkedin" class="w-8 h-8" />
				</a>
				<a href="https://github.com/StEgo2103" target="_blank" rel="noopener noreferrer">
					<img src={GitHub} alt="github" class="w-8 h-8" />
				</a>
			</div>
			<div class="flex justify-center w-1/3">
				<!-- <button>Download my CV</button> -->
			</div>
			<div class="flex justify-center w-1/3">
				<form
					class="flex flex-col"
					name="netlify-form-example"
					method="POST"
					netlify-honeypot="bot-field"
					data-netlify="true"
				>
					<input type="hidden" name="form-name" value="netlify-form-example" />
					<input type="text" name="name" placeholder="Name" class="w-80" required />
					<input type="email" name="email" placeholder="Email" class="w-80" required />
					<textarea name="message" placeholder="Message" class="w-80" rows="5" required></textarea>
					<button class="flex justify-start submit" type="submit">{$t('send')}</button>
				</form>
			</div>
		</div>
		ƒ
	</section>
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

	input,
	textarea {
		border: 1px solid black;
		border-radius: 0.5rem;
		padding-left: 0.5rem;
		transition:
			border-color 0.3s ease,
			transform 0.3s ease;
	}

	input:focus,
	textarea:focus,
	input:hover,
	textarea:hover {
		outline: none;
		border-color: #7db9ec;
		transform: translateX(+0.2rem);
	}

	textarea {
		resize: none;
	}

	input {
		margin-bottom: 1rem;
	}

	.submit {
		display: flex;
		justify-content: center;
		background-color: #7db9ec;
		color: #31485d;
		font-weight: 700;
		border: none;
		border-radius: 0.5rem;
		padding: 0.2rem;
		margin-top: 0.4rem;
		width: 5rem;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
		transition:
			background-color 0.3s ease,
			color 0.3s ease,
			transform 0.3s ease;
	}

	.submit:hover {
		background-color: #31485d;
		color: #7db9ec;
		transform: scale(1.2);
	}

	.submit:active {
		transform: scale(0.8);
	}
</style>
