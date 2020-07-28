import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const OrderDetailStyles = StyleSheet.create({
    title:{
        color:color.COLOR_PRIMARY,
        fontSize:Typography.FONT_SIZE,
        fontFamily:Typography.FONT_REGULAR,
        paddingLeft:viewportWidth*0.04
    },
    priceTag:{
        position:'absolute',
        right:0,
        top:-20,
    },
    priceImage:{
        width:viewportWidth*0.2,
        height:viewportWidth*0.07,
    },
    price_text:{
        fontSize:Typography.FONT_SIZE12,
        position:'absolute',
        right:viewportWidth*0.04,
        color:color.COLOR_WHITE,
        top:5,
    },
    whiteBox:{
        backgroundColor:color.COLOR_WHITE,
        marginHorizontal:viewportWidth*0.04,
        marginBottom:viewportWidth*0.04,
        borderRadius:viewportWidth*0.01,
        paddingVertical:viewportWidth*0.04
    },
    flexBox:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    spaceBetween:{
        justifyContent:'space-between'
    },
    buttonDefault:{
        paddingVertical:viewportWidth*0.02,
        borderRadius:viewportWidth*0.013,
        width:'46%'
    },
    btnYellow:{
        backgroundColor:color.COLOR_YELLOW
    },
    btnGreen:{
        backgroundColor:color.COLOR_PRIMARY
    },
    textBlack:{
        color:color.COLOR_BLACK
    },
    textWhite:{
        color:color.COLOR_WHITE
    },
    textDefault:{
        fontSize:Typography.FONT_SIZE12,
        fontFamily:Typography.FONT_MEDIUM,
        textAlign:'center'
    },
    leftContent:{
        width:"90%",
        display:'flex',
        flexWrap:'wrap'
    },
    addressInfo:{
        display:'flex',
        flexWrap:'wrap',
        width:"90%",
        color:color.COLOR_DARKGRAY
    },
    rightContent:{
        width:'10%',
        display:'flex',
        alignItems:'flex-end'
    },
    addresstitle:{
        fontSize:Typography.FONT_SIZE,
        color:color.COLOR_BLACK,
        fontFamily:Typography.FONT_MEDIUM,
      
    },
    label:{
        fontSize:Typography.FONT_SIZE12,
        fontFamily:Typography.FONT_MEDIUM,
        color:color.COLOR_BLACK,
    },
    detail:{
        fontSize:Typography.FONT_SIZE,
        fontFamily:Typography.FONT_REGULAR,
        color:color.COLOR_BLACK,
        color:color.COLOR_PRIMARY
    },
    locationImage:{
        width:viewportWidth*0.08,
        height:viewportWidth*0.08
    },
    addressBox:{
        paddingHorizontal:viewportWidth*0.04,
        paddingVertical:viewportWidth*0.02
    },
    buttonbox:{
        paddingHorizontal:viewportWidth*0.04,
        justifyContent:'space-around'
    },
    
    itemName:{
        color:color.COLOR_DARKGRAY,
        fontSize:Typography.FONT_SIZE12,
        fontFamily:Typography.FONT_REGULAR,
    },
    listContainer:{
        backgroundColor:color.COLOR_LIGHTGRAY,
        height:'100%',
        paddingVertical:viewportWidth*0.04
    },
    box:{
      flex:1  
    },
    boxInner:{
        marginVertical:viewportWidth*0.023
    },
    itemBox:{
        marginHorizontal:viewportWidth*0.04,
        paddingVertical:viewportWidth*0.025,
        justifyContent:"space-between"
    },
    itemName:{
        width:"60%",
        display:'flex',
        flexWrap:'wrap'
    },
    itemQty:{
        width:"20%",
        display:'flex',
        flexWrap:'wrap',
        textAlign:'right'
    },
    itemPrice:{
        width:"20%",
        display:'flex',
        flexWrap:'wrap',
        textAlign:'right'
    },
    borderDashed:{
        width: viewportWidth - viewportWidth*0.15,
        height: 0,
        borderStyle: 'dashed',
        borderWidth: .8,
        opacity:.5,
        borderColor: color.COLOR_GREY,
        borderRadius : 1,
        marginBottom:5,
        justifyContent:'center',
        display:'flex',
        alignItems:'center',
        alignSelf:'center'
      },
});

export default OrderDetailStyles;
