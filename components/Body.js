import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Card, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";

const Body = ({ products }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={products}
        // horizontal={true}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate("Product", item)}
          >
            <Card>
              <Card.FeaturedTitle style={{ color: "#111" }} numberOfLines={2}>
                {item.title}
              </Card.FeaturedTitle>
              <Card.Image
                source={{ uri: item.image }}
                style={{ width: "100%" }}
              />
            </Card>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate("AllProducts")}
      >
        <Button
          title="View All Products"
          type="clear"
          icon={<Icon name="chevron-right" color="blue" size={12} />}
          iconRight
          onPress={() => navigation.navigate("AllProducts")}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemContainer: {
    width: 520,
    maxWidth: "100%",
    elevation: 9,
  },

  linkContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "flex-end",
  },
});
