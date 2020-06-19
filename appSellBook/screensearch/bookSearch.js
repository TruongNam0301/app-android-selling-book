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
  ActivityIndicator,
} from "react-native";
import ListSearch from "../components/ListSearch";

export default class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchData: "",
      show: false,
    };
    this.searchEvent = this.searchEvent.bind(this);
  }
  
  componentDidMount() {
    axios
      .get("https://apibookformobile.herokuapp.com/listBooks")
      .then((res) => {
        this.setState({ items: res.data.listBooks });
        this.setState({ searchData: res.data.listBooks });
      })
      .catch(function (err) {
        console.error(err.response.status);
      });
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
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
        {this.state.show === false ? (
          <ActivityIndicator
            style={{ marginTop: 200 }}
            size="large"
            color="red"
          />
        ) : (
          <View
            style={{
              marginBottom: 50,
              backgroundColor: "tomato",
              height: "100%",
            }}
          >
            <KeyboardAvoidingView>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  backgroundColor: "tomato",
                }}
              >
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
        )}
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
