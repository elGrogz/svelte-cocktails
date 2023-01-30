<script>
	import { onMount } from 'svelte';
	let cocktailList = '';

	onMount(() => {
		console.log('mounted');
		getCocktails();
	});

	$: {
		console.log(
			`Reactive statement is running because the ${cocktailList} changed. This runs after the other script code has finished and before the HTML code`
		);
	}

	function getCocktails() {
		console.log('Mixing a cocktail');
		// cocktailList = cocktailList + 'hello';
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={getCocktails}>Get Cocktails</button>
<pre>{cocktailList}</pre>

<styles />
