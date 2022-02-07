import {
	Button,
	ImageBackground,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
} from 'react-native';
import React from 'react';
import { MEALS } from '../data/dummy-data';
import DefaultText from '../components/DefaultText';

interface Props {
	navigation?: any;
	route?: any;
}

function ListItem({ children, index }: any) {
	return (
		<View style={styles.listItem}>
			{index + 1 ? (
				<DefaultText style={{ marginRight: 20 }}>
					{index + 1}
				</DefaultText>
			) : null}
			<DefaultText>{children}</DefaultText>
		</View>
	);
}

export default function MealDetailsScreen({ route }: Props) {
	const { id } = route.params;

	const selectedMeal = MEALS.find((meal) => meal.id === id);

	console.log(selectedMeal);
	return (
		<ScrollView>
			<Image
				source={{ uri: selectedMeal?.imageUrl }}
				style={styles.image}
			/>
			<View
				style={{
					...styles.mealRow,
					...styles.details,
				}}>
				<DefaultText>{selectedMeal?.duration}m</DefaultText>
				<DefaultText>
					{selectedMeal?.complexity.toUpperCase()}
				</DefaultText>
				<DefaultText>
					{selectedMeal?.affordability.toUpperCase()}
				</DefaultText>
			</View>
			<View style={styles.screen}>
				<Text style={styles.title}>Ingredients</Text>
				{selectedMeal?.ingredients.map((ing, i) => (
					<ListItem index={i} key={ing}>
						{ing}
					</ListItem>
				))}
				<Text style={styles.title}>Steps</Text>
				{selectedMeal?.steps.map((step, i) => (
					<ListItem key={i}>{step}</ListItem>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	mealRow: {
		flexDirection: 'row',
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'center',
	},
	image: {
		width: '100%',
		height: 200,
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
});
