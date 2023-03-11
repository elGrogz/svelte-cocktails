<script lang="ts">
	import type { Drink } from '../types/types';

	export let details: Drink;
</script>

<p class="instructions">{details.strInstructions}</p>

<style>
	.instructions {
		max-width: 50vw;
	}
</style>
