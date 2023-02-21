// import type { Ingredient } from '../../src/types/types';

export const getMockIngredients = (): Promise<string> => {
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
		resolve(JSON.stringify(jsonToReturn));
	});
};

export const getMockCocktails = (): Promise<string> => {
	return new Promise((resolve, reject) => {
		resolve(
			JSON.stringify({
				drinks: [
					{
						idDrink: '1',
						strDrink: 'Whiskey Sour',
						strDrinkThumb: 'blah1'
					},
					{
						idDrink: '2',
						strDrink: 'Margarita',
						strDrinkThumb: 'blah2'
					},
					{
						idDrink: '3',
						strDrink: 'Aviation',
						strDrinkThumb: 'blah3'
					},
					{
						idDrink: '4',
						strDrink: 'Flip',
						strDrinkThumb: 'blah4'
					},
					{
						idDrink: '5',
						strDrink: 'Long Island Ice Tea',
						strDrinkThumb: 'blah5'
					}
				]
			})
		);
	});
};
