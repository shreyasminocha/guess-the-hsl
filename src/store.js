import {writable} from 'svelte/store';

export const store = writable({
	solution: {
		hue: 25,
		saturation: 18,
		lightness: 24
	},
	history: []
});
