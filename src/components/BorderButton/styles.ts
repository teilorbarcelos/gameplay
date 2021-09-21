import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        borderWidth: 2,
        borderColor: theme.colors.secondary30,
        alignSelf: "center",
        backgroundColor: 'transparent',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: "center",
        fontFamily: theme.fonts.text500
    }
})