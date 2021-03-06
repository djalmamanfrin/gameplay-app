import { StyleSheet } from 'react-native';
import {theme} from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        width: 62,
        height: 66,
        borderRadius: 8,
        backgroundColor: theme.colors.discord,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 8,
        borderColor: theme.colors.secondary30,
        borderWidth: 2
    }
});