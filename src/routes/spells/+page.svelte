<script lang="ts">
	import CardItem from '$lib/components/CardItem.svelte';

	export let data;
</script>

<main class="w-full h-full">
	<section class="flex flex-wrap">
		<h1>Liste des Items</h1>
		{#each data.items as item}
			{#if item.gold.purchasable}
				<CardItem {item} />
			{/if}
		{/each}
	</section>
</main>
