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

	$: if (ingredientSearchText) {
		filteredIngredientsList = getFilteredIngredients();
	}

	// $: console.log(filteredIngredientsList);

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

<div class="main-ingredients-container">
	<button class="ingredient-dropdown-button" on:click={handleListIngredientsClick}
		>List of ingredients</button
	>

	<!-- {@debug ingredientSearchText} -->

	<!-- TODO: better shadow effect for boxes -->
	<!-- TODO: SEARCH BAR -->
	<!-- TODO: CLEAR SELECTED COCKTAILS BUTTON -->

	{#if filteredIngredientsList && ingredientsDropdownOpened}
		<div class="blocker" on:click={handleBlockerClicked} />
		<div class={ingredientsDropdownOpened ? `ingredients-list-open` : `ingredients-list-closed`}>
			<input
				class="ingredient-searchbox"
				type="text"
				placeholder="Search..."
				bind:value={ingredientSearchText}
			/>
			<!-- <div class="clear-selected-ingredients-icon" on:click={} /> -->
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
	<!-- {#if ingredientsDropdownOpened}
		<div class="bottom-blocker" on:click={handleBlockerClicked} />
	{/if} -->
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

	.bottom-blocker {
		position: relative;
		height: 50vh;
		width: 100vw;
		content: ' ';
		background: rgba(0, 0, 0, 0.5);
	}

	.ingredients-search-box {
		display: none;
	}

	.ingredients-list-closed {
		display: none;
	}

	.ingredients-list-open {
		position: absolute;
		transform: translateY(60px);
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
