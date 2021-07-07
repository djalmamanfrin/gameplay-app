import { StyleSheet } from 'react-native';
import {theme} from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    image: {
        width: "100%",
        height: 360
    },
    title: {
        color: theme.colors.heading,
        textAlign: "center",
        fontSize: 40,
        marginBottom: 16
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: "center",
        fontSize: 15,
        marginBottom: 64
    },
    input: {
        height: 50,
        width: 200,
        borderBottomWidth: 2
    }
});