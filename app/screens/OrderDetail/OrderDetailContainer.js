import React, { Component } from 'react';
import OrderDetailView from './OrderDetailView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as loginActions from 'app/actions/loginActions';
import * as orderActions from 'app/actions/orderActions';
import * as navigationActions from 'app/actions/navigationActions';

class OrderDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    // define a separate function to get triggered on focus
    async onFocusFunction () {
      const { getCustomerOrders } = this.props;
      getCustomerOrders();
    }

    // and don't forget to remove the listener
    componentWillUnmount () {
      this.focusListener.remove()
    }
  
  async componentDidMount(){

    let currentRoute = this.props.navigation.state.routeName;
    let navigation = this.props.navigation;
    BackHandler.addEventListener ('hardwareBackPress', function(){
      if (currentRoute == "Login") {
        BackHandler.exitApp();
        return true;
      }
      else{
        navigation.goBack();
        return true;
      }
    });
    
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
        this.onFocusFunction();
      })
    } 
    
    render() {
      const { params } = this.props.navigation.state;
      const orderid = params ? params.orderid : null;
      return <OrderDetailView orderid={orderid} {...this.props} />;
    }
}

function mapStateToProps(state) {
  return {
    loading: state.loadingReducer,
    login_token:state.loginReducer.login_token,
    myorders:state.orderReducer.myorders
  };
}
function mapDispatchToProps(dispatch) {
    return {
      changeOrderStatus: (orderitem) => dispatch(orderActions.changeOrderStatus(orderitem)),
      getCustomerOrders: () => dispatch(orderActions.getCustomerOrders())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderDetailContainer);
