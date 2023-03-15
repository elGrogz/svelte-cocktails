<script lang="ts">
	import { onMount } from 'svelte';
	import type { Drink } from '../types/types';

	export let details: Drink;
	let ingredientsList: any = [];

	onMount(() => {
		buildIngredientsList(details);
		console.log(ingredientsList);
	});

	// $: buildIngredientsList(details);

	function buildIngredientsList(detailObject: any) {
		const filteredObj = [];

		const filteredIngredients = Object.keys(detailObject).filter(
			(key) => key.includes('strIngredient') && detailObject[key] !== null
		);

		const filteredAmounts = Object.keys(detailObject).filter(
			(key) => key.includes('strMeasure') && detailObject[key] !== null
		);

		if (filteredIngredients.length === filteredAmounts.length) {
			for (let index = 0; index < filteredIngredients.length; index++) {
				const keyString = 'ingredient' + (index + 1);

				filteredObj.push({
					ingredient: detailObject[filteredIngredients[index]],
					amount: detailObject[filteredAmounts[index]]
				});
			}
		}

		ingredientsList = filteredObj;
	}
</script>

<div class="details-container">
	<div class="instructions">
		<h2>Instructions</h2>
		<p>{details.strInstructions}</p>
	</div>
	<div class="instructions">
		<h2>Ingredients</h2>

		{#each ingredientsList as detail}
			<p>{detail.amount} {detail.ingredient}</p>
		{/each}
	</div>
</div>

<style>
	.details-container {
		display: flex;
	}

	.instructions {
		margin-left: 20px;
		width: 50%;
		text-align: center;
	}

	.instructions {
		margin-right: 20px;
		max-width: 50%;
		text-align: center;
	}

	p {
		margin: auto;
	}
</style>
