import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import { PrimaryPalette } from "../../assets/Colors";
import SettingsScreen from "./SettingsScreen";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();
const palette = PrimaryPalette;

const HomeScreen = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerTintColor: palette.FONT_DEFAULT,
            headerStyle: {
                backgroundColor: palette.BACKGROUND_HIGHLIGHT
            },
            tabBarActiveTintColor: palette.BUTTON_DEFAULT,
            tabBarStyle: {
                backgroundColor: palette.BACKGROUND_HIGHLIGHT
            }
        }}>
            <Tab.Screen name="Posts" 
                component={PostsScreen} 
                options={{
                    tabBarIcon: ({focused, size, color}) => {
                        return <Image 
                            style={{width: size, height: size}} 
                            source={require('../../assets/images/phone.png')}
                            tintColor={focused ? palette.BUTTON_DEFAULT : color}
                            />
                    }
                }}/>
            <Tab.Screen name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarIcon: ({focused, size, color}) => {
                        return <Image 
                            style={{width: size, height: size}} 
                            source={require('../../assets/images/settings.png')}
                            tintColor={focused ? palette.BUTTON_DEFAULT : color}
                            />
                    }
                }}/>
        </Tab.Navigator>
    )
}

export default HomeScreen;