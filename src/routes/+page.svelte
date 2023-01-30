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

	// $: {
	// 	console.log(
	// 		`Reactive statement is running because the cocktailList changed. This runs after the other script code has finished and before the HTML code`
	// 	);
	// }

	// $: {
	// 	console.log(
	// 		`Reactive statement is running because the ingredientsList changed. This runs after the other script code has finished and before the HTML code`
	// 	);
	// }

	const getIngredients = async () => {
		try {
			console.log('Getting ingredients');

			const ingredientsResponse = await fetch(
				'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
			);
			const ingredientsObject = await ingredientsResponse.json();
			debugger;
			ingredientsList = ingredientsObject.drinks;
		} catch (error) {
			throw new Error('Error getting ingredients list');
		}
	};

	function getCocktails() {
		console.log('Mixing a cocktail');

		// fetch();
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={getCocktails}>Get Cocktails</button>
<form>
	List of ingredients
	<select multiple bind:value={selectedIngredients}>
		{#each ingredientsList as ingredient}
			<option
				value={ingredient}
				on:click={() => {
					console.log('clicked: ' + ingredient.strIngredient1);
				}}>{ingredient.strIngredient1}</option
			>
		{/each}
	</select>
</form>
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
