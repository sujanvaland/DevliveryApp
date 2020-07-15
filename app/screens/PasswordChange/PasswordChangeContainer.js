import React, { Component } from 'react';
import PasswordChangeView from './PasswordChangeView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as navigationActions from 'app/actions/navigationActions';

class PasswordChangeContainer extends Component {
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
        return <PasswordChangeView {...this.props}/>;
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
)(PasswordChangeContainer);
