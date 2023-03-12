<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Ingredient } from '../types/types';

	export let ingredientsDropdownOpened = false;
	export let ingredientsList: Ingredient[] | null;
	let filteredIngredientsList: Ingredient[] | null = ingredientsList;
	let ingredientSearchText: string = '';
	let selectedIngredients: string[] = [];

	function handleListIngredientsClick() {
		ingredientsDropdownOpened = !ingredientsDropdownOpened;
	}

	function handleBlockerClicked() {
		ingredientsDropdownOpened = false;
	}

	function getFilteredIngredients() {
		if (ingredientsList) {
			return ingredientsList.filter((ingredient) => {
				return ingredient.strIngredient1.toLowerCase().includes(ingredientSearchText.toLowerCase());
			});
		} else {
			return null;
		}
	}

	function clearSelectedIngredients() {
		selectedIngredients = [];
	}

	$: if (ingredientSearchText) {
		filteredIngredientsList = getFilteredIngredients();
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

<div class="main-ingredients-container">
	<button class="ingredient-dropdown-button" on:click={handleListIngredientsClick}
		>List of ingredients</button
	>

	<!-- {@debug ingredientSearchText} -->

	<!-- TODO: better shadow effect for boxes -->

	{#if filteredIngredientsList && ingredientsDropdownOpened}
		<div class="blocker" on:click={handleBlockerClicked} />
		<div class={ingredientsDropdownOpened ? `ingredients-list-open` : `ingredients-list-closed`}>
			<div class="top-container-elements">
				<input
					class="ingredient-searchbox"
					type="text"
					placeholder="Search..."
					bind:value={ingredientSearchText}
				/>
				<button
					class="clear-selected-ingredients-button clear-button"
					on:click={clearSelectedIngredients}>Clear</button
				>
			</div>
			{#each filteredIngredientsList as ingredient}
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

<style>
	.main-ingredients-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.ingredient-dropdown-button {
		z-index: 2;
	}

	.blocker {
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
		content: ' ';
		background: rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.top-container-elements {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 5px;
		max-height: 40px;
		margin-bottom: 15px;
	}

	.ingredient-searchbox {
		border-color: orange;
		border: 3px;
		border-radius: 5px;
		height: 3vh;
		font-size: medium;
		padding-left: 5px;
	}

	.ingredients-list-closed {
		display: none;
	}

	.ingredients-list-open {
		position: absolute;
		transform: translateY(60px);
		z-index: 1;
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
		background-color: orange;
		border: solid 2px;
		border-color: orangered;
		border-radius: 10px;
		margin-top: 5px;
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
