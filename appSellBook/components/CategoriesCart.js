import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { CartContext } from "../screencart/cartdata";
import { Ionicons } from "@expo/vector-icons";

export default function CategoriesCart({ item, index }) {
  return (
    <CartContext.Consumer>
      {({ increaseQuantity, decreaseQuantity, calculateTotal }) => (
        <View style={styles.swapper}>
          <Image
            style={styles.imageItem}
            resizeMode="contain"
            source={{ uri: item.product.image }}
          />
          <View>
            <Text style={styles.nameItem}>{item.product.name} </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.priceItem}>{item.product.price} </Text>
              <View style={styles.quantity}>
                <TouchableOpacity
                  onPress={() => {
                    decreaseQuantity(index);
                  }}
                >
                  <Ionicons name={"ios-remove"} size={30} color={"black"} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    paddingHorizontal: 20,
                  }}
                >
                  {item.quantity}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    increaseQuantity(index);
                  }}
                >
                  <Ionicons name={"ios-add"} size={30} color={"black"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </CartContext.Consumer>
  );
}

const styles = StyleSheet.create({
  swapper: {
    backgroundColor: "white",
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 2,
  },
  imageItem: {
    width: 80,
    height: 80,
  },
  nameItem: {
    textTransform: "uppercase",
    color: "red",
  },
  priceItem: {
    fontSize: 18,
    padding: 10,
  },
  quantity: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginLeft: 30,
  },
});
