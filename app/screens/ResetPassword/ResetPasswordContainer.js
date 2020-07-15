import React, { Component } from 'react';
import ResetPasswordView from './ResetPasswordView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

class ResetPasswordContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let currentRoute = this.props.navigation.state.routeName;
          let navigation = this.props.navigation;
          BackHandler.addEventListener ('hardwareBackPress', function(){
              navigation.goBack();
              return true;
          });
      }
    
    render() {
        return <ResetPasswordView {...this.props}/>;
    }
}

function mapStateToProps(state) {
  return {
      
  };
}
function mapDispatchToProps(dispatch) {
    return {
        onResetPassword: (un, pwd) => dispatch(loginActions.onResetPassword(un, pwd))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetPasswordContainer);
