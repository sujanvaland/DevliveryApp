import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import MyOrdersStyles from './MyOrdersStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import * as navigationActions from 'app/actions/navigationActions';


class MyOrdersView extends Component {
  constructor(props) {
    super(props); 
    this.state={
      isRefreshing:false
    }
  }

  navigateToOrderDetail = (order) => {
    navigationActions.navigateToOrderDetail(order.id);
  }

  getOrderByStatus(value){
    this.setState({OrderStatus:value})
  }

  getParsedDate(strDate) {//get date formate
    if (strDate != "") {
      let month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var strSplitDate = String(strDate).split('T');
      var dateArray = strSplitDate[0].split('-');
      let monthint = parseInt(dateArray[1]);
      let date = month_names[monthint - 1] + " " + dateArray[2] + ", " + dateArray[0];
      return date;
    }
    return "";
  }

  getOrderStatus(id){
      if(id == 1) 
        return "Pending";
      if(id == 2) 
        return "Confirm";
      if(id == 3) 
        return "Order Ready";
      if(id == 4) 
        return "Pickup";
      if(id == 5) 
        return "Delivered";
      if(id == 6) 
        return "Cancelled";
  }

  async _refresh () {
    this.setState({isRefreshing: true});
    const { getCustomerOrders } = this.props;
    return new Promise((resolve) => {
      setTimeout(() => {
        getCustomerOrders();
        resolve(); 
        this.setState({isRefreshing: false});
      }, 1000)
    })
  }
 
  render() {
    const {button} =Resource_EN;
    const { myorders,loading } = this.props;
    let myordersArr = [];
    let filteredOrders = [];

    if(myorders){

      //filteredOrders = myorders.filter(order=> order.orderstatus == this.state.OrderStatus);
      filteredOrders = myorders;
     
      filteredOrders.map((order) =>{
        myordersArr.push(
          <View key={order.id} style={MyOrdersStyles.orderBox}>
            <View style={MyOrdersStyles.flexBox}>
              <View style={MyOrdersStyles.leftContent}>
                  <Text style={MyOrdersStyles.title}>Order No: {order.id}</Text>
                  <Text style={MyOrdersStyles.subtitle}>
                    Status: <Text style={MyOrdersStyles.green}>{this.getOrderStatus(order.orderstatus)}</Text>
                  </Text>
                  <Text style={MyOrdersStyles.date}>{this.getParsedDate(order.orderdate)}</Text>
              </View>
              <View style={MyOrdersStyles.rightContent}>
                  <View style={MyOrdersStyles.buttonWidth}>
                    <TouchableOpacity onPress={() => this.navigateToOrderDetail(order)} style={MyOrdersStyles.greenBtn}>
                      <Text style={MyOrdersStyles.btnText}>View Detail</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={MyOrdersStyles.locationContent}>
                      <Image style={MyOrdersStyles.locationImg} source={require('../../assets/img/location_green.png')} resizeMode="contain" /> 
                    <Text style={MyOrdersStyles.locationText}>{order.locality}, {order.city}</Text>
                  </View>
              </View>
            </View>
          </View>
        )
      });
    }

    return (
        <View style={globalStyles.innerContainer}>
          {
            get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
          }
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
              <ScrollView refreshControl={
                  <RefreshControl onRefresh={this._refresh} refreshing={this.state.isRefreshing}/>}>
                  {
                    myordersArr
                  }
                  {
                    myordersArr.length == 0 &&
                    <View style={MyOrdersStyles.orderBox}>
                      <View style={MyOrdersStyles.infoContainer}>
                        <Text style={MyOrdersStyles.iteminfoText}>No order found.</Text>
                      </View>
                    </View>
                  }
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
