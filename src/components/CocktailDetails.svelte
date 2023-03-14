<script lang="ts">
	import { object_without_properties } from 'svelte/internal';
	import type { Drink } from '../types/types';

	export let details: Drink;
	let ingredientsList: any;

	$: {
		buildIngredientsList(details);
	}

	function buildIngredientsList(detailObject: any) {
		const filteredObj = {};

		const filteredIngredients = Object.keys(detailObject).filter(
			(key) => key.includes('strIngredient') && detailObject[key] !== null
		);

		for (let index = 0; index < filteredIngredients.length; index++) {
			const keyString = 'ingredient' + (index + 1);
			filteredObj[keyString] = {
				[filteredIngredients[index]]: detailObject[filteredIngredients[index]]
			};
		}

		console.log(filteredObj);

		// let obj = {};

		// Object.keys(detailObject).find((key: string, ) => {
		// 	if (key.includes('strIngredient')) {
		// 		// Object.assign(obj, { key: null });
		// 		console.log(key);
		// 	}
		// });

		// console.log(obj);
	}
</script>

<div class="details-container">
	<div class="instructions">
		<h2>Instructions</h2>
		<p>{details.strInstructions}</p>
	</div>
	<div class="instructions">
		<h2>Ingredients</h2>
		<p>{details.strIngredient1}</p>
		<p>{details.strIngredient2}</p>
		<p>{details.strIngredient3}</p>
		<p>{details.strIngredient4}</p>
		<p>{details.strIngredient5}</p>
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
