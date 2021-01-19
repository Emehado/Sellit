//import liraries
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Constants from "expo-constants";
//import components
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import Divider from "../components/lists/Divider";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

// create a component
const MessagesScreen = () => {
  const data = [
    {
      id: "1",
      title: "Some Title",
      description: "Some Description",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: "2",
      title: "Some Other Title Number 2",
      description: "Some Other Description",
      image: require("../assets/mosh.jpg"),
    },
  ];

  const [messages, setMessages] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (msg) => {
    setMessages(messages.filter((message) => message !== msg));
  };

  const handleRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  const loadData = () => {
    setMessages(data);
    setRefreshing(false);
  };

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      subtitle={item.description}
      image={item.image}
      onPress={() => console.log("pressed")}
      renderRightActions={() => (
        <ListItemDeleteAction onPress={() => handleDelete(item)} />
      )}
    />
  );
  return (
    <Screen style={styles.container}>
      <FlatList
        data={messages}
        refreshing={refreshing}
        onRefresh={() => handleRefresh()}
        renderItem={renderItem}
        keyExtractor={(message) => message.id}
        ItemSeparatorComponent={() => <Divider />}
      />
    </Screen>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

//make this component available to the app
export default MessagesScreen;
