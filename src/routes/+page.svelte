<script lang="ts">
	import { onMount } from 'svelte';
	let ingredientsList: any;
	let cocktailList: any;

	onMount(() => {
		console.log('mounted');
		getIngredients();
	});

	$: {
		console.log(
			`Reactive statement is running because the cocktailList changed. This runs after the other script code has finished and before the HTML code`
		);
	}

	$: {
		console.log(
			`Reactive statement is running because the ingredientsList changed. This runs after the other script code has finished and before the HTML code`
		);
	}

	const getIngredients = async () => {
		console.log('Getting ingredients');
		debugger;

		const ingredients = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
		ingredientsList = await ingredients.json();
	};

	function getCocktails() {
		console.log('Mixing a cocktail');

		// fetch();
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={getCocktails}>Get Cocktails</button>
<pre>{cocktailList}</pre>

<styles />
