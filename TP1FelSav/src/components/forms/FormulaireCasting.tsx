import { globalStyles } from "@/theme/global"
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView } from "react-native"
import { formulaireStyles } from "@/theme/formulaires"
import { couleurs } from "@/theme/couleurs"

import TextInputAvecIcone from "./TextInputAvecIcone"
import { boutonStyles } from "@/theme/boutons"
import { MaterialCommunityIcons } from "@expo/vector-icons"



export default function FormulaireCasting() {
  const [nom, setNom] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [persoPref, setPersoPref] = useState<string>('')
  const [clic, setClic] = useState<number>(0)


  function onPressClic() {
    const nouveauClic = clic + 1
    setClic(nouveauClic)

    if (nouveauClic === 6) {
      alert("Mode secret activé!")
    }
    if (nouveauClic > 6 && nom !== "" && age !== "" && persoPref !== "") {
      alert(`Vos cordonnées ont été envoyés à la direction : 
        Nom : ${nom}
        Àge : ${age}
        Personnage préféré : ${persoPref}`)
    }
  }

  function onPressClicReset() {
    setClic(0)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TextInputAvecIcone
        icone="android"
        placeholder="Nom complet"
        placeholderTextColor={couleurs.inactif}
        value={nom}
        onChangeText={setNom}
      />
      <TextInputAvecIcone
        icone="apple"
        placeholder="Âge"
        placeholderTextColor={couleurs.inactif}
        value={age}
        onChangeText={setAge}
      />
      <TextInputAvecIcone
        icone="movie-open"
        placeholder="Personnage préféré"
        placeholderTextColor={couleurs.inactif}
        value={persoPref}
        onChangeText={setPersoPref}
      />

      <Text style={styles.description} >Veuillez noter que nous ne sommes pas responsables des accidents survenus lors des tournages.</Text>

      <View style={styles.row}>
        <MaterialCommunityIcons name="alert" size={32} color={'#ff0000'} onPress={onPressClicReset} />

        <MaterialCommunityIcons name="access-point-network" size={32} color={'#727272'} />
        <MaterialCommunityIcons name="abugida-devanagari" size={32} color={'#FFE81F'} />
        <MaterialCommunityIcons name="alien" size={32} color={'#ff0000'} />
        <MaterialCommunityIcons name="alert" size={32} color={'#727272'} />
        <MaterialCommunityIcons name="star" size={32} color={'#fdfcfc'} />

        <MaterialCommunityIcons name="alien-outline" size={32} color={'#FFE81F'} onPress={onPressClic} />

        <MaterialCommunityIcons name="alien" size={32} color={'#070707'} />
      </View>


    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 16
  },
  rowItem: {
    flex: 1
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: '#FFE81F',
    marginTop: 10
  }
})