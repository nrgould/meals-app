import { Platform } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FiltersScreen from './screens/FiltersScreen';
import Colors from './constants/Colors';
import FavoritesStack from './navigation/FavoritesStack';
import MealsStack from './navigation/MealsStack';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

enableScreens();

const rootReducer = combineReducers({ meals: mealsReducer });
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};

const MealsDrawer = createDrawerNavigator();

export default function App() {
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(error: any) => console.log(error)}
			/>
		);
	}

	return (
		<Provider store={store}>
			<NavigationContainer>
				<MealsDrawer.Navigator
					screenOptions={{
						headerShown: true,
						headerTintColor: Colors.accentColor,
						headerStyle: {
							backgroundColor:
								Platform.OS === 'android'
									? Colors.primaryColor
									: '',
							shadowOpacity: 0.5,
							shadowColor: 'black',
							shadowOffset: { width: 10, height: 20 },
							shadowRadius: 10,
						},
						drawerActiveTintColor: Colors.accentColor,
						headerTitleStyle: {
							fontFamily: 'open-sans-bold',
						},
						drawerLabelStyle: {
							fontFamily: 'open-sans',
						},
						headerShadowVisible: true,
					}}>
					<MealsDrawer.Screen name='Meals' component={MealsStack} />
					<MealsDrawer.Screen
						name='MyFavorites'
						component={FavoritesStack}
						options={{ title: 'Favorites' }}
					/>
					<MealsDrawer.Screen
						name='Filters'
						component={FiltersScreen}
					/>
				</MealsDrawer.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
