import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import WorkOutDetailsScreen from "../screens/WorkOutDetailScreen";


export type RootStackParamList = {
    Root: undefined;
    Welcome: undefined;
    Home: undefined;
    WorkOut: undefined;
    Planner: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation(){
    return(
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
    )
}

function RootNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false}}
            />

        <Stack.Screen 
            name="WorkOut"
            component={WorkOutDetailsScreen}
            />

      </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator<RootStackParamList>();

function BottomTabNavigator(){
    return(
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                    tabBarIcon: ({color, size}) => 
                        <FontAwesome name="home" size={size} color={color}/>                
                    }}
            />

             <BottomTab.Screen
               name="Planner"
               component={PlannerScreen}
               options={{
                tabBarIcon: ({color, size}) => 
                    <FontAwesome name="paper-plane" size={20} color={color} />
                    }}
            />
        </BottomTab.Navigator>
    )
}