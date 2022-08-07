import { View, FlatList } from 'react-native'

import CardItem from "./CardItem"

const CardList = ({data}) => {
    console.log('Cardlist called')
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

 return (
    <View>
        <FlatList
        data = {data}
        renderItem = { renderCardItem}
        keyExtractor = { (item) => item.uuid }
        />
    </View>
 )   
}

export default CardList