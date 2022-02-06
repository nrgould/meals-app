import React from 'react';
import MealList from '../components/MealList';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

export default function FavoritesScreen({ navigation }: any) {
	function renderMealItem(itemData: any) {
		return (
			<MealItem
				data={itemData.item}
				onSelectMeal={() =>
					navigation.navigate('MealDetails', { ...itemData.item })
				}
			/>
		);
	}
	const mealData = MEALS.filter(
		(meal) => meal.id === 'm1' || meal.id === 'm2'
	);

	return <MealList renderItem={renderMealItem} data={mealData} />;
}
