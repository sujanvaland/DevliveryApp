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
    } 
    
   
    
   

    render() {
        return(
                <DashboardView {...this.props} ProductList={this.navigateToProductList}/>
        );
    }
}

function mapStateToProps(state) {
  return {
    loading: state.loadingReducer,
      login_token:state.loginReducer.login_token,
  };
}
function mapDispatchToProps(dispatch) {
    return {
        
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
