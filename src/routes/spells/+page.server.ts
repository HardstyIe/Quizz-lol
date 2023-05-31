import { getItems } from '$lib/api';

export const load = async ({ fetch }) => {
	return {
		items: getItems(fetch)
	};
};
