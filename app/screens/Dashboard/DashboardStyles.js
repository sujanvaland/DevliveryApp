import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const DashboardStyles = StyleSheet.create({
    container:{
        backgroundColor:color.COLOR_LIGHTGRAY,
        padding:viewportWidth*0.04,
        display:'flex',
        justifyContent:"space-evenly",
        alignItems:'center',
        height:'100%'
    },
    containerImg:{
        width:viewportWidth*0.3,
        height:viewportWidth*0.3
    },
    lineImg:{
        width:viewportWidth - viewportWidth*0.2
    },
    containerText:{
        color:color.COLOR_PRIMARY,
        fontFamily:Typography.FONT_BOLD,
        fontSize:Typography.FONT_SIZE22,
        textAlign:'center',
        marginTop:viewportWidth*0.1
    }
});

export default DashboardStyles;
