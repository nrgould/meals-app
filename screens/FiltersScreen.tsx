import { StyleSheet, View } from 'react-native';
import React, {
	useCallback,
	useEffect,
	useLayoutEffect,
	useState,
} from 'react';
import FilterSetting from '../components/FilterSetting';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

interface Props {
	navigation: any;
	route: any;
}

export default function FiltersScreen({ navigation, route }: Props) {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	// const saveFilters = useCallback(() => {
	// 	const appliedFilters = {
	// 		glutenFree: isGlutenFree,
	// 		lactoseFree: isLactoseFree,
	// 		vegan: isVegan,
	// 		vegetarian: isVegetarian,
	// 	};

	// 	console.log(appliedFilters);
	// }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title='Save'
						iconName='ios-save'
						onPress={() => {
							console.log("this doesn't work");
						}}
						color={Colors.accentColor}
					/>
				</HeaderButtons>
			),
		});
	}, [navigation]);

	return (
		<View style={styles.screen}>
			<FilterSetting
				label='Gluten-Free'
				value={isGlutenFree}
				changeHandler={setIsGlutenFree}
			/>
			<FilterSetting
				label='Lactose-Free'
				value={isLactoseFree}
				changeHandler={setIsLactoseFree}
			/>
			<FilterSetting
				label='Vegan'
				value={isVegan}
				changeHandler={setIsVegan}
			/>
			<FilterSetting
				label='Vegetarian'
				value={isVegetarian}
				changeHandler={setIsVegetarian}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		alignItems: 'center',
		flex: 1,
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center',
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
