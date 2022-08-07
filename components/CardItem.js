import { Text, View, Image} from 'react-native'
import { faker } from '@faker-js/faker';

const CardItem = ({avatar,name,country,email,vehicle}) => {
    console.log('CardItem called')
    return(
        <View>
            <Image source={faker.image.transport()}/>
            <View>
                <View>
                <Text>{name}</Text>
                <Text>{country}</Text>
                </View>
                <View>
                <Text>{email}</Text>
                <Text>{vehicle}</Text>
                </View>
            </View>
        </View>
    )
}

export default CardItem