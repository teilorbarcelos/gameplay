import React, { useState } from "react"
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    View
} from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { Feather } from "@expo/vector-icons"
import uuid from 'react-native-uuid'
import { useNavigation } from "@react-navigation/native"

import { CategorySelect } from "../../components/CategorySelect"
import { Header } from "../../components/Header"
import { styles } from "./styles"
import { theme } from "../../global/styles/theme"

import { GuildIcon } from "../../components/GuildIcon"
import { SmallInput } from "../../components/SmallInput"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { ModalView } from "../../components/ModalView"
import { Guilds } from "../Guilds"
import { GuildProps } from "../../components/Guild"
import { Background } from "../../components/Background"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { COLLECTION_APPOINTMENTS } from "../../configs/database"

interface Time {
    hour: number
    minute: number
}

export function AppointmentCreate() {
    const [category, setCategory] = useState('')
    const [openGuildsModal, setOpenGuildsModal] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [description, setDescription] = useState('')

    const navigation = useNavigation()

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect)
        setOpenGuildsModal(false)
    }

    async function handleSave() {

        if(!category){
            Alert.alert('Selecione uma categoria!')
            return
        }

        if(!guild.id){
            Alert.alert('Selecione um servidor!')
            return
        }

        if(hour == '' ||
            minute == '' ||
            parseInt(hour) < 0 ||
            parseInt(hour) > 23 ||
            parseInt(minute) < 0 ||
            parseInt(minute) > 59
        ){
            Alert.alert('Horário inválido!')
            return
        }

        if(month == '' || day == '' || parseInt(day) < 1 || parseInt(day) > 31 || parseInt(month) < 1 || parseInt(month) > 12){
            Alert.alert('Data inválida!')
            return
        }

        if(month == '' ||
            day == ''
        ){
            Alert.alert('Data inválida!')
            return
        }

        if((month == '4' ||
            month == '6' ||
            month == '9' ||
            month == '11') &&
            parseInt(day) > 30
        ){
            Alert.alert('Data inválida!')
            return
        }

        if(month == '2' && parseInt(day) > 29){
            Alert.alert('Data inválida!')
            return
        }

        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}h`,
            description
          }
      
          const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
          const appointments = storage ? JSON.parse(storage) : []
      
          await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment])
          )
      
          navigation.navigate('Home')
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Background>
                <ScrollView>
                    <Header
                        title="Agendar partida"
                    />

                    <Text
                        style={[
                            styles.label,
                            { marginLeft: 24, marginTop: 36, marginBottom: 18 }
                        ]}
                    >
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={setCategory}
                        categorySelected={category}
                    />

                    <View style={styles.form}>
                        <RectButton
                            onPress={() => setOpenGuildsModal(true)}
                        >
                            <View style={styles.select}>
                                {guild.icon ?
                                    <GuildIcon
                                        guildId={guild.id}
                                        iconId={guild.icon}
                                    /> :
                                    <View style={styles.image} />
                                }

                                <View
                                    style={styles.selectBody}
                                >
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : 'Selecione um servidor'}
                                    </Text>
                                </View>
                                <Feather
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Dia e mês
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput
                                        maxLength={2}
                                        onChangeText={setDay}
                                    />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput
                                        maxLength={2}
                                        onChangeText={setMonth}
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Hora e minutos
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput
                                        maxLength={2}
                                        onChangeText={setHour}
                                    />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput
                                        maxLength={2}
                                        onChangeText={setMinute}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.warning}>
                                Max 100 caracteres
                            </Text>
                        </View>

                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDescription}
                        />

                        <View style={styles.footer}>
                            <Button
                                title="Agendar"
                                onPress={() => handleSave()}
                            />
                        </View>
                    </View>
                </ScrollView>
            </Background>

            <ModalView visible={openGuildsModal} closeModal={() => setOpenGuildsModal(false)}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>

        </KeyboardAvoidingView>
    )
}