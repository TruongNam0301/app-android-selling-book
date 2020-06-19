import React from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity} from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
export default function ItemSearch (props){
    const {bookSearch,onPress}=props;
    return (
        <TouchableOpacity onPress = {onPress}>
            <View  style={styles.swapItem}>
                <Image style={styles.imageBook} source={{uri:bookSearch.image}}/>
                <View style={{width:'70%'}}>
                    <Text style={styles.title}>{bookSearch.name}</Text>
                </View>
                <View style={styles.icon}>
                    <SimpleLineIcons name = {'arrow-right'} size = {20} color = {'black'}/>
                </View> 
            </View> 
        </TouchableOpacity>
    )
} 
const styles= StyleSheet.create ({
    swapItem:{
        flex:1, 
        flexDirection:'row', 
    },
    title: {
        marginLeft:10,
        fontSize: 16,
        color: 'orange',
    },
    imageBook: {
        width: 80,
        height: 80,
    },
    icon: {
        flexDirection:'row-reverse',
        paddingTop:25
    }
})