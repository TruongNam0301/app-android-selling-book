import React ,{ Component } from 'react';
import {FlatList,View,StyleSheet} from 'react-native';
import axios from 'axios';
import ListBook from '../components/ListBook'

export default class DetailScreen extends Component { 
    constructor(props) {
        super(props);
        this.state = {
        items:[
            {
            idList: "1",
            idType: "1",
            name: "Tư Duy Nhanh Và Chậm",
            image: "https://salt.tikicdn.com/cache/280x280/ts/product/77/3c/9e/6deec49282e3416f38b46e57d1ffd79f.jpg" ,
            author: "Daniel Kahneman",
            price: "100000",
            description:"Chúng ta thường tự cho rằng con người là sinh vật có lý trí mạnh mẽ, khi quyết định hay đánh giá vấn đề luôn kĩ lưỡng và lý tính. Nhưng sự thật là, dù bạn có cẩn trọng tới mức nào, thì trong cuộc sống hàng ngày hay trong vấn đề liên quan đến kinh tế, bạn vẫn có những quyết định dựa trên cảm tính chủ quan của mình. “Tư duy nhanh và chậm”, cuốn sách nổi tiếng tổng hợp tất cả nghiên cứu được tiến hành qua nhiều thập kỷ của nhà tâm lý học từng đạt giải Nobel Kinh tế Daniel Kahneman sẽ cho bạn thấy những sư hợp lý và phi lý trong tư duy của chính bạn. Cuốn sách được đánh giá là “kiệt tác” trong việc thay đổi hành vi của con người, Tư duy nhanh và chậm đã dành được vô số giải thưởng danh giá..."
        },
        {
            idList: "2",
            idType: "1",
            name: "Kỹ Năng Bán Hàng Tuyệt Đỉnh",
            image: "https://salt.tikicdn.com/cache/280x280/ts/product/dc/2c/b4/cb0230cc125a7474baacd413c346fa28.jpg" ,
            author: "Pamela Druckerman",
            price: "100000"
        },
        {
            idList: "3",
            idType: "1",
            name: "Người Nam Châm",
            image: "https://salt.tikicdn.com/cache/280x280/ts/product/0f/2b/f4/6ada8869a4ea8cfd557729253324c3fb.jpg" ,
            author: "Jack Canfield & DD.Watkins",
            price: "100000"
        },
        {
            idList: "4",
            idType: "1",
            name: "Qua Pixar Là Vô Cực",
            image: "https://salt.tikicdn.com/cache/280x280/media/catalog/product/h/i/hinh-5.u4939.d20171023.t153232.729371.jpg" ,
            author: "Lawrence Levy",
            price: "100000"
        },
        {
            idList: "5",
            idType: "1",
            name: "Nhà Lãnh Đạo Không Chức Danh",
            image: "https://salt.tikicdn.com/cache/280x280/media/catalog/product/n/h/nhalanhdao.u2769.d20170307.t090846.484463.jpg" ,
            author: "Robin Sharma",
            price: "100000"
        },
        {
            idList: "6",
            idType: "1",
            name: "Rạng Danh Tài Trí Việt Năm Châu",
            image: "https://salt.tikicdn.com/cache/280x280/ts/product/7f/12/38/54aa50d124fef6ac2596b4337a7e0c20.png" ,
            author: "Pamela Druckerman",
            price: "100000"
        },
        {
            idList: "7",
            idType: "1",
            name: "Khởi Nghiệp Bán Lẻ",
            image: "https://salt.tikicdn.com/cache/280x280/ts/product/2c/b7/cc/060a6fa7491fabb4ce7e395fdc008757.jpg" ,
            author: "Trần Thanh Phong",
            price: "100000"
        },
        {
            idList: "8",
            idType: "1",
            name: "9 Bước Tự Do Tài Chính",
            image: "https://salt.tikicdn.com/cache/280x280/ts/product/8f/c0/d8/348e7b0a3a364671552b549c658353c4.jpg" ,
            author: "Suze Orman",
            price: "100000"
        },
        {
            idList: "9",
            idType: "1",
            name: "Câu Hỏi Là Câu Trả Lời",
            image: "https://salt.tikicdn.com/cache/280x280/ts/product/3e/29/5c/ca984698a07fadb69b154eb5168885c9.jpg" ,
            author: "",
            price: "100000"
        },
        {
            idList: "10",
            idType: "1",
            name: "Facebook Marketing Từ A Đến Z",
            image: "https://salt.tikicdn.com/cache/280x280/media/catalog/product/i/m/img301.u3059.d20170616.t102644.74862.jpg" ,
            author: "Tina Seelig",
            price: "100000"
        }
        ]
        };
    }
    

    render(){
        const {navigation}=this.props;
        const {items}=this.state;
        return (
           <FlatList
           data={items}
           contentContainerStyle={styles.contain}
           renderItem={({item,index})=>
                <View style={styles.item}>
                    <ListBook bookItem={item} key={index} 
                                onPress={() =>  navigation.navigate("BookInfo",{
                                    book: item
                                }) }
                    />
                </View>
           }
           numColumns= {2}
           >
           </FlatList>
        );
    }
}

const styles = StyleSheet.create ({
    item :{
        flex:1,
        marginTop:25,
        marginHorizontal:7,
    },
    contain:{
        paddingHorizontal:7
    }
})