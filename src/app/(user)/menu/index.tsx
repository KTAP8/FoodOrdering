import { StyleSheet, Image, FlatList } from "react-native";
import Colors from "@/src/constants/Colors";
import { Text, View } from "@/src/components/Themed";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

// const product = products[0];

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductListItem product={item}></ProductListItem>
      )}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    ></FlatList>
  );
}
