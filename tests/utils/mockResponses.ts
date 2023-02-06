import type { Ingredient } from '../../src/types/types';

export const getMockIngredients = (): Promise<Ingredient[]> => {
	const jsonToReturn = [
		{
			strIngredient1: 'Light rum'
		},
		{
			strIngredient1: 'Applejack'
		},
		{
			strIngredient1: 'Gin'
		},
		{
			strIngredient1: 'Dark rum'
		}
	];

	return new Promise((resolve, reject) => {
		resolve(jsonToReturn);
	});
};

export const getMockCocktails = () => {
	return JSON.stringify({
		drinks: [
			{
				strIngredient1: 'Light rum'
			},
			{
				strIngredient1: 'Applejack'
			},
			{
				strIngredient1: 'Gin'
			},
			{
				strIngredient1: 'Dark rum'
			}
		]
	});
};
