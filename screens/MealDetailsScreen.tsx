import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MEALS } from '../data/dummy-data';

interface Props {
	navigation?: any;
	route?: any;
}

export default function MealDetailsScreen({ navigation, route }: Props) {
	const mealId = route.params.id;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return (
		<View style={styles.screen}>
			<Text>MealDetailsScreen</Text>
			<Button
				title='Go Back To Categories'
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
