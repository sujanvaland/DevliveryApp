import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,RefreshControl,PermissionsAndroid} from 'react-native';
import DashboardStyles from './DashboardStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import { ListItem, Radio, Icon } from "native-base";
import Resource_EN from '../../config/Resource_EN';
import { ScrollView } from 'react-native-gesture-handler';
import ApiConstants from '../../api/ApiConstants';
import Modal from "react-native-modal";
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';

class DashboardView extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isRefreshing:false,
      isModalVisible:true,
      City:"",
      images: [
        require('../../assets/img/banner.png'),   
        require('../../assets/img/banner.png'),
        require('../../assets/img/banner.png'),   
        require('../../assets/img/banner.png') ,     // Local image
      ]
    };
  }
 
  async componentDidMount(){
    const granted1 = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Fine Location Permission',
        message: 'TDMDelivery needs access to your location.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    const city = await AsyncStorage.getItem('city');
    console.log(city);
    if(city == null || city == undefined || city == ""){
      this.setState({ isModalVisible : true});
    }else{
      this.setState({ isModalVisible : false});
    }
  }

  renderCategory(){
    const { categoryList } = this.props;
    let i = 0;
    const productbox = [];
    let items = [];
    if(categoryList){
      categoryList.map((category) => {
        let categoryImgPath = ApiConstants.SITEURL + ApiConstants.CATEGORYIMAGEPATH + category.categoryimage;
        items.push(
          <View key={category.id} style={DashboardStyles.productContainer}>
            <TouchableOpacity onPress={()=>this.navigateToProductList(category)} style={DashboardStyles.productInnerContainer}>
              <Image style={DashboardStyles.productImg} source={{ uri: categoryImgPath }}  resizeMode="contain" /> 
              <Text style={DashboardStyles.productText}>{category.name}</Text>
            </TouchableOpacity>
            <Image style={DashboardStyles.vLineImg} source={require('../../assets/img/lineVertical.png')} resizeMode="contain" /> 
          </View>
          )
        i = i + 1;
        if(i % 3 == 0){
          productbox.push(
            <View key={category.id}>
            <View style={DashboardStyles.ProductBox}>
              {
                items
              }
            </View>
            <Image style={DashboardStyles.hLineImg} source={require('../../assets/img/lineHorizontal.png')} resizeMode="contain" /> 
            </View>
          )
          items = [];
        }
      });

      return productbox;
    }
  }
  
  renderNewArrival(){
    const { newarrivalproductlist } = this.props;
    const newproduct = [];
    if(newarrivalproductlist){
      newarrivalproductlist.map((product) => {
        let productImgPath = ApiConstants.SITEURL + ApiConstants.PRODUCTIMGPATH + product.productimage;
        //console.log(productImgPath);
        newproduct.push(
          <View key={product.id} style={DashboardStyles.productContent}>
            <TouchableOpacity onPress={()=>this.navigateToProductDetail({ ProductID: product.id })}>
              <View style={DashboardStyles.productListImgContainer}>
                <Image style={DashboardStyles.productListImg} source={{ uri: productImgPath }} resizeMode="cover" /> 
              </View>
              <Text style={DashboardStyles.productListText}>{product.productname}</Text>
              <Text style={DashboardStyles.productPrice}>{'\u20B9'}{" "}{product.price}</Text>
            </TouchableOpacity>
          </View>
        )
      })
    }
    
    return newproduct;
  }

  navigateToProductList(category){
    this.props.ProductList(category);
  }

  navigateToProductDetail = (obj) => {
    navigationActions.navigateToProductDetail(obj);
  }
 
  setCity = (value) => {
    if(value){
      _storeData("city",value)
      this.setState({ city: value });
      this.setState({ isModalVisible: !this.state.isModalVisible });
    }
  }

  _storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return value;
    } catch (error) {
      // Error saving data
      return null;
    }
  };
 
  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  
  _refresh = () => {
    this.setState({isRefreshing: true});
    const { getCategoryList,getNewArrivalProductList,setCategory } = this.props;
    return new Promise((resolve) => {
      setTimeout(() => {
        getCategoryList();
        getNewArrivalProductList();
        resolve(); 
        this.setState({isRefreshing: false});
      }, 1000)
    })
  }

  closeModal=()=>{
    this.setState({ isModalVisible: false });
  }
  
  render() {
    const { loading,categoryList,newarrivalproductlist } = this.props;
    return (
        <View style={globalStyles.innerContainer}>
          <View style={DashboardStyles.containerHeight}>
          <ScrollView refreshControl={
                  <RefreshControl onRefresh={this._refresh} refreshing={this.state.isRefreshing}/>
          } >
          
          <View style={DashboardStyles.productMain}>
            {
              this.renderCategory()
            }
          </View>
          <View style={DashboardStyles.newProducts}>
            <Text style={DashboardStyles.titleHead}>What's New</Text>
            <View style={DashboardStyles.newProductList}>
               {
                 this.renderNewArrival()
               }
            </View>
          </View>
          <View style={DashboardStyles.dailyProduct}>
            <Text style={DashboardStyles.dailyProductTitle}>Why Choose The Daily Meat?</Text>
            <View style={DashboardStyles.flexBox}>
            <View style={DashboardStyles.dailyProductList}>
              <Image style={DashboardStyles.dailyproductImg} source={require('../../assets/img/delivery.png')} resizeMode="contain" /> 
              {/* <Text style={DashboardStyles.dailyproductText}>Delivery Within {"\n"} 2 Hour </Text> */}
            </View>
            <View style={DashboardStyles.dailyProductList}>
              <Image style={DashboardStyles.dailyproductImg} source={require('../../assets/img/chemicals.png')} resizeMode="contain" /> 
              {/* <Text style={DashboardStyles.dailyproductText}>Chemicals{"\n"} Free </Text> */}
            </View>
            <View style={DashboardStyles.dailyProductList}>
              <Image style={DashboardStyles.dailyproductImg} source={require('../../assets/img/antibiotic.png')} resizeMode="contain" /> 
              {/* <Text style={DashboardStyles.dailyproductText}>Antibiotic {"\n"} Free </Text> */}
            </View>
            <View style={DashboardStyles.dailyProductList}>
              <Image style={DashboardStyles.dailyproductImg} source={require('../../assets/img/heart.png')} resizeMode="contain" /> 
              {/* <Text style={DashboardStyles.dailyproductText}>Hygienic & {"\n"} Healthy </Text> */}
            </View>
            </View>
          </View>
          
          </ScrollView>
          </View>
            <Modal isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.closeModal()}
            onBackButtonPress={() => this.closeModal()}>
              <View style={DashboardStyles.modalStyle}>
                <View style={DashboardStyles.locationTopBox}>
                  <Image style={DashboardStyles.locationImg} source={require('../../assets/img/locatio_top.png')} resizeMode="contain" />
                  <Text style={DashboardStyles.locationText}>City</Text>
                </View>
                 <View style={DashboardStyles.imgContainer}>
                    <Image style={DashboardStyles.modalImg} source={require('../../assets/img/car.png')} resizeMode="contain" /> 
                 </View>
                 <View style={DashboardStyles.listRadio}>
                    <ListItem style={[DashboardStyles.radioList,DashboardStyles.borderBottom]}
                      onPress={() => this.setCity('Vadodara')}>
                      <Radio style={DashboardStyles.radioListButton}
                        onPress={() => this.setCity('Vadodara')}
                        selected={this.state.City== 'Vadodara'}
                        color={"#707070"} selectedColor={"#092868"} />
                      <Image style={DashboardStyles.locationInnerImg} source={require('../../assets/img/locatio_grey.png')} resizeMode="contain" /> 
                      <Text style={[DashboardStyles.radioListText, DashboardStyles.radioTextWidth]}>Vadodara</Text>
                    </ListItem>
                    <ListItem style={DashboardStyles.radioList}
                      onPress={() => this.setCity('Surat')}>
                      <Radio style={DashboardStyles.radioListButton} color={"#707070"}
                        selectedColor={"#092868"} onPress={() => this.setCity('Surat')}
                        selected={this.state.City== 'Surat'} color={"#707070"} />
                      <Image style={DashboardStyles.locationInnerImg} source={require('../../assets/img/locatio_grey.png')} resizeMode="contain" />
                      <Text style={[DashboardStyles.radioListText, DashboardStyles.radioTextWidth]}>Surat</Text>
                    </ListItem>
                </View>
              </View>
            </Modal>
        </View>
      
    );
  }
}

DashboardView.propTypes = {
  onLogin: PropTypes.func
};

export default DashboardView;
