<script lang="ts">
	import { onMount } from 'svelte';
	import type { Cocktail, Ingredient } from '../types/types';
	import { getCocktails, getIngredients } from '../utils/api';

	let ingredientsList: Ingredient[] | null = null;
	let cocktailList: Cocktail[] | null = null;
	let selectedIngredients: string[] = [];
	let chosenCocktail: Cocktail | null;

	onMount(async (): Promise<void> => {
		ingredientsList = await getIngredients();
	});

	$: {
		console.table('selected ingredients: ', selectedIngredients);
	}

	$: if (cocktailList) {
		console.log('cocktail list updated');
		chosenCocktail = getRandomCocktail();
	}

	const handleCocktails = async () => {
		cocktailList = await getCocktails(selectedIngredients[0]);
	};

	const getRandomCocktail = (): Cocktail | null => {
		let cocktailToReturn = null;

		if (cocktailList && cocktailList.length > 0) {
			cocktailToReturn = cocktailList[Math.floor(Math.random() * cocktailList.length)];
		}

		return cocktailToReturn;
	};
</script>

<form>
	List of ingredients
	<select multiple bind:value={selectedIngredients}>
		{#if ingredientsList}
			{#each ingredientsList as ingredient}
				<option
					value={ingredient.strIngredient1}
					on:click={() => {
						console.log('clicked: ' + ingredient.strIngredient1);
					}}>{ingredient.strIngredient1}</option
				>
			{/each}
		{/if}
	</select>
</form>
<button on:click={() => handleCocktails}>Get Cocktails</button>
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
