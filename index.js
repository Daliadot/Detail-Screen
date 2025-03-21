import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeDetailScreen from './screens/RecipeDetailSreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShow: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} /> /52:06/
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;