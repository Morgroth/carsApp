import { View, FlatList, StyleSheet, Dimensions, Text } from 'react-native'

import CardItem from "./CardItem"

const CardList = ({data, fallbackText, shit}) => {
    //console.log('callled dhekcg')
    //console.log(data)
    const renderCardItem = (itemdata) => {
        return (
            <CardItem
                avatar = {itemdata.item.avatar}
                name = {itemdata.item.name}
                country = {itemdata.item.country}
                vehicle = {itemdata.item.vehicle}
                email = {itemdata.item.email}
                />
        )
    }

if ( data.length === 0){
    return (
        <Text style={styles.text70}>{fallbackText} {shit}</Text>
    )
}

 return (
    <View style={styles.cardListContainer}>
        <FlatList
        data = {data}
        renderItem = { renderCardItem}
        keyExtractor = { (item) => item.uuid }
        />
    </View>
 )   
}

export default CardList

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    cardListContainer: {
        marginTop:  5,
        width:  windowWidth,
    },
    text70:{
        textAlign:'center',
        fontFamily:'Baskerville',
        fontSize:70,
        marginBottom:20
    },
})