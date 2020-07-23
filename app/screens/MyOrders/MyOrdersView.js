import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import MyOrdersStyles from './MyOrdersStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';


class MyOrdersView extends Component {
  constructor(props) {
    super(props); 
    this.state={
      processing:true,
      delivered:false,
      canceled:false
    }
  }
 
  render() {
    const {button} =Resource_EN
    return (
        <View style={globalStyles.innerContainer}>
          <View style={MyOrdersStyles.tabHeader}>
                <TouchableOpacity   style={[MyOrdersStyles.tabBox]}>
                   <Image style={MyOrdersStyles.sortImg} source={require('../../assets/img/sort.png')} resizeMode="contain" /> 
                   <Text style={MyOrdersStyles.tabText}>Sort</Text>
                </TouchableOpacity>
                <View style={MyOrdersStyles.border}></View>
                <TouchableOpacity   style={[MyOrdersStyles.tabBox]}>
                   <Image style={MyOrdersStyles.sortImg} source={require('../../assets/img/filter.png')} resizeMode="contain" /> 
                   <Text style={MyOrdersStyles.tabText}>Filter</Text>
                </TouchableOpacity>
          </View>
          <View style={MyOrdersStyles.tabContent}>
              <ScrollView>
                 <View style={MyOrdersStyles.orderBox}>
                   <View style={MyOrdersStyles.flexBox}>
                      <View style={MyOrdersStyles.leftContent}>
                         <Text style={MyOrdersStyles.title}>Order No: 102348</Text>
                         <Text style={MyOrdersStyles.subtitle}>
                            Status: <Text style={MyOrdersStyles.green}>Processing</Text>
                          </Text>
                          <Text style={MyOrdersStyles.date}>26-07-2020 {" "}18:20</Text>
                      </View>
                      <View style={MyOrdersStyles.rightContent}>
                          <TouchableOpacity style={MyOrdersStyles.greenBtn}>
                            <Text style={MyOrdersStyles.btnText}>View Detail</Text>
                          </TouchableOpacity>
                          <View style={MyOrdersStyles.locationContent}>
                             <Image style={MyOrdersStyles.locationImg} source={require('../../assets/img/location_green.png')} resizeMode="contain" /> 
                            <Text style={MyOrdersStyles.locationText}>Manjalpur</Text>
                          </View>
                      </View>
                   </View>
                 </View>
                 <View style={MyOrdersStyles.orderBox}>
                   <View style={MyOrdersStyles.flexBox}>
                      <View style={MyOrdersStyles.leftContent}>
                         <Text style={MyOrdersStyles.title}>Order No: 102348</Text>
                         <Text style={MyOrdersStyles.subtitle}>
                            Status: <Text style={MyOrdersStyles.green}>Processing</Text>
                          </Text>
                          <Text style={MyOrdersStyles.date}>26-07-2020 {" "}18:20</Text>
                      </View>
                      <View style={MyOrdersStyles.rightContent}>
                          <TouchableOpacity style={MyOrdersStyles.greenBtn}>
                            <Text style={MyOrdersStyles.btnText}>View Detail</Text>
                          </TouchableOpacity>
                          <View style={MyOrdersStyles.locationContent}>
                             <Image style={MyOrdersStyles.locationImg} source={require('../../assets/img/location_green.png')} resizeMode="contain" /> 
                            <Text style={MyOrdersStyles.locationText}>Manjalpur</Text>
                          </View>
                      </View>
                   </View>
                 </View>
              </ScrollView>
          </View>
        </View>
      
    );
  }
}

MyOrdersView.propTypes = {
  onLogin: PropTypes.func
};

export default MyOrdersView;
