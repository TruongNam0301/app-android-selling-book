import React,{Component} from 'react'
import{FlatList}from 'react-native';
import {CartContext} from '../screencart/cartdata';
import CategoriesCart from '../components/CategoriesCart';
import { Icon } from 'react-native-elements';

export default class CartBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartList: ''
        };
    }
    render(){
        return (
            <CartContext.Consumer>
                {({cartItems}) =>(
                    <FlatList
                        data ={cartItems}
                        renderItem = {({item})=> <CategoriesCart item={item}/>}
                    >
                    </FlatList>
                ) }                
            </CartContext.Consumer>
        )
    }
} 

