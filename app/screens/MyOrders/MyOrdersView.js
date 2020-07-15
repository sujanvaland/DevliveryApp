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
  buttonClick(value){
   if(value == "processing"){
     this.setState({processing:true , delivered:false, canceled:false})
   }
   if(value == "delivered"){
    this.setState({processing:false , delivered:true, canceled:false})
   }
   if(value == "canceled"){
    this.setState({processing:false , delivered:false, canceled:true})
   }
  }
  render() {
    const {button} =Resource_EN
    return (
        <View style={globalStyles.innerContainer}>
          <View style={MyOrdersStyles.tabHeader}>
                <TouchableOpacity  activeOpacity={.9}  style={[MyOrdersStyles.tabBox,(this.state.processing)? MyOrdersStyles.tabActiveLine : MyOrdersStyles.tabLine]}
                  onPress={() => this.buttonClick("processing")} >
                <Text style={MyOrdersStyles.tabText}>PROCESSING</Text>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={.9}  style={[MyOrdersStyles.tabBox,(this.state.delivered)? MyOrdersStyles.tabActiveLine : MyOrdersStyles.tabLine]}
                  onPress={() => this.buttonClick("delivered")} >
                <Text style={MyOrdersStyles.tabText}>DELIVERED</Text>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={.9}  style={[MyOrdersStyles.tabBox,(this.state.canceled)? MyOrdersStyles.tabActiveLine : MyOrdersStyles.tabLine]}
                  onPress={() => this.buttonClick("canceled")} >
                <Text style={MyOrdersStyles.tabText}>CANCELED</Text>
                </TouchableOpacity>
          </View>
          <View style={MyOrdersStyles.tabContent}>
            {
              this.state.processing &&
              <ScrollView>
                 <View style={MyOrdersStyles.orderBox}>
                   <View style={MyOrdersStyles.flexBox}>
                      <View style={MyOrdersStyles.leftContent}>
                         <Text style={MyOrdersStyles.title}>Order No: 102348</Text>
                         <Text style={MyOrdersStyles.subtitle}>Tracking Number: 
                         <Text style={MyOrdersStyles.boldText}> TDM4563789</Text></Text>
                         <Text style={MyOrdersStyles.subtitle}>Quantity:
                         <Text style={MyOrdersStyles.boldText}> 5</Text></Text>
                      </View>
                      <View style={MyOrdersStyles.rightContent}>
                         <Text style={MyOrdersStyles.date}>26-07-2020</Text>
                         <Text style={MyOrdersStyles.date}>{'\u20B9'}1500</Text>
                      </View>
                   </View>
                   <View style={[MyOrdersStyles.flexBox,MyOrdersStyles.btnBottom]}>
                     <TouchableOpacity style={MyOrdersStyles.greenBtn}>
                       <Text style={MyOrdersStyles.btnText}>View Detail</Text>
                     </TouchableOpacity>
                     <Text style={MyOrdersStyles.subtitle}>
                       Status: <Text style={MyOrdersStyles.green}>Processing</Text>
                     </Text>
                   </View>
                 </View>
              </ScrollView>
            }
          </View>
        </View>
      
    );
  }
}

MyOrdersView.propTypes = {
  onLogin: PropTypes.func
};

export default MyOrdersView;
