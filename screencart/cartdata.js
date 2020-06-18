import React, { Component } from "react";
import { Alert, FlatList } from "react-native";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      cartItems: [],
    };
    this.addUser = this.addUser.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser (){
    let empty = '';
    this.setState({user: empty});
  }
  addUser(user) {
    this.setState({ user });
  }

  addToCart(product) {
    var item = {};
    item.product = product;
    item.quantity = 1;
    const cartItems = [...this.state.cartItems];
    let check = cartItems.findIndex(function (item) {
      return item.product.idList === product.idList;
    });
    if (check != -1) {
      alert("the product has been in the cart");
    } else {
      this.setState({ cartItems: this.state.cartItems.concat(item) });
      alert("Success");
    }
  }

  increaseQuantity(index) {
    const cartItems = [...this.state.cartItems];
    cartItems[index].quantity += 1;
    this.setState({ cartItems });
  }

  decreaseQuantity(index) {
    const cartItems = [...this.state.cartItems];
    cartItems[index].quantity -= 1;
    if (cartItems[index].quantity === 0) {
      cartItems.splice(index, 1);
    }
    this.setState({ cartItems });
  }

  calculateTotal() {
    const cartItems = [...this.state.cartItems];
    let total = 0;
    let length = cartItems.length;
    for (let i = 0; i < length; ++i) {
      let s = cartItems[i].product.price * cartItems[i].quantity;
      total = total + s;
    }
    return total;
  }
  render() {
    const { cartItems } = this.state;
    return (
      <CartContext.Provider
        value={{
          user: this.state.user,
          cartItems: this.state.cartItems,
          addUser: this.addUser,
          addToCart: this.addToCart,
          increaseQuantity: this.increaseQuantity,
          decreaseQuantity: this.decreaseQuantity,
          calculateTotal: this.calculateTotal,
          deleteUser: this.deleteUser,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
