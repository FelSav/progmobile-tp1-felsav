import { globalStyles } from "@/theme/global"
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, KeyboardAvoidingView } from "react-native"
import { formulaireStyles } from "@/theme/formulaires"
import { couleurs } from "@/theme/couleurs"

import TextInputAvecIcone from "./TextInputAvecIcone"
import { boutonStyles } from "@/theme/boutons"


export interface FormulaireCastingValeurs {
  nom: string
  age: number
  persoPref: string
}

interface FormulaireCastingProps {
  mode: 'Rechercher' | 'Publier' | 'Modifier'
  soumettreFormulaire: (data: FormulaireCastingValeurs) => void
}

export default function FormulaireCasting({ mode, soumettreFormulaire }: FormulaireCastingProps) {
  const [nom, setNom] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [persoPref, setPersoPref] = useState<string>('')


  function onPress() {
    const objValeur: FormulaireCastingValeurs = {
      nom: nom,
      age: Number(age),
      persoPref: persoPref,
    }
    soumettreFormulaire(objValeur)
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
  }
})