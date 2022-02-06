import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

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
	const selectedCategory: any = CATEGORIES.find(
		(cat) => cat.id === categoryId
	);

	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(categoryId) >= 0
	);

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
				style={{ width: '100%' }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 10,
	},
});
