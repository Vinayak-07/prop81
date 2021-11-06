import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/feed';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import {StyleSheet} from 'react-native'
import CreatePost from '../screens/createPost.js';
const Tab = createMaterialBottomTabNavigator()
const BottomTabNavigator = ()=>{
    return(
        <Tab.Navigator
        labeled = { false }
        barStyle = {styles.bottomTabStyle} 
         screenOptions = {({route})=>({
            tabBarIcon : ({focused, color, size})=>{
              let iconeName;
              if (route.name === 'Feed') {
                iconeName = focused?'book':'book-outline'
              } else if(route.name === 'CreateStory'){
                iconeName = focused?'create':'create-outline'
              }
              return(
                <Ionicons name = {iconeName} size = {RFValue(15)} color = {color}/>
              );
            }
          })}
          
          activeColor  =  {'#ee8249'}
          inactiveColor = {'grey'}>
          
            <Tab.Screen name = 'Feed' component = { Feed }/>
            <Tab.Screen name = 'CreateStory' component = { CreatePost }/>
          </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#FFFFFF",
    height: "8%",
    position: "absolute"
  },
});


export default BottomTabNavigator;