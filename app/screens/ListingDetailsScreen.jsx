import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/sani3.png")}
            // image='../assets/Sani.jpg'
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
