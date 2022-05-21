import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

import { useTailwind } from 'tailwind-rn';

const Home = () => {
	const tailwind = useTailwind();

	return (
			<View style={tailwind('pt-12 items-center')}>
				<View style={tailwind('bg-blue-200 px-3 py-1 rounded-xl')}>
					<Text style={tailwind('text-blue-800 font-semibold')}>
						Hello Tailwind
					</Text>
				</View>
			</View>
	);
};


export default Home;
