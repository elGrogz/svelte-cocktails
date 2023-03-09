<script lang="ts">
	import type { Cocktail } from '../types/types';

	export let chosenCocktail: Cocktail;
</script>

<div class="cocktail-result">
	<h2>{chosenCocktail.strDrink}</h2>
	<img src={chosenCocktail.strDrinkThumb} alt={chosenCocktail.strDrink} width="200" />
</div>

<style>
</style>
