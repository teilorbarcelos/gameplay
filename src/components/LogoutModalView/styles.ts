import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '130%'
    },
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: theme.fonts.text400,
        fontSize: 24,
        color: theme.colors.heading
    },
    bold: {
        fontFamily: theme.fonts.title700
    },
    red: {
        color: theme.colors.primary
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 27
    },
    yesButton: {
        width: 160,
    },
    noButton: {
        width: 160,
        height: 56,
        marginRight: 8,
        borderWidth: 1,
        borderColor: theme.colors.secondary30,
        borderRadius: 8
    },
    pressableButton: {
        width: '100%',
        alignSelf: "center",
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    pressableButtonText: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: "center",
        fontFamily: theme.fonts.text500
    }
})