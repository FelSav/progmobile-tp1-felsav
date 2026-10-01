import FormulaireCasting from "@/components/forms/FormulaireCasting";
import FormulaireTrajet from "@/components/forms/FormulaireCasting";
import TextInputAvecIcone from "@/components/forms/TextInputAvecIcone";
import { globalStyles } from "@/theme/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "expo-router";
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Platform } from "react-native";

export default function Casting() {

  return (
    <KeyboardAvoidingView style={globalStyles.container}>
      <Image source={require('@/assets/images/trooper2.jpg')} resizeMode="contain" style={styles.logo} />

      <Text style={styles.titre} >Êtes-vous intéressé à faire parti du prochain film ?</Text>

      <FormulaireCasting />

      <Text style={styles.description} >Veuillez noter que nous ne sommes pas responsables des accidents survenus lors des tournages.</Text>

      <View style={globalStyles.icon}>
        <MaterialCommunityIcons name="alert" size={32} color={'#ff0000'} />
        <MaterialCommunityIcons name="access-point-network" size={32} color={'#727272'} />
        <MaterialCommunityIcons name="abugida-devanagari" size={32} color={'#FFE81F'} />
        <MaterialCommunityIcons name="alien" size={32} color={'#ff0000'} />
        <MaterialCommunityIcons name="alert" size={32} color={'#727272'} />
        <MaterialCommunityIcons name="star" size={32} color={'#fdfcfc'} />
        <MaterialCommunityIcons name="alien-outline" size={32} color={'#FFE81F'} />
        <MaterialCommunityIcons name="alien" size={32} color={'#070707'} />
      </View>
    </KeyboardAvoidingView>
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
  },

  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: '#FFE81F',
    marginTop: 10
  }
})