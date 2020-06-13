import React ,{ Component } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screenhome/home';
import DetailsScreen from './screenhome/detail';
import BookInfoScreen from './screenhome/book';
import { CartProvider } from './screencart/cartdata';
import CartBook from './screencart/CartBook'
  
//import AppNavigator from './navigator.js'
const AppNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function SearchStackScreen (){
  return (
    <Text>search</Text>
  )
}

function DrawerNavigation(){
  return (
    <Drawer.Navigator>
      <Drawer.Screen name = 'profile' component = {TabNavigation} options={{
                drawerLabel: () => null}}/>
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
                  iconName = 'ios-home';
                } 
                else if (route.name === 'Cart') {
                  iconName = 'ios-cart';
                }
                else if(route.name === 'Search'){
                  iconName = 'ios-search';
                }
                // You can return any component that you like here!
                return <Ionicons name = {iconName} size = {size} color = {color} />;
              },
            })}
            tabBarOptions = {{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name = "Home" component = {HomeStackScreen} />
            <Tab.Screen name = "Search" component = {SearchStackScreen} />
            <Tab.Screen name = "Cart" component = {CartBook} />
          </Tab.Navigator>
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
