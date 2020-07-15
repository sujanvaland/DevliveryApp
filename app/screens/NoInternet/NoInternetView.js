import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import NoInternetStyles from './NoInternetStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';


class NoInternetView extends Component {
  constructor(props) {
    super(props); 
  }
 
 
  render() {
    
    return (
        <View style={globalStyles.innerContainer}>
          <View style={NoInternetStyles.sliderContent}>
              <Text style={NoInternetStyles.title}>No internet connection</Text>
              
                <View style={NoInternetStyles.ImgContainer}>
                  <Image source={require('../../assets/img/no_internet.png')} resizeMode = 'contain' style={NoInternetStyles.sliderImg}/>
                </View>
                <Text style={NoInternetStyles.subTitle}>Please check your connection {"\n"}
                 again or connect to Wi-Fi</Text>
                <TouchableOpacity style={NoInternetStyles.buttonGreen}>
                  <Text style={NoInternetStyles.greenButtonText}>Try Again</Text>
                </TouchableOpacity>
            </View>
        </View>
      
    );
  }
}

NoInternetView.propTypes = {
  onLogin: PropTypes.func
};

export default NoInternetView;
