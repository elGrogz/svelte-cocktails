<script lang="ts">
	import { onMount } from 'svelte';
	let ingredientsList: Drink[] = [];
	let cocktailList: any[] = [];
	let selectedIngredients: string[] = [];

	interface Drink {
		strIngredient1: string;
	}

	onMount(() => {
		console.log('mounted');
		getIngredients();
	});

	$: {
		console.table(selectedIngredients);
	}

	const getIngredients = async () => {
		try {
			console.log('Getting ingredients');

			const ingredientsResponse = await fetch(
				'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
			);
			const ingredientsObject = await ingredientsResponse.json();
			ingredientsList = ingredientsObject.drinks;
		} catch (error) {
			throw new Error('Error getting ingredients list');
		}
	};

	const getCocktails = async () => {
		try {
			console.log('Mixing a cocktail');

			const cocktailsResponse = await fetch(
				`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredients}`
			);
			debugger;
			const cocktailObject = await cocktailsResponse.json();
			cocktailList = cocktailObject.drinks;
		} catch (error) {
			throw new Error('Error getting ingredients list');
		}
	};
</script>

<form>
	List of ingredients
	<select multiple bind:value={selectedIngredients}>
		{#each ingredientsList as ingredient}
			<option
				value={ingredient.strIngredient1}
				on:click={() => {
					console.log('clicked: ' + ingredient.strIngredient1);
				}}>{ingredient.strIngredient1}</option
			>
		{/each}
	</select>
</form>
<button on:click={getCocktails}>Get Cocktails</button>
<pre>{cocktailList}</pre>

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
