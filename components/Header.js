import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Icon.Button
          name="bars"
          backgroundColor="white"
          color="black"
          size={26}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>

      {/* <Text style={styles.text}>aaa</Text> */}
      <Text style={styles.text}>{title}</Text>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 10,
  },

  text: {
    flex: 1,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
