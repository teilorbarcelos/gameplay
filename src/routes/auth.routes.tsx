import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from '../global/styles/theme'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'


export function AuthRoutes() {
    const { Navigator, Screen } = createStackNavigator()
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.secondary100

                }
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />

            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    )
}