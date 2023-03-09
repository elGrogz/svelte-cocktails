<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import type { Cocktail } from '../types/types';

	export let chosenCocktail: Cocktail;
</script>

<div in:fly={{ x: 200, duration: 2000 }} out:fade class="cocktail-result">
	<h2>{chosenCocktail.strDrink}</h2>
	<img src={chosenCocktail.strDrinkThumb} alt={chosenCocktail.strDrink} width="200" />
</div>

<style>
</style>
