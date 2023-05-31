<script lang="ts">
	import CardChampion from '$lib/components/CardChampion.svelte';

	export let data;
</script>

<main class="w-full h-full">
	<section class="flex flex-wrap">
		<h1>Liste des Personnage</h1>
		{#each data.champions as champion}
			<CardChampion {champion} />
		{/each}
	</section>
</main>
