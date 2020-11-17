import { Platform, StyleSheet } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    // flex:1,      //this should not be here for textbox tuch issue this property moved to AppTextInput.js
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Anenir",
  },
};
