import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Card } from "react-native-elements";

const AllProducts = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <FlatList
      data={products}
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
              style={{ width: "100%", height: 220, marginBottom: 15 }}
            />
            <Text>
              <Text style={styles.text}>Price: </Text>${item.price}
            </Text>
            <Text>
              <Text style={styles.text}>Category:</Text> {item.category}
            </Text>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  itemContainer: {
    width: 520,
    maxWidth: "100%",
    elevation: 9,
    padding: 7,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "blue",
  },
});
