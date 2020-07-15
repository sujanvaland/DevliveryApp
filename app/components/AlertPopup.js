import React from "react";
import {  Button, Alert } from "react-native";

import Styles from "../config/styles";

const AlertPopup = props => {
  
    buttonClicked = () => {
        Alert.alert(
          "Alert Title",
          "Alert Msg",
          [
            { text: "OK"}
          ],
          { cancelable: false }
        );
      };
    

  return ( 
    <Button
      title={props.title}
      onPress={buttonClicked}
    />
  );
};


export { AlertPopup };

