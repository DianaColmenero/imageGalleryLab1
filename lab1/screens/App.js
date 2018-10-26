/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  SafeAreaView, 
  Text, 
  Dimensions, 
  TextInput,
  FlatList } from 'react-native';
import ImagePlaceholder from 'react-native-image-with-placeholder'
import axios from 'axios'

const API_KEY = 'd481d72e494e603781e9fc745bab2758'

// const hdUrlSolitude = `https://static1.squarespace.com/static/572acd717c65e426e2b580d9/t/5b467f2d758d46a136f18dbd/1531346739681/themarias.jpg`;

export default class App extends Component {

  constructor(props) {
    super(props)

    // Set the default state
    this.state = {
      images: [],
      searchTerm: ''
    }

    // Get some images
    this.imageSearch('earth')
  }

  imageSearch(text) {
    // 1. Build URL endpoint
    const urlEndpoint = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&text=${text}&nojsoncallback=true&per_page=20&extras=url_s`
    // 2. Request data
    axios.get(urlEndpoint)
    .then((response) => {
      console.log(response)
      this.setState({
        images: response.data.photos.photo
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    console.log(this.state.images)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <TextInput 
            style={styles.search} 
            placeholder={'Search'}
            value={this.state.searchTerm}
            onChangeText={(text)=> { 
              this.setState({
                searchTerm: text
              })
              this.imageSearch(text) }} />
          <FlatList 
            style={styles.flatListStyle}
            data={this.state.images} 
            numColumns={2}
            renderItem={({item})=>{
              return (
                <View>
                  <Image style={styles.image} source={{uri: item.url_s}} />
                </View>
              )}
            } />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  image: {
    width: (Dimensions.get('window').width / 2) - 20, 
    height: 150,
    margin: 10,
  },
  flatListStyle: {
    flex: 1,
  },
  search: {
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    marginTop: 10
  }
});


