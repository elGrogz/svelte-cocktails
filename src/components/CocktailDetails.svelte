<script lang="ts">
	import type { Drink } from '../types/types';

	export let details: Drink;
</script>

<div class="instructions">
	<h2>Instructions</h2>
	<p>{details.strInstructions}</p>
</div>

<style>
	.instructions {
		max-width: 50vw;
		text-align: center;
	}
</style>
