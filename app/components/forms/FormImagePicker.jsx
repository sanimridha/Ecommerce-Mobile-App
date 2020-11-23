import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ErrorMessage from "./ErrorMessage";

import { useFormikContext } from "formik";

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = uri => {
    setFieldValue(
      name,
      imageUris.filter(imageUri => imageUri != uri)
    );
  };

  return (
    <>
      <imageInputList
        iamgeUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
