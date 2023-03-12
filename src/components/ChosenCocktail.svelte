<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { Cocktail } from '../types/types';
	import { getCocktailDetails } from '../utils/api';
	import CocktailDetails from './CocktailDetails.svelte';

	export let chosenCocktail: Cocktail;

	const dispatcher = createEventDispatcher();

	function handleClearCocktail() {
		dispatcher('cocktailsCleared');
	}
</script>

<div transition:fade={{ duration: 1000 }} class="cocktail-result">
	<h1>{chosenCocktail.strDrink}</h1>
	<img src={chosenCocktail.strDrinkThumb} alt={chosenCocktail.strDrink} width="200" />
	<button class="clear-cocktail-button clear-button" on:click={handleClearCocktail}
		>Clear cocktail</button
	>

	{#await getCocktailDetails(chosenCocktail)}
		<p>Loading cocktail details...</p>
	{:then details}
		<CocktailDetails {details} />
	{:catch}
		<p>Could not load cocktail details!</p>
	{/await}
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
