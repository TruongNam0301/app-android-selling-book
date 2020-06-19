import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { CartContext } from "../screencart/cartdata";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { NavigationContext } from '@react-navigation/native';

export default class Content extends Component {
    static contextType = NavigationContext;
  render() {
      const {navigation} = this.props;
    return (
      <CartContext.Consumer>
        {({ user , deleteUser }) => (
          
            <View>
              {user.length > 0 ? (
                <View>
                  <View style={styles.imageWrap}>
                    <View>
                      <Image
                        style={styles.imageUser}
                        source={{ uri: user[0].imageUser }}
                      />
                      <Text style={styles.nameUser}> {user[0].nameUser}</Text>
                    </View>
                  </View>
                  <View>
                  <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={styles.button}>
                      <Icon
                        style={{ paddingHorizontal: 12 }}
                        name={"home"}
                        size={25}
                        color={"tomato"}
                      />
                      <Text>HOME</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteUser()}>
                    <View style={styles.button}>
                      <Icon
                        style={{ paddingHorizontal: 12 }}
                        name={"logout"}
                        size={25}
                        color={"tomato"}
                      />
                      <Text>LOGOUT</Text>
                    </View>
                    </TouchableOpacity >
                  </View>
                </View>
              ) : (
                <View style={{marginTop:20}}>
                  <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={styles.button}>
                      <Icon
                        style={{ paddingHorizontal: 12 }}
                        name={"home"}
                        size={25}
                        color={"tomato"}
                      />
                      <Text>HOME</Text>
                    </View>
                  </TouchableOpacity >
                  <TouchableOpacity onPress={() => navigation.navigate('login')}>
                  <View style={styles.button}>
                    <Icon
                      style={{ paddingHorizontal: 12 }}
                      name={"login"}
                      size={25}
                      color={"tomato"}
                    />
                    <Text>LOGIN</Text>
                  </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          
        )}
      </CartContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  imageWrap: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imageUser: {
    marginTop: 20,
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  nameUser: {
    marginTop: 5,
    fontSize: 20,
  },
  button: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 5,
    alignItems: "center",
    height: 40,
    borderWidth: 1.2,
    borderColor: "tomato",
    borderRadius: 5,
  },
});
