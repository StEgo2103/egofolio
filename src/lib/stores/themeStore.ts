import { writable } from 'svelte/store';

export const isDark = writable(false);

if (typeof localStorage !== 'undefined') {
	isDark.set(localStorage.getItem('theme') === 'dark');
}