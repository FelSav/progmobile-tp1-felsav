import { couleurs } from '@/theme/couleurs';
import { formulaireStyles } from '@/theme/formulaires';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

interface TextInputAvecIconeProps extends TextInputProps {
  icone: keyof typeof MaterialCommunityIcons.glyphMap;
  styleConteneur?: StyleProp<ViewStyle>;
}

export default function TextInputAvecIcone({ icone, style, styleConteneur, ...props }: TextInputAvecIconeProps) {
  return (
    <View style={[styles.conteneur, styleConteneur]}>
      <MaterialCommunityIcons style={styles.icone} name={icone} size={24} color={couleurs.secondaire} />
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={couleurs.secondaire}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: {// C'est lui qui donne les bordures, le fond et le padding global
    flexDirection: 'row',
    alignItems: 'center',      // Aligne verticalement l'icône et le texte au milieu
    gap: 8,
    backgroundColor: formulaireStyles.input.backgroundColor,
    borderRadius: formulaireStyles.input.borderRadius,
    marginTop: formulaireStyles.input.marginTop,
  },
  icone: {
    marginLeft: formulaireStyles.input.padding,
  },
  input: {
    flex: 1,
    fontSize: formulaireStyles.input.fontSize,
    color: formulaireStyles.input.color,
    paddingVertical: formulaireStyles.input.padding,
  },
});