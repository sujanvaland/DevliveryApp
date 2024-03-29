import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import MyOrdersStyles from './MyOrdersStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import Modal from "react-native-modal";
import * as navigationActions from 'app/actions/navigationActions';
import { Icon ,ListItem,Radio} from 'native-base';

class MyOrdersView extends Component {
  constructor(props) {
    super(props); 
    this.state={
      isRefreshing:false,
      filter:'First',
      filterModal:false,
      sortModal:false
    }
  }
  closeModal = () => {
    this.setState({ isModalVisible: false });
  }
  selectFilter= (value) => {
    this.setState({filter : value});
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  toggleModal=(fieldName)=>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
    if(fieldName == "Sort"){
      this.setState({filterModal : true , sortModal : false});
    }
    if(fieldName == "Filter"){
      this.setState({sortModal : true , filterModal : false});
    }
  }
  navigateToOrderDetail = (order) => {
    navigationActions.navigateToOrderDetail({orderid:order.id});
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
    const { myorders,loading,statusid } = this.props;
    let myordersArr = [];
    let filteredOrders = [];

    if(myorders){
      if(statusid == 5){
        filteredOrders = myorders.filter(order=> order.orderstatus == statusid);
      }
      else if(statusid == 1){
        filteredOrders = myorders.filter(order=> order.orderstatus == 1 || order.orderstatus == 2
          || order.orderstatus == 3 || order.orderstatus == 4);
      }else{
        filteredOrders = myorders;
      }
     
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
          {/* <View style={MyOrdersStyles.tabHeader}>
                <TouchableOpacity onPress={() => this.toggleModal('Sort')}  style={[MyOrdersStyles.tabBox]}>
                   <Image style={MyOrdersStyles.sortImg} source={require('../../assets/img/sort.png')} resizeMode="contain" /> 
                   <Text style={MyOrdersStyles.tabText}>Sort</Text>
                </TouchableOpacity>
                <View style={MyOrdersStyles.border}></View>
                <TouchableOpacity  onPress={() => this.toggleModal('Filter')} style={[MyOrdersStyles.tabBox]}>
                   <Image style={MyOrdersStyles.sortImg} source={require('../../assets/img/filter.png')} resizeMode="contain" /> 
                   <Text style={MyOrdersStyles.tabText}>Filter</Text>
                </TouchableOpacity>
          </View> */}
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
          <Modal onBackdropPress={() => this.closeModal()}
            isVisible={this.state.isModalVisible}
            onBackButtonPress={() => this.closeModal()}>
              {
                this.state.filterModal &&
                <View style={[MyOrdersStyles.modalDocument]}>
                  <View style={MyOrdersStyles.listRadio}>
                  <Text style={MyOrdersStyles.titleText}>Filter Options</Text>
                      <ListItem style={[MyOrdersStyles.radioList]}
                          onPress={() => this.selectFilter('First')}>
                          <Radio style={MyOrdersStyles.radioListButton}
                            onPress={() => this.selectFilter('First')}
                            selected={this.state.filter== 'First'}
                            color={"#bbb"} selectedColor={"#009846"} />
                          <Text style={[MyOrdersStyles.radioListText, MyOrdersStyles.radioTextWidth]}>First Item</Text>
                      </ListItem>
                      <ListItem style={MyOrdersStyles.radioList}
                          onPress={() => this.selectFilter('Second')}>
                          <Radio style={MyOrdersStyles.radioListButton}
                            onPress={() => this.selectFilter('Second')}
                            selected={this.state.filter== 'Second'} color={"#bbb"} selectedColor={"#009846"} />
                          <Text style={[MyOrdersStyles.radioListText, MyOrdersStyles.radioTextWidth]}>Second Item</Text>
                      </ListItem>
                  </View>
                </View>
              }
              {
                this.state.sortModal &&
                <View style={[MyOrdersStyles.modalDocument]}>
                  <View style={MyOrdersStyles.listRadio}>
                  <Text style={MyOrdersStyles.titleText}>Sort Options</Text>
                      <ListItem style={[MyOrdersStyles.radioList]}
                          onPress={() => this.selectFilter('First')}>
                          <Radio style={MyOrdersStyles.radioListButton}
                            onPress={() => this.selectFilter('First')}
                            selected={this.state.filter== 'First'}
                            color={"#bbb"} selectedColor={"#009846"} />
                          <Text style={[MyOrdersStyles.radioListText, MyOrdersStyles.radioTextWidth]}>First Item</Text>
                      </ListItem>
                      <ListItem style={MyOrdersStyles.radioList}
                          onPress={() => this.selectFilter('Second')}>
                          <Radio style={MyOrdersStyles.radioListButton}
                            onPress={() => this.selectFilter('Second')}
                            selected={this.state.filter== 'Second'} color={"#bbb"} selectedColor={"#009846"} />
                          <Text style={[MyOrdersStyles.radioListText, MyOrdersStyles.radioTextWidth]}>Second Item</Text>
                      </ListItem>
                  </View>
                </View>
              }
          </Modal>
        </View>
      
    );
  }
}

MyOrdersView.propTypes = {
  onLogin: PropTypes.func
};

export default MyOrdersView;
