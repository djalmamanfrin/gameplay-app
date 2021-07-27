import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

type Props = {
    width: string;
}

export function ListDivider({ width } : Props) {
    return (
        <View
            style={[styles.container, { width: width }]}
        />
    )
}
