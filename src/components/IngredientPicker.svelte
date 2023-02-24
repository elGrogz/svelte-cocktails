<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Ingredient } from '../types/types';

	export let ingredientsList: Ingredient[] | null;
	export let selectedIngredients: string[] = [];

	const dispatcher = createEventDispatcher();

	function sendIngredientEvent() {
		dispatcher('ingredientClicked', {
			selectedIngredients: selectedIngredients
		});
	}
</script>

<!-- {@debug selectedIngredients} -->

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
					on:change={() => {
						sendIngredientEvent();
					}}
				/>
			</div>
		{/each}
	{/if}
</form>

<style>
	form {
		display: flex;
		flex-wrap: wrap;
	}
</style>
