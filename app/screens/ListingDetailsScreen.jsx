import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { Image } from "react-native-expo-image-cache";
const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/sani3.png")}
            title="Sani Mridha"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 35,
  },
});

export default ListingDetailsScreen;
