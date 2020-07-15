import React, { Component } from "react";
import { StyleSheet} from "react-native";

import { Footer} from 'native-base';
import SplashScreen from 'react-native-splash-screen'



class FooterComponents extends Component {
  
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000)
  }

 

  
 
  render() {
   

    return (
      <Footer>
     
     
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
 
});

export { FooterComponents };