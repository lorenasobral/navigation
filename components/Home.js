import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={styles.bloco}>
        <Text style={styles.texto}>Consulta de Cidades</Text>

    <View>
        <TouchableOpacity style={styles.botao}
        onPress={()=>navigation.navigate("Mongagua")}>
            <Text style={styles.txtBotao}>Cidades</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
        bloco:{
            marginTop:30
        },
        texto:{
            fontSize:40,
            color: 	'#4682B4',
            textAlign: 'center'
        },
        botao:{
            marginTop:20,
            backgroundColor:'#E0ECF8',
            width: '80%',
            marginLeft: '10%'
        },
        txtBotao:{
            fontSize:20,
            color: '#298A08',
            textAlign:'center'
        }
})