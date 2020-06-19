import React,{Component} from 'react'
import{FlatList,SafeAreaView,Text,View,TouchableOpacity,}from 'react-native';
import {CartContext} from '../screencart/cartdata';
import CategoriesCart from '../components/CategoriesCart';

export default class CartBook extends Component{

    render(){
        return (
            <CartContext.Consumer>
                {({cartItems, calculateTotal, postBill}) =>(
                    <SafeAreaView style={{flex:1}}>
                    <FlatList
                        data ={cartItems}
                        renderItem = {({item,index})=> <CategoriesCart item={item} index={index}/>}
                        keyExtractor={(item, index) => index.toString()  }     
                    >
                    </FlatList>
                    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white'}}>
                        <View style={{marginBottom:2,borderBottomColor:'black'}}>
                            <Text>Total:</Text>
                            <Text style={{fontSize:30}}>{calculateTotal()}</Text>
                        </View>
                     <TouchableOpacity onPress={()=> postBill()}>
                     <View style={{height:50,width:100,borderRadius:3,backgroundColor:'#D95D39',marginRight:20,marginTop:5,justifyContent:'center'}}>
                     <Text style={{textAlign: "center"}}>THANH TOAN</Text>
                     </View>
                     </TouchableOpacity>
                    </View>
                    </SafeAreaView>
                ) }  
                   
            </CartContext.Consumer>
        )
    }
} 

