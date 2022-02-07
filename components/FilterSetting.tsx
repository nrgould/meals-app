import { StyleSheet, Text, View } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { Switch } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

interface Props {
	value: boolean;
	changeHandler: Dispatch<SetStateAction<boolean>>;
	label: string;
}

export default function FilterSetting({ value, changeHandler, label }: Props) {
	return (
		<View style={styles.filterContainer}>
			<Text>{label}</Text>
			<Switch
				trackColor={{ true: Colors.primaryColor }}
				value={value}
				onValueChange={changeHandler}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: 10,
		paddingBottom: 8,
		marginVertical: 10,
		borderBottomColor: '#dbdbdb',
		borderBottomWidth: 1,
	},
});
