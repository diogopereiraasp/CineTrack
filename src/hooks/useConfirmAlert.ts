import { Alert } from 'react-native';

type ConfirmAlertOptions = {
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
};

export function useConfirmAlert() {
    function showConfirm({
        title = 'Confirmação',
        message,
        confirmText = 'Confirmar',
        cancelText = 'Cancelar',
        onConfirm,
    }: ConfirmAlertOptions) {
        Alert.alert(
            title,
            message,
            [
                { text: cancelText, style: 'cancel' },
                { text: confirmText, style: 'destructive', onPress: onConfirm },
            ],
            { cancelable: true }
        );
    }

    return { showConfirm };
}