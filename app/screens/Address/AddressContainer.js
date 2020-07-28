import React, { Component } from 'react';
import AddressView from './AddressView';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import * as accountActions from 'app/actions/accountActions';

class AddressContainer extends Component {
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
        let latlong = this.props.navigation.state.params;
        return <AddressView {...this.props} latlong={latlong}/>;
    }
}

function mapStateToProps(state) {
  return {
      loading: state.loadingReducer,
  };
}
function mapDispatchToProps(dispatch) {
    return {
        addCustomerAddress: (address) => dispatch(accountActions.addCustomerAddress(address))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressContainer);