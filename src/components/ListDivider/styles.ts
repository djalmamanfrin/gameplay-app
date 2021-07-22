import { StyleSheet } from 'react-native';
import {theme} from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: 1,
        backgroundColor: theme.colors.secondary50,
        marginVertical: 16,
        marginRight: 16,
        alignSelf: "flex-end"
    },
});