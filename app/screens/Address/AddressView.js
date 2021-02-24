import React, { Component } from 'react';
import { View, Text, TextInput,TouchableOpacity,PermissionsAndroid,Keyboard} from 'react-native';
import { get } from 'lodash';
import { OverlayActivityIndicatorElement } from "../../components";
import { ListItem, Radio, Icon } from "native-base";
import AddressStyles from './AddressStyles';
import { ScrollView} from 'react-native-gesture-handler';
import * as navigationActions from 'app/actions/navigationActions';
import Resource_EN from '../../config/Resource_EN';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import { lessThan } from 'react-native-reanimated';
import ApiConstants from '../../api/ApiConstants';

class AddressView extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading: true,
      region: {
        // latitude: props.latlong.latitude,
        // longitude: props.latlong.longitude,
        latitude: 72.81,
        longitude: 20.19,
        latitudeDelta: 5,
        longitudeDelta: 5
      }
    }
  }

  async componentDidMount() {
    this.getCurrentLocation();
  }

  
  async getCurrentLocation(){
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: 'Location Permission',
        message: 'TheDailyMeat needs access to your location for faster delivery',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        async (position) => {
              console.log(position);
              await this.setState({
                  region: {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                      latitudeDelta: 0.0532,
                      longitudeDelta: 0.0521,
                  }
              });
          },
          (error) => {
              console.warn(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      )
    }
  }

  onRegionChange(region){
    Geocoder.init(ApiConstants.GOOGLEAPIKEY); 
    if(!region){
      region = this.state.region;
    }
    let that = this;
    let addressComponent = {}
    Geocoder.from(region.latitude, region.longitude)
      .then(json => {
        if(json.results){
          if(json.results.length){
            addressComponent = json.results[0].address_components;
            if(addressComponent){
              if(addressComponent.length > 0){
                
                that.setState({
                  Street: this.state.Streetno+' '+this.state.Streetname,
                  region: {
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: 0.0532,
                    longitudeDelta: 0.0521,
                  }
                });
              }
            }
          }
        }
     })
     .catch(error => console.warn(error));
  }
  
  render() {
    const { loading } = this.props;
    const {button} =Resource_EN
    return (
        <View style={globalStyles.innerContainer}>
          {
            get(loading, 'isLoading') && <OverlayActivityIndicatorElement />
          }
          {
            <MapView
                style={[AddressStyles.map,(this.state.mapMinimize) ? AddressStyles.mapHeight : AddressStyles.mapRegular]}
                region={this.state.region}
                followUserLocation={true}
                ref={ref => (this.mapView = ref)}
                zoomEnabled={true}
                showsUserLocation={true}
                initialRegion={this.state.region}
                onRegionChangeComplete={this.onRegionChange.bind(this)}>
                <MapView.Marker
                coordinate={{ "latitude": this.state.region.latitude,   
                "longitude": this.state.region.longitude }}
                title={"Your Location"}
                draggable />
            </MapView>
          }
        </View>

    );
  }
}

AddressView.propTypes = {
  onLogin: PropTypes.func
};

export default AddressView;