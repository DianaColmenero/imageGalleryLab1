/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.imageView}
          source={
            { uri: 'https://static1.squarespace.com/static/572acd717c65e426e2b580d9/t/5b467f2d758d46a136f18dbd/1531346739681/themarias.jpg' }
          } />
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
  imageView: {
    width: 350, height: 350
  }
});
