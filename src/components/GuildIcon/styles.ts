import { StyleSheet } from 'react-native';
import {theme} from "../../global/styles/themes";

export const styles = StyleSheet.create({
    image: {
        width: 64,
        height: 64,
        borderRadius: 8,
        borderColor: theme.colors.secondary30,
        borderWidth: 2
    }
});