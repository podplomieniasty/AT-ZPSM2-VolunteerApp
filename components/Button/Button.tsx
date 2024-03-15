import { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { PrimaryPalette } from "../../assets/Colors";

const palette = PrimaryPalette;

const Button = ({children}: PropsWithChildren) => {

    return(
        <TouchableOpacity style={[styles.container, {backgroundColor: palette.BUTTON_DEFAULT}]}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: palette.BACKGROUND_HIGHLIGHT,
        
        backgroundColor: palette.BUTTON_DEFAULT,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: palette.FONT_DEFAULT,
        textShadowColor: palette.BACKGROUND_ALT,
        textShadowRadius: 8,
    }
})

export default Button;