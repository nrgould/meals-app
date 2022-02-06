export default class Meal {
	id: string;
	categoryIds: string[];
	title: string;
	affordability: string;
	complexity: string;
	ingredients: string[];
	imageUrl: string;
	steps: string[];
	duration: number;
	isGlutenFree: boolean;
	isVegan: boolean;
	isVegetarian: boolean;
	isLactoseFree: boolean;
	constructor(
		id: string,
		categoryIds: string[],
		title: string,
		affordability: string,
		complexity: string,
		imageUrl: string,
		duration: number,
		ingredients: string[],
		steps: string[],
		isGlutenFree: boolean,
		isVegan: boolean,
		isVegetarian: boolean,
		isLactoseFree: boolean
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.affordability = affordability;
		this.complexity = complexity;
		this.imageUrl = imageUrl;
		this.ingredients = ingredients;
		this.steps = steps;
		this.duration = duration;
		this.isGlutenFree = isGlutenFree;
		this.isVegan = isVegan;
		this.isVegetarian = isVegetarian;
		this.isLactoseFree = isLactoseFree;
	}
}
