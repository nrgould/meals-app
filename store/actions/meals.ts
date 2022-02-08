import { Filters } from '../../types';

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export function toggleFavorite(id: string) {
	return { type: TOGGLE_FAVORITE, payload: { mealId: id } };
}

export function setFilters(filterSettings: Filters) {
	return { type: SET_FILTERS, payload: { filters: filterSettings } };
}
