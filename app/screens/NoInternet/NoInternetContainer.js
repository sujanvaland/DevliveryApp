import React, { Component } from 'react';
import NoInternetView from './NoInternetView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
import SplashScreen from 'react-native-splash-screen'

class NoInternetContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // do stuff while splash screen is shown
          // After having done stuff (such as async tasks) hide the splash screen
          setTimeout(() => {
            SplashScreen.hide();
          }, 2000)
      }
    
    render() {
        return <NoInternetView {...this.props}/>;
    }
}

function mapStateToProps(state) {
  return {
      
  };
}
function mapDispatchToProps(dispatch) {
    return {
        onNoInternet: (un, pwd) => dispatch(loginActions.onNoInternet(un, pwd))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoInternetContainer);
