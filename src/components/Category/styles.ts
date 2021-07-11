import { StyleSheet } from 'react-native';
import {theme} from "../../global/styles/themes";



export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8
    },
    title: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15
    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-end",
        marginRight: 8,
        borderRadius: 3
    },
    unchecked: {
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        alignSelf: "flex-end",
        marginRight: 8,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3
    }
});