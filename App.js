import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from './store/store';
import Search from './features/Search';
import { fetchCars , addCars} from './api/CarsApi';
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
    <Provider store = {store} >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Search data={data}/>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


