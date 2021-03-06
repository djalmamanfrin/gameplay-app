import { StyleSheet } from 'react-native';
import { theme } from "../../global/styles/themes";
import {getStatusBarHeight} from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 88,
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        flex: 1,
        textAlign: "center",
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading
    }
});