/**
 * Stylesheet containing most used styles in this app.
 * Contains stuff like headings, rounded inputs etc.
 */

import { StyleSheet } from "react-native";
import { PrimaryPalette } from "./Colors";

const palette = PrimaryPalette;

const GlobalStylesheet = StyleSheet.create({
    h1: {
        fontSize: 24,
        fontWeight: '700',
        color: palette.FONT_DEFAULT,
        letterSpacing: 1,

    },
    h2: {
       fontSize: 20,
       fontWeight: '700', 
       color: palette.FONT_DEFAULT,
    }, 
    h4: {
        fontWeight: '700',
        color: palette.FONT_DEFAULT,
        textShadowColor: palette.BACKGROUND_HIGHLIGHT,
        textShadowRadius: 8,
    },
    baseContainer: {
        height: '100%',
        width: '100%',
        padding: 10,
        backgroundColor: palette.BACKGROUND_PRIMARY
    },
    centeredFlex: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    textinput: {
        backgroundColor: palette.BACKGROUND_ALT,
        borderColor: palette.BACKGROUND_HIGHLIGHT,
        borderWidth: 2,
        borderRadius: 25,


        color: palette.FONT_DEFAULT,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',

        height: 48,
        width: '75%',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5,
        marginBottom: 30,
    }
});

export {GlobalStylesheet};