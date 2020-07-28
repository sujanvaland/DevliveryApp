import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const AddressStyles = StyleSheet.create({
    formInput:{
        marginVertical:viewportWidth*0.02,
        flex:1,
        marginHorizontal:viewportWidth*0.02
      },
      spacer:{
        marginTop:viewportWidth*0.03
      },
      radioList:{
        width:'100%',
        borderBottomWidth:0,
        paddingLeft:0,
        marginLeft:viewportWidth*0.02,
        paddingTop:0,
        paddingBottom:0,
        marginTop:viewportWidth*0.01,
        marginBottom:viewportWidth*0.01
      },
      radioListButton:{
        marginRight:5,
        paddingLeft:0,
        marginLeft:0,
        paddingTop:0,
        marginTop:0
      },
      label:{
        fontSize:Typography.FONT_SIZE10,
        color:color.COLOR_BLACK,
        fontFamily:Typography.FONT_MEDIUM
      },
      textInput:{
        fontSize:Typography.FONT_SIZE10,
        fontFamily:Typography.FONT_REGULAR,
        color:color.COLOR_GREYTHREE,
        paddingLeft:0,
        paddingRight:0,
        paddingTop:0,
        paddingBottom:0,
        borderBottomWidth:1,
        width:'100%',
        
      },
      BorderGrey:{
        borderBottomColor:color.COLOR_GREY,
        backgroundColor:color.COLOR_WHITE
      },
      red:{
       color: color.COLOR_RED
      },
      BorderRed:{
        borderBottomColor:color.COLOR_RED,
        backgroundColor:color.COLOR_LIGHTRED
      },
      buttonStyle:{
          paddingVertical:viewportWidth*0.03,
          backgroundColor:color.COLOR_BLUE,
          borderRadius:viewportWidth*0.01,
          marginTop:viewportWidth*0.03,
      },
      buttonTextStyle:{
          color:color.COLOR_WHITE,
          textAlign:"center",
          fontSize:Typography.FONT_SIZE,
          fontFamily:Typography.FONT_MEDIUM
      },
      flexBox:{
          display:'flex',
          flexDirection:'row',
          width:'100%',
      },
      addressContainer:{
          paddingTop:viewportWidth*0.03,
          paddingBottom:viewportWidth*0.05,
          paddingHorizontal:viewportWidth*0.02,
          marginHorizontal:viewportWidth*0.04,
          borderRadius:viewportWidth*0.015,
          shadowColor: 'rgba(0, 0, 0, 0.26)',
          shadowOffset: { width: 5, height: 4 },
          shadowOpacity: .2,
          shadowRadius: 3,
          elevation: 6 ,
          backgroundColor:color.COLOR_WHITE,
          marginBottom:60,
          marginTop:-60
      },
      spacerOne:{
        margin:30
      },
      bottomBtn:{
        position:"absolute",
        bottom:0,
        width:'100%',
        display:'flex',
      },
      cartBox:{
        backgroundColor:color.COLOR_PRIMARY,
        display:'flex',
        flexDirection:'row',
        margin:viewportWidth*0.04,
        marginTop:0,
        alignItems:'center',
        borderRadius:viewportWidth*0.013,
        justifyContent:'space-between',
        paddingHorizontal:viewportWidth*0.04,
        paddingVertical:viewportWidth*0.02,
    },
      locationBtn:{
        backgroundColor:color.COLOR_PRIMARY,
      },
      locationText:{
        color:color.COLOR_WHITE,
        textAlign:'center',
        width:'100%',
        fontSize:Typography.FONT_SIZE,
        fontFamily:Typography.FONT_MEDIUM,
        lineHeight:50
      },
      titleText:{
        color:color.COLOR_PRIMARY,
        fontSize:Typography.FONT_SIZE14,
        fontFamily:Typography.FONT_MEDIUM,
        paddingHorizontal:viewportWidth*0.02
      },
      MainContainer: {  
        position: 'absolute',  
        top: 0,  
        left: 0,  
        right: 0,  
        bottom: 0,  
        alignItems: 'center',  
        justifyContent: 'flex-end',  
      },  
      mapStyle: {  
        position: 'absolute',  
        top: 0,  
        left: 0,  
        right: 0,  
        bottom: 0,
        height:400  
      },
      map :{
        width:'100%',
        position:'relative',
        zIndex:-9
      },
      mapHeight:{
        height:150,
      },
      mapRegular:{
        height:350
      },
      addressContainerTop:{
        position:'relative',
        backgroundColor:color.COLOR_LIGHTGRAY,
        marginBottom:50
      }
});

export default AddressStyles;