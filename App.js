import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';

import { useTailwind } from 'tailwind-rn';

import Home from "./screens/Home"

const App: () => Node = () => {
	const tailwind = useTailwind();

  return (
	  <TailwindProvider utilities={utilities}>
		  <Home />
	  </TailwindProvider>
  );
};


export default App;
