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
} from "react-native";

export default class LoginScreen extends Component {
    constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.checkLogin= this.checkLogin.bind(this);
  }
  checkLogin= ()=>{
      let username =this.state.username;
      let password = this.state.password;
      axios.get("http://192.168.100.9:3000/Account"+"?username="+username)
      
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={{ textAlign: "center" }}>Login</Text>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="username"
                placeholderTextColor="#D6E5E3"
                underlineColorAndroid={"transparent"}
                onChangeText ={(text)=>{this.setState({username: text })}}
              />
              <TextInput
                style={styles.textInput}
                placeholder="password"
                placeholderTextColor="#D6E5E3"
                underlineColorAndroid={"transparent"}
                onChangeText ={(text)=>{this.setState({password: text })}}
              />
              <TouchableOpacity onPress={this.checkLogin}>
                <View style={styles.button}>
                  <Text style={{ alignItems: "center" }}>LOGIN</Text>
                </View>
              </TouchableOpacity>
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
