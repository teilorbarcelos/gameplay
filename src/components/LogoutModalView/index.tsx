import React from 'react'
import { Text, Modal, ModalProps, View, TouchableWithoutFeedback, Pressable } from 'react-native'
import { useAuth } from '../../hooks/useAuth'
import { Background } from '../Background'
import { BorderButton } from '../BorderButton'
import { Button } from '../Button'

import { styles } from './styles'

interface Props extends ModalProps {
    closeModal: () => void
}

export function LogoutModalView({ closeModal, ...rest }: Props) {
    const { signOut } = useAuth()

    async function handleLogout() {
        signOut()
        closeModal()
    }

    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.content}>
                                <Text style={styles.text}>
                                    Deseja sair do <Text style={styles.bold}>Game<Text style={styles.red}>Play</Text>?</Text>
                                </Text>

                                <View style={styles.buttons}>
                                    <View style={styles.noButton}>
                                        <BorderButton onPress={closeModal} title="Não" />
                                    </View>

                                    <View style={styles.yesButton}>
                                        <Pressable
                                            style={styles.pressableButton}
                                            onPress={() => handleLogout()}
                                        >
                                            <Text style={styles.pressableButtonText}>Sim</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}