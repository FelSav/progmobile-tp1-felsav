import FormulaireCasting from "@/components/forms/FormulaireCasting";
import TextInputAvecIcone from "@/components/forms/TextInputAvecIcone";
import { globalStyles } from "@/theme/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Platform } from "react-native";

export default function Casting() {


  return (
    <View style={globalStyles.container}>
      <Image source={require('@/assets/images/trooper2.jpg')} resizeMode="contain" style={styles.logo} />

      <Text style={styles.titre} >Êtes-vous intéressé à faire parti du prochain film ?</Text>

      <FormulaireCasting />

    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    borderRadius: 30,
    marginBottom: 10,
    marginTop: 5
  },

  titre: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    color: '#fff'
  }
})