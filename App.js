import React ,{ Component } from 'react';
import { Text,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screenhome/home';
import DetailsScreen from './screenhome/detail';
import BookInfoScreen from './screenhome/book';
import { CartProvider } from './screencart/cartdata';
import {CartContext} from './screencart/cartdata';
import CartBook from './screencart/CartBook';
import SearchScreen from './screensearch/bookSearch';
  
//import AppNavigator from './navigator.js'
const AppNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function SearchStackScreen (){
  return (
    <AppNavigator.Navigator  initialRouteName = "SearchScreen">
      <AppNavigator.Screen name = 'SearchScreen' component = {SearchScreen}/>
      <AppNavigator.Screen name = "BookInfo"  component = {BookInfoScreen} />
    </AppNavigator.Navigator>
  )
}

function DrawerNavigation(){
  return (
    <Drawer.Navigator>
      <Drawer.Screen name = 'profile' component = {TabNavigation} />
    </Drawer.Navigator>
  )
}

function TabNavigation(){
  return (
    <Tab.Navigator
            screenOptions = {({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName='ios-home'
                } 
                else if (route.name === 'Cart') {
                  return (
                    <HomeIconWithBadge
                      name = {'ios-cart'}
                      size={size}
                      color={color}
                    />
                  );
                }
                else if(route.name === 'Search'){
                  iconName = 'ios-search';
                }
                return <Ionicons name = {iconName} size = {size} color = {color} />;
              },
            })}
            tabBarOptions = {{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              keyboardHidesTabBar: true,
            }}
          >
            <Tab.Screen name = "Home" component = {HomeStackScreen} />
            <Tab.Screen name = "Search" component = {SearchStackScreen} 
            />
            <Tab.Screen name = "Cart" component = {CartBook} />
          </Tab.Navigator>
  )
}
function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}
//badgeIcon
function HomeIconWithBadge(props) {
  
  return( 
    <CartContext.Consumer>{({cartItems})=>(
      <IconWithBadge {...props} badgeCount={cartItems.length} />
      )}
    </CartContext.Consumer>
  )
}
function HomeStackScreen ({navigation}){
  return (
      <AppNavigator.Navigator initialRouteName = "Home">
        <AppNavigator.Screen 
          name = "Home" 
          component = {HomeScreen}
          options = {{
            headerLeft: () => (
              <Ionicons style = {{paddingLeft:20}} name = 'md-menu' size = {30} onPress = {() => navigation.toggleDrawer()} />
            )
          }}
        />
        <AppNavigator.Screen 
          name = "Details"
          component = {DetailsScreen} 
          options = {({route}) => ({ title: route.params.type.name })}
        />
        <AppNavigator.Screen 
          name = "BookInfo" 
          component = {BookInfoScreen}
        />
      </AppNavigator.Navigator>
  )
}

export default class App extends Component {
  render(){
    return (
      <CartProvider>
        <NavigationContainer>
         <DrawerNavigation/>
        </NavigationContainer>
      </CartProvider>
    )
  }
}
