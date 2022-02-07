import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import MealsStack from './MealsStack';
import FavoritesStack from './FavoritesStack';

const MealsTabsNavigator = createBottomTabNavigator();

export default function MealsTabs() {
	return (
		<MealsTabsNavigator.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.accentColor,
			}}>
			<MealsTabsNavigator.Screen
				options={{
					tabBarIcon: (tabInfo: any) => {
						return (
							<Ionicons
								name='ios-restaurant'
								size={25}
								color={tabInfo.color}
							/>
						);
					},
					title: 'Meals',
				}}
				name='FindMeals'
				component={MealsStack}
			/>
			<MealsTabsNavigator.Screen
				options={{
					tabBarIcon: (tabInfo) => {
						return (
							<Ionicons
								name='ios-star'
								size={25}
								color={tabInfo.color}
							/>
						);
					},
					title: 'Favorites',
				}}
				name='MyFavorites'
				component={FavoritesStack}
			/>
		</MealsTabsNavigator.Navigator>
	);
}
