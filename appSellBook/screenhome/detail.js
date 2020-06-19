import React, { Component } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import ListBook from "../components/ListBook";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      show: false,
    };
  }

  componentDidMount() {
    let id = this.props.route.params.type.idType;
    axios
      .get("http://192.168.100.9:3000/listBook" + "?idType=" + id)
      .then((res) => {
        this.setState({ items: res.data });
      })
      .catch(function (err) {
        console.error(err.response.status);
      });
    setTimeout(() => {
      this.setState({ show: true });
    }, 500);
  }

  render() {
    const { navigation } = this.props;
    const { items } = this.state;
    return (
      <SafeAreaView>
        {this.state.show === false ? (
          <ActivityIndicator
            style={{ marginTop: 100 }}
            size="large"
            color="red"
          />
        ) : (
          <FlatList
            data={items}
            contentContainerStyle={styles.contain}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <ListBook
                  bookItem={item}
                  onPress={() =>
                    navigation.navigate("BookInfo", {
                      book: item,
                    })
                  }
                />
              </View>
            )}
            keyExtractor={(item) => item.idList}
            numColumns={2}
          ></FlatList>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 7,
  },
  contain: {
    marginHorizontal: 7,
  },
});
