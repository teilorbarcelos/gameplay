import { useFocusEffect, useNavigation } from "@react-navigation/core"
import React, { useCallback, useState } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { Appointment, AppointmentProps } from "../../components/Appointment"
import { Background } from "../../components/Background"
import { ButtonAdd } from "../../components/ButtonAdd"
import { CategorySelect } from "../../components/CategorySelect"
import { ListDivider } from "../../components/ListDivider"
import { ListHeader } from "../../components/ListHeader"

import { Profile } from "../../components/Profile"
import { COLLECTION_APPOINTMENTS } from "../../configs/database"
import { styles } from "./styles"
import { Load } from "../../components/Load"

export function Home() {
    const navigation = useNavigation()
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(true)
    const [appointments, setAppointments] = useState<AppointmentProps[]>([])

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate')
    }

    async function loadAppointments() {
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
        const savedAppointments: AppointmentProps[] = storage ? await JSON.parse(storage) : []

        if (category) {
            setAppointments(savedAppointments.filter(item => item.category === category))
        } else {
            setAppointments(savedAppointments)
        }

        setLoading(false)
    }

    useFocusEffect(useCallback(() => {
        loadAppointments()
    },[category]))

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd
                    onPress={handleAppointmentCreate}
                />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />

            {loading ?

                <Load

                /> :

                <>
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle={`Total ${appointments.length}`}
                    />

                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment data={item} />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        contentContainerStyle={{ paddingBottom: 69 }}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            }
        </Background>
    )
}