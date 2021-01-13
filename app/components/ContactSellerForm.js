import React from "react";
import React, { Alert, Keyboard } from "react-native";
import * as Notificationss from "expo-notifications";
import { Notifications } from "expo";
import { AppForm, AppFormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller");
    }
    resetForm();
    // Notifications.
    Notificationss.presentNotificationAsync({
      title: "Awesome",
      body: "Your Message was sent to the seller",
    });
  };

  return (
    <AppForm
      inititalValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}

export default ContactSellerForm;
