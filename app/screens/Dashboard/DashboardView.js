import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,RefreshControl,PermissionsAndroid} from 'react-native';
import DashboardStyles from './DashboardStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { ListItem, Radio, Icon } from "native-base";
import Resource_EN from '../../config/Resource_EN';
import { ScrollView } from 'react-native-gesture-handler';
import ApiConstants from '../../api/ApiConstants';
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';

class DashboardView extends Component {
  constructor(props) {
    super(props); 
  }
 
  navigateToMyOrder = (statusId)=>{
    navigationActions.navigateToMyOrders(statusId);
  }
  
  render() {
   
    return (
        <View style={globalStyles.innerContainer}>
           <View style={DashboardStyles.container}>
              <View style={DashboardStyles.containerBox}>
                  <TouchableOpacity onPress={() => this.navigateToMyOrder(1)}>
                    <Image style={DashboardStyles.containerImg} source={require('../../assets/img/process.png')} resizeMode="contain" /> 
                    <Text style={DashboardStyles.containerText}>Under Process</Text>
                  </TouchableOpacity>
              </View>
              <View style={DashboardStyles.containerBox}>
                 <Image style={DashboardStyles.lineImg} source={require('../../assets/img/lineImg.png')} resizeMode="contain" /> 
              </View>
              <View style={DashboardStyles.containerBox}>
                  <TouchableOpacity onPress={() => this.navigateToMyOrder(5)}>
                    <Image style={DashboardStyles.containerImg} source={require('../../assets/img/deliveryImg.png')} resizeMode="contain" /> 
                    <Text style={DashboardStyles.containerText}>Completed</Text>
                  </TouchableOpacity>
              </View>
           </View>
        </View>
      
    );
  }
}

DashboardView.propTypes = {
  onLogin: PropTypes.func
};

export default DashboardView;
