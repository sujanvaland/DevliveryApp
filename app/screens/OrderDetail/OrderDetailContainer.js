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
    componentDidMount() {
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
      }
    
    render() {
      const { params } = this.props.navigation.state;
      const orderid = params ? params : null;
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
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderDetailContainer);
