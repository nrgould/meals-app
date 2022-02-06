import { StyleSheet } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import CategoryGridTile from '../components/CategoryGridTile';

interface Props {
	navigation?: any;
}

export default function CategoriesScreen({ navigation }: Props) {
	function renderGridItem(itemData: { item: any }) {
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				id={itemData.item.id}
				navigation={navigation}
				onSelect={() => {
					navigation.navigate('CategoryMeals', {
						categoryId: itemData.item.id,
						category: itemData.item.title,
						color: itemData.item.color,
					});
				}}
			/>
		);
	}
	return (
		<FlatList
			keyExtractor={(item) => item.id}
			numColumns={2}
			data={CATEGORIES}
			renderItem={renderGridItem}
		/>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
