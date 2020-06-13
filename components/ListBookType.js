import React from 'react'
import{
    Image,Text,View,StyleSheet,TouchableOpacity
}from 'react-native'

export default function CatagoriesList (props){
   
    const {typeInfo,onPress}= props;
     return (
         <TouchableOpacity activeOpacity={0.85} onPress= {onPress}>
         <View style = {styles.itemSwapper}>
            <Image style={styles.imageItem} resizeMode={'cover'} source={{uri: typeInfo.image}}/>
            <Text style ={styles.titleItem}>{typeInfo.nameType}</Text>
        </View>
         </TouchableOpacity>
     )
}

const styles =StyleSheet.create({
    imageItem:{
        padding:5,
        height:150, 
        width:'100%',
    },
    titleItem:{
        padding:10,
        textTransform:'uppercase',
        fontSize: 20,
        color:'red'
    },
    itemSwapper:{
        margin:20,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,  
        borderRadius:5,
        
    }
})