import { getChampions } from '$lib/api';

export const load = async ({ fetch }) => {
	return {
		champions: getChampions(fetch)
	};
};
