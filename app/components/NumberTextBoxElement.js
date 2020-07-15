import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import Styles from "../config/styles";
const { color,Typography} = Styles;

const NumberTextBoxElement = props => {
  const {
    keyboardType = "numeric",
    autoCapitalize = "words",
    placeholder = "",
    secureTextEntry = false,
    onChangeText = () => {},
    onEndEditing = () => {},
    onBlur = () => {},
    value,
    inputStyle = {},
    isvalidInput=true,
  } = props;
  const { containerStyle, textBoxStyle, errorTextBox } = styles;

  return (
    <View style={[containerStyle, inputStyle]}>
      <TextInput
        underlineColorAndroid="transparent"
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        onBlur={onBlur}
        value={value}
        //style={textBoxStyle} 
        style={[(isvalidInput) ? textBoxStyle : errorTextBox]} 
        placeholderTextColor='#6a737d' 
        />
      {props.error && <Text style={styles.errorMessage}>{props.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center"
  },
  textBoxStyle: { 
    marginBottom: 17, 
    paddingHorizontal:12,
    paddingVertical:5,
    fontSize: Typography.FONT_SIZE, 
    fontWeight: Typography.FONT_WEIGHT_NORMAL, 
    fontStyle: Typography.FONT_STYLE_NORMAL,
    lineHeight: 20, 
    letterSpacing: 0,  
    borderRadius: 4,   
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: color.COLOR_CHECKBOX,
    position:'relative',
  },
  errorMessage:{ 
    color: color.COLOR_RED,
    fontSize: Typography.FONT_SIZE14, 
    fontWeight: Typography.FONT_WEIGHT_NORMAL, 
    fontStyle: Typography.FONT_STYLE_NORMAL,
    lineHeight: 20,
    letterSpacing: 0,
    marginBottom:17,
  },
  errorTextBox:{
    marginBottom: 17, 
    paddingHorizontal:12,
    paddingVertical:5,
    fontSize: Typography.FONT_SIZE, 
    fontWeight: Typography.FONT_WEIGHT_NORMAL, 
    fontStyle: Typography.FONT_STYLE_NORMAL,
    lineHeight: 20, 
    letterSpacing: 0,  
    borderRadius: 4,   
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Styles.color.COLOR_RED,
    backgroundColor:color.COLOR_LIGHTRED,
    position:'relative',
  }
});

export { NumberTextBoxElement };
