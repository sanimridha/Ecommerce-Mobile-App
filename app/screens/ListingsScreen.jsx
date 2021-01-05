import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicators from "../components/ActivityIndicator";
import useApi from "../Hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const getlistingsApi = useApi(listingApi.getListings);

  useEffect(() => {
    getlistingsApi.request(1, 2, 3);
  }, []);

  return (
    <>
      <ActivityIndicators visible={getlistingsApi.loading} />
      <Screen style={styles.screen}>
        {getlistingsApi.error && (
          <>
            <View style={styles.errorvisible}>
              <AppText>Couldn't retrive the listings.</AppText>
              <AppButton title="Retry" onPress={loadListings} />
            </View>
          </>
        )}
        <FlatList
          data={getlistingsApi.data}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  error: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 300,
  },
});

export default ListingsScreen;
