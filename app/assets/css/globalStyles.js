import { StyleSheet, Dimensions } from 'react-native';
import Styles from '../../config/styles';
const { color, Typography } = Styles;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


const globalStyles = StyleSheet.create({
  //Common Wrapper class
  container: {
    flex: 1,
    backgroundColor: color.COLOR_PRIMARY,
    height: viewportHeight,
    width: viewportWidth,
    alignItems: 'center',
  },
  loginContainer: {
    width: viewportWidth - viewportWidth*0.15,
    borderRadius: viewportWidth * 0.03,
  },
  headingText: {
    fontSize: Typography.FONT_SIZE18,
    fontFamily: Typography.FONT_MEDIUM,
    fontStyle: Typography.FONT_STYLE_NORMAL,
    lineHeight: viewportWidth * 0.05,
    letterSpacing: 0,
    color: color.COLOR_TEXT,
    marginBottom: 17,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "30%"
  },
  tagLine: {
    fontSize: Typography.FONT_SIZE,
    fontWeight: Typography.FONT_WEIGHT_NORMAL,
    fontStyle: Typography.FONT_STYLE_NORMAL,
    lineHeight: viewportWidth * 0.063,
    letterSpacing: 0,
    textAlign: "center",
    color: color.COLOR_WHITE,
  },
  boldText: {
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  innerContainer: {
    height: "100%"
  },
  emptyResult:{
    backgroundColor: color.COLOR_LIGHTBLUE,
    height: viewportHeight
    // height: "100%"
  },
  emptyResult_search:{
    backgroundColor: color.COLOR_LIGHTBLUE,
    height: "100%",
  },
  resultInner: {
    alignItems: 'center',
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    padding: 0,
    height: viewportHeight,
  },
  resultInner_PROFILE:{
    alignItems: 'center',
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    padding: 0,
    height: viewportHeight - viewportHeight * 0.35,
  },
  resultInner_SEARCHRESULT:{
    alignItems: 'center',
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    backgroundColor: color.COLOR_LIGHTBLUE,
    padding: 0,
    height: viewportHeight - viewportHeight * 0.09,
  },
  emptyHeadtext: {
    fontSize: Typography.FONT_SIZE28,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: "center",
    width: "100%",
    paddingBottom: viewportWidth * .03,
  },
  emptytextline: {
    fontSize: Typography.FONT_SIZE,
    color: color.COLOR_TEXT,
    textAlign: "center"
  },
  imgHolder: {
    display: "flex",
  },
  emptyImg: {
    width: viewportWidth * 0.7,
    height: viewportWidth * 0.5,
  },






});

export default globalStyles;
