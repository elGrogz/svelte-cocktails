<script lang="ts">
	import type { Ingredient } from '../types/types';
	export let ingredientsList: Ingredient[] | null;
	let selectedIngredients: string[] = [];
</script>

<form>
	List of ingredients
	<select multiple bind:value={selectedIngredients}>
		{#if ingredientsList}
			{#each ingredientsList as ingredient}
				<option
					value={ingredient.strIngredient1}
					on:click={() => {
						console.log('clicked: ' + ingredient.strIngredient1);
					}}>{ingredient.strIngredient1}</option
				>
			{/each}
		{/if}
	</select>
</form>
<button on:click={handleCocktails}>Get Cocktails</button>
