<script lang="ts">
	import { PUBLIC_API_URL_IMG } from '$env/static/public';
	import type { Item } from '$lib/types/items';

	export let item: Item;
</script>

<div>
	<img src="{PUBLIC_API_URL_IMG}/item/{item.image.full}" alt="image de {item.name}" />
	<h1>{item.name.replace(/<br>.*|<[\/\w]+>/g, '')}</h1>
	<p>{item.gold.total }</p>
</div>
