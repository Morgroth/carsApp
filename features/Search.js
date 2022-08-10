import { Pressable, StyleSheet, View, Text, SafeAreaView, Dimensions } from 'react-native'

import { VEHICLES_LIST, COUNTRIES_LIST } from '../utils/filterData';
import { useState } from 'react';
import CardList from '../components/CardList';
import DropDownMenu from './DropDownMenu';


const Search = ({data}) => {
    const [country,setCountry] = useState('')
    const [vehicle,setVehicle] = useState('')
    const [filtered,setFiltered] = useState(false)
    const [carsMaster,setCarsMaster] = useState([])
    const [fallbackText,setFallbackText] = useState('')

    const searchHandler = () => {
        setFiltered(false)
        let cars = data
        if (country){
            if (country === 'Reset'){
                setCountry('')
            } else{
            cars = cars.filter(car => car.country === country )
            }
        }
        if (vehicle) {
            if (vehicle === 'Reset'){
                setVehicle('')
            } else {
            cars = cars.filter(car => car.vehicle === vehicle)
        }
        }

        setFiltered(true)

        setCarsMaster(cars)

    }

    

    const Results = () => {
        if (filtered){
                if ( carsMaster ){
                    if ( carsMaster.length === 0){
                        setFallbackText('No Results Found')
                    }
                    return(
                        <CardList data={carsMaster} fallbackText={ fallbackText }/>
                    )  
                } 
                return null
        }
        return null  
    }




    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <View style={styles.filterTextContainer}><Text style={styles.text70} >FILTER </Text></View>
                <DropDownMenu 
                    label='FILTER VEHICLES' 
                    data={VEHICLES_LIST} 
                    selectHandler = {(item) => setVehicle(item)} 
                    />
                <DropDownMenu 
                    label='FILTER COUNTRIES'   
                    data={COUNTRIES_LIST} 
                    selectHandler = {(item) => setCountry(item)} 
                    />
                <Pressable onPress={searchHandler} style={styles.searchButton}><Text style={styles.text70}>SEARCH</Text></Pressable>
            </View>
            <Results style={styles.results}/>
        </SafeAreaView>
    )
}

export default Search

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginLeft:10,
        marginRight:10,
        alignItems:'center',

    },
    results: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    text70:{
        textAlign:'center',
        fontFamily:'Baskerville',
        fontSize:70,
        marginBottom:20
    },
    search:{
        borderBottomWidth:5,
        borderColor:'#000',
        alignItems:'center',
        justifyContent:'center',
        width:windowWidth,
        marginTop:15,
        marginBottom:15

    },
    searchButton:{
        borderWidth:2,
        borderColor:'#000',
        backgroundColor:'#ff6666',
        padding:20,
        marginTop:20,
        width:windowWidth,
        justifyContent: 'center',
        alignItems:'center',
        height:150,
        marginBottom:30,
    },
    filterTextContainer:{
        backgroundColor:'#ff6666',
        marginBottom:20,
        width: windowWidth,
        borderWidth:2,
        justifyContent:'center',
        

        
    }
})

