import { Text, View, Image, StyleSheet, Dimensions} from 'react-native'
import { faker } from '@faker-js/faker';

const CardItem = ({avatar,name,country,email,vehicle}) => {
    return(
        <View style={styles.cardItemContainer}>
            <Image source={{uri:faker.image.transport()}} style={styles.vehicle_img}/>
            <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>{name}</Text>
                <Text style={styles.cardText}>{country}</Text>
                <Text style={styles.cardText}>{email}</Text>
                <Text style={styles.cardText}>{vehicle}</Text>
            </View>
        </View>
    )
}

export default CardItem

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    cardHorizontal:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        marginBottom:20,
    },
    vehicle_img:{
        width:70,
        height:70,
        borderRadius:'50%',
        marginLeft:10,
        marginRight:20,
        borderWidth:1
    },
    cardItemContainer :{
        flexDirection:'row',
        height:150,
        marginTop:20,
        marginBottom:20,
        borderWidth: 3,
        width: windowWidth,
        alignItems:'center',
        backgroundColor:'#ffb3b3'


    },
    cardTextContainer:{
        flexDirection:'column',
        
    },
    cardText: {
        fontFamily:'Baskerville',
        fontSize:20,
        marginBottom:3,
        marginTop:3,
        
        }

})