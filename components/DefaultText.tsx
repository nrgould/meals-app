import { StyleSheet, Text } from 'react-native';
import React from 'react';

export default function DefaultText({ children }: any) {
	return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({ text: { fontFamily: 'open-sans' } });
