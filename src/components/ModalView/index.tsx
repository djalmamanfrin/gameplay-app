import React, { ReactNode } from "react";
import { TouchableWithoutFeedback, View, Modal, ModalProps } from "react-native";


import { Background } from '../Background';

import { styles } from "./styles";

type Props = ModalProps & {
    children: ReactNode;
    close: () => void;
}

export function ModalView({children, close, ...rest} : Props) {
    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={close}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar}/>
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
