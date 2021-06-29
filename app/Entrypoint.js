/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
// import { ActivityIndicator } from 'react-native';
import { OverlayActivityIndicatorElement } from "./components";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
import messaging from '@react-native-firebase/messaging';
import * as navigationActions from 'app/actions/navigationActions';
const { persistor, store } = configureStore();

export default class Entrypoint extends Component {

    async componentDidMount() {
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
        });
        
        messaging().onNotificationOpenedApp(remoteMessage => {
            if(remoteMessage.data.type=="OrderDetail")
            {
            const orderid=remoteMessage.data.orderid.toString();
            navigationActions.navigateToOrderDetail({orderid:orderid});
            }
        });

        messaging().getInitialNotification().then(this.handleSelected);
        handleSelected = async remoteMessage => {
            if(remoteMessage.data.type=="OrderDetail")
            {
                const orderid=remoteMessage.data.orderid.toString();
                navigationActions.navigateToOrderDetail({orderid:orderid});
            }
        };
    }
    
    render() {
        return (
            <Provider store={store}> 
                <PersistGate
                    loading={<OverlayActivityIndicatorElement />}
                    persistor={persistor}
                >
                    <Navigator />
                </PersistGate>
            </Provider>
        );
    }
}
