import { NativeStackNavigationOptions } from 'expo-router';
import { StyleSheet } from 'react-native';
import { couleurs } from "./couleurs";


export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: couleurs.background,
    //paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: couleurs.secondaire
  },

});

export const styleHeader: NativeStackNavigationOptions = {
  headerShown: true,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: couleurs.background,

  },
  headerTintColor: couleurs.secondaire,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};




