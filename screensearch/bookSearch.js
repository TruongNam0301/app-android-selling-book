import React, { Component } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
  SafeAreaView,
} from "react-native";
import ListSearch from "../components/ListSearch";

export default class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchData: "",
    };
    this.searchEvent = this.searchEvent.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://192.168.100.9:3000/listBook")
      .then((res) => {
        this.setState({ items: res.data });
        this.setState({ searchData: res.data });
      })
      .catch(function (err) {
        console.error(err.response.status);
      });
  }
  searchEvent = (text) => {
    if (text === "") {
      let value = this.state.items;
      this.setState({ searchData: value });
    } else {
      const data = this.state.items.filter((item) => {
        let name = item.name.toLowerCase();
        let value = text.toLowerCase();
        return name.indexOf(value) > -1;
      });
      this.setState({ searchData: data });
    }
    console.log(this.state.searchData);
  };
  render() {
    const { searchData } = this.state;
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <View style={{marginBottom:50}}>
          <KeyboardAvoidingView>
            <View style={{ alignItems: "center" }}>
              <TextInput
                style={styles.input}
                placeholder={"Enter the name of book"}
                autoFocus={true}
                returnKeyType={"search"}
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={(text) => this.searchEvent(text)}
              />
            </View>
          </KeyboardAvoidingView>

          <FlatList
            data={searchData}
            contentContainerStyle={{ paddingBottom: 150 }}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <ListSearch
                  bookSearch={item}
                  onPress={() =>
                    navigation.navigate("BookInfo", {
                      book: item,
                    })
                  }
                />
              </View>
            )}
            keyExtractor={(item) => item.idList}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: "90%",
    borderColor: "tomato",
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
    marginVertical: 25,
    backgroundColor: "white",
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1.3,
    borderBottomColor: "red",
    backgroundColor: "white",
    borderRadius: 3,
  },
});
