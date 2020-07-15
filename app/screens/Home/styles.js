import { StyleSheet, Dimensions } from 'react-native';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
import Styles from '../../config/styles';
const { color} = Styles;

const styles = StyleSheet.create({
    audioContent:{
       paddingVertical:viewportWidth*0.5
    },
    spinnerImage:{
        backgroundColor:color.COLOR_PRIMARY,
        height:viewportWidth*0.075,
        width:viewportWidth*0.075,
        borderRadius:50,
        justifyContent:'center'
    },
    spinner:{
        height:viewportWidth*0.045,
        width:viewportWidth*0.045,
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    spinnerImg:{
        height:viewportWidth*0.06,
        width:viewportWidth*0.06,
        borderRadius:50,
        overflow:"hidden"
    },
    spinnerBlock:{
        borderRadius:50,
        height:viewportWidth*0.075,
        width:viewportWidth*0.075,
        overflow:"hidden",
        backgroundColor:color.COLOR_PRIMARY,
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
      countContainer: {
        alignItems: 'center',
        padding: 10
      },
      countText: {
        color: '#FF00FF'
      }
});

export default styles;
