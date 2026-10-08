import { StyleSheet } from 'react-native';
import { couleurs } from "./couleurs";
export const formulaireStyles = StyleSheet.create({
  input: {
    backgroundColor: couleurs.primaire,
    color: couleurs.texte,
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 16,
  },
  messageErreur: {
    color: couleurs.erreur,
    fontSize: 16,
  },
});