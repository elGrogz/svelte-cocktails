<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { Cocktail } from '../types/types';

	export let chosenCocktail: Cocktail;

	const dispatcher = createEventDispatcher();

	function handleClearCocktail() {
		dispatcher('cocktailsCleared');
	}
</script>

<div transition:fade={{ duration: 1000 }} class="cocktail-result">
	<h1>{chosenCocktail.strDrink}</h1>
	<img src={chosenCocktail.strDrinkThumb} alt={chosenCocktail.strDrink} width="200" />
	<button class="clear-cocktail-button" on:click={handleClearCocktail}>Clear cocktail</button>
</div>

<style>
	.cocktail-result {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* transform: translateY(50px); */
	}

	h1 {
		font-family: 'Satisfy', 'Brush Script MT';
		font-size: xx-large;
	}

	.clear-cocktail-button {
		margin-top: 20px;
	}

	/* in:fly={{ x: -300, duration: 1000 }}
	out:fly={{ x: -300, duration: 1000 }} */
</style>
