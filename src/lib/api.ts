import { PUBLIC_API_URL_DATA } from '$env/static/public';
import type { APIChampions } from './types/champions';
import type { APIItems } from './types/items';

export async function getChampions(fetchFn: typeof fetch) {
	const result: APIChampions = await fetchFn(`${PUBLIC_API_URL_DATA}/champion.json`).then((r) =>
		r.json()
	);
	const champions = Object.values(result.data);

	return champions;
}

export async function getItems(fetchFn: typeof fetch) {
	const result: APIItems = await fetchFn(`${PUBLIC_API_URL_DATA}/item.json`).then((r) => r.json());
	const items = Object.values(result.data);

	return items;
}
