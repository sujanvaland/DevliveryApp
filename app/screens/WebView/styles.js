import { StyleSheet ,Dimensions} from 'react-native';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlayEffect:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        height:viewportHeight,
        width:viewportWidth,
        opacity:0.4,
        zIndex:9999999999,
    },
    spinnerImg :{
        height:viewportWidth*0.06,
        width:viewportWidth*0.06,
        borderRadius:50,
        overflow:"hidden",
        
    },
    loader:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
        width:'100%'
    }
});

export default styles;
