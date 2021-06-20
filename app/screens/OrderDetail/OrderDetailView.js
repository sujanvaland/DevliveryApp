import React, { Component } from 'react';
import { get } from 'lodash';
import { View, Text, Image, TouchableOpacity,ScrollView,PermissionsAndroid,Linking,Platform} from 'react-native';
import { OverlayActivityIndicatorElement } from "../../components";
import OrderDetailStyles from './OrderDetailStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import ApiConstants from '../../api/ApiConstants';
import * as navigationActions from 'app/actions/navigationActions';
import getDirections from 'react-native-google-maps-directions'
import Geolocation from 'react-native-geolocation-service';
// import Geocoder from 'react-native-geocoding';
// Geocoder.init(ApiConstants.GOOGLEAPIKEY); 

class OrderDetailView extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      count: 0,
      ordertotal : 0,
      products:[],
      region: {
        latitude: 72.81,
        longitude: 20.19,
        latitudeDelta: 5,
        longitudeDelta: 5
      }
    }
  }

  async componentDidMount() {
    this.getCurrentLocation();
  }

dialCall = (number) => {
  let phoneNumber = '';
  if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
  else {phoneNumber = `telprompt:${number}`; }
  Linking.openURL(phoneNumber);
};

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

changeorderstatus = (obj) => {
  this.props.changeOrderStatus(obj);
  navigationActions.navigateToMyOrders();
}
 
navigateToAddress = () =>{
  console.log("navigateToAddress");
  const { myorders,orderid } = this.props;
  let orderdetail = {};
  if(myorders){
    orderdetail = myorders.filter(order=>order.id == orderid);
    if(orderdetail.length > 0){
      navigationActions.navigateToAddress({lat:orderdetail[0].latitude, long:orderdetail[0].longitude});
    }
  }
}

async getCurrentLocation(){
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    {
      title: 'Location Permission',
      message: 'TheDailyMeat needs access to your location for faster delivery',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    Geolocation.getCurrentPosition(
      async (position) => {
            await this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0532,
                    longitudeDelta: 0.0521,
                }
            });
        },
        (error) => {
            console.warn(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 20000},
    )
  }
}

handleGetDirections = () => {
  const { myorders,orderid } = this.props;
  let orderdetail = {};
  if(myorders){
    orderdetail = myorders.filter(order=>order.id == orderid);
  
    if(orderdetail.length > 0){
      const data = {
        source: {
         latitude: this.state.region.latitude,
         longitude: this.state.region.longitude
       },
       destination: {
         latitude: parseFloat(orderdetail[0].latitude),
         longitude: parseFloat(orderdetail[0].longitude)
       },
       params: [
         {
           key: "travelmode",
           value: "driving"        // may be "walking", "bicycling" or "transit" as well
         },
         {
           key: "dir_action",
           value: "navigate"       // this instantly initializes navigation using the given travel mode
         }
       ]
     }
     getDirections(data)
    }
  }
  
}

