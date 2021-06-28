import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import Body from "../components/Body";

const Home = ({ navigation, route }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.screen}>
      <Header navigation={navigation} title="Kugguu" />

      <Body products={products.slice(0, 8)} navigate={navigation.navigate} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 32,
    alignItems: "center",
  },
});
