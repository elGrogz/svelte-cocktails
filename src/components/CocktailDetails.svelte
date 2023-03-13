<script lang="ts">
	import type { Drink } from '../types/types';

	export let details: Drink;
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
