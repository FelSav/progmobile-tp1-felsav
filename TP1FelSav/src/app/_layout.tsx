import { couleurs } from "@/theme/couleurs";
import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import IonIcons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: couleurs.primaire,
          borderBottomColor: couleurs.primaire
        },
        headerTintColor: couleurs.secondaire,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: couleurs.primaire,
          borderTopColor: couleurs.secondaire
        },
        tabBarActiveTintColor: couleurs.secondaire,
        tabBarInactiveTintColor: couleurs.inactif
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Films",
          headerTitle: "Tous les films",
          tabBarIcon: ({ color, size }) => (
            <IonIcons name='film' size={size} color={color} />
          ),
        }} />

      <Tabs.Screen
        name="casting"
        options={{
          title: "Casting",
          headerTitle: "Tous les acteurs",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='group' size={size} color={color} />
          ),
        }} />

      <Tabs.Screen
        name="favoris"
        options={{
          title: "Favoris",
          headerTitle: "Films favoris",
          tabBarIcon: ({ color, size }) => (
            <IonIcons name='star' size={size} color={color} />
          ),
        }} />

    </Tabs>
  );
}
