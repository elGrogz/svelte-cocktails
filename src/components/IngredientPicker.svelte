<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Ingredient } from '../types/types';

	let ingredientsDropdownOpened = false;
	export let ingredientsList: Ingredient[] | null;
	export let selectedIngredients: string[] = [];

	function handleListIngredientsClick() {
		ingredientsDropdownOpened = !ingredientsDropdownOpened;
	}

	const dispatcher = createEventDispatcher();

	function sendIngredientEvent() {
		dispatcher('ingredientClicked', {
			selectedIngredients: selectedIngredients
		});
	}

	function handleIngredientClick(ingredient: Ingredient) {
		console.log('ingredient: ', ingredient.strIngredient1);
		if (selectedIngredients?.includes(ingredient.strIngredient1)) {
			const ingredientIndex = selectedIngredients.indexOf(ingredient.strIngredient1);
			selectedIngredients.splice(ingredientIndex, 1);
			selectedIngredients = selectedIngredients;
		} else {
			selectedIngredients = [...selectedIngredients, ingredient.strIngredient1];
		}

		sendIngredientEvent();
	}
</script>

<!-- {@debug selectedIngredients} -->

<!-- // SEARCH BAR LOL -->
<!-- // CLEAR COCKTAILS BUTTON -->

<div class="main-ingredients-container">
	<button class="ingredient-dropdown-button" on:click={handleListIngredientsClick}
		>List of ingredients</button
	>

	{#if ingredientsDropdownOpened && ingredientsList}
		<div class="ingredients-list">
			{#each ingredientsList as ingredient}
				<div
					class="ingredient-container"
					on:click={() => {
						handleIngredientClick(ingredient);
					}}
				>
					<div class="ingredient-name">{ingredient.strIngredient1}</div>
					<input
						type="checkbox"
						class="ingredient-checkbox"
						checked={selectedIngredients.includes(ingredient.strIngredient1)}
					/>
				</div>
			{/each}
		</div>
	{/if}
</div>

<!-- bind:group={selectedIngredients} -->

<!-- value={ingredient.strIngredient1} -->
<style>
	.main-ingredients-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.ingredients-list {
		position: absolute;
		transform: translateY(50px);
		z-index: 1;
		padding-top: -5px;
		border: solid 3px;
		border-color: black;
		border-radius: 5px;
		max-height: 40vh;
		padding: 10px;
		overflow-y: scroll;
		overflow-x: hidden;
		background-color: aquamarine;
		box-shadow: black 3px 3px;
	}

	.ingredient-container {
		display: flex;
		flex-direction: row;
		margin-top: 5px;
		background-color: orange;
		border: solid 2px;
		border-color: orangered;
		border-radius: 10px;
		padding: 10px;
	}

	.ingredient-container:hover {
		background-color: orangered;
		border-color: red;
	}

	.ingredient-name {
		margin-left: 10%;
	}

	.ingredient-checkbox {
		margin-left: auto;
	}
</style>
