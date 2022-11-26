import { Button, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Card, ListItem } from '@rneui/themed'
import { obterHistorico } from '../service/OracleCloudService'

const Historico = () => {
  const [itens, setItens] = useState([])

  const vai = async () => {
    const resultado = (await obterHistorico()).data.items.sort((a, b) => b.cod_historico - a.cod_historico)
    setItens(resultado)
  }
  return (

    <View>
      <Button
        title='Atualizar'
        onPress={vai}
      />
      {
        itens.map(item =>
          <Card ><ListItem key={item.cod_historico}>
            <ListItem.Content style={styles.card}>
              <ListItem.Title style={styles.card2}>{item.cidade}</ListItem.Title>
              <ListItem.Title style={styles.card2}>{item.data_historico}</ListItem.Title>
            </ListItem.Content>
          </ListItem></Card>

        )
      }

    </View>

  )
}

export default Historico


const styles = StyleSheet.create({
  view: {

  },
  card: {
    flexDirection: 'row',
    textAlign: 'center',
    margin: 10,

  },
  card2: {
    textAlign: 'center',
    margin: 10,

  },
})
