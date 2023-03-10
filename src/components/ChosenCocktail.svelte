<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import type { Cocktail } from '../types/types';

	export let chosenCocktail: Cocktail;
</script>

<div
	in:fly={{ x: -300, duration: 1000 }}
	out:fly={{ x: -300, duration: 1000 }}
	class="cocktail-result"
>
	<h1>{chosenCocktail.strDrink}</h1>
	<img src={chosenCocktail.strDrinkThumb} alt={chosenCocktail.strDrink} width="200" />
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
</style>
