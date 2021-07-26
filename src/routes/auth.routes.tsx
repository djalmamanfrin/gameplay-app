import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { AppointmentCreate } from "../screens/AppointmentCreate";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

import {theme} from "../global/styles/themes";

export function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: { backgroundColor: theme.colors.secondary100 }
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
    );
    
}