render() {

    const { button } = Resource_EN;
    let cartItems =[];
    let ordertotal;
    const { loading,myorders,orderid } = this.props;
    let orderdetail = {};
    if(myorders){
      orderdetail = myorders.filter(order=>order.id == orderid);
      if(orderdetail.length > 0){
        let totalPrice = 0;
        if(orderdetail[0].orderitems){
          orderdetail[0].orderitems.map((item) => {
            if(item.pprice > 0){
              totalPrice += item.pprice;
            }

            cartItems.push(
              <View key={item.id}>
              <View  style={[OrderDetailStyles.flexBox,OrderDetailStyles.itemBox]}>
                <Text style={[OrderDetailStyles.itemText , OrderDetailStyles.itemName]}>{item.productname}</Text>
                <Text style={[OrderDetailStyles.itemText , OrderDetailStyles.itemQty]}>{'\u20B9'}{""}{item.unitprice} X {item.qty}</Text>
                <Text style={[OrderDetailStyles.itemText , OrderDetailStyles.itemPrice]}>{'\u20B9'}{""}{item.pprice}</Text>
              </View>
              <View style={OrderDetailStyles.borderDashed}></View>
              </View>
              )
          })
          ordertotal = totalPrice;
        }
      }
    }

    let DeliveryCharges=0;
    let finaltotal=ordertotal+DeliveryCharges;
    
    return (
        <View style={globalStyles.innerContainer}>
          {
            get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
          }
          <View style={OrderDetailStyles.listContainer}>
            <ScrollView>
              {
                cartItems.length > 0 &&
                <View style={OrderDetailStyles.whiteBox}>
                  <View style={[OrderDetailStyles.flexBox , OrderDetailStyles.spaceBetween]}>
                    <View>
                       <Text style={OrderDetailStyles.title}>Order No: {orderdetail[0].id}</Text>
                    </View>
                     <View style={OrderDetailStyles.priceTagHeight}>
                        <View style={OrderDetailStyles.priceTag}>
                          <Image style={OrderDetailStyles.priceImage} source={require('../../assets/img/price_tag-red.png')} resizeMode="contain" /> 
                          <Text style={OrderDetailStyles.price_text}>{'\u20B9'}{finaltotal}</Text>
                        </View>
                     </View>
                  </View>
                  <View style={[OrderDetailStyles.addressBox , OrderDetailStyles.flexBox , OrderDetailStyles.spaceBetween]}>
                    <View style={OrderDetailStyles.leftContent}>
                       <Text style={OrderDetailStyles.addresstitle}>{orderdetail[0].firstname} {orderdetail[0].lastname}</Text>
                       <Text style={OrderDetailStyles.addressInfo}>{
                                orderdetail.length > 0 &&
                                <Text style={OrderDetailStyles.addressText}>{orderdetail[0].door_no_build_no_street}{"\n"}
                                {
                                  orderdetail[0].landmark !='' &&
                                  <Text>{orderdetail[0].landmark},{"\n"}</Text>
                                }
                                {orderdetail[0].locality} , {orderdetail[0].city} - {orderdetail[0].zipcode}</Text>
                              }</Text>
                    </View>
                     <View style={OrderDetailStyles.rightContent}>
                       <TouchableOpacity onPress={this.handleGetDirections}>
                        <Image style={OrderDetailStyles.locationImage} source={require('../../assets/img/location_large.png')} resizeMode="contain" /> 
                       </TouchableOpacity>
                     </View>
                  </View>
                  <View style={[OrderDetailStyles.addressBox , OrderDetailStyles.flexBox]}>
                    <View style={OrderDetailStyles.box}>
                      <View style={OrderDetailStyles.boxInner}>
                          <Text style={OrderDetailStyles.label}>Phone / Mobile No.:</Text>
                          <TouchableOpacity onPress={()=>{this.dialCall(orderdetail[0].phone)}}>
                            <Text style={OrderDetailStyles.detail}>{orderdetail[0].phone}</Text>
                          </TouchableOpacity>
                      </View >
                      <View style={OrderDetailStyles.boxInner}>
                          <Text style={OrderDetailStyles.label}>Payment Method:</Text>
                          <Text style={OrderDetailStyles.detail}>COD</Text>
                      </View>
                    </View>
                    <View style={OrderDetailStyles.box}>
                      <View style={OrderDetailStyles.boxInner}>
                          <Text style={OrderDetailStyles.label}>Status</Text>
                          <Text style={OrderDetailStyles.detail}>{this.getOrderStatus(orderdetail[0].orderstatus)}</Text>
                      </View>
                      <View style={OrderDetailStyles.boxInner}>
                          <Text style={OrderDetailStyles.label}>Date and Time:</Text>
                          <Text style={OrderDetailStyles.detail}>{this.getParsedDate(orderdetail[0].orderdate)} </Text>
                      </View>
                    </View>
                  </View>
                  {
                    (orderdetail[0].orderstatus==3 || orderdetail[0].orderstatus==4) &&
                    <View style={[OrderDetailStyles.buttonbox, OrderDetailStyles.flexBox]}>
                      {
                        orderdetail[0].orderstatus==3 &&
                        <TouchableOpacity style={[OrderDetailStyles.buttonDefault,OrderDetailStyles.btnYellow]}
                        onPress={() => this.changeorderstatus({orderstatus: 4, orderguid: orderdetail[0].orderguid})}>
                          <Text style={[OrderDetailStyles.textBlack,OrderDetailStyles.textDefault]}>Order Picked</Text>
                        </TouchableOpacity>
                      }

                      {
                        orderdetail[0].orderstatus==4 &&
                        <TouchableOpacity style={[OrderDetailStyles.buttonDefault,OrderDetailStyles.btnGreen]}
                        onPress={() => this.changeorderstatus({orderstatus: 5, orderguid: orderdetail[0].orderguid})}>
                          <Text style={[OrderDetailStyles.textWhite,OrderDetailStyles.textDefault]}>Order Delivered</Text>
                        </TouchableOpacity>
                      }
                    </View>
                  }
                </View>
              }

              {
                cartItems.length > 0 &&
                <View style={OrderDetailStyles.whiteBox}>
                  <View style={[OrderDetailStyles.orderDetail]}>
                      <Text style={[OrderDetailStyles.title]}>Order Items</Text>
                      {
                        cartItems.length > 0 &&
                        cartItems
                      }
                  </View>
                </View>
              }

              {
                cartItems.length == 0 &&
                <View style={OrderDetailStyles.itemBox} >
                  <View style={OrderDetailStyles.infoContainer}>
                    <Text style={OrderDetailStyles.iteminfoText}>No Item into the order.</Text>
                  </View>
                </View>
              }
            </ScrollView>
          </View>
        </View>
      
    );
  }
}

OrderDetailView.propTypes = {
  onLogin: PropTypes.func
};

export default OrderDetailView;
