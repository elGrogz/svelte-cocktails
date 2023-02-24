<script lang="ts">
	import { onMount } from 'svelte';

	import IngredientPicker from '../components/IngredientPicker.svelte';

	import type { Cocktail, Ingredient } from '../types/types';
	import { getCocktails, getIngredients } from '../utils/api';

	// let ingredientsList: Ingredient[] | null = null;
	let cocktailList: Cocktail[] | null = null;
	let selectedIngredients: string[] = [];
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
		cocktailList = await getCocktails(selectedIngredients[0]); // need paid version to do multiple
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

{@debug selectedIngredients}
{@debug cocktailList}

{#await getIngredients()}
	<p>Loading ingredients</p>
{:then ingredientsList}
	<IngredientPicker {ingredientsList} on:ingredientClicked={handleIngredientListChanged} />
{:catch error}
	<p>{error}</p>
{/await}
<button on:click={handleCocktails}>Get Cocktails</button>

<pre>{chosenCocktail && chosenCocktail.strDrink}</pre>

<styles />

<!-- {
	"drinks": [
	  {
		"strIngredient1": "Light rum"
	  },
	  {
		"strIngredient1": "Applejack"
	  },
	  {
		"strIngredient1": "Gin"
	  },
	  {
		"strIngredient1": "Dark rum"
	  },
	  {
		"strIngredient1": "Sweet Vermouth"
	  },
	  {
		"strIngredient1": "Strawberry schnapps"
	  },
	  {
		"strIngredient1": "Scotch"
	  },
	]
  } -->
