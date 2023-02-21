import type { Ingredient, Cocktail } from '../types/types';
import { getMockIngredients, getMockCocktails } from '../../tests/utils/mockResponses';

export const getIngredients = async (): Promise<Ingredient[] | null> => {
	const ingredientsResponse = await getMockIngredients();
	const ingredientsObject = JSON.parse(ingredientsResponse);

	return ingredientsObject;

	// try {
	// 	console.log('Getting ingredients');

	// 	const ingredientsResponse = await fetch(
	// 		'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
	// 	);
	// 	const ingredientsObject = await ingredientsResponse.json();
	// 	return ingredientsObject.drinks;
	// } catch (error) {
	// 	throw new Error('Error getting ingredients list');
	// }
};

export const getCocktails = async (cocktail: string): Promise<Cocktail[] | null> => {
	console.log('THIS IS THE INGREDIENT', cocktail);
	const cocktailResponse = await getMockCocktails();
	const cocktailObject = JSON.parse(cocktailResponse);

	return cocktailObject.drinks;

	try {
		console.log('Mixing a cocktail');

		const cocktailsResponse = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktail}`
		);
		const cocktailObject = await cocktailsResponse.json();
		return cocktailObject.drinks;
	} catch (error) {
		throw new Error('Error getting ingredients list');
	}
};
