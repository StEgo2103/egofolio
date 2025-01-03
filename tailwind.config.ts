import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				myBlueLight: '#3D81CC',
				myBlueDark: '#002FA7',
				mySurfaceLight: '#F1F1F1',
				mySurfaceDark: '#1C1C1C',
				myOnSurfaceLight: '#D8D8D8',
				myOnSurfaceDark: '#353535',
			}
		}
	},

	plugins: []
} satisfies Config;
