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
</script>

<!-- {@debug selectedIngredients} -->

<!-- <div class="ingredient-container"> -->
<!-- <h2>List of ingredients:</h2> -->
<!-- <form>
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
	</form> -->
<!-- </div> -->
<button class="ingredient-dropdown" on:click={handleListIngredientsClick}
	>List of ingredients</button
>
{#if ingredientsDropdownOpened}
	<div class="ingredients-list">Hello there</div>
{/if}

<style>
	h2 {
		font-family: 'Satisfy', 'Brush Script MT';
	}

	.ingredient-dropdown {
		border: solid 5px;
		border-color: black;
		width: 20%;
		text-align: center;
		padding: 10px;
		margin-bottom: 10px;
		background-color: aquamarine;
		box-shadow: black 3px 3px;
	}

	.ingredient-container {
		display: flex;
		flex-direction: column;
		text-align: center;
		/* align-items: center; */
		width: 80%;
	}

	.ingredient-dropdown:hover {
		background-color: aqua;
	}

	form {
		display: flex;
		align-self: center;
		flex-wrap: wrap;
	}

	.ingredient-box {
		padding: 5px;
		margin: 2px;
		border-color: black;
		border-radius: 10px;
		border: solid 1px;
		background-color: aquamarine;
	}
</style>
