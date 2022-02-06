import { ListRenderItem, StyleSheet, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
	renderItem: ListRenderItem<any>;
	data: any;
}

export default function MealList({ renderItem, data }: Props) {
	return (
		<View style={styles.list}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				style={{ width: '100%' }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 10,
	},
});
