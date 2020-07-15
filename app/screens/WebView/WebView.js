import React, { Component } from 'react';
import { View, Text,ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import globalStyles from '../../assets/css/globalStyles';
import * as navigationActions from 'app/actions/navigationActions';
import ApiConstants from 'app/api/ApiConstants';
import { OverlayActivityIndicatorElement } from "../../components";
import analytics from '@react-native-firebase/analytics';

class Webview extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoading:true,
            displayview:'none',
            webviewdata: {
                login_url: null,
                token: null,
            }
        }
    }
    navigateToLogin = () => {
        this.props.login();
    }
    componentDidMount() {
        const { FileView } = this.props;
        if(FileView){
            let formdata = new FormData();
            formdata.append("action","member_get_login_redirect_token");
            formdata.append("webservice_key", ApiConstants.WEBSERVICE_KEY);
            formdata.append("login_token",this.props.login_token);
            let obj = {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }),
                body: formdata
            };
            fetch(ApiConstants.SITEURL+'/webservice_v3/member',obj)
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({webviewdata: 
                    {login_url: responseJson.items.login_url,
                    token: responseJson.items.token}});
              })
              .catch((error) => {
                console.error(error);
              });
        }
    }

    
    showSpinner() {
        this.setState({ isLoading: true });
    }
    
    hideSpinner() {
        this.setState({ isLoading: false,displayview:'flex' });
    }
    
    render() {
        const remove_header_footer = 'header = document.querySelector("header"); header.parentNode.removeChild(header);'+
        'footer = document.querySelector("footer"); if(footer) { footer.remove(); }'+
        //'nav = document.getElementsByClassName("sub-navigation-mobile")[0];nav.parentNode.removeChild(nav); '+
        'paymobilebox = document.querySelector("#pay-mobile-box"); if(paymobilebox){ paymobilebox.style.position = "absolute"; }'+
        //'mobilebggrey = document.querySelector("#mobile-bg-grey"); if(mobilebggrey){alert("mobile"); mobilebggrey.style.height = "100%"; }'+
        'mainpage = document.querySelector("#main-page"); if(mainpage){ mainpage.style.position = "relative" }'+
        'cookieBanner = document.querySelector(".cc-window"); if(cookieBanner) { cookieBanner.remove() }' +
        'h1 = document.querySelector("h1"); if(h1) { h1.remove() }' +
        'subnav = document.querySelector(".sub-navigation-mobile"); if(subnav) { subnav.remove() } ' +
        'backbutton = document.querySelector(".page-status-buttons"); if(backbutton) { backbutton.remove() } ' +
        'setTimeout(function () {window.ReactNativeWebView.postMessage("shownow")}, 2000)';
       
       
        let sourceurl ='';
        const { FileView } = this.props;
       
        if(FileView){
    
            if(this.state.webviewdata){
                sourceurl = {
                uri: this.state.webviewdata.login_url,
                headers: {Authorization: "Bearer "+ this.state.webviewdata.token}
                }
            }
        }
        else{
            
            if(this.props.webviewdata){
                sourceurl = {
                uri: this.props.webviewdata.login_url,
                headers: {Authorization: "Bearer "+ this.props.webviewdata.token}
                }
            }
        }
        if (sourceurl.uri != null){
            return (
                <View style={globalStyles.innerContainer}>
                    {
                        this.state.isLoading && <OverlayActivityIndicatorElement />
                    }
                    <WebView
                        source={sourceurl}
                        injectedJavaScript={'function injectRules() {'+remove_header_footer+'};injectRules();'}
                        onLoadStart={() => this.showSpinner()}
                        onMessage={() => this.hideSpinner()}
                        useWebKit={true}
                        style={{display:this.state.displayview}}
                    />
                 </View>
            );
        }
        else{
            <Text>Loading...</Text>
            return null;
        }
    }
}

export default Webview;
