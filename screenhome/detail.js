import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import axios from "axios";
import ListBook from "../components/ListBook";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount(){
    let id = this.props.route.params.type.idType;
    axios.get('http://192.168.100.9:3000/listBook'+'?idType='+id)
    .then (res =>{
      this.setState({items: res.data})
    })
    .catch (function(err){
      console.error(err.response.status)
    })
  }

  render() {
    const { navigation } = this.props;
    const { items } = this.state;
    return (
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
