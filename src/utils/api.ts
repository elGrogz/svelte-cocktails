import type { Ingredient, Cocktail, SelectedIngredients } from '../types/types';
import { getMockIngredients, getMockCocktails } from '../../tests/utils/mockResponses';

import { PUBLIC_MOCK } from '$env/static/public';

export const getIngredients = async (): Promise<Ingredient[] | null> => {
	if (PUBLIC_MOCK === 'true') {
		const ingredientsResponse = await getMockIngredients();
		const ingredientsObject = JSON.parse(ingredientsResponse);

		return ingredientsObject;
	}

	try {
		const ingredientsResponse = await fetch(
			'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
		);
		const ingredientsObject = await ingredientsResponse.json();
		return ingredientsObject.drinks as Ingredient[] | null;
	} catch (error) {
		throw new Error('Error getting ingredients list');
	}
};

export const getCocktails = async (
	ingredients: SelectedIngredients
): Promise<Cocktail[] | null> => {
	if (PUBLIC_MOCK === 'true') {
		const cocktailResponse = await getMockCocktails();
		const cocktailObject = JSON.parse(cocktailResponse);

		return cocktailObject.drinks;
	}
	console.log('Ingredient TO FETCH 3: ', ingredients.selectedIngredients[0]);

	try {
		const cocktailsResponse = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients.selectedIngredients[0]}`
		);
		console.log('RESPONSE: ', cocktailsResponse);
		const cocktailObject = await cocktailsResponse.json();
		console.log({ cocktailObject });
		return cocktailObject.drinks as Cocktail[] | null;
	} catch (error) {
		throw new Error('Error getting ingredients list');
	}
};
