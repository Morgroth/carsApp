import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import Search from './features/Search';
import { fetchCars} from './api/CarsApi';
import { useEffect, useState } from 'react';


export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
    return undefined
  },[]
  )

  const fetchData = () => {
    fetchCars().then(response => setData(response)).catch(error => console.log(error))
  }


  return (
      <ImageBackground
       source={require('./assets/carsLogos.jpeg')}
       resizeMode="cover"
       style={styles.rootScreen}
       imageStyle={styles.backgroundImage}
      >
        <View style={styles.container}>
        <StatusBar style="auto" />
        <Search styles={styles.container} data={data}/>
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen:{
    flex: 1
  },
  backgroundImage:{
    width:50,
    height:50
  }


})


