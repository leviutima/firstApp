import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
  return(
    <View style={styles.constainer}>

      <Text 
        style={styles.eventClass}>
          Meu novo projeto
      </Text>

      <Text 
        style={styles.eventDate}>
        Iniciado em: 26/11/2024
      </Text>

      <TextInput 
        style={styles.inputStyle}
        placeholder="insira o texto"
        placeholderTextColor='#6B6B6B6B'
        />

        <TouchableOpacity >
          <Text> Enviar </Text>
        </TouchableOpacity>

    </View>
  )
}