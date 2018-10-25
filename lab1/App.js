/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image, SafeAreaView, Text } from 'react-native';
import ImagePlaceholder from 'react-native-image-with-placeholder'
// import themarias2 from './themarias2.jpg';

// const hdUrlSolitude = `https://static1.squarespace.com/static/572acd717c65e426e2b580d9/t/5b467f2d758d46a136f18dbd/1531346739681/themarias.jpg`;

export default class App extends Component {
  render() {
    return (

        <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>how to build an image gallery!
        </Text>
        <Image source={{uri:'https://s3.amazonaws.com/crisoforo.com/flowers.jpg'}} 
          style={styles.image}
        />
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 170, 
    height: 170
  },

});


