import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import { StyleSheet, View } from 'react-native';
import { RootState } from '../types';

export default function FavoritesScreen({ navigation }: any) {
	const favMeals = useSelector(
		(state: RootState) => state.meals.favoriteMeals
	);

	if (favMeals.length === 0 || !favMeals) {
		return (
			<View style={styles.content}>
				<DefaultText>
					No favorite meals found. Start adding some!
				</DefaultText>
			</View>
		);
	}

	return <MealList navigation={navigation} data={favMeals} />;
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
