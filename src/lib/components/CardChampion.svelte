<script lang="ts">
	import { PUBLIC_API_URL_IMG } from '$env/static/public';
	import type { Champion } from '$lib/types/champions';

	export let champion: Champion;
</script>

<div>
	<img src="{PUBLIC_API_URL_IMG}/champion/{champion.image.full}" alt="image de {champion.name}" />
	<h1>{champion.name}</h1>
	<p>{champion.title}</p>
</div>
