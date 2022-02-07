import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { RootState } from '../App';

export default function FavoritesScreen({ navigation }: any) {
	const favMeals = useSelector(
		(state: RootState) => state.meals.favoriteMeals
	);

	return <MealList navigation={navigation} data={favMeals} />;
}
