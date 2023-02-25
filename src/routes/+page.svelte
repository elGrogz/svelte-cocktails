<script lang="ts">
	import { onMount } from 'svelte';
	import { debug } from 'svelte/internal';

	import IngredientPicker from '../components/IngredientPicker.svelte';

	import type { Cocktail, SelectedIngredients } from '../types/types';
	import { getCocktails, getIngredients } from '../utils/api';

	// let ingredientsList: Ingredient[] | null = null;
	let cocktailList: Cocktail[] | null = null;
	let selectedIngredients: SelectedIngredients | null = null;
	let chosenCocktail: Cocktail | null;

	// onMount(async (): Promise<void> => {
	// 	ingredientsList = await getIngredients(); // try using await blocks, eg: {#await expression}...{:then name}...{:catch name}...{/await}
	// });

	$: if (cocktailList) {
		chosenCocktail = getRandomCocktail();
	}

	const handleIngredientListChanged = (event: any) => {
		selectedIngredients = event.detail;
	};

	const handleCocktails = async () => {
		cocktailList = await getCocktails(selectedIngredients); // need paid version to do multiple
	};

	// move this to util
	const getRandomCocktail = (): Cocktail | null => {
		let cocktailToReturn = null;

		if (cocktailList && cocktailList.length > 0) {
			cocktailToReturn = cocktailList[Math.floor(Math.random() * cocktailList.length)];
		}

		return cocktailToReturn;
	};
</script>

<!-- {@debug cocktailList} -->

<div class="ingredient-list">
	{#await getIngredients()}
		<p>Loading ingredients</p>
	{:then ingredientsList}
		<IngredientPicker {ingredientsList} on:ingredientClicked={handleIngredientListChanged} />
	{:catch error}
		<p>{error}</p>
	{/await}
</div>
<div class="get-cocktails-button" style="display:flex; justify-content:center; margin-top:20px;">
	<!-- {@debug selectedIngredients} -->
	<button on:click={handleCocktails}> Get Cocktails </button>
</div>
<pre>{chosenCocktail && chosenCocktail.strDrink}</pre>

<styles />
