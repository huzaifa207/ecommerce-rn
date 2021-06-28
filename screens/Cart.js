import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card, Button } from "react-native-elements";
import Header from "../components/Header";

const Cart = ({ navigation, route }) => {
  const [cartdata, setCartdata] = useState({});
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/carts/2")
      .then((response) => response.json())
      .then((data) => {
        setCartdata(data);
        let new_products = [];
        for (prod of data.products) {
          fetch(`https://fakestoreapi.com/products/${prod.productId}`)
            .then((response) => response.json())
            .then((prod_details) =>
              new_products.push({ ...prod, ...prod_details })
            )
            .catch((error) => console.log(error));
        }
        setProducts(new_products);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${cartdata.userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data["name"]))
      .catch((error) => console.log(error));
  }, [cartdata]);

  return (
    <View style={styles.screen}>
      <Header title="Cart" navigation={navigation} />
      {!isLoading && (
        <Card style={{ flex: 1 }}>
          <Text style={styles.title}>
            Order Created for: {user.firstname} {user.lastname}
          </Text>
          <FlatList
            style={{ flex: 1 }}
            data={products}
            keyExtractor={(productId, index) => productId}
            renderItem={({ item, index }) => (
              <View style={styles.prod_container}>
                <Text style={styles.text}>
                  {index + 1}. {item.title}
                </Text>
                <Text>Price: ${item.price}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Text>Amount: ${item.price * item.quantity}</Text>
              </View>
            )}
          />
          <Button
            title="Checkout"
            onPress={() => navigation.navigate("Home")}
          />
        </Card>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 32,
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  text: {
    fontWeight: "bold",
  },
  prod_container: {
    padding: 2,
    marginVertical: 7,
  },
});
