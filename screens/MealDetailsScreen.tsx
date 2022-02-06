import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
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
			<ImageBackground
				style={{ width: '100%', height: '100%' }}
				source={{ uri: selectedMeal?.imageUrl }}>
				<Text>{selectedMeal?.title}</Text>
				<Button
					title='Go Back To Categories'
					onPress={() => navigation.popToTop()}
				/>
			</ImageBackground>
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
