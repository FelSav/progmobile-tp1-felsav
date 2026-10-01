import { StyleSheet } from 'react-native';
import { couleurs } from "./couleurs";

export const boutonStyles = StyleSheet.create({
  /* Bouton primaire */
  primaire: {
    backgroundColor: couleurs.primaire,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  primaireTexte: {
    color: couleurs.background,
    fontSize: 16,
    fontWeight: 'bold',
  },

  /* Bouton secondaire */
  secondaire: {
    marginVertical: 8,
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: couleurs.primaire,
  },
  secondaireTexte: {
    color: couleurs.texte,
    fontSize: 16,
    fontWeight: 'bold',
  },
});