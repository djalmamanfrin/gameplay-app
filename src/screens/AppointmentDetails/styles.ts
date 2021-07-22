import { StyleSheet } from 'react-native';
import { getBottomSpace } from "react-native-iphone-x-helper";
import {theme} from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 24,
        marginBottom: 16
    },
    banner: {
        width: "100%",
        height: 234
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 28,
        color: theme.colors.heading
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        lineHeight: 24,
        color: theme.colors.heading
    },
    members: {
        marginLeft: 24,
        marginTop: 16,
        marginHorizontal: 16
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }
});