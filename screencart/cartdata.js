import React ,{Component} from 'react';
import { Alert,FlatList} from 'react-native';
export const CartContext = React.createContext();
export class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartItems: [],
        };
        this.addToCart=this.addToCart.bind(this)
    }

    addToCart (product){ 
        this.setState({cartItems: this.state.cartItems.concat(product)}); 
        alert('success');
    }
    render(){
        const {cartItems} = this.state;
        return (
                <CartContext.Provider value = 
                {{
                    cartItems : this.state.cartItems,
                    addToCart : this.addToCart
                }}>
                    {this.props.children}
                </CartContext.Provider> 
                
        )

    }
}
