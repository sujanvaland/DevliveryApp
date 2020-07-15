import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const MyOrdersStyles = StyleSheet.create({
    tabText:{
        textTransform:"uppercase",
        color:color.COLOR_WHITE,
        fontSize:Typography.fontSize,
        fontFamily:Typography.FONT_REGULAR,
        textAlign:'center',
        
    },
    tabBox:{
        backgroundColor:color.COLOR_PRIMARY,
        paddingHorizontal:viewportWidth*0.04,
        paddingVertical:viewportWidth*0.035,
        flex:1,
        display:'flex'
    },
    tabActiveLine:{
        borderBottomWidth:4,
        borderColor:color.COLOR_BLACK
    },
    tabLine:{
        borderBottomWidth:4,
        borderColor:"transparent"
    },
    tabHeader:{
        display:'flex',
        flexDirection:'row',
    },
    tabContent:{
        backgroundColor:color.COLOR_LIGHTGRAY,
        paddingVertical:viewportWidth*0.04,
        height:viewportHeight - 120,
    },
    tabContentSpace:{
        marginBottom:viewportWidth*0.1,
    },
    orderBox:{
        backgroundColor:color.COLOR_WHITE,
        marginHorizontal:viewportWidth*0.04,
        marginBottom:viewportWidth*0.04,
        padding:viewportWidth*0.04,
        borderRadius:viewportWidth*0.01
    },
    flexBox:{
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-between'
    },
    title:{
        color:color.COLOR_PRIMARY,
        fontSize:Typography.FONT_SIZE,
        fontFamily:Typography.FONT_REGULAR
    },
    subtitle:{
        color:color.COLOR_DARKGRAY,
        fontSize:Typography.FONT_SIZE12,
        fontFamily:Typography.FONT_REGULAR
    },
    boldText:{
        fontFamily:Typography.FONT_MEDIUM
    },
    date:{
        color:color.COLOR_DARKGRAY,
        fontSize:Typography.FONT_SIZE12,
        fontFamily:Typography.FONT_MEDIUM
    },
    btnText:{
        color:color.COLOR_WHITE,
        fontSize:Typography.FONT_SIZE12,
        fontFamily:Typography.FONT_MEDIUM,
        backgroundColor:color.COLOR_PRIMARY,
        paddingVertical:viewportWidth*0.016,
        paddingHorizontal:viewportWidth*0.055,
        borderRadius:viewportWidth*0.013
    },
    btnBottom:{
        alignItems:'center',
        marginTop:viewportWidth*0.02
    },
    green:{
        color:color.COLOR_PRIMARY,
        fontFamily:Typography.FONT_MEDIUM,
    }
});

export default MyOrdersStyles;
