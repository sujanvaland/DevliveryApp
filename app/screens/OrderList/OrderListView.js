import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import OrderListStyles from './OrderListStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';



class OrderListView extends Component {
  constructor(props) {
    super(props); 
  }
 
 
  render() {
    
    return (
        <View style={globalStyles.innerContainer}>
          <View style={OrderListStyles.listContainer}>
            <ScrollView>
                <View style={OrderListStyles.whiteBox}>
                  <View style={[OrderListStyles.flexBox , OrderListStyles.spaceBetween]}>
                    <View>
                       <Text style={OrderListStyles.title}>Order No: 102348</Text>
                    </View>
                     <View style={OrderListStyles.priceTagHeight}>
                        <View style={OrderListStyles.priceTag}>
                          <Image style={OrderListStyles.priceImage} source={require('../../assets/img/price_tag-red.png')} resizeMode="contain" /> 
                          <Text style={OrderListStyles.price_text}>{'\u20B9'}4000</Text>
                        </View>
                     </View>
                  </View>
                  <View style={[OrderListStyles.addressBox , OrderListStyles.flexBox , OrderListStyles.spaceBetween]}>
                    <View style={OrderListStyles.leftContent}>
                       <Text style={OrderListStyles.addresstitle}>Sahin Patel</Text>
                       <Text style={OrderListStyles.addressInfo}>201,Second floor,Dwarkesh Complex, Sunpharma Road, Atladra,Vadodar,390001</Text>
                    </View>
                     <View style={OrderListStyles.rightContent}>
                       <Image style={OrderListStyles.locationImage} source={require('../../assets/img/location_large.png')} resizeMode="contain" /> 
                     </View>
                  </View>
                  <View style={[OrderListStyles.addressBox , OrderListStyles.flexBox]}>
                    <View style={OrderListStyles.box}>
                      <View style={OrderListStyles.boxInner}>
                          <Text style={OrderListStyles.label}>Phone / Mobile No.:</Text>
                          <Text style={OrderListStyles.detail}>+91 9099 25305</Text>
                      </View >
                      <View style={OrderListStyles.boxInner}>
                          <Text style={OrderListStyles.label}>Payment Method:</Text>
                          <Text style={OrderListStyles.detail}>COD</Text>
                      </View>
                    </View>
                    <View style={OrderListStyles.box}>
                      <View style={OrderListStyles.boxInner}>
                          <Text style={OrderListStyles.label}>Status</Text>
                          <Text style={OrderListStyles.detail}>Processing</Text>
                      </View>
                      <View style={OrderListStyles.boxInner}>
                          <Text style={OrderListStyles.label}>Date and Time:</Text>
                          <Text style={OrderListStyles.detail}>28 / 7 / 2020 | 18:20 </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[OrderListStyles.buttonbox, OrderListStyles.flexBox]}>
                       <TouchableOpacity style={[OrderListStyles.buttonDefault,OrderListStyles.btnYellow]}>
                         <Text style={[OrderListStyles.textBlack,OrderListStyles.textDefault]}>Order Picked</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={[OrderListStyles.buttonDefault,OrderListStyles.btnGreen]}>
                         <Text style={[OrderListStyles.textWhite,OrderListStyles.textDefault]}>Order Delivered</Text>
                       </TouchableOpacity>
                  </View>
                </View>
                <View style={OrderListStyles.whiteBox}>
                  <View style={[OrderListStyles.orderDetail]}>
                      <Text style={[OrderListStyles.title]}>Order Details</Text>
                      <View style={[OrderListStyles.flexBox,OrderListStyles.borderBottom,OrderListStyles.itemBox]}>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemName]}>Chicken Curry Cut- Pack1</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemQty]}>100 * 5</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemPrice]}>{'\u20B9'}500</Text>
                      </View>
                      <View style={[OrderListStyles.flexBox,OrderListStyles.borderBottom,OrderListStyles.itemBox]}>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemName]}>Chicken Curry Cut- Pack1</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemQty]}>100 * 5</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemPrice]}>{'\u20B9'}500</Text>
                      </View>
                      <View style={[OrderListStyles.flexBox,OrderListStyles.borderBottom,OrderListStyles.itemBox]}>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemName]}>Chicken Curry Cut- Pack1</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemQty]}>100 * 5</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemPrice]}>{'\u20B9'}500</Text>
                      </View>
                      <View style={[OrderListStyles.flexBox,OrderListStyles.borderBottom,OrderListStyles.itemBox]}>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemName]}>Chicken Curry Cut- Pack1</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemQty]}>100 * 5</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemPrice]}>{'\u20B9'}500</Text>
                      </View>
                      <View style={[OrderListStyles.flexBox,OrderListStyles.borderBottom,OrderListStyles.itemBox]}>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemName]}>Chicken Curry Cut- Pack1</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemQty]}>100 * 5</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemPrice]}>{'\u20B9'}500</Text>
                      </View>
                      <View style={[OrderListStyles.flexBox,OrderListStyles.borderBottom,OrderListStyles.itemBox]}>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemName]}>Chicken Curry Cut- Pack1</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemQty]}>100 * 5</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemPrice]}>{'\u20B9'}500</Text>
                      </View>
                      <View style={[OrderListStyles.flexBox,OrderListStyles.borderBottom,OrderListStyles.itemBox]}>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemName]}>Chicken Curry Cut- Pack1</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemQty]}>100 * 5</Text>
                        <Text style={[OrderListStyles.itemText , OrderListStyles.itemPrice]}>{'\u20B9'}500</Text>
                      </View>
                 
                  </View>
                </View>
            </ScrollView>
          </View>
        </View>
      
    );
  }
}

OrderListView.propTypes = {
  onLogin: PropTypes.func
};

export default OrderListView;
