import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultText from './DefaultText';
import Meal from '../models/meal';
interface Props {
	data: Meal;
	onSelectMeal: () => void;
}

export default function MealItem({ data, onSelectMeal }: Props) {
	const { title, duration, complexity, affordability, imageUrl } = data;
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							style={styles.bgImage}
							source={{ uri: imageUrl }}>
							<View>
								<Text style={styles.title} numberOfLines={1}>
									{title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View
						style={{
							...styles.mealRow,
							...styles.mealDetail,
						}}>
						<DefaultText>{duration}m</DefaultText>
						<DefaultText>{complexity.toUpperCase()}</DefaultText>
						<DefaultText>{affordability.toUpperCase()}</DefaultText>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#f5f5f5',
		borderRadius: 12,
		overflow: 'hidden',
		marginVertical: 12,
	},
	mealRow: {
		flexDirection: 'row',
	},
	mealHeader: {
		height: '85%',
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%',
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		color: 'white',
		backgroundColor: 'rgba(0,0,0,0.4)',
		paddingVertical: 5,
		paddingHorizontal: 12,
		textAlign: 'center',
	},
});
