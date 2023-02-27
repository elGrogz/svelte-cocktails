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

<div class="ingredient-container">
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
	h2 {
		font-family: 'Satisfy', 'Brush Script MT';
	}

	form {
		display: flex;
		flex-wrap: wrap;
	}

	.ingredient-container {
		text-align: center;
		width: 80%;
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
