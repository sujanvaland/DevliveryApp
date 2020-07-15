/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */
import {  Dimensions} from 'react-native';
const { width: viewportWidth , height: viewportHeight } = Dimensions.get('window');
const AppStyles = {
    color: {
        COLOR_PRIMARY: '#009846',
        COLOR_SECONDARY: '#141930',
        COLOR_WHITE: '#FFFFFF',
        COLOR_BLACK: '#000000',
        COLOR_GREY:'#dddddd',
        COLOR_TEXT: '#333333',
        COLOR_LIGHTGRAY:'#eeeeee',
        COLOR_DARKGRAY:'#666666',
        COLOR_DARKGRAYTWO:'#9f9f9f',
        COLOR_DARKTEXT:'#545454',
        COLOR_YELLOW:'#ffbf00',
        COLOR_DARKBLUE:'#222222',
        COLOR_PLACEHOLDER: '#888888',
        COLOR_GREEN:'#0c6537',
        // ====================//
        
       
        COLOR_RED:'#d1462a',
        COLOR_LIGHTRED:'#ffefec',
        COLOR_CHECKBOX:'#c5cdd6',
        COLOR_SEARCHBLUE:'#0b64a9',
        COLOR_LIGHTBLUE:'#f0f4f7',
        COLOR_LIGHTBLUE_TWO:'#0f70bc',
        
        
        COLOR_REDTWO:'#d72424',
        COLOR_GREENDARK:'#30a165',
        COLOR_GREENLIGHT:'#E6FFF2',
        COLOR_PURPLE:'#e7dcff',
        COLOR_DARKPURPLE:'#552ab1',
        
    },
    Typography: {
        FONT_REGULAR: 'Poppins-Regular',
        FONT_MEDIUM: 'Poppins-Medium',
        FONT_BOLD: 'Poppins-Bold',
        FONT_Italic: 'Poppins-Italic',
        FONT_LibreBaskerville:"LibreBaskerville-Regular",
        FONT_OpenSansRegular:"OpenSans-Regular",
        FONT_Roboto:'Roboto',
        FONT_SIZE:viewportWidth* 0.04,
        FONT_SIZE14:viewportWidth* 0.036,
        FONT_SIZE15:viewportWidth* 0.037,
        FONT_SIZE12:viewportWidth* 0.032,
        FONT_SIZE10:viewportWidth* 0.029,
        FONT_SIZE8:viewportWidth* 0.026,
        FONT_SIZE6:viewportWidth* 0.023,
        FONT_SIZE18:viewportWidth* 0.045,
        FONT_SIZE17:viewportWidth* 0.041,
        FONT_SIZE10:viewportWidth* 0.03,
        FONT_SIZE20:viewportWidth*0.048,
        FONT_SIZE22:viewportWidth*0.05,
        FONT_SIZE24:viewportWidth*0.06,
        FONT_SIZE26:viewportWidth* 0.065,
        FONT_SIZE28:viewportWidth* 0.07,
        FONT_SIZE30:viewportWidth* 0.072,
        FONT_SIZE32:viewportWidth* 0.074,
        FONT_SIZE34:viewportWidth* 0.076,
        FONT_SIZE36:viewportWidth* 0.078,
        FONT_SIZE38:viewportWidth* 0.08,
        FONT_SIZE40:viewportWidth* 0.082,
        FONT_WEIGHT_NORMAL: "normal",
        FONT_WEIGHT_500: "500",
        FONT_WEIGHT_BOLD: "bold",
        FONT_STYLE_NORMAL: "normal",
    }
};
export default AppStyles;
