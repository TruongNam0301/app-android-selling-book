import React ,{ Component } from 'react';
import {View,StyleSheet,Text,Image,Button,Alert,SafeAreaView} from 'react-native';
import {CartContext} from '../screencart/cartdata'

export default class BookScreen extends Component {
    render (){
        let book =this.props.route.params.book;
        return (
            <SafeAreaView>
                <View style={{paddingTop:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.imageBook} source={{uri: book.image}}/>
                        <View style={styles.infoBook}>
                            <Text style={styles.nameBook}>{book.name}</Text>
                            <Text style={styles.authorBook}>Tác giả: {book.author}</Text>
                            <Text style={styles.priceBook}>Giá Tiền: {book.price}</Text>
                            <CartContext.Consumer>
                                {({addToCart})=>(
                                    <Button title="add to cart"onPress ={()=>{addToCart(book);}} />
                                )}
                            </CartContext.Consumer>
                        </View>
                    </View>
                    <Text style={{paddingTop:20}}>{book.description}</Text>
                </View>
            </SafeAreaView>
        )
    }}
    const styles = StyleSheet.create({
        addButton: {
            height:100,
            backgroundColor: "red",
        },
        infoBook:{
            width:"45%",
            height:300,
            marginRight:5,
        },
        imageBook: {
            width:"50%",
            height:300,
            marginLeft:5,
            marginRight:5
        },
        nameBook:{
            fontSize:25
        },
        authorBook:{
            fontSize:20
        },
        priceBook: {
            fontSize: 20
        }
    })