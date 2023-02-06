<script lang="ts">
	import type { Ingredient } from '../types/types';

	export let ingredientsList: Ingredient[] | null;

	export let selectedIngredients: string[] = [];

	// $: console.log('SELECTED INGREDIENTS', selectedIngredients);
</script>

<form>
	List of ingredients
	{#if ingredientsList}
		{#each ingredientsList as ingredient}
			<div>
				{ingredient.strIngredient1}
				<input
					type="checkbox"
					bind:group={selectedIngredients}
					value={ingredient.strIngredient1}
					on:click={() => {
						console.log('clicked: ' + ingredient.strIngredient1);
					}}
				/>
			</div>
		{/each}
	{/if}
</form>

<!-- <button on:click={handleCocktails}>Get Cocktails</button> -->
<!-- <form>
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
</form> -->
