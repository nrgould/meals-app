import { StyleSheet, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '../App';
import MealItem from './MealItem';
import Meal from '../models/meal';

interface Props {
	data: any;
	navigation: any;
}

export default function MealList({ navigation, data }: Props) {
	const favoriteMeals = useSelector(
		(state: RootState) => state.meals.favoriteMeals
	);

	function renderMealItem(itemData: { item: Meal }) {
		return (
			<MealItem
				data={itemData.item}
				onSelectMeal={() =>
					navigation.navigate('MealDetails', { ...itemData.item })
				}
			/>
		);
	}
	return (
		<View style={styles.list}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
				style={{ width: '100%' }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 10,
	},
});
