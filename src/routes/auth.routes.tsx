import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'


export function AuthRoutes() {
    const { Navigator, Screen } = createStackNavigator()
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'transparent'
                    
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />

            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}