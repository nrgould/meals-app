import React from 'react';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { RootState } from '../App';

interface Props {
	navigation?: any;
	route?: any;
}

export default function CategoryMealsScreen({ navigation, route }: Props) {
	const availableMeals = useSelector(
		(state: RootState) => state.meals.filteredMeals
	);

	const categoryId = route.params.categoryId;

	const displayedMeals = availableMeals.filter(
		(meal: any) => meal.categoryIds.indexOf(categoryId) >= 0
	);

	return <MealList navigation={navigation} data={displayedMeals} />;
}
