import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const { color ,Typography} = Styles;

const NoInternetStyles = StyleSheet.create({
    subTitle:{
        fontSize:Typography.FONT_SIZE17,
        textAlign:'center',
        fontFamily:Typography.FONT_REGULAR,
        color:color.COLOR_SECONDARY
    },
    title:{
        fontSize:Typography.FONT_SIZE17,
        textAlign:'center',
        fontFamily:Typography.FONT_REGULAR,
        color:color.COLOR_SECONDARY,
        paddingTop:viewportWidth*0.2
    },
    ImgContainer:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:-30
       },
    sliderImg:{
        overflow:'visible',
        width:viewportWidth - viewportWidth*0.35
    },
    greenButtonText:{
        fontSize:Typography.FONT_SIZE20,
        textAlign:'center',
        fontFamily:Typography.FONT_REGULAR,
        backgroundColor:color.COLOR_PRIMARY,
        paddingVertical:viewportWidth*0.03,
        marginHorizontal:viewportWidth*0.25,
        marginTop:viewportWidth*0.08,
        color:color.COLOR_WHITE
    }
});

export default NoInternetStyles;
