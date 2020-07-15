import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import AccountView from './AccountView';
import { connect } from 'react-redux';
import * as accountActions from 'app/actions/accountActions';
import * as navigationActions from 'app/actions/navigationActions';
import AsyncStorage from '@react-native-community/async-storage';
import * as loginActions from 'app/actions/loginActions'
class AccountContainer extends Component {
    constructor(props) {
        super(props);
    }
    
    async componentDidMount() {
        const { onAccount,id,usertype } = this.props;
        onAccount(id,usertype);

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

      
    navigateToLogin = () => {
        navigationActions.navigateToLogin();
    }
     
    navigateToProfile = () => {
        navigationActions.navigateToProfile();
    }

    navigateToReviews = () => {
        const { onReview,id,login_token } = this.props;
        onReview(id,login_token);
        navigationActions.navigateToReviews();
    }

    navigateToDemos = () =>{
        navigationActions.navigateToDemos();
    }
    navigateToHelp = () => {
        navigationActions.navigateToHelp();
    }
    navigateToTerms =()=>{
        navigationActions.navigateToTerms();
    }
    render() {
        return <AccountView {...this.props} review={this.navigateToReviews} 
        login={this.navigateToLogin}
        demos={this.navigateToDemos}
        profile={this.navigateToProfile}
        Help = {this.navigateToHelp}
        Terms ={this.navigateToTerms}/>;
    }
}

function mapStateToProps(state) {
    return {
        id:state.loginReducer.id,
        login_token:state.loginReducer.login_token,
        usertype:state.loginReducer.user_type,
        accountdetail : state.accountReducer.accountdetail,
        loading: state.loadingReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onAccount: (id,usertype) => dispatch(accountActions.getAccountDetail(id,usertype)),
        requestLogout:()=>dispatch(loginActions.requestLogout())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountContainer);
