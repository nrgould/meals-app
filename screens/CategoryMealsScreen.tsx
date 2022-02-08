import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { RootState } from '../types';
import { StyleSheet, View } from 'react-native';
import DefaultText from '../components/DefaultText';

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

	if (displayedMeals.length === 0 || !displayedMeals) {
		return (
			<View style={styles.content}>
				<DefaultText>No meals found. Check your filters!</DefaultText>
			</View>
		);
	}

	return <MealList navigation={navigation} data={displayedMeals} />;
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
