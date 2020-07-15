import React, { Component } from 'react';
import VerificationView from './VerificationView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as navigationActions from 'app/actions/navigationActions';

class VerificationContainer extends Component {
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
        return <VerificationView {...this.props}/>;
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
)(VerificationContainer);
