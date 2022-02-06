import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

interface Props {
	navigation?: any;
	route?: any;
}

export default function CategoryMealsScreen({ navigation, route }: Props) {
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

	const categoryId = route.params.categoryId;

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(categoryId) >= 0
	);

	return <MealList renderItem={renderMealItem} data={displayedMeals} />;
}
