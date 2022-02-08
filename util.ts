import Meal from './models/meal';
import { Filters } from './types';

export function checkFilters(filters: Filters, meals: Meal[]) {
	return meals.filter((meal: Meal) => {
		if (filters.isGlutenFree && !meal.isGlutenFree) {
			return false;
		}
		if (filters.isLactoseFree && !meal.isLactoseFree) {
			return false;
		}
		if (filters.isVegetarian && !meal.isVegetarian) {
			return false;
		}
		if (filters.isVegan && !meal.isVegan) {
			return false;
		}
		return true;
	});
}
