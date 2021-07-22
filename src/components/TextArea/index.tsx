import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/themes";

export function TextArea({...rest}: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            {...rest}
        />
    )
}
