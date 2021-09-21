import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, Modal, ModalProps, View, TouchableWithoutFeedback, Pressable } from 'react-native'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import { AppointmentProps } from '../Appointment'
import { Background } from '../Background'
import { BorderButton } from '../BorderButton'

import { styles } from './styles'

interface Props extends ModalProps {
    closeModal: () => void
    appointmentId: string
}

export function RemoveAppointmentModalView({ closeModal, appointmentId, ...rest }: Props) {
    const navigation = useNavigation()

    async function handleRemoveAppointment() {
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
        const appointments = storage && JSON.parse(storage).filter((item: AppointmentProps) => {
            return item.id != appointmentId
        })

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify(appointments)
          )
      
          navigation.navigate('Home')

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
                                    Deletar partida?
                                </Text>

                                <View style={styles.buttons}>
                                    <View style={styles.noButton}>
                                        <BorderButton onPress={closeModal} title="Não" />
                                    </View>

                                    <View style={styles.yesButton}>
                                        <Pressable
                                            style={styles.pressableButton}
                                            onPress={() => handleRemoveAppointment()}
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