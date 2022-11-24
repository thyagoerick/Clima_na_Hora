import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View 
} from 'react-native'
import React, { useState } from 'react'
import { obterPrevisoes } from '../service/WeatherMapService'
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler'
import { Input } from '@rneui/base'

const SearchWeather = () => {

  const [itens, setItens] = useState([])

  const buscar = () => {
    const cidade = "Diadema"
    obterPrevisoes(cidade)
    .then(res => {
      console.log(res)
      setItens(itens => {
        console.log(res.data.list)
        return res.data.list
      })
    })
    .catch(erro => {
      console.log('erro', erro)
    })
  }
  return (
    <>
      
      
      <FlatList 
        data={itens}
        keyExtractor={item => item.dt}
        renderItem={p => (
          <View style={{flexDirection: "row", padding: 20}}>
            <View style={{margin:10}}>
              <Text>Temp Max: {Math.ceil(p.item.main.temp_max, -2)}{`\u00B0`}</Text>
              <Image
                style={{width: 50, height: 50}}
                source={{
                    uri: `http://openweathermap.org/img/wn/${p.item.weather[0].icon}.png`,
                }}
              /> 
            </View>
            <View style={{margin:10}}>
              <Text>Temp Min: {Math.floor(p.item.main.temp_min, -2)}{`\u00B0`}</Text>
              <Image
                style={{width: 50, height: 50}}
                source={{
                    uri: `http://openweathermap.org/img/wn/${p.item.weather[0].icon}.png`,
                }}
              /> 
            </View>
          </View>
        )}
      />
      <Button 
        title='Buscar'
        onPress={() => buscar()}/>
    </>
  )
}

export default SearchWeather

const styles = StyleSheet.create({


})