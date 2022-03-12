import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Animated} from 'react-native';
import styles from './Styles';

class SplashScreen extends Component {
  state = {
    logoAnimation: new Animated.Value(0),
    textAnimation: new Animated.Value(0),
    loadingSpinner: false,
  };

  componentDidMount() {
    const {logoAnimation, textAnimation} = this.state;
    Animated.parallel([
      Animated.spring(logoAnimation, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
        useNativeDriver: false,
      }).start(),
      Animated.timing(textAnimation, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
      });
    });
    // SPLASH Off Time
    setTimeout(() => {
      // go to Home page
      this.props.navigation.replace('Login');
    }, 2600);
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.logoAnimation,
            top: this.state.logoAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image
            style={styles.forLogo}
            source={require('../../Assets/Logo.png')}
          />
          <View style={styles.forLogoText}>
            <Text style={{color: '#28509c', fontSize: 17}}>
              Finding The Best hostels Near You!
            </Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}
export default SplashScreen;
