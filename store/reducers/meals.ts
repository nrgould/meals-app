import { TOGGLE_FAVORITE, TOGGLE_GLUTEN_FREE } from './../actions/meals';
import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [] as Meal[],
	vegan: false,
	vegetarian: false,
	lactoseFree: false,
	glutenFree: false,
};

const mealsReducer = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const existingIndex = state.favoriteMeals.findIndex(
				(meal: Meal) => meal.id === action.payload.mealId
			);
			if (existingIndex >= 0) {
				const updatedFavMeals = [...state.favoriteMeals];
				updatedFavMeals.splice(existingIndex, 1);
				return {
					...state,
					favoriteMeals: updatedFavMeals,
				};
			} else {
				const newMeal = state.meals.find(
					(meal) => meal.id === action.payload.mealId
				);
				return {
					...state,
					favoriteMeals: state.favoriteMeals.concat(newMeal as Meal),
				};
			}
		case TOGGLE_GLUTEN_FREE:
			return {
				...state,
				glutenFree: !state.glutenFree,
			};
		default:
			return state;
	}
};

export default mealsReducer;
