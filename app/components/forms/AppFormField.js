import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import ErrorMessage from "../ErrorMessage";
import AppTextInput from "../AppTextInput";

const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="email"
        // keyboardType="email-address"
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        // placeholder="Email"
        // textContentType="emailAddress"
      />
      {touched.email && <ErrorMessage error={errors[name]} />}
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
