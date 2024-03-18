import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./views/LoginScreen";
import RegisterScreen from "./views/RegisterScreen";
import HomeScreen from "./views/HomeScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name='Login'
                    component={LoginScreen} />
                <Stack.Screen
                    name='Register'
                    component={RegisterScreen} />
                <Stack.Screen
                    name='Home'
                    component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack;