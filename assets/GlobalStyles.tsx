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