import React, { Component } from "react";
import axios from "axios";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import ListBookType from "../components/ListBookType";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookType: '',
    };
  }

  componentDidMount() {
    axios
      .get("https://apibookformobile.herokuapp.com/typeBooks")
      .then((res) => {
        this.setState({ bookType: res.data.typeBooks });
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  render() {
    const { navigation } = this.props;
    const { bookType } = this.state;
    return (
      <SafeAreaView>
        <FlatList
          data={bookType}
          renderItem={({ item }) => (
            <ListBookType
              typeInfo={item}
              onPress={() =>
                navigation.navigate("Details", {
                  type: item,
                })
              }
            />
          )}
          keyExtractor={(item) => item.idType}
        ></FlatList>
      </SafeAreaView>
    );
  }
}
