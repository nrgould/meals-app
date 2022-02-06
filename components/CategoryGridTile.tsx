import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
	navigation: any;
	title: string;
	color: string;
	id: string;
	onSelect: () => void;
}

export default function CategoryGridTile({
	title,
	color,
	id,
	navigation,
	onSelect,
}: Props) {
	return (
		<TouchableOpacity
			style={{
				...styles.gridItem,
				backgroundColor: color,
			}}
			onPress={onSelect}>
			<View>
				<Text style={styles.gridItemText}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		padding: 15,
		height: Dimensions.get('window').height / 5,
		width: Dimensions.get('window').width / 2,
	},
	gridItemText: {
		fontFamily: 'open-sans-bold',
		fontSize: 16,
	},
});
