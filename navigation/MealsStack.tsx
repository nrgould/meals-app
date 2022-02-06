import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealsStack = createStackNavigator();

export default function MealStack() {
	return (
		<MealsStack.Navigator
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
			}}>
			<MealsStack.Screen
				options={{ title: 'Categories' }}
				name='Categories'
				component={CategoriesScreen}
			/>
			<MealsStack.Screen
				options={({ route }: any) => ({
					title: route.params.category,
					headerStyle: {
						backgroundColor: route.params.color,
					},
				})}
				name='CategoryMeals'
				component={CategoryMealsScreen}
			/>
			<MealsStack.Screen
				options={({ route }: any) => ({
					title: route.params.title,
					headerStyle: {
						backgroundColor: Colors.accentColor,
					},
					headerRight: () => (
						<HeaderButtons
							HeaderButtonComponent={HeaderButton}>
							<Item
								title='Favorite'
								iconName='ios-star'
								onPress={() => console.log('mark as favorite')}
							/>
						</HeaderButtons>
					),
					headerTintColor: 'white',
					presentation: 'modal',
				})}
				name='MealDetails'
				component={MealDetailsScreen}
			/>
		</MealsStack.Navigator>
	);
}