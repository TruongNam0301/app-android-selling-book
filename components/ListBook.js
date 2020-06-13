import React from 'react'
import{
    Image,Text,View,StyleSheet,TouchableOpacity
}from 'react-native'

export default function ListBook (props) {
    const {bookItem,onPress}=props;
    return (
        <TouchableOpacity activeOpacity={0.85} onPress= {onPress}>
        <View style = {styles.item}>
            <Image style = {styles.imageItem} source = {{uri:bookItem.image}}/>
            <View style={styles.infoItem}>
                <View style={styles.infoBook}>
                    <Text style ={styles.nameItem}> {bookItem.name} </Text>
                    <Text style={{fontSize:10}}> {bookItem.author} </Text>
                </View>
                <View style ={styles.priceItem}>
                    <Text style={{fontSize: 18, color:"red"}}> {bookItem.price} </Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
} 

const styles =StyleSheet.create({
    item:{
        height:290,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,  
        borderRadius:5,
    },
    imageItem: {
        paddingTop:20,
        paddingBottom:5,
        width: "100%",
        height: 200
    },
    priceItem:{
        flexDirection:"row-reverse",
    },
    nameItem:{
        fontSize: 16,
        fontWeight:"300",
    }

})