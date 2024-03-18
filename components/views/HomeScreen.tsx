import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TestScreen from "./TestScreen";
import PostsScreen from "./PostsScreen";
import { PrimaryPalette } from "../../assets/Colors";

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
            <Tab.Screen name="Posts" component={PostsScreen} />
            <Tab.Screen name="Test" component={TestScreen} />
        </Tab.Navigator>
    )
}

export default HomeScreen;