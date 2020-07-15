import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const AccountStyles = StyleSheet.create({
acoountMainBox:{
        paddingHorizontal:viewportWidth*0.04,
        paddingVertical:viewportWidth*0.06,
    },
    acoountTopBox:{
        paddingHorizontal:viewportWidth*0.04,
        paddingTop:viewportWidth*0.06,
        paddingBottom:viewportWidth*0.03,
    },
    borders:{
        borderBottomWidth:1,
        borderBottomColor:color.COLOR_GREY
    },
    acoountMainLastBox:{
        paddingHorizontal:viewportWidth*0.04,
        paddingVertical:viewportWidth*0.06,
    },
    acoountBox:{
        display:"flex",
        flexDirection:'row',
    },
    imgbox:{
        marginRight:viewportWidth* 0.03,
        marginLeft:viewportWidth* 0.005
     },
     userImg:{        
         width:"100%",
         height:"100%",
         resizeMode:"contain",
         aspectRatio: 1,
         resizeMode:"cover"
     },
     userImgBox:{
         width:viewportWidth*0.12,
         height:viewportWidth*0.12,
         borderWidth:0,
         borderRadius:50,
         overflow:"hidden"
     },
     nameBox:{
        width:viewportWidth*0.75
     },
     nameUser:{
         fontSize:Typography.FONT_SIZE,
         fontWeight:Typography.FONT_WEIGHT_BOLD,
         color:color.COLOR_TEXT,
         textTransform: 'capitalize'
     },
     viewProfile:{
         fontSize:Typography.FONT_SIZE14,
         fontFamily:Typography.FONT_MEDIUM,
         color:color.COLOR_PRIMARY
     },
     viewProfileBox:{
         paddingVertical:viewportWidth*0.005,
     },
     ReviewBox:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
     },
     ReviewBoxSpacing:{
        marginBottom:viewportWidth*0.07,
     },
     startIcon:{
         width:viewportWidth*0.045,
         height:viewportWidth*0.045,
         marginRight:viewportWidth*0.025
     },
     reviews:{
         fontSize:Typography.FONT_SIZE,
         color:color.COLOR_TEXT,
     },
     container: {        
        height: viewportHeight - 212,
        paddingHorizontal:0,
        marginHorizontal:0, borderWidth:0
     }
});

export default AccountStyles;
