/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				egoBlue: '#7db9ec',
				epitechBlue: '#3f8fcd',
				lbYellow: '#e2ad43',
				blackEgo: '#1f2227'
			},
			transitionProperty: {
				'bg-color': 'background-color'
			},
			transitionTimingFunction: {
				ease: 'ease'
			},
			transitionDuration: {
				300: '300ms'
			},
			screens: {
				mb: '375px',
				hd: '1920px',
				'2k': '2048px',
				'4k': '3840px'
			}
		}
	},
	safelist: [
		'underline',
		'rounded-md',
		'p-1',
		'text-epitechBlue',
		'text-lbYellow',
		'md:hover:text-white',
		'md:hover:text-white',
		'md:hover:bg-blackEgo',
		'md:hover:transition-bg-color',
		'md:hover:transition-ease',
		'md:hover:transition-300'
	],
	plugins: []
};
