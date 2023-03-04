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
<div class="main-ingredients-container">
	<button class="ingredient-dropdown-button" on:click={handleListIngredientsClick}
		>List of ingredients</button
	>
	{#if ingredientsDropdownOpened && ingredientsList}
		<div class="ingredients-list">
			{#each ingredientsList as ingredient}
				<div class="ingredient-container">
					<div class="ingredient-name">{ingredient.strIngredient1}</div>
					<input type="checkbox" class="ingredient-checkbox" />
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

	.ingredient-dropdown-button:hover {
		background-color: aqua;
	}

	.ingredients-list {
		position: absolute;
		transform: translateY(50px);
		z-index: 1;
		padding-top: -5px;
		border: solid 3px;
		border-color: black;
		border-radius: 5px;
		/* width: 20%; */
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
		/* height: 15px;
		width: 15px;
		border: solid 2px;
		border-color: blac;
		border-radius: 20%; */
		margin-left: auto;
	}

	/*	.ingredient-container {
		display: flex;
		flex-direction: column;
		text-align: center;
		/* align-items: center;
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
	*/
</style>
