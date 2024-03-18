import { SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid } from "react-native";
import { PrimaryPalette } from "../../assets/Colors";
import { GlobalStylesheet } from "../../assets/GlobalStyles";
import CustomButton from "../Button/CustomButton";
import { useState } from "react";

const palette = PrimaryPalette;

const RegisterScreen = () => {
    const [input, setInput] = useState({
        username: '',
        fullname: '',
        number: '',
        password: '',

    })

    const handleRegister = () => {
        if(!(input.username || input.fullname || input.number || input.password)) {
            ToastAndroid.show('All rows are required!', ToastAndroid.SHORT);
            return;
        }
        // other stuff here
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={[GlobalStylesheet.h1, {marginBottom: 60}]}>Create new account</Text>

            <Text style={GlobalStylesheet.h2}>Username</Text>
            <TextInput
                id='username' 
                style={GlobalStylesheet.textinput} 
                placeholder='e.g. john5412'
                onChangeText={text => setInput({...input, username: text})} />

            <Text style={GlobalStylesheet.h2}>Full name</Text>
            <TextInput
                id='fullname' 
                style={GlobalStylesheet.textinput} 
                placeholder='e.g. John Doe'
                onChangeText={text => setInput({...input, fullname: text})} />

            <Text style={GlobalStylesheet.h2}>Mobile phone number</Text>
            <TextInput
                inputMode='numeric'
                textContentType='telephoneNumber'
                id='number' 
                style={GlobalStylesheet.textinput} 
                placeholder='e.g. 123 456 789'
                onChangeText={text => setInput({...input, number: text})} />

            <Text style={GlobalStylesheet.h2}>Password</Text>
            <TextInput
                id='password' 
                style={GlobalStylesheet.textinput}
                onChangeText={text => setInput({...input, password: text})} 
                />

            <CustomButton title="Sign up" onPress={() => handleRegister()}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: palette.BACKGROUND_PRIMARY,
        gap: 5,
      }
})

export default RegisterScreen;