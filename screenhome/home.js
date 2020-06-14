import React, { Component }from 'react';
import axios from 'axios';
import { StyleSheet,FlatList } from 'react-native';
import ListBookType from '../components/ListBookType';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookType:[
        {
            idType: "1",
            nameType: "Kinh Tế",
            image: "https://www.topuniversities.com/sites/default/files/styles/700xauto/public/articles/lead-images/book_and_coffee.jpg"
        },
        {
            idType: "2",
            nameType: "Thiếu Nhi",
            image: "https://karencomer.com.au/wp-content/uploads/2017/08/bigstock-Back-to-school-Happy-cute-ind-193890661-1024x595.jpg"
        },
        {
            idType: "3",
            nameType: "Văn Học Việt Nam",
            image: "https://vinhvien.edu.vn/app_images/news/2020/2/28/tu-tuong-yeu-nuoc-the-ky-x-xv-dong-chu-luu-trong-van-hoc-viet-nam-1-768-11168.jpg"
        },
        {
            idType: "4",
            nameType: "Văn Học Nước Ngoài",
            image: "https://vnwriter.net/wp-content/uploads/2018/06/van-hoc-nuoc-ngoai-hay-780x405.jpg"
        },
        {
            idType: "5",
            nameType: "Văn Hóa - Du Lịch",
            image: "http://www.whitmers.com/travel.jpg"
        }
      ]
    };
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




