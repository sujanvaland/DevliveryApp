import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,StatusBar,TextInput,Dimensions} from 'react-native';
import PersonalDetailStyles from './PersonalDetailStyles';
import globalStyles from '../../assets/css/globalStyles';
import PropTypes from 'prop-types';
import Resource_EN from '../../config/Resource_EN';
import { Icon ,ListItem,Radio} from 'native-base';
import Modal from "react-native-modal";
import DatePicker from 'react-native-datepicker';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color, Typography } = Styles;


class PersonalDetailView extends Component {
  constructor(props) {
    super(props); 
    this.state={
      editDetail:false,
      isModalVisible:false,
      gender:'Male',
      date:"20/11/1998"
    }
  }
  closeModal = () => {
    this.setState({ isModalVisible: false });
  }
  selectGender= (value) => {
      this.setState({ gender: value });
      this.setState({ isModalVisible: !this.state.isModalVisible })
  }
  toggleModal=()=>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  onEdit=()=>{
    this.setState({editDetail:true})
  }
  navigateToDashboard=()=>{
    this.props.Dashboard();
  }
  render() {
    const {button} =Resource_EN
    return (
        <View style={globalStyles.innerContainer}>
            <StatusBar
              barStyle="light-content"
              // dark-content, light-content and default
              hidden={false}
              //To hide statusBar
              backgroundColor="#009846"
              //Background color of statusBar
              translucent={false}
              //allowing light, but not detailed shapes
              networkActivityIndicatorVisible={true}
            />
           <View style={PersonalDetailStyles.detailContainer}>
              <TouchableOpacity style={PersonalDetailStyles.backProfileIcon} onPress={() => { this.navigateToDashboard() }}>
                <Icon name={"chevron-back"} style={PersonalDetailStyles.ProfileIcon} />
                <Text style={PersonalDetailStyles.backprofile}>My Personal Information</Text>
              </TouchableOpacity>
              <TouchableOpacity style={PersonalDetailStyles.penIconBox} onPress={() => { this.onEdit() }}>
                <Image style={PersonalDetailStyles.penIcon} source={require('../../assets/img/pen.png')} resizeMode="contain" />
              </TouchableOpacity>
                  <View style={PersonalDetailStyles.headrMenu}>
                    <View style={PersonalDetailStyles.containerImgBox}>
                      <View style={PersonalDetailStyles.userImgBox}>
                          {/* <Image style={PersonalDetailStyles.userImg} source={{ uri: profileImgPath }} resizeMode="contain" /> */}
                          <Image style={PersonalDetailStyles.userImg} source={require('../../assets/img/user_img.png')} resizeMode="contain" />
                      </View>
                      <TouchableOpacity style={PersonalDetailStyles.camImgContainer}>
                          <Image style={PersonalDetailStyles.camImg} source={require('../../assets/img/camara.png')} resizeMode="contain" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={PersonalDetailStyles.profileDetailMenu}>
                   <View style={PersonalDetailStyles.profileDetail}>
                     <Text style={PersonalDetailStyles.profileDetailHead}>First Name:</Text>
                     {/* <Text style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase]}>Sahin</Text> */}
                     <TextInput
                        editable={(this.state.editDetail) ? true : false}
                        placeholder="Sahin"
                        style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase ,(this.state.editDetail) ?PersonalDetailStyles.borderInputWhite :PersonalDetailStyles.borderInput ]}
                        maxLength={30}
                        placeholderTextColor='#ffffff'
                        cursorColor={'#ffffff'}
                      />
                   </View>
                   <View style={PersonalDetailStyles.profileDetail}>
                     <Text style={PersonalDetailStyles.profileDetailHead}>Last Name:</Text>
                     {/* <Text style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase]}>patel</Text> */}
                     <TextInput
                        editable={(this.state.editDetail) ? true : false}
                        placeholder="Patel"
                        style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,(this.state.editDetail) ?PersonalDetailStyles.borderInputWhite :PersonalDetailStyles.borderInput ]}
                        maxLength={30}
                        placeholderTextColor='#ffffff'
                      />
                   </View>
                   <View style={PersonalDetailStyles.profileDetail}>
                     <Text style={PersonalDetailStyles.profileDetailHead}>Birthday:</Text>
                     <DatePicker
                        style={PersonalDetailStyles.datepicker}
                        date={this.state.date}
                        mode="date"
                        androidMode="spinner"
                        placeholder="DD/MM/YYYY"
                        format="DD/MM/YYYY"
                        minDate={this.state.TodaysDate}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        disabled={(this.state.editDetail) ? false : true}
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            right: 0, display: "none",
                            top: 4, width: 0,
                            marginLeft: 0,
                          },
                          disabled:{
                            backgroundColor:'transparent'
                          },
                          dateText:{
                            color: '#ffffff',
                            fontSize:Typography.FONT_SIZE14,
                            fontFamily:Typography.FONT_MEDIUM,
                            backgroundColor:'transparent'
                          },
                        dateInput: {
                          width:"70%",
                          padding:0,
                          margin:0,
                          borderWidth:0,
                          color:"#ffffff",
                          display: "flex", alignItems: "flex-start",
                          backgroundColor:'transparent',
                          borderBottomWidth:1,
                          borderBottomColor:(this.state.editDetail) ? '#fff' : "transparent"
                        }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                  />
                   </View>
                   <View style={PersonalDetailStyles.profileDetail}>
                     <Text style={PersonalDetailStyles.profileDetailHead}>gender:</Text>
                     {/* <Text style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase]}>male</Text> */}
                     <TouchableOpacity onPress={this.toggleModal} style={PersonalDetailStyles.modalText} disabled={(this.state.editDetail) ? false : true}>
                      <TextInput
                          editable={false}
                          placeholder="Male"
                          value={this.state.gender}
                          style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,PersonalDetailStyles.widthInput,
                            (this.state.editDetail) ?PersonalDetailStyles.borderInputWhite :PersonalDetailStyles.borderInput ]}
                          maxLength={30}
                          placeholderTextColor='#ffffff'
                        />
                     </TouchableOpacity>
                     
                   </View>
                   <View style={PersonalDetailStyles.profileDetail}>
                     <Text style={PersonalDetailStyles.profileDetailHead}>email:</Text>
                     {/* <Text style={[PersonalDetailStyles.profileDetailInfo]}>sahinpatel78@gmail.com</Text> */}
                     <TextInput
                        editable={(this.state.editDetail) ? true : false}
                        placeholder="sahinpatel78@gmail.com"
                        style={[PersonalDetailStyles.profileDetailInfo,PersonalDetailStyles.textCase,(this.state.editDetail) ?PersonalDetailStyles.borderInputWhite :PersonalDetailStyles.borderInput ]}
                        maxLength={30}
                        placeholderTextColor='#ffffff'
                      />
                   </View>
                </View>
           </View>
           <Modal onBackdropPress={() => this.closeModal()}
            isVisible={this.state.isModalVisible}
            onBackButtonPress={() => this.closeModal()}>
            <View style={[PersonalDetailStyles.modalDocument]}>
            
                  <View style={PersonalDetailStyles.listRadio}>
                  <Text style={PersonalDetailStyles.titleText}>Select Gender</Text>
                      <ListItem style={[PersonalDetailStyles.radioList]}
                          onPress={() => this.selectGender('male')}>
                          <Radio style={PersonalDetailStyles.radioListButton}
                            onPress={() => this.selectGender('male')}
                            selected={this.state.gender== 'male'}
                            color={"#bbb"} selectedColor={"#009846"} />
                          <Text style={[PersonalDetailStyles.radioListText, PersonalDetailStyles.radioTextWidth]}>Male</Text>
                      </ListItem>
                      <ListItem style={PersonalDetailStyles.radioList}
                          onPress={() => this.selectGender('female')}>
                          <Radio style={PersonalDetailStyles.radioListButton}
                            onPress={() => this.selectGender('female')}
                            selected={this.state.gender== 'female'} color={"#bbb"} selectedColor={"#009846"} />
                          <Text style={[PersonalDetailStyles.radioListText, PersonalDetailStyles.radioTextWidth]}>Female</Text>
                      </ListItem>
                  </View>
            </View>
          </Modal>
        </View>
      
    );
  }
}

PersonalDetailView.propTypes = {
  onLogin: PropTypes.func
};

export default PersonalDetailView;
