import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import * as navigationActions from 'app/actions/navigationActions';
import SplashScreen from 'react-native-splash-screen'

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
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
    componentDidMount() {
        // do stuff while splash screen is shown
          // After having done stuff (such as async tasks) hide the splash screen
          setTimeout(() => {
            SplashScreen.hide();
          }, 2000)
      }
    
    navigateToLogin = () => {
        navigationActions.navigateToLogin();
    }
    navigateToSearchWebview = () => {
        navigationActions.navigateToSearchWebview();
    }

    render() {
        return <HomeView {...this.props} login={this.navigateToLogin} WebView={this.navigateToSearchWebview} />;        
    }
}

function mapStateToProps(state) {
    return {
        user: state.loginReducer.username
    };
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
