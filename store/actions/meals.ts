export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const TOGGLE_GLUTEN_FREE = 'TOGGLE_GLUTEN_FREE';
export const TOGGLE_LACTOSE_FREE = 'TOGGLE_LACTOSE_FREE';
export const TOGGLE_VEGAN = 'TOGGLE_VEGAN';
export const TOGGLE_VEGETARIAN = 'TOGGLE_VEGETARIAN';

export function toggleFavorite(id: string) {
	return { type: TOGGLE_FAVORITE, payload: { mealId: id } };
}

export function toggleGlutenFree() {
	return { type: TOGGLE_GLUTEN_FREE };
}