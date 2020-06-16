import React, { Component }from 'react';
import axios from 'axios';
import { StyleSheet,FlatList } from 'react-native';
import ListBookType from '../components/ListBookType';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookType:[]
    };
  }
  componentDidMount(){
    axios.get('http://192.168.100.9:3000/typeBook')
    .then (res =>{
      this.setState({bookType: res.data})
    })
    .catch (function(err){
      console.error(err)
    })
  }

  render(){
    const {navigation}=this.props;
    const {bookType} = this.state;
    return (
      <FlatList 
        data={bookType}
        renderItem={({ item }) => <ListBookType 
                                      typeInfo={item}
                                      onPress ={()=>navigation.navigate("Details",{
                                        type: item
                                      })}                 
        />}
        keyExtractor={item => item.idType}
      >
      </FlatList>
  
    );
  };
}




