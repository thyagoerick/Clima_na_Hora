import React from 'react';
import { Tab, TabView } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Historico from './Historico';
import SearchWeather from './SearchWeather';

const Guia = () => {

  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Pesquisar"
          titleStyle={styles.textSize}
          icon={{ name: 'search', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Historico"
          titleStyle={styles.textSize}
          icon={{ name: 'book-outline', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.item}>
          <SearchWeather />
        </TabView.Item>
        <TabView.Item style={styles.item}>
          <Historico />
        </TabView.Item>
      </TabView>
    </>
  );
};
export default Guia

const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: 12
  },
  textSize: {
    fontSize: 12
  }
})

