import { writable } from 'svelte/store';

export const language = writable("En");

if (typeof localStorage !== 'undefined') {
	language.set(localStorage.getItem('lang') || "En");
}
