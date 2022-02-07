import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';

const MealsStackNavigator = createStackNavigator();

export default function MealsStack() {
	const dispatch = useDispatch();
	return (
		<MealsStackNavigator.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor:
						Platform.OS === 'android' ? Colors.primaryColor : '',
				},
				headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
				headerMode: 'float',
			}}>
			<MealsStackNavigator.Screen
				options={{ title: 'Categories', headerShown: false }}
				name='Categories'
				component={CategoriesScreen}
			/>
			<MealsStackNavigator.Screen
				options={({ route }: any) => ({
					title: route.params.category,
					headerStyle: {
						backgroundColor: Colors.accentColor,
					},
					headerTintColor: 'white',
				})}
				name='CategoryMeals'
				component={CategoryMealsScreen}
			/>
			<MealsStackNavigator.Screen
				options={({ route }: any) => ({
					title: route.params.title,
					headerStyle: {
						backgroundColor: Colors.accentColor,
					},
					headerRight: () => (
						<HeaderButtons
							HeaderButtonComponent={CustomHeaderButton}>
							<Item
								title='Favorite'
								iconName={
									route.params.isFavorite
										? 'ios-star'
										: 'ios-star-outline'
								}
								onPress={() =>
									dispatch(toggleFavorite(route.params.id))
								}
							/>
						</HeaderButtons>
					),
					headerTintColor: 'white',
				})}
				name='MealDetails'
				component={MealDetailsScreen}
			/>
		</MealsStackNavigator.Navigator>
	);
}
