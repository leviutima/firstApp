import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return(
    <View style={styles.constainer}>
      <Text style={styles.eventClass}>Meu novo projeto</Text>
      <Text style={styles.eventDate}>Iniciado em: 26/11/2024</Text>
    </View>
  )
}