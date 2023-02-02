import type { Ingredient, Cocktail } from '../types/types';

export const getIngredients = async (): Promise<Ingredient[] | null> => {
	try {
		console.log('Getting ingredients');

		const ingredientsResponse = await fetch(
			'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
		);
		const ingredientsObject = await ingredientsResponse.json();
		return ingredientsObject.drinks;
	} catch (error) {
		throw new Error('Error getting ingredients list');
	}
};

export const getCocktails = async (cocktail: string): Promise<Cocktail[] | null> => {
	try {
		console.log('Mixing a cocktail');

		const cocktailsResponse = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktail}`
		);
		const cocktailObject = await cocktailsResponse.json();
		// debugger;
		return cocktailObject.drinks;
	} catch (error) {
		throw new Error('Error getting ingredients list');
	}
};
