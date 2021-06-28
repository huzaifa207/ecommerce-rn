import React, { useEffect } from "react";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import { Card, Button } from "react-native-elements";

const Product = ({ navigation, route }) => {
  const product = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, [route.params.title, navigation]);

  return (
    <ScrollView>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.heading}>{product.title}</Text>
      <Text style={styles.subHeading}>Description: </Text>
      <Text>{product.description}</Text>
      <Text>
        <Text style={styles.subHeading}>Price: </Text>${product.price}
      </Text>
      <Text>
        <Text style={styles.subHeading}>Category: </Text>
        {product.category}
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  image: {
    width: 600,
    maxWidth: "100%",
    height: 450,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subHeading: {
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 13,
  },
});
