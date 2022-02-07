import { Platform } from 'react-native';
import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function CustomHeaderButton(props: any) {
	return (
		<HeaderButton
			color={Platform.OS === 'android' ? Colors.primaryColor : 'white'}
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
		/>
	);
}
