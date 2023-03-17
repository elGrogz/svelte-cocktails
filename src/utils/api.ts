import type { Ingredient, Cocktail, SelectedIngredients, DetailsObject } from '../types/types';
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

	try {
		const cocktailsResponse = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients.selectedIngredients[0]}`
		);
		const cocktailObject = await cocktailsResponse.json();
		return cocktailObject.drinks as Cocktail[] | null;
	} catch (error) {
		throw new Error('Error getting ingredients list');
	}
};

export const getCocktailDetails = async (cocktail: Cocktail) => {
	try {
		const detailsResponse = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
		);
		const detailsObject = (await detailsResponse.json()) as DetailsObject;
		return detailsObject.drinks[0];
	} catch (error) {
		throw new Error('Error getting details list');
	}
};
