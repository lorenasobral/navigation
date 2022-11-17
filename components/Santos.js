import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import Api from './Api';

const image = { uri: "https://www.shihoriobata.com/wp-content/uploads/2020/12/moon-and-clouds-aesthetic-background-phone2-576x1024.jpg" };


export default function Santos() {
  const [dados, setDados] = useState("");

  const [cidade, setCidade] = useState('Santos')
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=10&fields=only_results,temp,city_name,description,time,wind_speedy,forecast,max,min,date&key=c6186edf&city_name=${cidade},SP`)
    setDados(response.data.forecast);
  
  }

  return (
    <View style={styles.container}>

<ImageBackground  style={{
            position: "absolute",
            height: '100%',
            width: '100%'
          }}source={image}>
    </ImageBackground>

      <View style={styles.header}>
        <Text style={styles.textoTitulo}>Previsão do Tempo para Santos</Text>
                
    
     
      </View>
      <FlatList
          data={dados}
          renderItem={({item}) => {
            return (
              <View style={styles.tempo}>
                <Text>Data: {item.date}</Text>
                <Text>Max: {item.max}</Text>
                <Text>Min: {item.min}</Text>
                <Text>Min: {item.description}</Text>
              </View>
            );
          }}
        
        />

      <View style={styles.blocos}>
        <TouchableOpacity
        style={styles.btn}
        onPress={carregaDados}
        >
          <Text style={styles.btnTexto}>Pesquisar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.btn}
        onPress={limpar}
        >
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>

      </View>
      
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempo:{
    marginLeft: '10%',
    marginBottom: 20,
    color: '#FFF',
  },
  textoTitulo: {
    bottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF',
  },
  header: {
    margin: 40
  },
  blocos: {
    fontSize: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    marginTop: '4%',
    textAlign: 'center'
  },
  input: {
    borderBottomWidth: 2,
    width: 265,
    height: 35,
    fontSize: 20,
    borderColor: '#fff'
  },
  btn: {
    width: 280,
    height: 45,
    backgroundColor: '#0294E8',
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
  },
  btnTexto: {
    fontSize: 24,
    color: '#FFF',
    top: 6  btn: {
    fontSize: '19px',
    
    width: '153px',
    height:'44px',
    borderWidth: '2px',
    color: '#fff',
    borderColor: '#967eac',
    borderTopLeftRadius: '9px',
    borderTopRightRadius: '9px',
    borderBottomLeftRadius: '9px',
    borderBottomRightRadius: '9px',
    background: '#ae99c3',
  },
  btnTexto: {
    fontSize: 24,
    color: '#FFF',
    top: 6

  },
});
