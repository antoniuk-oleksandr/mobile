import {KeyboardAvoidingView, Modal, ModalProps, Platform, View} from 'react-native';
import {ReactNode} from "react";

type MyModalProps = ModalProps & {
    isOpen: boolean,
    withInput?: boolean,
    children: ReactNode,
}

const MyModal = (props: MyModalProps) => {
    const {isOpen, withInput, children, ...rest} = props;
    const styles = "p-4 flex-1 justify-center items-center bg-neutral-800/50";

    const content = withInput ? (
            <KeyboardAvoidingView
                className={styles}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {children}
            </KeyboardAvoidingView>
        )
        : (
            <View className={styles}>
                {children}
            </View>
        )

    return (
        <Modal
            visible={isOpen}
            transparent
            animationType='fade'
            statusBarTranslucent
            {...rest}
        >
            {content}
        </Modal>
    );
}

export default MyModal;