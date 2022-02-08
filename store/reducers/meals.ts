import { SET_FILTERS, TOGGLE_FAVORITE } from './../actions/meals';
import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';
import { Filters } from '../../types';
import { checkFilters } from '../../util';

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: [] as Meal[],
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
		case SET_FILTERS:
			const appliedFilters: Filters = action.payload.filters;
			const updatedFilteredMeals = checkFilters(
				appliedFilters,
				state.meals
			);
			return {
				...state,
				filteredMeals: updatedFilteredMeals,
			};
		default:
			return state;
	}
};

export default mealsReducer;
