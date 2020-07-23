import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Account from '../screens/Account';
import AuthLoadingScreen from 'app/screens/Login/AuthLoading';
import Forgotpassword from '../screens/Forgotpassword';
import Home from 'app/screens/Home';
import Login from 'app/screens/Login';
import WebView from '../screens/WebView';
import Dashboard from '../screens/Dashboard';
import NoInternet from '../screens/NoInternet';
import Verification from '../screens/Verification';
import EditProfileImage from '../screens/EditProfileImage';
import ResetPassword from '../screens/ResetPassword';
import PasswordChange from '../screens/PasswordChange';
import PasswordReset from '../screens/PasswordReset';
import MyOrders from '../screens/MyOrders';



import { HeaderComponent } from 'app/components';

const AuthStack = createStackNavigator({         
    Login: {
        screen: Login,
        navigationOptions: { header: null, gesturesEnabled: false }
    } 
});
const RNApp = createStackNavigator(
    {   
        Account:{
            screen: Account,
            navigationOptions: {  header: <HeaderComponent Smalltitle={'Account'} mainpage={true} subpage={false}/>, gesturesEnabled: false }
        },
        Forgotpassword: {
            screen: Forgotpassword,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: <HeaderComponent iname={"ios-arrow-back"}
                    title={"Forgot Password"}
                    back={true} navigation={navigation} />,
                    gesturesEnabled: false
                }
            }
        },
        Home: {
            screen: Home,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        PasswordChange: {
            screen: PasswordChange,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        PasswordReset:{
            screen: PasswordReset,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Login: {
            screen: Login,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
       
        NoInternet: {
            screen: NoInternet,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        ResetPassword:{
            screen: ResetPassword,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: <HeaderComponent iname={"ios-arrow-back"}
                    title={"Reset Password"}
                    back={true} navigation={navigation} />,
                    gesturesEnabled: false
                }
            }
        },
        EditProfileImage: {
            screen: EditProfileImage,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: <HeaderComponent iname={"ios-arrow-back"}
                    title={"Profile Photo"}
                    back={true} navigation={navigation} />,
                    gesturesEnabled: false
                }
            }
        },
        MyOrders:{
            screen: MyOrders,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: <HeaderComponent iname={"ios-back"}
                    title={"Orders"}
                    back={true} navigation={navigation}/>,
                    gesturesEnabled: false
                }
            }
        },
        Dashboard: {
            screen: Dashboard,
            navigationOptions: ({ navigation }) =>
            {
                return {
                    header: null,
                    gesturesEnabled: false
                }
            }
        },
        WebView:{
            screen: WebView,
            navigationOptions: ({ navigation }) =>
            {
                return {  header: null,gesturesEnabled: false }
            }
        }
    },
    {
        initialRouteName: 'MyOrders'
    } 
);
export default createAppContainer(RNApp);

// export default createAppContainer(
//     createSwitchNavigator(
//       {
//         AuthLoading: AuthLoadingScreen,
//         App: RNApp,
//         Auth: AuthStack,
//       },
//       {
//         initialRouteName: 'AuthLoading',
//       }
//     )
//   );