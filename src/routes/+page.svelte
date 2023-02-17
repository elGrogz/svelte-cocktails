<script lang="ts">
	import { onMount } from 'svelte';
	// import { getMockIngredients } from '../../tests/utils/mockResponses';

	import IngredientPicker from '../components/IngredientPicker.svelte';

	import type { Cocktail, Ingredient } from '../types/types';
	import { getCocktails, getIngredients } from '../utils/api';

	let ingredientsList: Ingredient[] | null = null;
	let cocktailList: Cocktail[] | null = null;
	let selectedIngredients: string[] = [];
	let chosenCocktail: Cocktail | null;

	let mockIngredients: Ingredient[] = [
		{
			strIngredient1: 'Light rum'
		},
		{
			strIngredient1: 'Gin'
		},
		{
			strIngredient1: 'Dark rum'
		}
	];

	let mockCocktails: Cocktail[] = [
		{
			idDrink: '1',
			strDrink: 'Cocktail 1',
			strDrinkThumb: 'blah'
		},
		{
			idDrink: '2',
			strDrink: 'Cocktail 2',
			strDrinkThumb: 'blah'
		},
		{
			idDrink: '3',
			strDrink: 'Cocktail 3',
			strDrinkThumb: 'blah'
		}
	];

	onMount(async (): Promise<void> => {
		ingredientsList = await getIngredients();
		// ingredientsList = mockIngredients;
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
		console.table({ selectedIngredients });
		// cocktailList = mockCocktails;
	};

	const getRandomCocktail = (): Cocktail | null => {
		let cocktailToReturn = null;

		if (cocktailList && cocktailList.length > 0) {
			cocktailToReturn = cocktailList[Math.floor(Math.random() * cocktailList.length)];
		}

		return cocktailToReturn;
	};
</script>

<IngredientPicker {ingredientsList} {selectedIngredients} />
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
