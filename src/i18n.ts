import { init, register, locale } from 'svelte-i18n';

register('en', () => import('./lib/locales/en.json'));
register('fr', () => import('./lib/locales/fr.json'));

init({
	fallbackLocale: 'en',
	initialLocale: 'en'
});

export { locale };
