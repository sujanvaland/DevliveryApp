import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const DashboardStyles = StyleSheet.create({
    productMain:{
        backgroundColor:color.COLOR_PRIMARY,
        marginTop:-1
    },
    ProductBox:{
        display:'flex',
        flexDirection:'row',
    },
    productContainer:{
        display:'flex',
        flexDirection:'row',
        flex:1,
        width:'100%'
    },
    modalImg:{
        width:viewportWidth - viewportWidth*0.45,
        height:viewportWidth*0.5
    },
    modalStyle:{
        backgroundColor:color.COLOR_WHITE,
        paddingHorizontal:viewportWidth*0.04,
        //paddingTop:viewportWidth*0.03,
        paddingBottom:viewportWidth*0.01,
        borderRadius:viewportWidth*0.018,
        marginVertical:viewportWidth*0.1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      },
    productInnerContainer:{
        alignItems:"center",
        justifyContent:'center',
        paddingHorizontal:viewportWidth*0.01,
        paddingVertical:viewportWidth*0.09,
        width:'100%'
    },
    productImg:{
       width:viewportWidth*0.125,
       height:viewportWidth*0.125
    },
    productText:{
        color:color.COLOR_WHITE,
        fontSize:Typography.FONT_SIZE12,
        fontFamily:Typography.FONT_REGULAR,
        textTransform:"uppercase",
        textAlign:'center',
        marginTop:viewportWidth*0.03
    },
    hLineImg:{
       width:viewportWidth - viewportWidth*0.08,
       alignItems:'center',
       marginHorizontal:viewportWidth*0.04
    },
    vLineImg:{
        height:viewportWidth*0.25,
        marginTop:viewportWidth*0.06
    },
    newProducts:{
        paddingTop:viewportWidth*0.03,
        paddingBottom:viewportWidth*0.06,
        paddingHorizontal:viewportWidth*0.02,
    },
    productListText:{
       color:color.COLOR_PRIMARY,
       marginBottom:viewportWidth*0.01,
       fontSize:Typography.FONT_SIZE12,
       fontFamily:Typography.FONT_REGULAR,
       textAlign:'center'
    },
    productPrice:{
        color:color.COLOR_TEXT,
       fontSize:Typography.FONT_SIZE12,
       //fontFamily:Typography.FONT_REGULAR,
       textAlign:'center'
    },
    titleHead:{
        color:color.COLOR_TEXT,
        fontSize:Typography.FONT_SIZE18,
        marginBottom:viewportWidth*0.01,
        paddingHorizontal:viewportWidth*0.02,
        fontFamily:Typography.FONT_LibreBaskerville
    },
    productListImgContainer:{
        width:"100%",
        height:140,
        marginVertical:viewportWidth*0.03
    },
    productListImg:{
       width:'100%',
       height:'100%'
    },
    newProductList:{
        display:'flex',
        flexDirection:'row'
    },
    productContent:{
        flex:1,
        paddingHorizontal:viewportWidth*0.02, 
    },
    dailyProduct:{
        backgroundColor:color.COLOR_PRIMARY,
        marginHorizontal:viewportWidth*0.04,
        marginBottom:viewportWidth*0.04,
        paddingRight:viewportWidth*0.04,
        paddingLeft:viewportWidth*0.04,
        paddingTop:viewportWidth*0.06,
        paddingBottom:viewportWidth*0.05,
        borderRadius:viewportWidth*0.015
    },
    dailyProductTitle:{
        textAlign:"center",
        marginBottom:viewportWidth*0.06,
        color:color.COLOR_WHITE,
        fontSize:Typography.FONT_SIZE18, 
        fontFamily:Typography.FONT_LibreBaskerville
    },
    flexBox:{
        display:'flex',
        flexDirection:'row'
    },
    dailyProductList:{
        flex:1,
        justifyContent:'center'
    },
    dailyproductImg:{
        width:viewportWidth*0.22,
        height:viewportWidth*0.22
    },
    radioList: { 
        borderWidth: 0, 
        borderBottomWidth: 0, 
        paddingLeft:15,
        paddingRight:15,
        margin:0,
        marginLeft:0,
        paddingBottom:5,
        paddingTop:5,
      },
      borderBottom:{
        borderBottomColor:color.COLOR_GREY,
        borderBottomWidth:1
      },
    radioListButton: {
        display:'none'
    },
    radioListText: {
        display: "flex", 
        flexDirection: "row", 
        fontSize: Typography.FONT_SIZE22, 
        fontFamily:Typography.FONT_MEDIUM, 
        color: color.COLOR_PRIMARY
    },
    listRadio:{
       display:'flex',
       justifyContent:'flex-start',
       paddingTop:viewportWidth*0.04
    },
    radioTextWidth:{
       //width:'100%',
    },
    locationImg:{
        width:viewportWidth*0.2,
        height:viewportWidth*0.2
    },
    locationTopBox:{
        marginTop:-40
    },
    locationText:{
        textAlign:"center",
        marginTop:viewportWidth*0.015,
        fontFamily:Typography.FONT_MEDIUM,
        fontSize:Typography.FONT_SIZE
    },
    imgContainer:{
        marginTop:viewportWidth*0.018
    },
    locationInnerImg:{
        width:viewportWidth*0.04,
        height:viewportWidth*0.04,
        marginRight:1,
        marginBottom:4
    },
    containerHeight:{
        height:viewportHeight - 75
    }
});

export default DashboardStyles;
