import React from 'react' 
import{ Image,Text,View,StyleSheet,TouchableOpacity }from 'react-native'

export default function CategoriesCart ({item}){
    return (
        <View style={styles.swapper}>
            <Image style={styles.imageItem} source={{uri:item.image}} />
            <View>
                <Text style={styles.nameItem}>{item.name} </Text>
                <Text style={styles.priceItem}>{item.price} </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    swapper:{
        paddingTop:50,
        flex:1,
        flexDirection:'row',
    },
    imageItem:{
        width:100,
        height:80,
        padding:10
    },
    nameItem:{
        padding:10,
        textTransform:'uppercase',
        color:'red'
    },
    priceItem:{
        fontSize: 18,
        padding:10,
    }
})