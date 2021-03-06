import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const ResetPasswordStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: viewportHeight,
        width: viewportWidth,
        alignItems: 'center',
        display:'flex',
        justifyContent:'center',
        paddingBottom:viewportHeight* 0.1
      },
    loginBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: viewportWidth* 0.042 
    },
    loginView:{
        position:"relative"
    },
    loginBg:{
        position:"absolute",
        width:viewportWidth,
        height:viewportHeight,
        top:0
    },
    textBoxStyle: {
        marginBottom: 17,
        paddingHorizontal:12,
        paddingVertical:5,
        fontSize: Typography.FONT_SIZE,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL,
        lineHeight: 20,
        letterSpacing: 0,
        borderRadius: 4,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: color.COLOR_CHECKBOX,
        position:'relative',
        backgroundColor:'red'
      },
    errorMessage:{
        color:color.COLOR_RED,
        fontSize:viewportWidth* 0.035,
        fontWeight: Typography.FONT_WEIGHT_NORMAL,
        fontStyle: Typography.FONT_STYLE_NORMAL, 
        lineHeight: viewportWidth* 0.05,
        letterSpacing: 0,
        color:color.COLOR_RED,   
        paddingLeft:0, 
        position:"relative",
        borderWidth:0,
        paddingLeft:22,
        marginBottom:24
    },
    logomain:{
        width:viewportWidth* 0.5,
        marginBottom:10
    },
    alertIcon:{
        width:viewportWidth*0.05,
        height:viewportWidth*0.05,
        position:"absolute",   
        top:2   
    },
    alertMainBox:{position:"relative",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    logoImg:{
        width:viewportWidth - viewportWidth*0.15,
        height:viewportWidth*0.17
    },
    textBoxContent:{
      position:"relative"
    },
    textBoxInner:{
        position:"absolute",
        right:viewportWidth*0.035,
        top:10,
        display:'flex',
        flexDirection:"row",
        alignItems:'center', 
    },
    lineImg:{
        height:viewportWidth*0.07, 
    },
    textBoxImg:{
        height:viewportWidth*0.048,
        width:viewportWidth*0.05,
        marginLeft:viewportWidth*0.035
    },
    passwordImg:{
        height:viewportWidth*0.05,
        width:viewportWidth*0.04,
        marginLeft:viewportWidth*0.035
    },
    // signButton:{
    //     backgroundColor:color.COLOR_YELLOW,
    //     borderRadius:viewportWidth*0.01,
    // },
    flexBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
    },
    signText:{
        borderRadius:viewportWidth*0.009,
        height:42,
        lineHeight:40,
        textAlign:'center',
        fontSize:Typography.FONT_SIZE12,
        color:color.COLOR_DARKBLUE,
        backgroundColor:color.COLOR_YELLOW,
        paddingHorizontal:viewportWidth*0.07
    },
    accountText:{
        color:color.COLOR_WHITE,
        fontSize:Typography.FONT_SIZE12,
        lineHeight: 50,
        letterSpacing: 0,
        textAlign:'center',
        fontFamily:Typography.FONT_OpenSansRegular
    },
    btnGreen:{
        marginTop:viewportWidth*0.04
     },
     btnText:{
         fontSize:Typography.FONT_SIZE,
         backgroundColor:color.COLOR_PRIMARY,
         paddingHorizontal:viewportWidth*0.12,
         paddingVertical:viewportWidth*0.035,
         color:color.COLOR_WHITE,
         fontFamily:Typography.FONT_REGULAR,
         borderRadius:viewportWidth*0.01,
         textAlign:'center',
     }
});

export default ResetPasswordStyles;
