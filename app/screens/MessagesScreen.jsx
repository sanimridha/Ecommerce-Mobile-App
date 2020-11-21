import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeparetor from "../components/ListItemSeparetor";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam eu enim sit amet condimentum. Sed rutrum vulputate condimentum. Pellentesque venenatis, quam sit amet tincidunt pellentesque, tellus est fringilla ligula, eu tincidunt eros neque non eros. Integer lacus velit, viverra in blandit vel, ultrices egestas mi. Praesent euismod metus ligula, vel commodo enim varius vel. Ut non dolor tellus. Nullam ultrices egestas metus, eget commodo dolor sagittis et. Vivamus cursus mauris non sapien accumsan imperdiet. Donec consectetur lacus id ante scelerisque iaculis.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam eu enim sit amet condimentum. Sed rutrum vulputate condimentum. Pellentesque venenatis, quam sit amet tincidunt pellentesque, tellus est fringilla ligula, eu tincidunt eros neque non eros. Integer lacus velit, viverra in blandit vel, ultrices egestas mi. Praesent euismod metus ligula, vel commodo enim varius vel. Ut non dolor tellus. Nullam ultrices egestas metus, eget commodo dolor sagittis et. Vivamus cursus mauris non sapien accumsan imperdiet. Donec consectetur lacus id ante scelerisque iaculis.",
    image: require("../assets/Sani.jpg"),
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam eu enim sit amet condimentum. Sed rutrum vulputate condimentum. Pellentesque venenatis, quam sit amet tincidunt pellentesque, tellus est fringilla ligula, eu tincidunt eros neque non eros. Integer lacus velit, viverra in blandit vel, ultrices egestas mi. Praesent euismod metus ligula, vel commodo enim varius vel. Ut non dolor tellus. Nullam ultrices egestas metus, eget commodo dolor sagittis et. Vivamus cursus mauris non sapien accumsan imperdiet. Donec consectetur lacus id ante scelerisque iaculis.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam eu enim sit amet condimentum. Sed rutrum vulputate condimentum. Pellentesque venenatis, quam sit amet tincidunt pellentesque, tellus est fringilla ligula, eu tincidunt eros neque non eros. Integer lacus velit, viverra in blandit vel, ultrices egestas mi. Praesent euismod metus ligula, vel commodo enim varius vel. Ut non dolor tellus. Nullam ultrices egestas metus, eget commodo dolor sagittis et. Vivamus cursus mauris non sapien accumsan imperdiet. Donec consectetur lacus id ante scelerisque iaculis.",
    image: require("../assets/sani3.png"),
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam eu enim sit amet condimentum. Sed rutrum vulputate condimentum. Pellentesque venenatis, quam sit amet tincidunt pellentesque, tellus est fringilla ligula, eu tincidunt eros neque non eros. Integer lacus velit, viverra in blandit vel, ultrices egestas mi. Praesent euismod metus ligula, vel commodo enim varius vel. Ut non dolor tellus. Nullam ultrices egestas metus, eget commodo dolor sagittis et. Vivamus cursus mauris non sapien accumsan imperdiet. Donec consectetur lacus id ante scelerisque iaculis.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam eu enim sit amet condimentum. Sed rutrum vulputate condimentum. Pellentesque venenatis, quam sit amet tincidunt pellentesque, tellus est fringilla ligula, eu tincidunt eros neque non eros. Integer lacus velit, viverra in blandit vel, ultrices egestas mi. Praesent euismod metus ligula, vel commodo enim varius vel. Ut non dolor tellus. Nullam ultrices egestas metus, eget commodo dolor sagittis et. Vivamus cursus mauris non sapien accumsan imperdiet. Donec consectetur lacus id ante scelerisque iaculis.",
    image: require("../assets/sani3.png"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = message => {
    //delete the message from messages
    setMessages(messages.filter(m => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message deleverd!", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparetor}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/sani3.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: Constants.statusBarHeight,
  },
});

export default MessagesScreen;
