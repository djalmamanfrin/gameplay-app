import { StyleSheet } from 'react-native';
import {theme} from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24
    },
    content: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        marginBottom: 4
    },
    type: {
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginBottom: 12
    }
});