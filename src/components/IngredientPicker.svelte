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

<div style="text-align: center;">
	<h2>List of ingredients:</h2>
	<form>
		{#if ingredientsList}
			{#each ingredientsList as ingredient}
				<div class="ingredient-box">
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
</div>

<style>
	form {
		display: flex;
		flex-wrap: wrap;
	}

	.ingredient-box {
		padding: 2px;
		margin: 2px;
		border-color: black;
		border-radius: 10px;
		border: solid 1px;
	}
</style>
