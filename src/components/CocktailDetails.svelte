<script lang="ts">
	import { onMount } from 'svelte';
	import type { Drink } from '../types/types';

	export let details: Drink;
	let ingredientsList: any = [];

	onMount(() => {
		buildIngredientsList(details);
	});

	function buildIngredientsList(detailObject: any) {
		const filteredObj = [];

		const filteredIngredients = Object.keys(detailObject).filter(
			(key) => key.includes('strIngredient') && detailObject[key] !== null
		);

		const filteredAmounts = Object.keys(detailObject).filter(
			(key) => key.includes('strMeasure') && detailObject[key] !== null
		);

		for (let index = 0; index < filteredIngredients.length; index++) {
			const ingredient = detailObject[filteredIngredients[index]]
				? detailObject[filteredIngredients[index]]
				: '';

			const amount = detailObject[filteredAmounts[index]]
				? detailObject[filteredAmounts[index]]
				: '';

			filteredObj.push({
				ingredient: ingredient,
				amount: amount
			});
		}

		ingredientsList = filteredObj;
	}
</script>

<div class="details-container">
	<div class="instructions">
		<h2>Instructions</h2>
		<p>{details.strInstructions}</p>
	</div>
	<div class="ingredients">
		<h2>Ingredients</h2>

		{#each ingredientsList as detail}
			<p>{detail.amount} {detail.ingredient}</p>
		{/each}
	</div>
</div>

<style>
	@media (min-width: 401px) {
		.details-container {
			display: flex;
			flex-direction: row;
			justify-content: center;
			padding-left: 30px;
			padding-right: 30px;
		}

		.instructions {
			width: 50%;
			text-align: center;
			padding-right: 10px;
		}

		.ingredients {
			width: 50%;
			padding-left: 10px;
		}
	}

	@media (max-width: 400px) {
		.details-container {
			flex-direction: column;
			align-items: center;
		}

		.instructions {
			width: 80%;
			text-align: center;
			margin: auto;
		}

		.ingredients {
			width: 80%;
			text-align: center;
			margin: auto;
		}
	}

	p {
		margin: auto;
		font-size: large;
	}
</style>
