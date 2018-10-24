import React, { Component } from 'react';

const IMAGE_FADE_IN_CLASS = `iron-image--fade-in`;

export default class IronImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoadFinishedClass: ``,
      placeholderStyle: { backgroundImage: `url(${props.placeholder})` },
    };

    this.imageLoadHandler = this.imageLoadHandler.bind(this);
  }

  imageLoadHandler() {
    this.setState({ imageLoadFinishedClass: IMAGE_FADE_IN_CLASS });
  }

  render() {
    return (
      <View
        className="iron-image__container"
        style={this.state.placeholderStyle}
      >
        <Image
          className={`iron-image ${this.state.imageLoadFinishedClass}`}
          alt={this.props.alt}
          src={this.props.src}
          style={this.state.imageStyle}
          onLoad={this.imageLoadHandler}
        />
      </View>
    );
  };
  }

  // const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   // imageView: {
//   //   width: 350, height: 350
//   // }
// });


  {/* <SafeAreaView> */}
        {/* <Image 
          style={styles.imageView}
          source={
            { uri: 'https://static1.squarespace.com/static/572acd717c65e426e2b580d9/t/5b467f2d758d46a136f18dbd/1531346739681/themarias.jpg' }
          } /> */}

          {/* <Image
          placeholder
          source={require('./themarias2.jpg')}
        /> */}

          {/* <IronImage placeholder={themarias2} source={hdUrlSolitude} /> */}
          {/* </SafeAreaView> */}
      {/* </View> */}