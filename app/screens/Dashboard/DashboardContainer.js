import React, { Component } from 'react';
import DashboardView from './DashboardView';
import { connect } from 'react-redux';
import { View,BackHandler } from 'react-native';
import * as dashboardActions from 'app/actions/dashboardActions';
import * as navigationActions from 'app/actions/navigationActions';
import { HeaderComponent } from 'app/components';
import AsyncStorage from '@react-native-community/async-storage';

class DashboardContainer extends Component {
    constructor(props) {
      super(props);
      let countcartitems=0;
      const { cartCount } = this.props;
      if(cartCount!= undefined && cartCount !='')
      {
        countcartitems=cartCount;
      }
      this.state = {
        cartCount:countcartitems
      }  
    } 
    
    // define a separate function to get triggered on focus
    async onFocusFunction () {
        // do some stuff on every screen focus
        const { getCategoryList,getNewArrivalProductList,getCartCount } = this.props;
        getCategoryList();
        getNewArrivalProductList();
        
        let countcartitems =0;
        let login_token = await this._retrieveData("login_token");
        if(login_token != undefined && login_token !='')
        {
          getCartCount();
          const { cartCount } = this.props;
          if(cartCount!= undefined && cartCount !='')
          {
            countcartitems=cartCount;
          }
        }
        this.setState({
          cartCount: countcartitems
        });
      }
  
      // and don't forget to remove the listener
      componentWillUnmount () {
        this.focusListener.remove()
      }
    
    async componentDidMount(){
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.onFocusFunction();
          })
    } 
    
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
    
    navigateToProductList = (category) => {
        const { setCategory } = this.props;
        setCategory(category.id);
        navigationActions.navigateToProductList();
    }

    render() {
        return(
            <View>
                <HeaderComponent iname={"ios-menu"} 
                    sidemenu={true} menuPage={true} navigation={this.props.navigation} 
                    cartCount={this.state.cartCount} cart={true} cartText={true} /> 
                <DashboardView {...this.props} ProductList={this.navigateToProductList}/>
            </View>
        );
    }
}

function mapStateToProps(state) {
  return {
    categoryList:state.dashboardReducer.categoryList,
    newarrivalproductlist:state.dashboardReducer.newarrivalproductlist,
    cartCount:state.cartReducer.cartcount,
    loading: state.loadingReducer,
    login_token:state.loginReducer.login_token,
  };
}
function mapDispatchToProps(dispatch) {
    return {
        getCategoryList: () => dispatch(dashboardActions.getCategoryList()),
        setCategory:(catid)=>dispatch(dashboardActions.setCategory(catid)),
        getNewArrivalProductList: () => dispatch(dashboardActions.getNewArrivalProductList())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
