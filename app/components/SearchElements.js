import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import Styles from "../config/styles";
const { Typography} = Styles;

const SearchElements = props => {
  const {
    keyboardType = "default",
    autoCapitalize = "words",
    placeholder = "",
    secureTextEntry = false,
    onChangeText = () => {},
    value,
    inputStyle = {}
  } = props;
  const { containerStyle, textBoxStyle } = styles;

  return (
    <View style={[containerStyle, inputStyle]}>
      <TextInput
        underlineColorAndroid="transparent"
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        style={textBoxStyle}
        placeholderTextColor='#e0f2fe' 
        />
      {props.error && <Text style={{ color: "red", marginBottom: 5 }}>{props.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center"
  },
  textBoxStyle: {
    height:36,
    marginBottom: 17, 
    paddingHorizontal:12,
    paddingVertical:8,
    paddingLeft:35,
    fontSize: Typography.FONT_SIZE, 
    fontWeight: Typography.FONT_WEIGHT_NORMAL, 
    fontStyle: Typography.FONT_STYLE_NORMAL,
    lineHeight: 20,
    letterSpacing: 0,  
    borderRadius: 18,  
    borderStyle: "solid",
    backgroundColor: "rgba(0, 74, 129, 0.3)"
   
  },
});

export { SearchElements };
