import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import React, { useState } from 'react'
import { obterPrevisoes } from '../service/WeatherMapService'
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler'
import { Card } from '@rneui/themed'
import { CardTitle } from '@rneui/base/dist/Card/Card.Title'
import { armazenarNoHistorico }  from '../service/OracleCloudService'
import * as oracleCloudService from '../service/OracleCloudService'

const SearchWeather = () => {

  const [itens, setItens] = useState([])
  const [state, setState] = 
    useState({cidade: ''})

  const buscar = () => {
    const cidade = state.cidade
    obterPrevisoes(cidade)
      .then(res => {
        console.log(res)
        setItens(itens => {
          console.log(res.data.list)
          return res.data.list
        })
        testeOracle()
      })
      .catch(erro => {
        console.log('erro', erro)
      })
  }
  const testeOracle = () => {

    const promise = oracleCloudService.armazenarNoHistorico({
      cidade: state.cidade
    })
    // fconsole.log(promise)
    promise
    .then (res => {
      console.log(res)
    })
    .catch (erro => {
      console.log('erro: ', erro)
    })
  
    console.log("estamos livres para fazer outras coisas...")
  
  }
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={cidade => setState({...state, cidade})}
          value={state.cidade}
        placeholder='Digite o nome da cidade'
      />

      <FlatList
        data={itens}
        keyExtractor={item => item.dt}
        renderItem={p => (
          <Card>
            <CardTitle>{p.item.dt_txt}</CardTitle>
          <View style={ styles.viewMother }>
            <View style={styles.view}>
              <Text>Temp Max: {Math.ceil(p.item.main.temp_max, -2)}{`\u00B0`}</Text>
              <Image
                style={styles.imagem}
                source={{
                  uri: `http://openweathermap.org/img/wn/${p.item.weather[0].icon}.png`,
                }}
              />
            </View>
            <View style={styles.view}>
              <Text>Temp Min: {Math.floor(p.item.main.temp_min, -2)}{`\u00B0`}</Text>
              <Image
                style={styles.imagem}
                source={{
                  uri: `http://openweathermap.org/img/wn/${p.item.weather[0].icon}.png`,
                }}
              />
            </View>
          </View>
          </Card>
        )}
      />
      <Button
        title='Buscar'
        onPress={() => buscar()}
        
        />
    </>
  )
}

export default SearchWeather

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 2,
    width: '100%',
  },
  view: {
    padding: 10,
  },
  viewMother: {
    flexDirection: 'row',
    textAlign:'center',
    margin:'auto'
  },
  imagem:{
    width: 75, 
    height: 50
  }
})

// return (
//   <View style={styles.container}>     
//    <Button 
//     title='OK'
//     onPress={() => testeOracle()}
//    />
//   </View>
// )
// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// });