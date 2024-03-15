import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { GlobalStylesheet } from "../../assets/GlobalStyles";
import Button from "../Button/Button";
import { PrimaryPalette } from "../../assets/Colors";

const LoginScreen = () => {
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
            
            <Button>Sign in</Button>
        </SafeAreaView>
    );
}

const palette = PrimaryPalette;

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
});

export default LoginScreen;