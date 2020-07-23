import React, { Component } from 'react';
import OrderListView from './OrderListView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
import SplashScreen from 'react-native-splash-screen'

class OrderListContainer extends Component {
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
        return <OrderListView {...this.props}/>;
    }
}

function mapStateToProps(state) {
  return {
      
  };
}
function mapDispatchToProps(dispatch) {
    return {
        onOrderList: (un, pwd) => dispatch(loginActions.onOrderList(un, pwd))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderListContainer);
