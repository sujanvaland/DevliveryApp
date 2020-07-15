import React, { Component } from 'react';
import WebView from './WebView';
import { View,BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { HeaderComponent } from 'app/components';

class WebviewContainer extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        //--------------------------------------------------
        //   console.log("WebView Container componentDidMount")
        // caused an error - this.props.navigation undefined, not sure why
        // commented out for now, to integrate later
        //--------------------------------------------------

        // let currentRoute = this.props.navigation.state.routeName;
        // let navigation = this.props.navigation;
        // BackHandler.addEventListener ('hardwareBackPress', function(){
        //   if (currentRoute == "Login") {
        //     BackHandler.exitApp();
        //     return true;
        //   }
        //   else{
        //     navigation.goBack();
        //     return true;
        //   }
        // });
    }
   
    render() {
        let navigation = this.props.navigation;
       let showheader = true;
       let showback = true,showrefresh = true;
       
       if(this.props.navigation.state.params.showback == null || this.props.navigation.state.params.showback == undefined){
           showback = true;
       }
       else{
           showback = this.props.navigation.state.params.showback;
       }
       if(this.props.navigation.state.params.showrefresh == null || this.props.navigation.state.params.showrefresh == undefined){
           showrefresh = true;
       }
       else{
           showrefresh = this.props.navigation.state.params.showrefresh;
       }
       
       if(this.props.ShowHeader == false || this.props.ShowHeader == true){
           showheader = this.props.ShowHeader
       }
       return (
           <View>
               { 
                   showheader && 
                   <HeaderComponent
                       subtitle={'Back'} 
                       title={this.props.title} 
                       mainpage={false} 
                       subpage={true} 
                       iname={'ios-arrow-back'} 
                       back={showback}
                       showclearbtn={showrefresh}
                       onFilterOptionClear={() => {
                           navigation.goBack();
                   }}
                       onFilterOptionClose={() => {
                           navigation.goBack();
                   }}/> 
               }
               <WebView {...this.props} />
           </View>
       );   
   }
}

function mapStateToProps(state) {
    return {
        user: state.loginReducer.username,
        loading:state.loadingReducer,
        webviewdata:state.accountReducer.webviewdata,
        login_token : state.loginReducer.login_token,
    };
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WebviewContainer);
