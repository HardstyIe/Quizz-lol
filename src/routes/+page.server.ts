import { getChampions, getItems } from '$lib/api';

export const load = async ({ fetch }) => {
	return {
		champions: getChampions(fetch),
		items: getItems(fetch)
	};
};
