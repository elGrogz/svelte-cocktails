export interface Ingredient {
	strIngredient1: string;
}

export interface Cocktail {
	idDrink: string;
	strDrink: string;
	strDrinkThumb: string;
}

export interface SelectedIngredients {
	selectedIngredients: Ingredient[];
}
