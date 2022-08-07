import { Dropdown} from 'react-native-element-dropdown';
import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'


import { VEHICLES_LIST } from '../utils/filterData';
import { useEffect, useState } from 'react';
import { fetchCars } from '../api/CarsApi';
import { addCars, selectAllCars } from '../store/reducers/carsReducer';
import CardList from '../components/CardList';

// const Search = () => {
// return(
//     <Dropdown
//         style={styles.f}
//         labelField={vehicle => vehicle}
//         data={VEHICLES_LIST}
//         valueField={vehicle => vehicle}
//         onChange={() => console.log('changed')}
//         placeholder='list of vehicles'/> 
// )
// }

// export default Search

// const styles = StyleSheet.create({
//     f:{
//         width:50,
//     }
// })


const Search = ({data}) => {
    const [country,setCountry] = useState('')
    const [vehicle,setVehicle] = useState('')
    const [isFetching,setIsFetching] = useState(false)
    const [error,setError] = useState(false)
    const [filtered,setFiltered] = useState(true)
    const [carsMaster,setCarsMaster] = useState([])


    const dispatch = useDispatch()

   
    // useEffect(() => {
    //     console.log('called')
    //     setCarsInit([1])
    // },[])

    // const FetchLoader = () => {
    //     if (error){
    //         console.log(error)
    //         return(
    //             <View>
    //             <Text>
    //                 Unexpected Error occured
    //             </Text>
    //             </View>
    //         )
    //     } else if (isFetching) {
    //         return (
    //         <Text>Loading</Text>
    //         )
    //     } 
    //     return null
    // }
    
    let initCars = []

    const searchHandler = () => {
        console.log('pressed')
        setFiltered(false)
        let cars = data

        // setError(false)
        // setIsFetching(true)
        // async function getCarsData () {
        //     try {
        //         const carsData = await fetchCars()
        //         setIsFetching(false)
        //         dispatch(addCars({cars:carsData}))
        //         //console.log(carsData)
        //     } catch (error) {
        //       console.log(error)
        //       setError(true)
        //     }
        //   }
        // getCarsData()  
        
        if (country){
            cars = cars.filter(car => car.country === country )
        }
        if (vehicle) {
            cars = cars.filter(car => car.vehicle === vehicle)
        }
        

        setFiltered(true)
        setCarsMaster(cars)        
        console.log('cars found')
        console.log(cars)

    }

    const Results = () => {
        console.log('REsults called')
        console.log(filtered)
        if (filtered){
            console.log('maybe')
                if ( carsMaster.length > 0 ){
                    console.log('there')
                    console.log('here')
                    return(
                        <CardList data={carsMaster} fallbackText='No results found'/>
                    )  
                } 
                return null
        }
        return null  
    }

    //console.log(useSelector(state => state))

    return(
        <View>
            <Text>Filter : </Text>
            <View>
                <View><TextInput placeholder='Country' value={country} onChangeText={country => setCountry(country)}/></View>
                <View><TextInput placeholder='Vehicle'value={vehicle} onChangeText={vehicle => setVehicle(vehicle)}/></View>
            </View>
            <Pressable onPress={searchHandler}><Text>Search</Text></Pressable>
            <Results/>
        </View>
    )
}

export default Search