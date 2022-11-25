import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card, ListItem } from '@rneui/themed'
import { obterHistorico } from '../service/OracleCloudService'

const Historico = () => {
  const [itens, setItens] = useState([])
  useEffect(() => {
    const vai = async () => {
      const resultado = (await obterHistorico()).data.items
      setItens(resultado)
    }
    vai()
  }, [])

  return (

    <View>

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
