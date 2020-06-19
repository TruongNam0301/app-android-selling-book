import React, { Component } from "react";
import axios from "axios";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { CartContext } from "../screencart/cartdata";

export default class LoginScreen extends Component {
  static contextType = CartContext;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.change = this.change.bind(this);
  }

  backScreen = () => {
    this.props.navigation.goBack();
  };

  getDataUser = (idAccount) => {
    return axios
      .get("http://192.168.100.9:3000/Users" + "?idAccount=" + idAccount)
      .then(function (res) {
        return res.data;
      });
  };

  async change() {
    const { user, addUser } = this.context;
    try {
      const response = await axios.get(
        "http://192.168.100.9:3000/Account" +
          "?username=" +
          this.state.username +
          "&&password=" +
          this.state.password
      );
      const data = await response.data;
      if (data.length === 0) {
        alert("check");
      } else {
        const back = await this.backScreen();
        const getUser = await this.getDataUser(data[0].idAccount);
        addUser(getUser);
      }
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 50,
                fontStyle: "italic",
                color: "#F56416",
              }}
            >
              Login
            </Text>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="username"
                placeholderTextColor="#D6E5E3"
                underlineColorAndroid={"transparent"}
                onChangeText={(text) => {
                  this.setState({ username: text });
                }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="password"
                placeholderTextColor="#D6E5E3"
                underlineColorAndroid={"transparent"}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
              />
              <TouchableOpacity onPress={this.change}>
                <View style={styles.button}>
                  <Text style={{ alignItems: "center" }}>LOGIN</Text>
                </View>
              </TouchableOpacity>
              <View style={{ marginTop: 50, flexDirection: "row" }}>
                <Text>if you dont have account let </Text>
                <TouchableOpacity>
                  <Text style={{ color: "blue" }}>register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A0D2DB",
  },
  textInput: {
    marginTop: 30,
    width: 250,
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: "#1D201F",
    fontSize: 15,
    paddingHorizontal: 5,
  },
  button: {
    marginTop: 30,
    height: 50,
    backgroundColor: "tomato",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
