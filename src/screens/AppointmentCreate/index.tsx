import React, { useState } from "react"
import { Text, View } from "react-native"
import { RectButton } from "react-native-gesture-handler"

import { Background } from "../../components/Background"
import { CategorySelect } from "../../components/CategorySelect"
import { Header } from "../../components/Header"
import { styles } from "./styles"

export function AppointmentCreate() {
    const [category, setCategory] = useState('')

    return (
        <Background>
            <Header
                title="Agendar partida"
            />

            <Text style={styles.label}>
                Categoria
            </Text>

            <CategorySelect
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}
            />

            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        <View style={styles.image} />

                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Selecione um servidor
                            </Text>
                        </View>
                    </View>
                </RectButton>
            </View>
        </Background>
    )
}