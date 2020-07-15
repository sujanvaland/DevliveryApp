import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const PasswordResetStyles = StyleSheet.create({
    loginBg:{
        position:"absolute",
        width:viewportWidth,
        height:viewportHeight
    },
    PasswordResetInner:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    PasswordReset:{
        width:viewportWidth - viewportWidth*0.1,
        height:viewportWidth*0.9,
        overflow:'visible',
    },
    ImgContainer:{
       marginBottom:viewportWidth*0.07
    },
    titletext:{
        color:color.COLOR_WHITE,
        fontFamily:Typography.FONT_REGULAR,
        fontSize:Typography.FONT_SIZE20,
        marginBottom:viewportWidth*0.015,
        textAlign:'center'
    },
    Detailtext:{
        color:color.COLOR_WHITE,
        fontFamily:Typography.FONT_REGULAR,
        fontSize:Typography.FONT_SIZE14,
        textAlign:'center', 
    },
    textInput:{
        backgroundColor:color.COLOR_WHITE,
        marginHorizontal:viewportWidth*0.02,
        marginVertical:viewportWidth*0.06,
        fontSize:Typography.FONT_SIZE18,
        height:viewportWidth*0.12,
        width:viewportWidth*0.11,
        borderRadius:viewportWidth*0.01,
        paddingHorizontal:viewportWidth*0.02,
        color:color.COLOR_BLACK,
        textAlign:"center",
        fontFamily:Typography.FONT_BOLD
    },
    flexBox:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btnGreen:{
       marginTop:viewportWidth*0.08
    },
    btnText:{
        fontSize:Typography.FONT_SIZE,
        backgroundColor:color.COLOR_PRIMARY,
        paddingHorizontal:viewportWidth*0.12,
        paddingVertical:viewportWidth*0.035,
        color:color.COLOR_WHITE,
        fontFamily:Typography.FONT_REGULAR,
        borderRadius:viewportWidth*0.01,
    }
});

export default PasswordResetStyles;
