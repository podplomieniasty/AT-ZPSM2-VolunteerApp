import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { GlobalStylesheet } from "../../assets/GlobalStyles";
import { PrimaryPalette } from "../../assets/Colors";
import CustomButton from "../Button/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../assets/RootStackParamList";

const palette = PrimaryPalette;

const LoginScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleSignIn = () => {
        /*
            check if user exists
            as for now he fucking does
        */
       console.log('Heading to Home!');
       navigation.navigate('Home');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={GlobalStylesheet.h1}>Login</Text>
            <TextInput
                id='login' 
                style={GlobalStylesheet.textinput} 
                placeholder='username or phone number' />

            <Text style={GlobalStylesheet.h1}>Password</Text>
            <TextInput
                id='password' 
                style={GlobalStylesheet.textinput}
                placeholder='password' />

            <View style={styles.subContainer}>
                <Text style={GlobalStylesheet.h4}>No account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={[GlobalStylesheet.h4, {color: palette.BUTTON_DEFAULT}]}>Register here!</Text>
                </TouchableOpacity>
            </View>
            
            <CustomButton title="Sign in" onPress={() => handleSignIn()}/> 
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: palette.BACKGROUND_PRIMARY
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  }
});

export default LoginScreen;