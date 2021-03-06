import { Platform } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

const FavoritesStackNavigator = createStackNavigator();

export default function FavoritesStack() {
	const dispatch = useDispatch()
	return (
		<FavoritesStackNavigator.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor:
						Platform.OS === 'android' ? Colors.primaryColor : '',
					shadowOpacity: 0.5,
					shadowColor: 'black',
					shadowOffset: { width: 10, height: 20 },
					shadowRadius: 10,
				},
				headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
				headerMode: 'float',
			}}>
			<FavoritesStackNavigator.Screen
				options={{ title: 'Your Favorites', headerShown: false }}
				name='Favorites'
				component={FavoritesScreen}
			/>
			<FavoritesStackNavigator.Screen
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
		</FavoritesStackNavigator.Navigator>
	);
}
