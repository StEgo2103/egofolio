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
			}
		}
	},
	safelist: [
		'underline',
		'rounded-md',
		'p-1',
		'text-epitechBlue',
		'text-lbYellow',
		'hover:text-white',
		'hover:text-white, hover:bg-blackEgo',
		'hover:transition-bg-color',
		'hover:transition-ease',
		'hover:transition-300'
	],
	plugins: []
};
